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
import { Language, NoticeItem } from '../types';

interface NewsTabProps {
  language: Language;
}

export default function NewsTab({ language }: NewsTabProps) {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch notices from the shared backend so every visitor sees the same board
  const fetchNotices = () => {
    setIsLoading(true);
    setLoadError(false);
    fetch('/api/notices')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setNotices(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching notices:', err);
        setLoadError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNotices();
  }, []);

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
      loadError: '공지사항을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.',
      retry: '다시 시도',
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
      loadError: 'Failed to load announcements. Please try again shortly.',
      retry: 'Retry',
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
      loadError: '公告加载失败，请稍后重试。',
      retry: '重试',
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
      fetch(`/api/notices/${id}`, { method: 'DELETE' })
        .then((res) => {
          if (!res.ok) throw new Error('Delete failed');
          setNotices((prev) => prev.filter((item) => item.id !== id));
          if (selectedNotice && selectedNotice.id === id) {
            setSelectedNotice(null);
          }
        })
        .catch((err) => {
          console.error('Error deleting notice:', err);
          alert('공지사항 삭제에 실패했습니다.');
        });
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
      const updatedItem = {
        titleKo: inputTitleKo,
        titleEn: inputTitleEn || inputTitleKo,
        titleZh: inputTitleZh || inputTitleKo,
        contentKo: inputContentKo,
        contentEn: inputContentEn || inputContentKo,
        contentZh: inputContentZh || inputContentKo,
        date: inputDate
      };

      fetch(`/api/notices/${editingNotice.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem)
      })
        .then((res) => {
          if (!res.ok) throw new Error('Update failed');
          return res.json();
        })
        .then((savedNotice) => {
          setNotices((prev) =>
            prev.map((item) => (item.id === editingNotice.id ? savedNotice : item))
          );

          // If the currently viewed notice is edited, update its detail modal as well
          if (selectedNotice && selectedNotice.id === editingNotice.id) {
            setSelectedNotice(savedNotice);
          }
          setShowEditModal(false);
          setEditingNotice(null);
        })
        .catch((err) => {
          console.error('Error updating notice:', err);
          alert('공지사항 저장에 실패했습니다.');
        });
    } else {
      // Add mode
      const newNotice = {
        titleKo: inputTitleKo,
        titleEn: inputTitleEn || inputTitleKo,
        titleZh: inputTitleZh || inputTitleKo,
        contentKo: inputContentKo,
        contentEn: inputContentEn || inputTitleKo,
        contentZh: inputContentZh || inputTitleKo,
        date: inputDate,
        views: 0
      };

      fetch('/api/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNotice)
      })
        .then((res) => {
          if (!res.ok) throw new Error('Add failed');
          return res.json();
        })
        .then((savedNotice) => {
          setNotices((prev) => [savedNotice, ...prev]);
          setShowEditModal(false);
          setEditingNotice(null);
        })
        .catch((err) => {
          console.error('Error adding notice:', err);
          alert('공지사항 추가에 실패했습니다.');
        });
    }
  };

  // Click on a notice to view detail and increment view count
  const handleOpenNoticeDetail = (notice: NoticeItem) => {
    // 1. Increment view count on server
    fetch(`/api/notices/${notice.id}/view`, { method: 'POST' })
      .then((res) => {
        if (!res.ok) throw new Error('View failed');
        return res.json();
      })
      .then((data) => {
        setNotices((prev) =>
          prev.map((item) =>
            item.id === notice.id
              ? { ...item, views: data.views }
              : item
          )
        );
        setSelectedNotice({
          ...notice,
          views: data.views
        });
      })
      .catch((err) => {
        console.error('Error incrementing view:', err);
        setSelectedNotice(notice);
      });

    // 2. Prepare detail text fields in case admin edits it
    setDetailContentKo(notice.contentKo || '');
    setDetailContentEn(notice.contentEn || '');
    setDetailContentZh(notice.contentZh || '');

    setIsEditingBody(false);
  };

  // Save body content directly from detail view (Admin feature)
  const handleSaveDetailBody = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNotice) return;

    const updatedFields = {
      contentKo: detailContentKo,
      contentEn: detailContentEn,
      contentZh: detailContentZh
    };

    fetch(`/api/notices/${selectedNotice.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Update body failed');
        return res.json();
      })
      .then((savedNotice) => {
        setNotices((prev) =>
          prev.map((item) => (item.id === selectedNotice.id ? savedNotice : item))
        );
        setSelectedNotice(savedNotice);
        setIsEditingBody(false);
      })
      .catch((err) => {
        console.error('Error saving detail body:', err);
        alert('본문 저장에 실패했습니다.');
      });
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
          {isLoading ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-slate-400 font-medium font-sans">
                {language === 'ko' ? '공지사항을 불러오는 중입니다...' : language === 'en' ? 'Loading announcements...' : '正在加载公告...'}
              </p>
            </div>
          ) : loadError ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-400 mx-auto">
                <Info className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-400 font-medium">{curr.loadError}</p>
              <button
                onClick={fetchNotices}
                className="py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all text-xs font-bold cursor-pointer"
              >
                {curr.retry}
              </button>
            </div>
          ) : filteredNotices.length === 0 ? (
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
