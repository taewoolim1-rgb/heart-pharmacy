/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Edit2,
  Trash2,
  X,
  LogOut,
  Key,
  Bell,
  Info,
  Search,
  CalendarDays,
  Eye,
  FileText
} from 'lucide-react';
import { Language } from '../types';

export interface NoticeItem {
  id: string;
  titleKo: string;
  titleEn: string;
  titleZh: string;
  contentKo: string;
  contentEn: string;
  contentZh: string;
  date: string;
  views: number;
}

const DEFAULT_NOTICES: NoticeItem[] = [
  {
    id: '1',
    titleKo: '[공지] 2026년 하절기 휴가 기간 야간 정상 조제 업무 안내',
    titleEn: '[Notice] Guide to Late-Night Compounding Services During 2026 Summer Vacation',
    titleZh: '[公告] 2026夏季休假期间正常配药指南',
    contentKo: '안녕하세요. 제주 노형오거리의 365일 연중무휴 야간 조제 약국, 제주마음약국입니다.\n\n2026년 하절기 휴가 기간 중에도 환자분들의 끊김 없는 치료와 건강 관리를 위해 저희 제주마음약국은 쉬는 날 없이 야간 정상 조제 업무를 중단 없이 운영합니다.\n\n[영업시간 안내]\n- 평일(월~금): 오전 8시 30분 ~ 밤 10시 (22:00)\n- 주말 및 공휴일: 오후 3시 ~ 밤 10시 (22:00)\n\n하절기 휴가로 제주를 찾으시는 관광객분들과 지역 주민분들 모두 야간 처방 조제 및 상비약 구입, 전문 약사진의 1:1 맞춤 영양 설계가 필요하실 때 언제든 편안하게 방문해주시기 바랍니다. 늘 건강하고 안전한 여름 보내시기를 기원합니다.\n\n감사합니다.',
    contentEn: 'Hello, this is Jeju Heart Pharm, your 365-day late-night compounding pharmacy at Nohyeong Five-way Intersection, Jeju.\n\nEven during the 2026 summer vacation season, Jeju Heart Pharm will operate late-night compounding services without any interruption to ensure continuous care for our patients.\n\n[Business Hours]\n- Weekdays (Mon-Fri): 08:30 AM ~ 10:00 PM (22:00)\n- Weekends & Holidays: 03:00 PM ~ 10:00 PM (22:00)\n\nWhether you are a resident or a tourist visiting Jeju for summer vacation, feel free to visit us whenever you need late-night prescription compounding, over-the-counter medicine, or 1:1 nutritional consulting with our professional pharmacists. We wish you a healthy and safe summer.\n\nThank you.',
    contentZh: '您好，这里是位于济州老衡五岔路口、365天全年无休的夜间配药药店——济州心药店。\n\n在2026年夏季休假期间，为了确保患者能够获得不间断的治疗和健康管理，济州心药店将不休假，照常提供夜间配药服务。\n\n【营业时间指南】\n- 工作日（周一至周五）：上午 8:30 ~ 晚上 10:00 (22:00)\n- 周末及公开发假：下午 3:00 ~ 晚上 10:00 (22:00)\n\n无论是济州当地居民，还是来济州度夏避暑的游客，在需要夜间处方调配、购买常备药或寻求专业药师一对一营养设计咨询时，均可随时放心来访。祝大家度过一个健康、安全的夏天。\n\n谢谢。',
    date: '2026.07.12',
    views: 45
  },
  {
    id: '2',
    titleKo: '[장비 도입] 정밀 ATC 자동 포장 조제 머신 2호기 업그레이드 완료',
    titleEn: '[Equipment] Precision ATC Auto-Packaging Compounding Machine Unit 2 Upgrade Completed',
    titleZh: '[设备引进] 高精度 ATC 自动包装分药机2号机升级完毕',
    contentKo: '제주마음약국은 보다 정밀하고 위생적이며 신속한 조제 서비스를 실현하기 위해 최첨단 ATC(자동 정제 포장 조제 머신) 2호기를 최신형 프리미엄 모델로 전격 업그레이드 완료하였습니다.\n\n이번에 새롭게 도입된 ATC 2호기는 초정밀 센서를 탑재하여 약품의 미세 오차를 완벽하게 잡아내며, 조제 대기 시간을 획기적으로 단축시켜 드립니다.\n\n저희 제주마음약국은 환자분들께서 안심하고 약을 복용하실 수 있도록 언제나 최신의 위생 조제 시스템 환경을 유지하며, 조제 오류 0% 목표를 달성하기 위해 아낌없이 투자하고 있습니다. 앞으로도 최상의 의료 서비스로 보답하겠습니다.',
    contentEn: 'Jeju Heart Pharm has upgraded our second ATC (Automatic Tablet Packaging & Dispensing Machine) to the latest premium model to achieve more precise, hygienic, and rapid compounding services.\n\nThis newly introduced ATC Unit 2 is equipped with ultra-precision sensors to completely eliminate microscopic pharmaceutical errors and drastically reduce waiting times.\n\nAt Jeju Heart Pharm, we continuously invest in state-of-the-art hygienic compounding environments to ensure that patients can take their medications with peace of mind and maintain our 0% dispensing error target. We will continue to repay your trust with the highest quality healthcare services.',
    contentZh: '济州心药店为了实现更精准、更卫生、更快速的配药服务，已将第2台尖端ATC（自动药丸包装配药机）全面升级为最新款高端机型。\n\n此次新引进的2号ATC机配备了超精密传感器，能够完美杜绝药品的微小误差，并大幅缩短患者的配药等待时间。\n\n为了让患者能够安心服药，济州心药店始终保持着最新、最卫生的配药系统环境，并为实现0%配药错误的目标进行积极投资。今后我们将继续以最优质的医疗服务回馈大家。',
    date: '2026.06.28',
    views: 28
  },
  {
    id: '3',
    titleKo: '[예방 안내] 제주 관광객 여름철 모기 및 풀벌레 물림 예방 수칙',
    titleEn: '[Prevention] Summer Mosquito and Wild Bug Bite Prevention Rules for Jeju Tourists',
    titleZh: '[预防指南] 济州游客夏季防蚊虫叮咬注意事项',
    contentKo: '본격적인 여름철을 맞아 제주도의 아름다운 숲길(사려니숲길 등), 오름, 그리고 야외 잔디밭을 찾으시는 관광객분들이 급증하고 있습니다. 이에 따라 모기뿐만 아니라 야생 야외 진드기(특히 중증열성혈소판감소증후군-SFTS 유발 진드기) 및 풀벌레 물림 피해에 대한 예방과 주의가 강력히 요구됩니다.\n\n[야외 활동 시 안전 예방 수칙]\n1. 풀밭에 직접 앉거나 옷을 벗어두지 마시고, 반드시 돗자리를 사용해주십시오.\n2. 지정된 등산로나 산책로 외의 풀숲에 무단으로 들어가지 마십시오.\n3. 야외 활동 시에는 긴 소매 옷과 긴 바지를 착용하여 피부 노출을 최소화하고 기피제를 수시로 분사해주십시오.\n4. 야외 활동 후에는 반드시 샤워를 하고, 입었던 옷은 깨끗이 세탁해주십시오.\n\n만약 벌레나 진드기에 물린 후 고열, 구토, 설사 등의 증상이 나타나면 즉시 가까운 의료기관을 방문하셔야 합니다. 저희 제주마음약국에는 전문 벌레 기피제, 모기약, 물리 전후 바르는 안심 치료제가 상시 구비되어 있으니 언제든 상담해주시기 바랍니다.',
    contentEn: 'With the peak summer season, many tourists are visiting Jeju\'s beautiful forest paths (such as Saryeoni Forest), oreums, and outdoor lawns. Consequently, strict prevention and caution against mosquito and wild tick (especially ticks causing SFTS) bites are highly recommended.\n\n[Safety Prevention Rules for Outdoor Activities]\n1. Do not sit directly on the grass or leave your clothes on it; always use a picnic mat.\n2. Stay on designated hiking and walking trails, and avoid stepping into dense grass.\n3. Wear long-sleeved shirts and long pants during outdoor activities to minimize skin exposure, and spray insect repellent frequently.\n4. Always shower and wash the clothes you wore after returning from outdoor activities.\n\nIf you experience symptoms such as high fever, vomiting, or diarrhea after a bug or tick bite, visit a medical facility immediately. Jeju Heart Pharm stocks professional insect repellents, mosquito relief, and anti-bite ointments. Feel free to consult our pharmacists.',
    contentZh: '随着盛夏时节的到来，前往济州岛美丽的林荫路（如沙罗里林荫路）、寄生火山（Orem）以及户外草地的游客急剧增加。因此，极需加强对蚊虫以及野外蜱虫（特别是可诱发重症伴血小板减少综合征-SFTS的蜱虫）叮咬的预防和警惕。\n\n【户外活动安全预防守则】\n1. 请勿直接坐在草地上或将衣服脱放在草地上，务必使用防潮地垫。\n2. 请勿擅自进入指定登山步道或散步道以外的茂密草丛中。\n3. 进行户外活动时，请穿着长袖上衣和长裤以尽量减少皮肤暴露，并随时喷洒驱虫剂。\n4. 户外活动结束后，请务必洗澡，并将换下的衣服清洗干净。\n\n如果被昆虫或蜱虫叮咬后出现高烧、呕吐、腹泻等症状，应立即前往附近医疗机构就诊。济州心药店备有专业的驱虫喷雾、蚊药、叮咬前后涂抹的舒缓药膏，欢迎随时前来咨询。',
    date: '2026.06.15',
    views: 62
  }
];

interface NewsTabProps {
  language: Language;
}

export default function NewsTab({ language }: NewsTabProps) {
  // Notices state with localStorage persistence and robust try-catch
  const [notices, setNotices] = useState<NoticeItem[]>(() => {
    try {
      const saved = localStorage.getItem('maum_notices');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error parsing notices:', e);
    }
    return DEFAULT_NOTICES;
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('maum_notices', JSON.stringify(notices));
    } catch (e) {
      console.error('Error saving notices:', e);
    }
  }, [notices]);

  // Admin authorization state with robust try-catch
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('maum_is_admin') === 'true';
    } catch (e) {
      console.error('Error reading from sessionStorage:', e);
      return false;
    }
  });

  // Admin login modal states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Notice edit/add modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState<NoticeItem | null>(null);
  const [inputTitleKo, setInputTitleKo] = useState('');
  const [inputTitleEn, setInputTitleEn] = useState('');
  const [inputTitleZh, setInputTitleZh] = useState('');
  const [inputContentKo, setInputContentKo] = useState('');
  const [inputContentEn, setInputContentEn] = useState('');
  const [inputContentZh, setInputContentZh] = useState('');
  const [inputDate, setInputDate] = useState('');

  // Notice detail modal states
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [isEditingBody, setIsEditingBody] = useState(false);
  const [detailContentKo, setDetailContentKo] = useState('');
  const [detailContentEn, setDetailContentEn] = useState('');
  const [detailContentZh, setDetailContentZh] = useState('');

  const t = {
    ko: {
      title: '소식 및 공지사항',
      subtitle: '제주마음약국의 최근 소식, 건강 가이드 및 실시간 안내사항을 확인해보세요.',
      noticeTitle: '마음약국 소식 및 공지사항',
      searchPlaceholder: '공지사항 검색...',
      adminLogin: '관리자 로그인',
      adminActive: '관리자 권한 활성화됨',
      adminPasscodePlaceholder: '관리자 비밀번호',
      adminPasscodeIncorrect: '비밀번호가 일치하지 않습니다.',
      adminConfirmDelete: '이 공지사항을 삭제하시겠습니까?',
      addNotice: '공지사항 추가',
      editNotice: '공지사항 수정',
      noticeTitleKo: '한국어 제목',
      noticeTitleEn: '영어 제목',
      noticeTitleZh: '중국어 제목',
      noticeDate: '작성일 (예: 2026.07.13)',
      save: '저장',
      cancel: '취소',
      logout: '로그아웃',
      verify: '인증하기',
      noNotices: '등록된 소식이나 공지사항이 없습니다.',
      searchNoResult: '검색 결과가 없습니다.',
      views: '조회수',
      viewsCount: '회',
      editBody: '본문 편집 및 작성',
      saveBody: '본문 저장',
      bodyContent: '공지사항 본문 내용',
      bodyKo: '한국어 본문',
      bodyEn: '영어 본문 (선택)',
      bodyZh: '중국어 본문 (선택)',
      close: '닫기',
      placeholderBodyKo: '한국어 본문 내용을 입력해주세요...',
      placeholderBodyEn: '영어 본문 내용을 입력해주세요...',
      placeholderBodyZh: '중국어 본문 내용을 입력해주세요...',
      detailTitle: '공지사항 상세 보기'
    },
    en: {
      title: 'News & Announcements',
      subtitle: 'Check out the latest news, health guides, and notices from Jeju Heart Pharm.',
      noticeTitle: 'Heart Pharm News & Notices',
      searchPlaceholder: 'Search announcements...',
      adminLogin: 'Admin Login',
      adminActive: 'Administrator Mode Active',
      adminPasscodePlaceholder: 'Admin Passcode',
      adminPasscodeIncorrect: 'Incorrect passcode.',
      adminConfirmDelete: 'Are you sure you want to delete this notice?',
      addNotice: 'Add Announcement',
      editNotice: 'Edit Announcement',
      noticeTitleKo: 'Korean Title',
      noticeTitleEn: 'English Title',
      noticeTitleZh: 'Chinese Title',
      noticeDate: 'Date (e.g., 2026.07.13)',
      save: 'Save',
      cancel: 'Cancel',
      logout: 'Logout',
      verify: 'Verify',
      noNotices: 'No announcements registered.',
      searchNoResult: 'No search results found.',
      views: 'Views',
      viewsCount: 'views',
      editBody: 'Write/Edit Body',
      saveBody: 'Save Body',
      bodyContent: 'Announcement Body Content',
      bodyKo: 'Korean Body',
      bodyEn: 'English Body (Optional)',
      bodyZh: 'Chinese Body (Optional)',
      close: 'Close',
      placeholderBodyKo: 'Please enter Korean body content...',
      placeholderBodyEn: 'Please enter English body content...',
      placeholderBodyZh: 'Please enter Chinese body content...',
      detailTitle: 'Notice Details'
    },
    zh: {
      title: '新闻与公告',
      subtitle: '查看济州心药店的最新消息、健康指南和通知。',
      noticeTitle: '心药店新闻与公告',
      searchPlaceholder: '搜索公告...',
      adminLogin: '管理员登录',
      adminActive: '管理员权限已激活',
      adminPasscodePlaceholder: '管理员密码',
      adminPasscodeIncorrect: '密码不正确。',
      adminConfirmDelete: '您确定要删除此公告吗？',
      addNotice: '添加公告',
      editNotice: '编辑公告',
      noticeTitleKo: '韩文标题',
      noticeTitleEn: '英文标题',
      noticeTitleZh: '中文标题',
      noticeDate: '发布日期 (例如: 2026.07.13)',
      save: '保存',
      cancel: '取消',
      logout: '注销',
      verify: '验证',
      noNotices: '没有注册的公告。',
      searchNoResult: '没有找到搜索结果。',
      views: '浏览量',
      viewsCount: '次',
      editBody: '撰写/编辑正文',
      saveBody: '保存正文',
      bodyContent: '公告正文内容',
      bodyKo: '韩文正文',
      bodyEn: '英文正文 (选填)',
      bodyZh: '中文正文 (选填)',
      close: '关闭',
      placeholderBodyKo: '请输入韩文正文内容...',
      placeholderBodyEn: '请输入英文正文内容...',
      placeholderBodyZh: '请输入中文正文内容...',
      detailTitle: '公告详情'
    }
  };

  const curr = t[language] || t.ko;

  // Login handler with robust try-catch
  const handleVerifyPasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '73103110') {
      setIsAdmin(true);
      try {
        sessionStorage.setItem('maum_is_admin', 'true');
      } catch (err) {
        console.error('Error saving to sessionStorage:', err);
      }
      setShowLoginModal(false);
      setPasscode('');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  // Logout handler with robust try-catch
  const handleLogout = () => {
    setIsAdmin(false);
    try {
      sessionStorage.removeItem('maum_is_admin');
    } catch (err) {
      console.error('Error removing from sessionStorage:', err);
    }
  };

  // Delete notice handler
  const handleDeleteNotice = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(curr.adminConfirmDelete)) {
      setNotices((prev) => prev.filter((item) => item.id !== id));
      if (selectedNotice && selectedNotice.id === id) {
        setSelectedNotice(null);
      }
    }
  };

  // Open modal for editing notice
  const handleOpenEditNotice = (notice: NoticeItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingNotice(notice);
    setInputTitleKo(notice.titleKo);
    setInputTitleEn(notice.titleEn || '');
    setInputTitleZh(notice.titleZh || '');
    setInputContentKo(notice.contentKo || '');
    setInputContentEn(notice.contentEn || '');
    setInputContentZh(notice.contentZh || '');
    setInputDate(notice.date);
    setShowEditModal(true);
  };

  // Open modal for adding notice
  const handleOpenAddNotice = () => {
    setEditingNotice(null);
    setInputTitleKo('');
    setInputTitleEn('');
    setInputTitleZh('');
    setInputContentKo('');
    setInputContentEn('');
    setInputContentZh('');
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
    setInputDate(formattedDate);
    setShowEditModal(true);
  };

  // Save notice (Add or Edit) handler
  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputTitleKo.trim()) return;

    if (editingNotice) {
      // Edit mode
      setNotices((prev) =>
        prev.map((item) =>
          item.id === editingNotice.id
            ? {
                ...item,
                titleKo: inputTitleKo,
                titleEn: inputTitleEn || inputTitleKo,
                titleZh: inputTitleZh || inputTitleKo,
                contentKo: inputContentKo,
                contentEn: inputContentEn || inputContentKo,
                contentZh: inputContentZh || inputContentKo,
                date: inputDate
              }
            : item
        )
      );

      // If the currently viewed notice is edited, update its detail modal as well
      if (selectedNotice && selectedNotice.id === editingNotice.id) {
        setSelectedNotice((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            titleKo: inputTitleKo,
            titleEn: inputTitleEn || inputTitleKo,
            titleZh: inputTitleZh || inputTitleKo,
            contentKo: inputContentKo,
            contentEn: inputContentEn || inputContentKo,
            contentZh: inputContentZh || inputContentKo,
            date: inputDate
          };
        });
      }
    } else {
      // Add mode
      const newNotice: NoticeItem = {
        id: Date.now().toString(),
        titleKo: inputTitleKo,
        titleEn: inputTitleEn || inputTitleKo,
        titleZh: inputTitleZh || inputTitleKo,
        contentKo: inputContentKo,
        contentEn: inputContentEn || inputTitleKo,
        contentZh: inputContentZh || inputTitleKo,
        date: inputDate,
        views: 0
      };
      setNotices((prev) => [newNotice, ...prev]);
    }

    setShowEditModal(false);
    setEditingNotice(null);
  };

  // Click on a notice to view detail and increment view count
  const handleOpenNoticeDetail = (notice: NoticeItem) => {
    // 1. Increment view count in notices state
    setNotices((prev) =>
      prev.map((item) =>
        item.id === notice.id
          ? { ...item, views: (item.views || 0) + 1 }
          : item
      )
    );

    // 2. Prepare detail text fields in case admin edits it
    setDetailContentKo(notice.contentKo || '');
    setDetailContentEn(notice.contentEn || '');
    setDetailContentZh(notice.contentZh || '');

    // 3. Set selected notice with incremented views
    setSelectedNotice({
      ...notice,
      views: (notice.views || 0) + 1
    });

    setIsEditingBody(false);
  };

  // Save body content directly from detail view (Admin feature)
  const handleSaveDetailBody = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNotice) return;

    setNotices((prev) =>
      prev.map((item) =>
        item.id === selectedNotice.id
          ? {
              ...item,
              contentKo: detailContentKo,
              contentEn: detailContentEn,
              contentZh: detailContentZh
            }
          : item
      )
    );

    setSelectedNotice((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        contentKo: detailContentKo,
        contentEn: detailContentEn,
        contentZh: detailContentZh
      };
    });

    setIsEditingBody(false);
  };

  const getNoticeTitle = (notice: NoticeItem) => {
    if (language === 'zh') return notice.titleZh || notice.titleKo;
    if (language === 'en') return notice.titleEn || notice.titleKo;
    return notice.titleKo;
  };

  const getNoticeContent = (notice: NoticeItem) => {
    if (language === 'zh') return notice.contentZh || notice.contentKo || '';
    if (language === 'en') return notice.contentEn || notice.contentKo || '';
    return notice.contentKo || '';
  };

  // Filtering notices based on search query
  const filteredNotices = notices.filter((notice) => {
    const title = getNoticeTitle(notice).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || notice.date.includes(query);
  });

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Hero Display Card */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 md:px-12 py-12 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500 rounded-full filter blur-3xl opacity-15 translate-x-12 -translate-y-12 pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-600 rounded-full filter blur-2xl opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Bell className="w-3.5 h-3.5 animate-bounce" />
            <span>HEART PHARM NEWS</span>
          </div>
          <h2 className="text-2xl md:text-3.5xl font-black tracking-tight leading-tight">
            {curr.title}
          </h2>
          <p className="text-xs md:text-sm text-emerald-100/70 leading-relaxed font-light">
            {curr.subtitle}
          </p>
        </div>
      </div>

      {/* 2. Controls and Search Bar Container */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={curr.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 text-xs bg-white border border-slate-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500/60 shadow-xs transition-all text-slate-700"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 p-0.5 rounded-full hover:bg-slate-100 text-slate-400 transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Admin controls */}
        <div className="flex items-center gap-3 justify-end">
          {isAdmin ? (
            <>
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-2xl border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {curr.adminActive}
              </span>
              <button
                onClick={handleOpenAddNotice}
                className="py-2 px-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all flex items-center gap-1 text-xs font-bold shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{curr.addNotice}</span>
              </button>
              <button
                onClick={handleLogout}
                className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all cursor-pointer"
                title={curr.logout}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="py-2 px-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-700 transition-all flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
            >
              <Key className="w-3.5 h-3.5 text-slate-400" />
              <span>{curr.adminLogin}</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Notice Listings Board */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xs p-6 md:p-8">
        <div className="divide-y divide-slate-100/80">
          {filteredNotices.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mx-auto">
                <Info className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {searchQuery ? curr.searchNoResult : curr.noNotices}
              </p>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div 
                key={notice.id} 
                onClick={() => handleOpenNoticeDetail(notice)}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-emerald-50/30 px-4 -mx-4 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-slate-800 font-semibold group-hover:text-emerald-950 group-hover:underline transition-colors leading-relaxed text-sm">
                      {getNoticeTitle(notice)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0 pt-2 md:pt-0 border-t border-slate-50 md:border-none">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono bg-slate-50 px-2.5 py-1 rounded-lg">
                    <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                    <span>{notice.date}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono bg-slate-50 px-2.5 py-1 rounded-lg">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>{notice.views || 0}</span>
                  </div>
                  
                  {isAdmin && (
                    <div className="flex items-center gap-1 transition-opacity">
                      <button
                        onClick={(e) => handleOpenEditNotice(notice, e)}
                        className="p-1.5 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all cursor-pointer"
                        title={curr.editNotice}
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => handleDeleteNotice(notice.id, e)}
                        className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Admin Passcode Authentication Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-sm p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
            >
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6 pt-2">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Key className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">{curr.adminLogin}</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                    {language === 'ko' ? '마음약국 관리자 전용 권한 확인 구역입니다.' : language === 'en' ? 'Access restricted to Heart Pharm administrators' : '仅限心药店管理员访问核验区'}
                  </p>
                </div>

                <form onSubmit={handleVerifyPasscode} className="space-y-4">
                  <div className="space-y-1.5">
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                        setLoginError(false);
                      }}
                      placeholder={curr.adminPasscodePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-center text-base"
                      autoFocus
                    />
                    {loginError && (
                      <p className="text-xs text-rose-500 font-medium text-center">
                        {curr.adminPasscodeIncorrect}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowLoginModal(false)}
                      className="flex-1 py-2.5 text-xs font-semibold rounded-xl text-slate-500 hover:bg-slate-50 transition-all border border-slate-200 cursor-pointer"
                    >
                      {curr.cancel}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/15 transition-all cursor-pointer"
                    >
                      {curr.verify}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Notice Create/Edit Modal */}
      <AnimatePresence>
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEditModal(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-lg p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowEditModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-5">
                <h4 className="text-base font-bold text-slate-800">
                  {editingNotice ? curr.editNotice : curr.addNotice}
                </h4>

                <form onSubmit={handleSaveNotice} className="space-y-4">
                  {/* Korean Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.noticeTitleKo} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={inputTitleKo}
                      onChange={(e) => setInputTitleKo(e.target.value)}
                      placeholder="예시: [공지] 여름휴가 기간 단축 영업 안내"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  {/* English Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.noticeTitleEn}
                    </label>
                    <input
                      type="text"
                      value={inputTitleEn}
                      onChange={(e) => setInputTitleEn(e.target.value)}
                      placeholder="e.g., [Notice] Adjusted Summer Hours"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  {/* Chinese Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.noticeTitleZh}
                    </label>
                    <input
                      type="text"
                      value={inputTitleZh}
                      onChange={(e) => setInputTitleZh(e.target.value)}
                      placeholder="例如: [公告] 夏季放假期间营业时间调整"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  {/* Korean Body */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.bodyKo}
                    </label>
                    <textarea
                      rows={3}
                      value={inputContentKo}
                      onChange={(e) => setInputContentKo(e.target.value)}
                      placeholder={curr.placeholderBodyKo}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  {/* English Body */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.bodyEn}
                    </label>
                    <textarea
                      rows={3}
                      value={inputContentEn}
                      onChange={(e) => setInputContentEn(e.target.value)}
                      placeholder={curr.placeholderBodyEn}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  {/* Chinese Body */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.bodyZh}
                    </label>
                    <textarea
                      rows={3}
                      value={inputContentZh}
                      onChange={(e) => setInputContentZh(e.target.value)}
                      placeholder={curr.placeholderBodyZh}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  {/* Date Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">
                      {curr.noticeDate}
                    </label>
                    <input
                      type="text"
                      required
                      value={inputDate}
                      onChange={(e) => setInputDate(e.target.value)}
                      placeholder="YYYY.MM.DD"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                    />
                  </div>

                  <div className="pt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowEditModal(false)}
                      className="flex-1 py-2.5 text-xs font-semibold rounded-xl text-slate-500 hover:bg-slate-50 transition-all border border-slate-200 cursor-pointer"
                    >
                      {curr.cancel}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/15 transition-all cursor-pointer"
                    >
                      {curr.save}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Notice Detail View / Content Writer Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="space-y-1 pr-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-widest">
                    {curr.detailTitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug">
                    {getNoticeTitle(selectedNotice)}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>{selectedNotice.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{selectedNotice.views || 0}{curr.viewsCount}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto py-5 no-scrollbar space-y-4">
                {!isEditingBody ? (
                  // Reader View
                  <div className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-4 whitespace-pre-wrap font-light">
                    {getNoticeContent(selectedNotice) ? (
                      getNoticeContent(selectedNotice).split('\n').map((line, idx) => (
                        <p key={idx} className="min-h-[1em]">{line}</p>
                      ))
                    ) : (
                      <div className="py-8 text-center text-slate-400 italic">
                        {language === 'ko' ? '본문 내용이 등록되어 있지 않습니다.' : language === 'en' ? 'No body content registered.' : '尚未注册正文内容。'}
                        {isAdmin && (
                          <p className="text-xs text-emerald-600 font-semibold mt-2 hover:underline cursor-pointer" onClick={() => setIsEditingBody(true)}>
                            [{curr.editBody}]
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  // Admin Writer / Editor View
                  <form onSubmit={handleSaveDetailBody} className="space-y-4 pt-1">
                    <div className="space-y-4">
                      {/* Korean Body */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">
                          {curr.bodyKo} <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={detailContentKo}
                          onChange={(e) => setDetailContentKo(e.target.value)}
                          placeholder={curr.placeholderBodyKo}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                        />
                      </div>

                      {/* English Body */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">
                          {curr.bodyEn}
                        </label>
                        <textarea
                          rows={4}
                          value={detailContentEn}
                          onChange={(e) => setDetailContentEn(e.target.value)}
                          placeholder={curr.placeholderBodyEn}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                        />
                      </div>

                      {/* Chinese Body */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">
                          {curr.bodyZh}
                        </label>
                        <textarea
                          rows={4}
                          value={detailContentZh}
                          onChange={(e) => setDetailContentZh(e.target.value)}
                          placeholder={curr.placeholderBodyZh}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingBody(false)}
                        className="flex-1 py-2.5 text-xs font-semibold rounded-xl text-slate-500 hover:bg-slate-50 transition-all border border-slate-200 cursor-pointer"
                      >
                        {curr.cancel}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/15 transition-all cursor-pointer"
                      >
                        {curr.saveBody}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Modal Footer (Show action buttons when not editing) */}
              {!isEditingBody && (
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center gap-3">
                  <div>
                    {isAdmin && (
                      <button
                        onClick={() => setIsEditingBody(true)}
                        className="py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-slate-500" />
                        <span>{curr.editBody}</span>
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedNotice(null)}
                    className="py-2 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all cursor-pointer"
                  >
                    {curr.close}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
