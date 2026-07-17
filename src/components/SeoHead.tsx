/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Language, TabId } from '../types';
import { SEO, SITE_URL, HTML_LANG, buildPath } from '../seoConfig';

interface SeoHeadProps {
  lang: Language;
  tab: TabId;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Updates document.title, meta description/OG tags, html[lang], canonical link,
 * and hreflang alternate links whenever the active language or tab changes.
 *
 * Note: this runs client-side after React mounts. It benefits crawlers that execute
 * JavaScript (Google, Naver) but will NOT be seen by crawlers that only read the
 * initial static HTML (notably Baidu). For those, a build-time prerender/SSG step
 * is still required — see README notes.
 */
export default function SeoHead({ lang, tab }: SeoHeadProps) {
  useEffect(() => {
    const entry = SEO[tab][lang];
    const path = buildPath(lang, tab);
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = entry.title;
    document.documentElement.lang = HTML_LANG[lang];

    setMeta('name', 'description', entry.description);
    setMeta('property', 'og:title', entry.ogTitle);
    setMeta('property', 'og:description', entry.ogDescription);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:locale', lang === 'ko' ? 'ko_KR' : lang === 'en' ? 'en_US' : 'zh_CN');
    setMeta('name', 'twitter:title', entry.ogTitle);
    setMeta('name', 'twitter:description', entry.ogDescription);

    setLink('canonical', canonicalUrl);
    setLink('alternate', `${SITE_URL}${buildPath('ko', tab)}`, 'ko');
    setLink('alternate', `${SITE_URL}${buildPath('en', tab)}`, 'en');
    setLink('alternate', `${SITE_URL}${buildPath('zh', tab)}`, 'zh-Hans');
    setLink('alternate', `${SITE_URL}${buildPath('ko', tab)}`, 'x-default');
  }, [lang, tab]);

  return null;
}
