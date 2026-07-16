/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  X,
  Clock,
  Droplet,
  Shield,
  Heart,
  Activity,
  Globe,
  Instagram,
  Pill,
  PawPrint,
  Play,
  Pause
} from 'lucide-react';
import { TabId, Language } from '../types';

interface HomeTabProps {
  setActiveTab: (tab: TabId) => void;
  language: Language;
}

export default function HomeTab({ setActiveTab, language }: HomeTabProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedQR, setSelectedQR] = useState<'instagram' | 'wechat' | 'whatsapp' | null>(null);

  const t = {
    ko: {
      btnLocation: '약국 오시는 길',
      statsTime: '월~금 08:30~22:00 / 토·일·공휴일 15:00~22:00',
      storefrontPrescription: '전국 병·의원 처방 조제 가능',
      storefrontPrescriptionDesc: '한라병원 및 전국 모든 병원 처방전을 빠르고 정확하게 조제하여 드립니다.',
      storefrontPrescriptionBadge: '처방 조제 전문',
      storefrontVet: '동물의약품 공식 취급',
      storefrontVetDesc: '반려동물을 위한 심장사상충약, 내외구충제, 안약 및 상비약을 상시 완비하고 있습니다.',
      storefrontVetBadge: '동물약국 등록',
      storefrontGlobal: '글로벌 외국인 특화 (药店)',
      storefrontGlobalDesc: '영어·중국어 맞춤형 1:1 복약 지도 및 알리페이, 위챗페이, 즉시 면세 환급(Tax Free)을 완벽 지원합니다.',
      storefrontGlobalBadge: '글로벌 안심',
      categoriesSubtitle: '고객분들의 건강과 뷰티 시너지를 극대화하기 위해 마음약국이 엄선한 핵심 특화 품목군입니다.',
      categoriesList: [
        {
          title: 'K-Beauty',
          desc: 'K-뷰티 스킨부스터, 특화 마스크 및 프리미엄 코스메틱',
          tags: ['물광피부', '메디컬 뷰티', '장벽개선']
        },
        {
          title: 'PDRN products',
          desc: '연어 DNA 유래 PDRN 성분으로 조직 재생 및 탄력',
          tags: ['재생 바이오', '연어 주사 성분', '세포 탄력']
        },
        {
          title: 'Acne care',
          desc: '민감성 피부 및 여드름성 트러블 스킨 안심 진정 솔루션',
          tags: ['트러블 케어', '모공 정화', '유수분 밸런스']
        },
        {
          title: 'Scar care',
          desc: '수술 흔적 및 상처 흉터 케어를 위한 실리콘 겔 & 패치',
          tags: ['흔적 케어', '실리콘 겔', '흉터 솔루션']
        },
        {
          title: 'Health care',
          desc: '현대인의 활력 충전, 피로 회복을 위한 고함량 맞춤 영양제',
          tags: ['면역력 부스팅', '종합 비타민', '피로 회복']
        }
      ],
      slides: [
        {
          id: 2,
          badge: '365일 야간 조제',
          title: '365일 연중무휴\n매일 밤 10시까지\n불을 밝힙니다',
          subtitle: '',
          bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
          textColor: 'text-white'
        },
        {
          id: 3,
          badge: '공식 소통 채널',
          title: '인스타그램 · 위챗 · 왓츠앱',
          subtitle: '아래 QR코드를 스캔하여 마음약국과 편리한 소통을 시작해보세요.',
          bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
          textColor: 'text-white'
        }
      ]
    },
    en: {
      btnLocation: 'Directions to Pharmacy',
      statsTime: 'Mon~Fri 08:30~22:00 / Sat·Sun·Holidays 15:00~22:00',
      storefrontPrescription: 'Prescription Dispensing Available',
      storefrontPrescriptionDesc: 'We dispense prescriptions from Halla Hospital and all medical clinics nationwide quickly and accurately.',
      storefrontPrescriptionBadge: 'Clinical Dispensing',
      storefrontVet: 'Licensed Veterinary Medicines',
      storefrontVetDesc: 'Full range of pet supplies including heartworm prevention, dewormers, eye drops, and OTC treatments.',
      storefrontVetBadge: 'Licensed Vet Care',
      storefrontGlobal: 'Global Care Support (药店)',
      storefrontGlobalDesc: 'Personalized English & Chinese pharmaceutical consulting, with Alipay, WeChat Pay, and instant Tax Free support.',
      storefrontGlobalBadge: 'Global Safe',
      categoriesSubtitle: 'Our pharmacy proudly curation of premium wellness and dermatological specialized focus areas.',
      categoriesList: [
        {
          title: 'K-Beauty',
          desc: 'Trending K-beauty skin-boosters and premium dermacosmetics',
          tags: ['Glowing Skin', 'Medical Beauty', 'Barrier Repair']
        },
        {
          title: 'PDRN products',
          desc: 'Salmon-extracted PDRN for skin repair and elasticity',
          tags: ['Bioregeneration', 'Cell Elasticity', 'Salmon DNA']
        },
        {
          title: 'Acne care',
          desc: 'Targeted soothing, non-comedogenic care for troubled skin',
          tags: ['Trouble Relief', 'Pore Purification', 'Soothe & Calm']
        },
        {
          title: 'Scar care',
          desc: 'Medical-grade silicone gels and recovery patches for scars',
          tags: ['Mark Recovery', 'Silicone Gel', 'Scar Solution']
        },
        {
          title: 'Health care',
          desc: 'Highly potent premium multivitamins for daily energy boosts',
          tags: ['Immune Boosting', 'Daily Vitality', 'Fatigue Recovery']
        }
      ],
      slides: [
        {
          id: 2,
          badge: '365 Days Late-Night Pharmacy',
          title: 'Open 365 Days\nWe Stay Lit Until 10 PM Every Night',
          subtitle: '',
          bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
          textColor: 'text-white'
        },
        {
          id: 3,
          badge: 'Official Channels',
          title: 'Instagram · WeChat · WhatsApp',
          subtitle: 'Scan the QR codes below to view our feed or connect with us in real-time.',
          bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
          textColor: 'text-white'
        }
      ]
    },
    zh: {
      btnLocation: '药店交通路线',
      statsTime: '周一~周五 08:30~22:00 / 周六·周日·公休日 15:00~22:00',
      storefrontPrescription: '韩国全国医院处方配药',
      storefrontPrescriptionDesc: '支持济州汉拿医院及韩国全国所有医院、诊所出具的处方，专业药剂师为您快速精准配药。',
      storefrontPrescriptionBadge: '专业处方配药',
      storefrontVet: '正规宠物医药品经营',
      storefrontVetDesc: '备有心丝虫预防药、体内外驱虫药、宠物眼药水、皮肤药及各类爱宠应急药品。',
      storefrontVetBadge: '宠物药店认证',
      storefrontGlobal: '外籍游客特化安心服务 (药店)',
      storefrontGlobalDesc: '提供英文、中文1:1专业用药指导，全面支持支付宝、微信支付及现场即时免税退税(Tax Free)。',
      storefrontGlobalBadge: '全球游客安心',
      categoriesSubtitle: '心药店为实现您的健康生活与肌肤美丽，精心甄选的核心特化产品品类。',
      categoriesList: [
        {
          title: 'K-Beauty',
          desc: '热门 K-Beauty 医美药妆、屏障修复及特化水光面膜',
          tags: ['水光美肌', '医美级护肤', '屏障修护']
        },
        {
          title: 'PDRN products',
          desc: '蕴含三文鱼 DNA 提炼 PDRN 成分，深层修护皮肤细胞',
          tags: ['组织再生', '三文鱼成分', '细胞弹力']
        },
        {
          title: 'Acne care',
          desc: '专为敏感性及痘痘痤疮肌肤量身定制的温和控油舒缓',
          tags: ['祛痘控油', '收缩毛孔', '温和舒缓']
        },
        {
          title: 'Scar care',
          desc: '专用于外科及剖腹产术后疤痕修复的医用级硅胶贴片',
          tags: ['疤痕修复', '医用硅胶', '伤口恢复']
        },
        {
          title: 'Health care',
          desc: '专为日常疲劳及免疫低下设计的高含量每日定制营养素',
          tags: ['免疫调节', '每日活力', '抗疲劳营养']
        }
      ],
      slides: [
        {
          id: 2,
          badge: '365天夜间配药',
          title: '365天全年无休\n每晚营业至10点亮灯守护',
          subtitle: '',
          bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
          textColor: 'text-white'
        },
        {
          id: 3,
          badge: '官方咨询频道',
          title: 'Instagram · 微信 · WhatsApp',
          subtitle: '扫描下方二维码，即刻与专业药剂师进行在线实时咨询。',
          bgGradient: 'from-emerald-950 via-slate-900 to-slate-950',
          textColor: 'text-white'
        }
      ]
    }
  };

  const curr = t[language] || t.ko;
  const bannerSlides = curr.slides;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [bannerSlides.length, isPaused]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };



  return (
    <div className="space-y-20 pb-16">
      {/* Top Welcome / Quick Payment Row at the top-right of Home screen */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 -mb-12">
        <div className="flex items-center gap-2">
          <span className="w-1 h-3.5 bg-emerald-500 rounded-full" />
          <span className="text-[11px] font-bold text-slate-400 tracking-[0.15em] uppercase">
            {language === 'ko' ? '제주 외국인 안심 특화 약국' : language === 'en' ? 'Jeju Foreigner-Friendly Pharmacy' : '济州外籍游客安心特化药店'}
          </span>
        </div>

        {/* Payment and Tax Free Badges */}
        <div className="flex flex-wrap items-center gap-2 select-none self-stretch sm:self-auto justify-end">
          {/* Alipay */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/60 shadow-xs px-2.5 py-1.5 rounded-xl" title="Alipay 支付宝">
            <div className="w-5 h-5 bg-[#00a0e9] rounded-[4px] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-white">
                <path d="M20 34h60M50 16v18M28 58h44M48 34C48 54 36 72 18 82M52 50c12 4 22 14 28 32M53 34c8 16 2 34-16 44" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <span className="text-[10px] font-black tracking-tight text-slate-700 font-sans">Alipay</span>
          </div>

          {/* WeChat Pay */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/60 shadow-xs px-2.5 py-1.5 rounded-xl" title="WeChat Pay 微信支付">
            <div className="w-5 h-5 bg-[#09bb07] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5">
                <path d="M50 15 C30.7 15 15 30.7 15 50 C15 57.3 17.3 64.1 21.2 69.7 L17 85 L32.8 80.8 C38 83.5 43.8 85 50 85 C69.3 85 85 69.3 85 50 C85 30.7 69.3 15 50 15 Z" fill="white" />
                <path d="M36 48 L46 58 L68 36" fill="none" stroke="#09bb07" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[10px] font-black tracking-tight text-slate-700 font-sans">WeChat</span>
          </div>

          {/* Tax Free */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/60 shadow-xs px-2.5 py-1.5 rounded-xl" title="TAX FREE">
            <div className="bg-slate-800 text-white rounded-[3px] text-[7.5px] px-1.5 font-black py-0.5 leading-none">
              TAX
            </div>
            <span className="text-[10px] font-black tracking-tight text-slate-700 font-sans">FREE</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Slider Section */}
      <section id="hero-slider" className="relative h-[480px] sm:h-[400px] md:h-[420px] w-full overflow-hidden rounded-[2rem] shadow-xl bg-slate-950 border border-white/[0.06] bg-grain">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 bg-gradient-to-br ${bannerSlides[currentSlide].bgGradient} flex flex-col justify-center px-6 sm:px-12 md:px-20 py-6 sm:py-8 md:py-10`}
          >
            {/* Editorial texture: faint dot grid + asymmetric glows */}
            <div className="absolute inset-0 text-white/[0.05] bg-dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-[0.08] translate-x-12 -translate-y-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full filter blur-3xl opacity-[0.05] -translate-x-16 translate-y-16 pointer-events-none" />

            {/* Slide progress indicator */}
            <div className="absolute top-6 left-6 right-6 sm:left-12 sm:right-12 md:left-20 md:right-20 z-20 flex gap-2">
              {bannerSlides.map((s, idx) => (
                <div key={s.id} className="h-[2px] flex-1 rounded-full bg-white/15 overflow-hidden">
                  {idx < currentSlide && <div className="h-full w-full bg-white/45" />}
                  {idx === currentSlide && (
                    <div
                      key={currentSlide}
                      className="h-full w-full bg-white/70 origin-left"
                      style={{ animation: 'hero-progress 6s linear forwards', animationPlayState: isPaused ? 'paused' : 'running' }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="w-full relative z-10 max-w-6xl mx-auto">
              {bannerSlides[currentSlide].id === 3 ? (
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-5 sm:space-y-6">
                  {bannerSlides[currentSlide].badge && (
                    <span className="inline-flex items-center gap-2 text-pink-300/90">
                      <Instagram className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{bannerSlides[currentSlide].badge}</span>
                    </span>
                  )}

                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-white whitespace-pre-line">
                    {bannerSlides[currentSlide].title}
                  </h2>

                  <p className="text-xs sm:text-sm text-pink-100/80 leading-relaxed font-light max-w-md sm:max-w-xl">
                    {bannerSlides[currentSlide].subtitle}
                  </p>

                  <div className="pt-2 flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 w-full">
                    {/* Instagram QR Card */}
                    <motion.div 
                      onClick={() => setSelectedQR('instagram')}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative group/qr bg-white border border-white/20 rounded-2xl p-2.5 shadow-2xl hover:shadow-pink-500/10 max-w-[100px] sm:max-w-[120px] w-full cursor-pointer block"
                      title="Instagram - @heart.pharm"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] p-1.5 flex items-center justify-center">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://www.instagram.com/heart.pharm/')}`} 
                          alt="Instagram QR" 
                          className="w-full h-full object-contain bg-white p-1 rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="text-center mt-1 select-none">
                        <span className="text-[8px] sm:text-[9px] font-black tracking-[0.1em] text-slate-800 font-mono block leading-none">
                          INSTAGRAM
                        </span>
                      </div>
                    </motion.div>

                    {/* WeChat QR Card */}
                    <motion.div 
                      onClick={() => setSelectedQR('wechat')}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative group/qr bg-white border border-white/20 rounded-2xl p-2.5 shadow-2xl hover:shadow-emerald-500/10 max-w-[100px] sm:max-w-[120px] w-full cursor-pointer block"
                      title="WeChat - 心药店"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-emerald-500 p-1.5 flex items-center justify-center">
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
                      
                      <div className="text-center mt-1 select-none">
                        <span className="text-[8px] sm:text-[9px] font-black tracking-[0.1em] text-slate-800 font-mono block leading-none">
                          WECHAT
                        </span>
                      </div>
                    </motion.div>

                    {/* WhatsApp QR Card */}
                    <motion.div 
                      onClick={() => setSelectedQR('whatsapp')}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative group/qr bg-white border border-white/20 rounded-2xl p-2.5 shadow-2xl hover:shadow-emerald-500/10 max-w-[100px] sm:max-w-[120px] w-full cursor-pointer block"
                      title="WhatsApp - Heart Pharm"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-emerald-600 p-1.5 flex items-center justify-center">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://wa.me/821033230678')}`} 
                          alt="WhatsApp QR" 
                          className="w-full h-full object-contain bg-white p-1 rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="text-center mt-1 select-none">
                        <span className="text-[8px] sm:text-[9px] font-black tracking-[0.1em] text-slate-800 font-mono block leading-none">
                          WHATSAPP
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-7">
                  {bannerSlides[currentSlide].badge && (
                    <span className="inline-flex items-center gap-2 text-emerald-300/90">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{bannerSlides[currentSlide].badge}</span>
                    </span>
                  )}

                  <h1 className="font-display text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white whitespace-pre-line text-center">
                    {bannerSlides[currentSlide].title}
                  </h1>

                  {bannerSlides[currentSlide].subtitle && (
                    <p className="text-base md:text-lg text-emerald-100/85 leading-relaxed font-light text-center">
                      {bannerSlides[currentSlide].subtitle}
                    </p>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                    <button
                      id={`hero-btn-location-${currentSlide}`}
                      onClick={() => setActiveTab('location')}
                      className="px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer group w-fit"
                    >
                      {curr.btnLocation}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-start gap-2.5 px-4.5 py-3 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 text-white text-xs font-medium w-fit">
                      <Clock className="w-4 h-4 text-emerald-400 mt-0.5" />
                      <div className="flex flex-col gap-1 items-start text-left">
                        {curr.statsTime.split('/').map((line: string, lineIdx: number) => (
                          <span key={lineIdx} className="font-semibold font-sans block leading-tight">{line.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button
          id="slider-prev-btn"
          onClick={handlePrevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer z-25"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          id="slider-next-btn"
          onClick={handleNextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer z-25"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 right-6 md:right-20 flex items-center gap-2.5 z-25 text-white/50 text-[11px] font-mono">
          <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(bannerSlides.length).padStart(2, '0')}</span>
          <button
            id="slider-pause-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsPaused(!isPaused);
            }}
            className="ml-1 p-1 rounded-full hover:bg-white/10 hover:text-white transition-all cursor-pointer flex items-center justify-center"
            aria-label={isPaused ? "Play slide" : "Pause slide"}
            title={isPaused ? "재생" : "일시정지"}
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
          </button>
        </div>
      </section>

      {/* 2. Signature Services — editorial numbered row */}
      <section id="signature-services" className="grid grid-cols-1 md:grid-cols-3 divide-y divide-slate-200/70 md:divide-y-0 md:divide-x border-t border-b border-slate-200/70">
        {[
          { num: '01', icon: <Pill className="w-4.5 h-4.5" />, tone: 'text-teal-600', badge: curr.storefrontPrescriptionBadge, title: curr.storefrontPrescription, desc: curr.storefrontPrescriptionDesc },
          { num: '02', icon: <PawPrint className="w-4.5 h-4.5" />, tone: 'text-amber-600', badge: curr.storefrontVetBadge, title: curr.storefrontVet, desc: curr.storefrontVetDesc },
          { num: '03', icon: <Globe className="w-4.5 h-4.5" />, tone: 'text-emerald-600', badge: curr.storefrontGlobalBadge, title: curr.storefrontGlobal, desc: curr.storefrontGlobalDesc },
        ].map((item) => (
          <div key={item.num} className="group py-7 px-1 md:px-8 first:pl-0 last:pr-0 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-semibold text-slate-200 group-hover:text-emerald-200 transition-colors">
                {item.num}
              </span>
              <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ${item.tone}`}>
                {item.icon}
              </div>
            </div>
            <span className={`inline-block text-[10px] font-bold tracking-[0.1em] uppercase ${item.tone}`}>
              {item.badge}
            </span>
            <h4 className="text-base font-bold text-slate-800 leading-snug">
              {item.title}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </section>


      {/* 4. Specialized Product Categories Section — bento layout */}
      <section id="specialized-categories" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-px bg-emerald-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-700">
              {language === 'ko' ? '약국 취급 품목' : language === 'en' ? 'Pharmacy Specialties' : '药店主营品类'}
            </span>
          </div>
          <p className="text-sm text-slate-400 font-light leading-relaxed sm:text-right sm:max-w-sm">
            {curr.categoriesSubtitle}
          </p>
        </div>

        {(() => {
          const icons = [
            <Sparkles className="w-full h-full" key="0" />,
            <Droplet className="w-full h-full" key="1" />,
            <Shield className="w-full h-full" key="2" />,
            <Heart className="w-full h-full" key="3" />,
            <Activity className="w-full h-full" key="4" />
          ];
          const toneText = ['text-emerald-600', 'text-sky-600', 'text-amber-600', 'text-rose-600', 'text-teal-600'];
          const toneIconBg = ['bg-emerald-50', 'bg-sky-50', 'bg-amber-50', 'bg-rose-50', 'bg-teal-50'];
          const toneAccent = ['bg-emerald-500', 'bg-sky-500', 'bg-amber-500', 'bg-rose-500', 'bg-teal-500'];
          const [feature, ...rest] = curr.categoriesList;

          return (
            <div className="space-y-3.5">
              {/* Featured category — horizontal banner */}
              <motion.div
                id="category-card-0"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
              >
                <span className={`absolute left-0 top-0 bottom-0 w-[3px] ${toneAccent[0]}`} />
                <div className={`shrink-0 rounded-xl flex items-center justify-center ${toneIconBg[0]} ${toneText[0]} w-14 h-14 p-3.5`}>
                  {icons[0]}
                </div>
                <div className="flex-1 space-y-1.5">
                  <h3 className="font-display text-xl font-semibold text-slate-800 tracking-tight leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xl">
                    {feature.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:shrink-0 md:justify-end md:max-w-[220px]">
                  {feature.tags.map((tag: string, tagIdx: number) => (
                    <span key={tagIdx} className="px-2 py-0.5 rounded-full text-[9px] font-medium border border-slate-200 text-slate-500 h-fit">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Remaining categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {rest.map((category: any, i: number) => {
                  const idx = i + 1;
                  return (
                    <motion.div
                      key={idx}
                      id={`category-card-${idx}`}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md flex flex-col justify-between transition-shadow p-5 space-y-4"
                    >
                      <span className={`absolute left-0 top-0 bottom-0 w-[3px] ${toneAccent[idx % toneAccent.length]}`} />
                      <div className="space-y-3">
                        <div className={`rounded-xl flex items-center justify-center ${toneIconBg[idx % toneIconBg.length]} ${toneText[idx % toneText.length]} w-11 h-11 p-2.5`}>
                          {icons[idx % icons.length]}
                        </div>
                        <h3 className="text-base font-bold text-slate-800 tracking-tight leading-snug">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                          {category.desc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {category.tags.map((tag: string, tagIdx: number) => (
                          <span key={tagIdx} className="px-2 py-0.5 rounded-full text-[9px] font-medium border border-slate-200 text-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </section>

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
              className="relative max-w-sm w-full overflow-hidden rounded-3xl bg-white shadow-2xl cursor-default"
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
