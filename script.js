const courses = [
  {
    title: "المهارات الرقمية",
    description: "تعلّم أساسيات استخدام التكنولوجيا الرقمية بشكل آمن وفعّال.",
    video: "https://www.youtube.com/embed/VIDEO_ID1",
    modules: [
      "أساسيات الإنترنت",
      "حماية البيانات",
      "البريد الإلكتروني",
      "التعاون السحابي",
      "الأمن السيبراني"
    ],
    activity: "ابحث عن أداة مجانية للتعاون عبر الإنترنت وقارنها مع أداة أخرى.",
    quiz: [
      { q: "ما هي كلمة المرور القوية؟", options: ["123456", "Qwerty", "Pa$$2025!"], answer: 2 },
      { q: "ما هو البريد الإلكتروني الرسمي الأفضل للاستخدام؟", options: ["Gmail", "Yahoo قديم", "Hotmail 1999"], answer: 0 },
      { q: "أي من هذه آمن للتخزين؟", options: ["جهاز مشترك بدون كلمة مرور", "Google Drive محمي"], answer: 1 },
      { q: "ما هي الشبكة الأكثر أمانًا؟", options: ["Wi-Fi مفتوح", "Wi-Fi بكلمة مرور"], answer: 1 }
    ]
  },
  {
    title: "المهارات الحياتية",
    description: "مهارات تساعدك على النجاح في حياتك اليومية والمهنية.",
    video: "https://www.youtube.com/embed/VIDEO_ID2",
    modules: ["التواصل الفعّال", "إدارة الوقت", "حل المشكلات", "العمل ضمن فريق", "المرونة النفسية"],
    activity: "اكتب 3 مواقف واجهتك وكيف تعاملت معها.",
    quiz: [
      { q: "ما هو العنصر الأساسي للتواصل الجيد؟", options: ["الإنصات", "الكلام الكثير"], answer: 0 },
      { q: "كيف تدير وقتك؟", options: ["استخدام جدول", "ترك الأمور للصدفة"], answer: 0 },
      { q: "ما هي مهارة حل المشكلات؟", options: ["تجاهلها", "تحليل واختيار الحل الأفضل"], answer: 1 },
      { q: "العمل ضمن فريق يعني:", options: ["التعاون", "العمل وحدك"], answer: 0 }
    ]
  },
  // ⚡ كرر باقي 11 دورة بنفس النمط (الوصف + 5 مواضيع + نشاط + 4 أسئلة) ⚡
];

// عرض الدورات
const container = document.getElementById("courses");
courses.forEach((course, idx) => {
  const div = document.createElement("div");
  div.className = "course";
  div.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <iframe width="100%" height="200" src="${course.video}" frameborder="0" allowfullscreen></iframe>
    <h3>المواضيع:</h3>
    <ul class="modules">${course.modules.map(m => `<li>${m}</li>`).join("")}</ul>
    <div class="activity"><b>نشاط:</b> ${course.activity}</div>
    <div class="quiz">
      <h3>اختبار قصير:</h3>
      ${course.quiz.map((q, i) => `
        <div>
          <p>${q.q}</p>
          ${q.options.map((opt, j) => `
            <label><input type="radio" name="q${idx}-${i}" value="${j}"> ${opt}</label><br>
          `).join("")}
        </div>
      `).join("")}
      <button onclick="checkQuiz(${idx})">تحقق من الإجابات</button>
      <p id="result-${idx}"></p>
    </div>
  `;
  container.appendChild(div);
});

// تصحيح الاختبار
function checkQuiz(idx) {
  const quiz = courses[idx].quiz;
  let score = 0;
  quiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${idx}-${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  document.getElementById(`result-${idx}`).innerText = `درجتك: ${score} من ${quiz.length}`;
}
