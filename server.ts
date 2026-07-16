/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import fs from 'fs';

const NOTICES_FILE = path.join(process.cwd(), 'notices.json');

const DEFAULT_NOTICES = [
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
    contentZh: '济州心药店为了实现更精准、更卫生、更快速的配药服务，已将第2台尖端ATC（自动药丸包装配药机）全面升级为最新款高端机型。\n\n此次新引进的2号ATC机配备了超精密传感器，能够完美杜绝药品的微小误差，并大幅缩短患者的配药等待时间。\n\n为了让患者能够安心服药，济州心药店始终保持着最新、最卫生的配药系统环境，并为实现0%配药错误的目标进行积极投资。今后我们将继续以最优质의 의료 서비스로 보답하겠습니다.',
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
    contentZh: '随着盛夏时节的到来，前往济州岛美丽的林荫路（如沙罗里林荫路）、寄生火山（Orem）以及户外草地的游客急剧增加。因此，极需加强对蚊虫以及野外蜱虫（特别是可诱发重症伴血小板减少综合征-SFTS的蜱虫）叮咬的预防和警惕。\n\n【户外活动安全预防守则】\n1. 请勿直接坐在草地上或将衣服脱放在草地上，务必使用防潮地垫。\n2. 请勿擅自进入指定登山步道或散步道以外的茂密草丛中。\n3. 进行户外活动时，请穿着长袖上衣 and 长裤以尽量减少皮肤暴露，并随时喷洒驱虫剂。\n4. 户外活动结束后，请务必洗澡，并将换下的衣服清洗干净。\n5. 如果被昆虫或蜱虫叮咬后出现高烧、呕吐、腹泻等症状，应立即前往附近医疗机构就诊。济州心药店备有专业的驱虫喷雾、蚊药、叮咬前后涂抹의 舒缓药膏，欢迎随时前来咨询。',
    date: '2026.06.15',
    views: 62
  }
];

function loadNotices() {
  try {
    if (fs.existsSync(NOTICES_FILE)) {
      const data = fs.readFileSync(NOTICES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed to load notices file:', err);
  }
  saveNotices(DEFAULT_NOTICES);
  return DEFAULT_NOTICES;
}

function saveNotices(notices: any[]) {
  try {
    fs.writeFileSync(NOTICES_FILE, JSON.stringify(notices, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save notices file:', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints for notices
  app.get('/api/notices', (req, res) => {
    try {
      const list = loadNotices();
      res.json(list);
    } catch (e) {
      res.status(500).json({ error: 'Failed to fetch notices' });
    }
  });

  app.post('/api/notices', (req, res) => {
    try {
      const list = loadNotices();
      const newNotice = req.body;
      if (!newNotice.id) {
        newNotice.id = Date.now().toString();
      }
      if (newNotice.views === undefined) {
        newNotice.views = 0;
      }
      const updatedList = [newNotice, ...list];
      saveNotices(updatedList);
      res.status(201).json(newNotice);
    } catch (e) {
      res.status(500).json({ error: 'Failed to add notice' });
    }
  });

  app.put('/api/notices/:id', (req, res) => {
    try {
      const list = loadNotices();
      const id = req.params.id;
      const updatedNotice = req.body;
      const index = list.findIndex((item: any) => item.id === id);
      if (index === -1) {
        return res.status(404).json({ error: 'Notice not found' });
      }
      list[index] = { ...list[index], ...updatedNotice, id };
      saveNotices(list);
      res.json(list[index]);
    } catch (e) {
      res.status(500).json({ error: 'Failed to update notice' });
    }
  });

  app.delete('/api/notices/:id', (req, res) => {
    try {
      const list = loadNotices();
      const id = req.params.id;
      const filtered = list.filter((item: any) => item.id !== id);
      saveNotices(filtered);
      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ error: 'Failed to delete notice' });
    }
  });

  app.post('/api/notices/:id/view', (req, res) => {
    try {
      const list = loadNotices();
      const id = req.params.id;
      const notice = list.find((item: any) => item.id === id);
      if (notice) {
        notice.views = (notice.views || 0) + 1;
        saveNotices(list);
        res.json({ views: notice.views });
      } else {
        res.status(404).json({ error: 'Notice not found' });
      }
    } catch (e) {
      res.status(500).json({ error: 'Failed to increment view' });
    }
  });

  // Serve assets
  if (process.env.NODE_ENV !== 'production') {
    // Use Vite middleware in development
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static dist folder in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Full-Stack server] running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start full-stack server:', err);
});
