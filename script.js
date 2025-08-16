// ===== بيانات الدورات =====
const YT = {
  intro: "https://www.youtube.com/embed/ysz5S6PUM-U", // استبدل لاحقًا بروابط عربية تناسبك
  alt:   "https://www.youtube.com/embed/aqz-KE-bpKQ"
};

const makeModule = (title, video, summary) => ({
  title, video, summary,
  quiz: [
    { q: "اختر العبارة الصحيحة:", options:["خيار غير دقيق","خيار صحيح"], a:1 },
    { q: "ما الأفضل؟",           options:["ممارسة عشوائية","اتباع أفضل الممارسات"], a:1 },
    { q: "الغرض الأساسي هو:",    options:["زيادة المخاطر","تحسين الجودة/الأثر"], a:1 },
    { q: "ينبغي قياس:",          options:["لا شيء","مؤشرات قابلة للقياس"], a:1 }
  ]
});

// لكل دورة 5 وحدات (يمكنك تعديل النصوص لاحقًا)
const COURSE_DATA = [
  {
    id:"المهارات الرقمية",
    icon:"💻",
    desc:"أمان رقمي وتعاون سحابي داخل المنظمات.",
    modules:[
      makeModule("أساسيات الإنترنت", YT.intro, "مفاهيم الاتصال، النطاقات، المتصفحات."),
      makeModule("حماية البيانات", YT.alt, "سياسات كلمات المرور، النسخ الاحتياطي."),
      makeModule("البريد المؤسسي", YT.intro, "الهوية المؤسسية وإدارة الصلاحيات."),
      makeModule("التعاون السحابي", YT.alt, "المشاركة الآمنة وإدارة الملفات."),
      makeModule("الأمن السيبراني", YT.intro, "التوعية والهندسة الاجتماعية.")
    ],
    activity:"اكتب 3 سياسات أمان رقمية تناسب منظمتك."
  },
  {
    id:"المهارات الحياتية",
    icon:"🧭",
    desc:"تواصل فعّال، عمل جماعي، وحل النزاعات.",
    modules:[
      makeModule("التواصل الفعّال", YT.intro, "الإصغاء، الرسائل الواضحة."),
      makeModule("إدارة الوقت", YT.alt, "المصفوفة، الأولويات."),
      makeModule("العمل الجماعي", YT.intro, "الأدوار والتعاون."),
      makeModule("حل المشكلات", YT.alt, "تحديد جذور المشكلة."),
      makeModule("المرونة", YT.intro, "التكيف مع التغيّر.")
    ],
    activity:"صف موقفًا تم فيه حل نزاع داخل فريقك."
  },
  {
    id:"المهارات الوظيفية",
    icon:"🗂️",
    desc:"مراسلات مهنية واجتماعات وإنتاجية.",
    modules:[
      makeModule("البريد الرسمي", YT.intro, "هيكل الرسالة واللباقة."),
      makeModule("العروض التقديمية", YT.alt, "بناء قصة وعناصر بصرية."),
      makeModule("اجتماعات فعّالة", YT.intro, "جدول أعمال وتوثيق."),
      makeModule("إدارة الوقت", YT.alt, "تحديد أولوياتك اليومية."),
      makeModule("أدوات الإنتاجية", YT.intro, "قوائم ومتابعة المهام.")
    ],
    activity:"اكتب خطة يومية من 3 أولويات."
  },
  {
    id:"المهارات الإدارية",
    icon:"📊",
    desc:"حوكمة، تخطيط، متابعة وتقييم.",
    modules:[
      makeModule("حوكمة المنظمات", YT.intro, "لوائح وسياسات ومجالس."),
      makeModule("التخطيط الاستراتيجي", YT.alt, "الأهداف والخطط."),
      makeModule("إدارة المخاطر", YT.intro, "التعرف والتخفيف."),
      makeModule("المتابعة", YT.alt, "المؤشرات والدورية."),
      makeModule("التقييم", YT.intro, "قياس النتائج والأثر.")
    ],
    activity:"اقترح 3 مؤشرات أداء لمشروعك."
  },
  {
    id:"التسويق الرقمي والإعلامي",
    icon:"📣",
    desc:"رسائل واضحة وقنوات رقمية وتحليل الأداء.",
    modules:[
      makeModule("الهوية والصوت", YT.intro, "اتساق الرسائل."),
      makeModule("خطة المحتوى", YT.alt, "رزنامة وجدولة."),
      makeModule("وسائل التواصل", YT.intro, "اختيار المنصة."),
      makeModule("الإعلانات الرقمية", YT.alt, "أهداف وتقسيم جمهور."),
      makeModule("التحليلات", YT.intro, "مؤشرات الوصول والتفاعل.")
    ],
    activity:"اكتب 3 رسائل أساسية لحملة توعوية."
  },
  {
    id:"التنمية المستدامة",
    icon:"🌱",
    desc:"مواءمة المشاريع مع SDGs وقياس الأثر.",
    modules:[
      makeModule("مقدمة SDGs", YT.intro, "الأهداف الـ 17."),
      makeModule("مواءمة المشاريع", YT.alt, "ربط الأنشطة بالأهداف."),
      makeModule("الشراكات", YT.intro, "تعظيم الموارد."),
      makeModule("البيئة والمناخ", YT.alt, "تقليل الأثر السلبي."),
      makeModule("المؤشرات", YT.intro, "قياس الأثر والمخرجات.")
    ],
    activity:"اختر هدف SDG واربطه بنشاط منظمتك."
  },
  {
    id:"ريادة الأعمال",
    icon:"🚀",
    desc:"قيمة مقترحة ونموذج عمل واختبار فرضيات.",
    modules:[
      makeModule("القيمة المقترحة", YT.intro, "حل مشكلة محددة."),
      makeModule("العملاء", YT.alt, "شرائح الجمهور."),
      makeModule("القنوات", YT.intro, "الوصول والتوزيع."),
      makeModule("التكاليف", YT.alt, "هيكل المصروفات."),
      makeModule("الإيرادات/الاستدامة", YT.intro, "تنويع المصادر.")
    ],
    activity:"اكتب نموذج عمل مبسّط لمبادرة دخل."
  },
  {
    id:"الذكاء الاصطناعي",
    icon:"🤖",
    desc:"تلخيص، أتمتة مهام، وأخلاقيات الاستخدام.",
    modules:[
      makeModule("المفاهيم", YT.intro, "أنواع النماذج."),
      makeModule("حالات استخدام", YT.alt, "تلخيص وتحليل."),
      makeModule("الخصوصية", YT.intro, "حماية البيانات."),
      makeModule("الأخلاقيات", YT.alt, "الإنصاف والتحيز."),
      makeModule("الأدوات", YT.intro, "عتاد وبرمجيات.")
    ],
    activity:"اذكر مهمتين يمكن أتمتتهما بالذكاء الاصطناعي."
  },
  {
    id:"التلمذة المهنية",
    icon:"🧑‍🏫",
    desc:"تعلم بالممارسة مع إشراف وتقييم مستمر.",
    modules:[
      makeModule("أهداف التعلم", YT.intro, "SMART"),
      makeModule("خطة التعلم", YT.alt, "مهام/جدولة."),
      makeModule("المهام العملية", YT.intro, "التطبيق الفعلي."),
      makeModule("الإشراف", YT.alt, "تغذية راجعة."),
      makeModule("التقييم", YT.intro, "قياس التقدم.")
    ],
    activity:"اكتب أهدافًا قابلة للقياس لمتدرب جديد."
  },
  {
    id:"المحاسبة لغير المحاسبين",
    icon:"🧾",
    desc:"مفاهيم مالية مبسطة للمنظمات.",
    modules:[
      makeModule("المصطلحات", YT.intro, "الأصول/الخصوم…"),
      makeModule("القيود اليومية", YT.alt, "التسجيل المزدوج."),
      makeModule("الميزانية", YT.intro, "التخطيط والرقابة."),
      makeModule("التقارير", YT.alt, "الدورية والشفافية."),
      makeModule("التدقيق", YT.intro, "تحسين الضبط الداخلي.")
    ],
    activity:"صمم نموذج تتبّع نفقات مشروع صغير."
  },
  {
    id:"مهارات الحاسوب",
    icon:"⌨️",
    desc:"إدارة الملفات وWord/Excel/PowerPoint.",
    modules:[
      makeModule("إدارة الملفات", YT.intro, "تنظيم وأمان."),
      makeModule("Word", YT.alt, "تنسيق المستند."),
      makeModule("Excel", YT.intro, "الجداول والصيغ."),
      makeModule("PowerPoint", YT.alt, "العروض المرئية."),
      makeModule("اختصارات مفيدة", YT.intro, "تسريع العمل.")
    ],
    activity:"أنشئ قالب محضر اجتماع مختصر."
  },
  {
    id:"جرافيكس وتصميم",
    icon:"🎨",
    desc:"هوية بصرية وتصميم محتوى للحملات.",
    modules:[
      makeModule("نظرية اللون", YT.intro, "التباين والتناغم."),
      makeModule("الخطوط العربية", YT.alt, "القابلية للقراءة."),
      makeModule("التخطيط البصري", YT.intro, "شبكات وموازنة."),
      makeModule("قوالب الشبكات", YT.alt, "مقاسات وصيغ."),
      makeModule("التصدير", YT.intro, "جودة وأحجام.")
    ],
    activity:"صمّم بطاقة توعوية باستخدام قالب مجاني."
  },
  {
    id:"تحليل بيانات",
    icon:"📈",
    desc:"من جمع البيانات إلى اتخاذ القرار.",
    modules:[
      makeModule("مصادر البيانات", YT.intro, "استبيانات/أنظمة."),
      makeModule("التنظيف", YT.alt, "القيم المفقودة."),
      makeModule("التحليل", YT.intro, "مقارنات وأساليب."),
      makeModule("التصوّر", YT.alt, "رسوم مناسبة."),
      makeModule("المؤشرات", YT.intro, "قياس الأثر.")
    ],
    activity:"اقترح لوحة مؤشرات من 3 رسوم."
  }
];

// ===== واجهة البطاقات =====
const grid = document.getElementById('grid');
const q = document.getElementById('q');

function card(c){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `<div class="thumb">${c.icon||'📘'}</div>
    <div class="card-body">
      <h3 class="title">${c.id}</h3>
      <p class="meta">${c.desc}</p>
      <button class="btn">عرض الدورة</button>
    </div>`;
  el.querySelector('button').addEventListener('click',()=>openCourse(c));
  return el;
}
function render(){
  grid.innerHTML='';
  const term=(q?.value||'').toLowerCase().trim();
  (term? COURSE_DATA.filter(c=>[c.id,c.desc].join(' ').toLowerCase().includes(term)) : COURSE_DATA)
    .forEach(c=>grid.append(card(c)));
}
render();
q?.addEventListener('input', render);

// ===== نافذة التسلسل =====
const modal = document.getElementById('courseModal');
const closeModal = document.getElementById('closeModal');
closeModal.onclick = ()=> modal.close();
modal.addEventListener('click', e=>{ if(e.target===modal) modal.close(); });

let active = null;   // الكورس
let uIndex = 0;      // رقم الوحدة
let stage = "video"; // video -> quiz
const unitList = document.getElementById('unitList');
const stageBody = document.getElementById('stageBody');
const sectionTitle = document.getElementById('sectionTitle');
const unitIndexLbl = document.getElementById('unitIndex');
const progressText = document.getElementById('progressText');
const bar = document.getElementById('bar');
const statusRow = document.getElementById('statusRow');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function key(courseId){ return `naqla:${courseId}`;}

function loadProgress(courseId){
  try{ return JSON.parse(localStorage.getItem(key(courseId))||'{}'); }catch{ return {}; }
}
function saveProgress(courseId, data){
  localStorage.setItem(key(courseId), JSON.stringify(data));
}

function openCourse(c){
  active = c; uIndex = 0; stage = "video";
  buildSidebar();
  renderStage();
  modal.showModal();
}

function buildSidebar(){
  unitList.innerHTML = active.modules.map((m,i)=>{
    const prog = loadProgress(active.id);
    const unitProg = prog[i]||{};
    const done = unitProg.passed ? 'done' : '';
    const activeCls = (i===uIndex) ? 'active' : '';
    return `<li class="${done} ${activeCls}">${i+1}. ${m.title}</li>`;
  }).join('');
}

function renderStage(){
  const m = active.modules[uIndex];
  unitIndexLbl.textContent = `الوحدة ${uIndex+1} / ${active.modules.length}`;
  const prog = loadProgress(active.id);
  const unitProg = prog[uIndex]||{};
  const totalUnits = active.modules.length;
  const passedUnits = Object.values(prog).filter(p=>p?.passed).length;
  const pct = Math.round((passedUnits/totalUnits)*100);
  progressText.textContent = `${pct}%`;
  bar.style.width = pct + '%';

  // أزرار تنقل
  prevBtn.disabled = (uIndex===0 && stage==="video");
  nextBtn.textContent = (stage==="video") ? "التالي (الأسئلة)" : (uIndex===active.modules.length-1 ? "إنهاء الدورة" : "التالي (الوحدة التالية)");

  // المحتوى حسب المرحلة
  if(stage==="video"){
    sectionTitle.textContent = "الفيديو";
    stageBody.innerHTML = `
      <div style="margin-bottom:10px" class="meta">${m.summary}</div>
      <div class="video"><iframe src="${m.video}" allowfullscreen loading="lazy" title="${m.title}"></iframe></div>`;
  }else{
    sectionTitle.textContent = "الملخص والاختبار";
    stageBody.innerHTML = `
      <p class="meta">${m.summary}</p>
      <div class="quiz">
        ${m.quiz.map((Q,i)=>`
          <div class="q">
            <strong>${i+1}. ${Q.q}</strong><br>
            ${Q.options.map((opt,j)=>`
              <label><input type="radio" name="q${i}" value="${j}"> ${opt}</label>
            `).join("<br>")}
          </div>
        `).join("")}
        <button class="btn" onclick="grade()">تحقق من الإجابات</button>
        <span id="quizMsg" class="meta" style="margin-inline-start:8px"></span>
      </div>`;
    if(unitProg?.passed){
      document.getElementById('quizMsg').textContent = `مكتمل ✅ (أُجيز سابقًا)`;
    }
  }

  // حالة الإنجاز
  statusRow.innerHTML = `
    <span class="chip ${unitProg?.watched?'ok':'warn'}">الفيديو: ${unitProg?.watched?'مشاهد':'غير مكتمل'}</span>
    <span class="chip ${unitProg?.passed?'ok':'warn'}">الاختبار: ${unitProg?.passed?'ناجح':'غير مكتمل'}</span>`;

  buildSidebar();
}

// أزرار السابق/التالي
prevBtn.onclick = ()=>{
  if(stage==="quiz"){ stage="video"; renderStage(); return; }
  if(uIndex>0){ uIndex--; stage="quiz"; renderStage(); }
};
nextBtn.onclick = ()=>{
  const prog = loadProgress(active.id);
  const unitProg = prog[uIndex]||{};
  if(stage==="video"){
    // تأشير مشاهدة الفيديو
    unitProg.watched = true;
    prog[uIndex]=unitProg; saveProgress(active.id, prog);
    stage="quiz"; renderStage(); return;
  }else{
    // لازم ينجح في الاختبار للانتقال
    if(!unitProg.passed){
      alert("أكمل الاختبار بنجاح أولًا (70% فأعلى).");
      return;
    }
    if(uIndex < active.modules.length-1){ uIndex++; stage="video"; renderStage(); }
    else { alert("تهانينا! أتممت الدورة ✅"); }
  }
};

function grade(){
  const m = active.modules[uIndex];
  let score=0;
  m.quiz.forEach((Q,i)=>{
    const v = document.querySelector(`input[name=q${i}]:checked`);
    if(v && Number(v.value)===Q.a) score++;
  });
  const pct = Math.round((score/m.quiz.length)*100);
  const prog = loadProgress(active.id);
  prog[uIndex] = prog[uIndex]||{};
  prog[uIndex].passed = (pct>=70);
  saveProgress(active.id, prog);
  const msg = document.getElementById('quizMsg');
  msg.textContent = `نتيجتك: ${score} من ${m.quiz.length} (${pct}%) ${prog[uIndex].passed?'✅ ناجح':'❗ أقل من 70%'}`;
  renderStage();
}

// تبديل الثيم (اختياري)
document.getElementById('toggleTheme')?.addEventListener('click', (e)=>{
  const light = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', light ? 'dark' : 'light');
  e.currentTarget.setAttribute('aria-pressed', String(!light));
});

// سنة الفوتر
document.getElementById('year').textContent = new Date().getFullYear();
