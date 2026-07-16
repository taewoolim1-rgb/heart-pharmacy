/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Car,
  Bus,
  Globe,
  Instagram,
  X
} from 'lucide-react';

import { Language } from '../types';

interface LocationTabProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LocationTab({ language, setLanguage }: LocationTabProps) {
  const [selectedQR, setSelectedQR] = useState<'instagram' | 'wechat' | 'whatsapp' | null>(null);
  const t = {
    ko: {
      badge: 'DIRECTIONS & MAP',
      title: '약국 찾아오시는 길 및 이용 안내',
      subtitle: '제주시 도령로(연동)에 위치하여 제주공항 및 도심 어느 곳에서도 가장 쉽고 편리하게 찾아오실 수 있습니다.',
      busTitle: '대중교통 (버스 이용 시)',
      carTitle: '자가용 이용 및 주차 불가 안내',
      mapTitle: '도령로(연동) 중심가 로컬 약도 (가상 지도)',
      phoneLabel: '전화 및 조제 상담 문의',
      instagramLabel: '인스타그램',
      addressLabel: '도로명 주소',
      addressValue: '제주시 도령로 73, 103, 110호',
    },
    en: {
      badge: 'DIRECTIONS & MAP',
      title: 'Directions & Pharmacy Visitor Guide',
      subtitle: 'Located on Doryeong-ro (Yeondong), Jeju-si, you can easily reach us from Jeju Airport or anywhere in downtown.',
      busTitle: 'Public Transit (By Bus)',
      carTitle: 'Driving & Parking (NO PARKING)',
      mapTitle: 'Doryeong-ro (Yeondong) Local Map (Interactive)',
      phoneLabel: 'Inquiries & Consultations',
      instagramLabel: 'Instagram',
      addressLabel: 'Street Address',
      addressValue: 'Rooms 103 & 110, 73 Doryeong-ro, Jeju-si',
    },
    zh: {
      badge: 'DIRECTIONS & MAP',
      title: '药店路线及就诊指南',
      subtitle: '位于济州市道令路（莲洞），从济州机场或市区任何地方均可轻松、便利地到达。',
      busTitle: '公共交通 (乘坐公交车时)',
      carTitle: '自驾及禁止停车指南',
      mapTitle: '道令路 (莲洞) 街区局部指南图 (互动地图)',
      phoneLabel: '电话与调配咨询',
      instagramLabel: 'Instagram',
      addressLabel: '道路名地址',
      addressValue: '济州市道令路 73号 103, 110室',
    }
  };

  const travelGuides = {
    ko: [
      {
        type: 'bus',
        icon: <Bus className="w-5.5 h-5.5 text-sky-600" />,
        title: t.ko.busTitle,
        lines: [
          '제주국제공항에서 일반 간선버스 315번, 325번, 332번, 343번, 365번, 465번, 466번 탑승 ➡️ "제주한라병원" 정류장 하차 후 연동 펠리체 빌딩(도령로 73) 방면으로 도보 1.5분 소요 (공항에서 약 10~15분 소요)',
          '제주국제공항에서 급행 버스 151번, 152번, 181번, 182번 탑승 ➡️ "제주한라병원" 정류장 하차 후 도로를 따라 서쪽으로 약 120m 이동하시면 도령로 대로변 펠리체 빌딩 1층 103, 110호에서 쉽게 찾으실 수 있습니다.'
        ]
      },
      {
        type: 'car',
        icon: <Car className="w-5.5 h-5.5 text-rose-600" />,
        title: t.ko.carTitle,
        lines: [
          '⚠️ [주차 불가] 연동 펠리체 빌딩 및 마음약국 부지 내에는 전용 차량 주차 공간이 지원되지 않습니다.',
          '약국 앞 도령로 대로변 및 주변 이면도로는 고정식 불법 주정차 단속 구역입니다. 자가용 이용은 불가하오니 필히 대중교통을 이용해 주시기 바랍니다.',
          '자가용 소지 시, 인근 노상 공영 주차장 또는 한라병원 공영 주차장 등을 직접 유료로 이용하셔야 합니다.'
        ]
      }
    ],
    en: [
      {
        type: 'bus',
        icon: <Bus className="w-5.5 h-5.5 text-sky-600" />,
        title: t.en.busTitle,
        lines: [
          'From Jeju Int\'l Airport, take Bus 315, 325, 332, 343, 365, 465, or 466 ➡️ Get off at "Jeju Halla Hospital" stop, then walk 1.5 min to Yeondong Felice Building (Doryeong-ro 73). (Takes approx. 10-15 min from the airport).',
          'From Jeju Int\'l Airport, take Express Bus 151, 152, 181, or 182 ➡️ Get off at "Jeju Halla Hospital" stop, then walk 120m west along Doryeong-ro. Located on 1F Room 103 & 110.'
        ]
      },
      {
        type: 'car',
        icon: <Car className="w-5.5 h-5.5 text-rose-600" />,
        title: t.en.carTitle,
        lines: [
          '⚠️ [NO PARKING AVAILABLE] There is no parking space for private vehicles in Yeondong Felice Building or Heart Pharm.',
          'The main street of Doryeong-ro and surrounding streets are strict, continuous camera-enforced parking fine zones. Visitors are strongly advised to use public transit.',
          'If you absolutely must drive, you must independently find and pay for nearby public street parking or paid parking at Jeju Halla Hospital.'
        ]
      }
    ],
    zh: [
      {
        type: 'bus',
        icon: <Bus className="w-5.5 h-5.5 text-sky-600" />,
        title: t.zh.busTitle,
        lines: [
          '从济州国际机场乘坐普通干线公交 315、325、332、343、365、465、466路 ➡️ 在“济州汉拿医院”站下车，朝莲洞 Felice 大厦（道令路73号）步行1.5分钟。（从机场出发需10~15分钟）。',
          '从济州国际机场乘坐快速/急行公交 151、152、181、182路 ➡️ 在”济州汉拿医院”站下车，沿着道令路往西走120米，即可在 Felice 大厦一楼 103、110号找到心药店。'
        ]
      },
      {
        type: 'car',
        icon: <Car className="w-5.5 h-5.5 text-rose-600" />,
        title: t.zh.carTitle,
        lines: [
          '⚠️ [不可停车] 莲洞 Felice 大厦及心药店（Heart Pharm）内不提供专属车辆停车位。',
          '药店前的道令路主干道及周边道路为固定的违法停放车辆监控取证罚款区。严禁自驾停车，请务必乘坐公共交通。',
          '如您开车前来，需自行在附近寻找路边公共收费车位或使用汉拿医院内部的收费停车场。'
        ]
      }
    ]
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Language Selector row & Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="space-y-2">
          <span className="text-emerald-600 font-bold text-xs tracking-wider uppercase">{t[language].badge}</span>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
            {t[language].title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-light max-w-2xl">
            {t[language].subtitle}
          </p>
        </div>

        {/* Beautiful Glassmorphic Language Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 self-start sm:self-auto">
          <Globe className="w-3.5 h-3.5 text-slate-400 mx-1.5" />
          {(['ko', 'en', 'zh'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                language === lang
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
              }`}
            >
              {lang === 'ko' ? '한국어' : lang === 'en' ? 'English' : '中文'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Custom SVG Map Container (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-sm space-y-4 relative overflow-hidden">
            <div className="flex justify-between items-center px-2">
              <span className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-emerald-600" />
                {t[language].mapTitle}
              </span>
            </div>

            {/* Location map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/images/heart-pharmacy-map.jpg"
                alt="Heart Pharmacy location map"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Quick Contact Widget */}
          <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">{t[language].phoneLabel}</p>
                <p className="text-sm font-extrabold text-slate-800">064-900-4057</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">{t[language].addressLabel}</p>
                <p className="text-xs font-extrabold text-slate-800">{t[language].addressValue}</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/heart.pharm/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">{t[language].instagramLabel}</p>
                <p className="text-sm font-extrabold text-slate-800 group-hover:text-emerald-700 transition-colors">@heart.pharm</p>
              </div>
            </a>
          </div>

          {/* Social QR Channels */}
          <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
              <span className="w-1 h-3.5 bg-emerald-500 rounded-full" />
              <h4 className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">
                {language === 'ko' ? '공식 소통 채널' : language === 'en' ? 'Official Social Channels' : '官方社交频道'}
              </h4>
            </div>

            <p className="text-[11px] text-slate-450 font-light leading-relaxed">
              {language === 'ko' 
                ? 'QR 코드를 클릭하시면 선명하게 확대하여 스캔할 수 있습니다. 인스타그램, 위챗, 왓츠앱 등 다양한 소통 채널을 통해 마음약국의 소식을 확인하고 간편하게 문의해 보세요.' 
                : language === 'en' 
                  ? 'Click any QR code to enlarge and scan. Connect with us anytime and stay updated with Heart Pharmacy via Instagram, WeChat, and WhatsApp.' 
                  : '点击任意二维码即可放大扫描。您可以通过 Instagram、微信和 WhatsApp 关注心药店的最新动态，并与我们取得联系。'}
            </p>

            <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 pt-1 w-full">
              {/* Instagram QR Card */}
              <motion.div 
                onClick={() => setSelectedQR('instagram')}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white border border-slate-100 rounded-2xl p-2.5 shadow-xs hover:shadow-md max-w-[105px] sm:max-w-[120px] w-full cursor-pointer flex flex-col items-center justify-center text-center group"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] p-1.5 flex items-center justify-center shadow-inner">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://www.instagram.com/heart.pharm/')}`} 
                    alt="Instagram QR" 
                    className="w-full h-full object-contain bg-white p-1 rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] font-extrabold text-slate-700 tracking-wider mt-1.5 font-sans group-hover:text-pink-600 transition-colors">INSTAGRAM</span>
              </motion.div>

              {/* WeChat QR Card */}
              <motion.div 
                onClick={() => setSelectedQR('wechat')}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white border border-slate-100 rounded-2xl p-2.5 shadow-xs hover:shadow-md max-w-[105px] sm:max-w-[120px] w-full cursor-pointer flex flex-col items-center justify-center text-center group"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#07C160] p-1.5 flex items-center justify-center shadow-inner">
                  <img 
                    src="/images/wechat-qr.png?v=3" 
                    alt="WeChat QR" 
                    className="w-full h-full object-contain bg-white p-1 rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=heart-pharm";
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] font-extrabold text-slate-700 tracking-wider mt-1.5 font-sans group-hover:text-emerald-600 transition-colors">WECHAT</span>
              </motion.div>

              {/* WhatsApp QR Card */}
              <motion.div 
                onClick={() => setSelectedQR('whatsapp')}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white border border-slate-100 rounded-2xl p-2.5 shadow-xs hover:shadow-md max-w-[105px] sm:max-w-[120px] w-full cursor-pointer flex flex-col items-center justify-center text-center group"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-emerald-600 p-1.5 flex items-center justify-center shadow-inner">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://wa.me/821033230678')}`} 
                    alt="WhatsApp QR" 
                    className="w-full h-full object-contain bg-white p-1 rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] font-extrabold text-slate-700 tracking-wider mt-1.5 font-sans group-hover:text-emerald-500 transition-colors">WHATSAPP</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: Working Hours Calendar & Realtime clock widget (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Transit guides */}
          <div className="space-y-4">
            {travelGuides[language].map((guide, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 tracking-wider uppercase flex items-center gap-2">
                  {guide.type === 'bus' ? <Bus className="w-5.5 h-5.5 text-sky-600" /> : <Car className="w-5.5 h-5.5 text-rose-600" />}
                  {guide.title}
                </h4>
                <ul className="space-y-2.5">
                  {guide.lines.map((line, lidx) => (
                    <li key={lidx} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed font-light">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${guide.type === 'bus' ? 'bg-sky-500' : 'bg-rose-500'}`} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic QR Zoom Modal */}
      <AnimatePresence>
        {selectedQR && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedQR(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full overflow-hidden rounded-3xl bg-white shadow-2xl cursor-default text-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedQR(null)}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedQR === 'instagram' && (
                <div className="p-6 text-center space-y-6">
                  <div className="pt-2 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] p-0.5 flex items-center justify-center mb-2 shadow-md">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#C13584]">
                        <Instagram className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Instagram</h3>
                    <p className="text-xs text-slate-400 font-mono">@heart.pharm</p>
                  </div>

                  <div className="aspect-square max-w-[240px] sm:max-w-[260px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] p-1 shadow-xl flex items-center justify-center">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://www.instagram.com/heart.pharm/')}`} 
                      alt="Instagram QR" 
                      className="w-full h-full object-contain bg-white p-2 rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 px-4 font-light leading-relaxed">
                    {language === 'ko' ? 'Instagram 카메라로 스캔하여 마음약국 공식 인스타그램의 새로운 소식과 유익한 약 정보를 확인하세요!' : language === 'en' ? 'Scan with your Instagram camera to discover our latest news, updates, and pharmacy guides!' : '使用 Instagram 相机扫描二维码，获取心药店最新动态与健康资讯！'}
                  </p>

                  <a 
                    href="https://www.instagram.com/heart.pharm/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] text-white text-xs font-semibold transition-opacity hover:opacity-90 shadow-md"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    {language === 'ko' ? '인스타그램 피드 방문' : language === 'en' ? 'Visit Instagram Feed' : '访问 Instagram 页面'}
                  </a>
                </div>
              )}

              {selectedQR === 'wechat' && (
                <div className="p-6 text-center space-y-6">
                  <div className="pt-2 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-slate-100 flex items-center justify-center mb-2 shadow-sm">
                      <div className="w-full h-full rounded-xl bg-emerald-500 flex items-center justify-center text-white font-black text-xs">
                        心药店
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">
                      {language === 'ko' ? '微信 공식 소통 채널' : language === 'en' ? 'WeChat Official Channel' : '微信 官方沟通频道'}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans font-medium">WeChat ID: heart-pharm</p>
                  </div>

                  <div className="aspect-square max-w-[240px] sm:max-w-[260px] mx-auto rounded-2xl overflow-hidden bg-[#07C160] p-1.5 shadow-xl flex items-center justify-center">
                    <img 
                      src="/images/wechat-qr.png?v=3" 
                      alt="WeChat QR" 
                      className="w-full h-full object-contain bg-white p-2.5 rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=heart-pharm";
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-xs text-slate-500 px-4 font-light leading-relaxed">
                    {language === 'ko' ? '위의 QR 코드를 스캔하여 위챗 친구로 추가하시면 1:1 모바일 소통 및 문의를 무료로 편안하게 이용하실 수 있습니다.' : language === 'en' ? 'Scan the QR code to add us on WeChat and connect with our team on mobile for free.' : '扫描上方二维码，加我为微信好友，即可通过移动端与我们免费沟通交流。'}
                  </p>

                  <div className="text-xs font-sans text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl inline-block">
                    {language === 'ko' ? '약국 전용 위챗 계정' : language === 'en' ? 'Official WeChat Account' : '微信药店官方账号'}
                  </div>
                </div>
              )}

              {selectedQR === 'whatsapp' && (
                <div className="overflow-hidden bg-gradient-to-br from-[#075E54] to-[#128C7E] text-white">
                  <div className="p-6 text-center space-y-5 relative">
                    <div className="pt-2 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md p-1 border border-white/20 flex items-center justify-center mb-2 shadow-sm">
                        <div className="w-full h-full rounded-full bg-[#25D366] flex items-center justify-center text-white">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white text-white">
                            <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.996 0 1.764.459 3.42 1.259 4.873l-1.124 4.105 4.204-1.103a9.94 9.94 0 0 0 4.657 1.13c5.518 0 9.996-4.477 9.996-9.996S17.522 2 12.004 2zm5.72 13.045c-.244.682-1.22 1.251-1.683 1.341-.453.088-.936.126-1.554-.127-.618-.254-2.502-1.047-3.611-2.032-1.11-.986-1.849-2.181-2.071-2.553-.222-.372-.024-.572.163-.773.17-.182.372-.435.558-.654.186-.218.248-.372.372-.619.124-.248.062-.465-.031-.65-.093-.186-.826-1.99-1.134-2.732-.303-.728-.611-.63-.826-.64-.211-.01-.453-.012-.695-.012-.242 0-.637.091-.97.453-.333.363-1.272 1.243-1.272 3.033 0 1.791 1.302 3.52 1.487 3.768.186.248 2.564 3.915 6.212 5.493.868.375 1.545.599 2.072.766.872.278 1.666.239 2.293.146.7-.103 2.152-.879 2.453-1.728.303-.85.303-1.579.211-1.728-.093-.15-.34-.239-.712-.425z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-white">WhatsApp</h3>
                      <p className="text-xs text-emerald-200/80 font-mono">+82 10-3323-0678</p>
                    </div>

                    <div className="aspect-square max-w-[240px] sm:max-w-[260px] mx-auto rounded-2xl overflow-hidden bg-white p-1 shadow-2xl flex items-center justify-center">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://wa.me/821033230678')}`} 
                        alt="WhatsApp QR" 
                        className="w-full h-full object-contain p-2.5 rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <p className="text-xs text-emerald-100/90 px-4 font-light leading-relaxed">
                      {language === 'ko' ? 'WhatsApp 카메라를 이용해서 이 코드를 스캔하여 마음약국을 연락처에 등록하고 실시간 채팅 문의를 해보세요.' : language === 'en' ? 'Scan this code with your WhatsApp camera to quickly add us and start chatting with our staff.' : '使用 WhatsApp 相机扫描此二维码，添加心药店为联系人并开始实时聊天咨询。'}
                    </p>

                    <button
                      onClick={() => window.open('https://wa.me/821033230678', '_blank')}
                      className="w-full py-2.5 rounded-2xl bg-[#25D366] text-white text-xs font-semibold tracking-wide hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      <span>WhatsApp {language === 'ko' ? '채팅 바로가기' : language === 'en' ? 'Direct Chat' : '直接对话'}</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
