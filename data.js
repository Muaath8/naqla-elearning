const YT = {
  intro: "https://www.youtube.com/embed/ysz5S6PUM-U", // بدّل لاحقًا
  alt:   "https://www.youtube.com/embed/aqz-KE-bpKQ"   // بدّل لاحقًا
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

const COURSES = [
  { id:"المهارات الرقمية", icon:"💻", desc:"أمان رقمي وتعاون سحابي داخل المنظمات.",
    modules:[
      makeModule("أساسيات الإنترنت", YT.intro, "مفاهيم الاتصال، النطاقات، المتصفحات."),
      makeModule("حماية البيانات", YT.alt, "سياسات كلمات المرور والنسخ الاحتياطي."),
      makeModule("البريد المؤسسي", YT.intro, "الهوية المؤسسية وإدارة الصلاحيات."),
      makeModule("التعاون السحابي", YT.alt, "المشاركة الآمنة وإدارة الملفات."),
      makeModule("الأمن السيبراني", YT.intro, "التوعية والهندسة الاجتماعية.")
    ]},

  { id:"المهارات الحياتية", icon:"🧭", desc:"تواصل فعّال، عمل جماعي، وحل النزاعات.",
    modules:[
      makeModule("التواصل الفعّال", YT.intro, "الإصغاء والرسائل الواضحة."),
      makeModule("إدارة الوقت", YT.alt, "الأولويات، مصفوفة الوقت."),
      makeModule("العمل الجماعي", YT.intro, "الأدوار والتعاون."),
      makeModule("حل المشكلات", YT.alt, "تحديد الجذور والبدائل."),
      makeModule("المرونة", YT.intro, "التكيف مع التغيّر.")
    ]},

  { id:"المهارات الوظيفية", icon:"🗂️", desc:"مراسلات مهنية واجتماعات وإنتاجية.",
    modules:[
      makeModule("البريد الرسمي", YT.intro, "هيكل الرسالة واللباقة."),
      makeModule("العروض التقديمية", YT.alt, "قصة وعناصر بصرية."),
      makeModule("اجتماعات فعّالة", YT.intro, "جدول أعمال وتوثيق."),
      makeModule("إدارة الوقت", YT.alt, "تحديد أولوياتك اليومية."),
      makeModule("أدوات الإنتاجية", YT.intro, "قوائم ومتابعة مهام.")
    ]},

  { id:"المهارات الإدارية", icon:"📊", desc:"حوكمة، تخطيط، متابعة وتقييم.",
    modules:[
      makeModule("حوكمة المنظمات", YT.intro, "لوائح وسياسات ومجالس."),
      makeModule("التخطيط الاستراتيجي", YT.alt, "الرؤية والأهداف."),
      makeModule("إدارة المخاطر", YT.intro, "التعرف والتخفيف."),
      makeModule("المتابعة", YT.alt, "مؤشرات ودورية."),
      makeModule("التقييم", YT.intro, "قياس النتائج والأثر.")
    ]},

  { id:"مهارات التسويق الرقمي والإعلامي", icon:"📣", desc:"رسائل واضحة وقنوات رقمية وتحليل أداء.",
    modules:[
      makeModule("الهوية والصوت", YT.intro, "اتساق الرسائل."),
      makeModule("خطة المحتوى", YT.alt, "رزنامة وجدولة."),
      makeModule("وسائل التواصل", YT.intro, "اختيار المنصة."),
      makeModule("الإعلانات الرقمية", YT.alt, "أهداف وتقسيم جمهور."),
      makeModule("التحليلات", YT.intro, "مؤشرات الوصول والتفاعل.")
    ]},

  { id:"التنمية المستدامة", icon:"🌱", desc:"مواءمة المشاريع مع SDGs وقياس الأثر.",
    modules:[
      makeModule("مقدمة SDGs", YT.intro, "الأهداف الـ 17."),
      makeModule("مواءمة المشاريع", YT.alt, "ربط الأنشطة بالأهداف."),
      makeModule("الشراكات", YT.intro, "تعظيم الموارد."),
      makeModule("البيئة والمناخ", YT.alt, "تقليل الأثر السلبي."),
      makeModule("المؤشرات", YT.intro, "قياس الأثر والمخرجات.")
    ]},

  { id:"ريادة الأعمال", icon:"🚀", desc:"قيمة مقترحة ونموذج عمل واختبار فرضيات.",
    modules:[
      makeModule("القيمة المقترحة", YT.intro, "حل مشكلة محددة."),
      makeModule("العملاء", YT.alt, "شرائح الجمهور."),
      makeModule("القنوات", YT.intro, "الوصول والتوزيع."),
      makeModule("التكاليف", YT.alt, "هيكل المصروفات."),
      makeModule("الإيرادات/الاستدامة", YT.intro, "تنويع المصادر.")
    ]},

  { id:"الذكاء الاصطناعي", icon:"🤖", desc:"تلخيص، أتمتة مهام، وأخلاقيات الاستخدام.",
    modules:[
      makeModule("المفاهيم", YT.intro, "أنواع النماذج."),
      makeModule("حالات استخدام", YT.alt, "تلخيص وتحليل."),
      makeModule("الخصوصية", YT.intro, "حماية البيانات."),
      makeModule("الأخلاقيات", YT.alt, "الإنصاف والتحيز."),
      makeModule("الأدوات", YT.intro, "أدوات وبرمجيات.")
    ]},

  { id:"التلمذة المهنية", icon:"🧑‍🏫", desc:"تعلم بالممارسة مع إشراف وتقييم مستمر.",
    modules:[
      makeModule("أهداف التعلم", YT.intro, "SMART"),
      makeModule("خطة التعلم", YT.alt, "مهام وجدولة."),
      makeModule("المهام العملية", YT.intro, "التطبيق الفعلي."),
      makeModule("الإشراف", YT.alt, "تغذية راجعة."),
      makeModule("التقييم", YT.intro, "قياس التقدم.")
    ]},

  { id:"المحاسبة لغير المحاسبين", icon:"🧾", desc:"مفاهيم مالية مبسطة للمنظمات.",
    modules:[
      makeModule("المصطلحات", YT.intro, "الأصول/الخصوم…"),
      makeModule("القيود اليومية", YT.alt, "التسجيل المزدوج."),
      makeModule("الميزانية", YT.intro, "التخطيط والرقابة."),
      makeModule("التقارير", YT.alt, "الدورية والشفافية."),
      makeModule("التدقيق", YT.intro, "تحسين الضبط الداخلي.")
    ]},

  { id:"مهارات الحاسوب", icon:"⌨️", desc:"إدارة الملفات وWord/Excel/PowerPoint.",
    modules:[
      makeModule("إدارة الملفات", YT.intro, "تنظيم وأمان."),
      makeModule("Word", YT.alt, "تنسيق المستند."),
      makeModule("Excel", YT.intro, "الجداول والصيغ."),
      makeModule("PowerPoint", YT.alt, "العروض المرئية."),
      makeModule("اختصارات مفيدة", YT.intro, "تسريع العمل.")
    ]},

  { id:"جرافكس وتصميم", icon:"🎨", desc:"هوية بصرية وتصميم محتوى للحملات.",
    modules:[
      makeModule("نظرية اللون", YT.intro, "التباين والتناغم."),
      makeModule("الخطوط العربية", YT.alt, "القابلية للقراءة."),
      makeModule("التخطيط البصري", YT.intro, "شبكات وموازنة."),
      makeModule("قوالب الشبكات", YT.alt, "مقاسات وصيغ."),
      makeModule("التصدير", YT.intro, "جودة وأحجام.")
    ]},

  { id:"تحليل بيانات", icon:"📈", desc:"من جمع البيانات إلى اتخاذ القرار.",
    modules:[
      makeModule("مصادر البيانات", YT.intro, "استبيانات/أنظمة."),
      makeModule("التنظيف", YT.alt, "القيم المفقودة."),
      makeModule("التحليل", YT.intro, "مقارنات وأساليب."),
      makeModule("التصوّر", YT.alt, "رسوم مناسبة."),
      makeModule("المؤشرات", YT.intro, "قياس الأثر.")
    ]}
];
