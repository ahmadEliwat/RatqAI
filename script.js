"use strict";
// Fictional concept samples. No booking, purchase, or application is submitted.
let inquiryState = "idle";
const COPY = {
  skip: ["Skip to content", "انتقل إلى المحتوى"],
  navServices: ["Expertise", "خبراتنا"],
  navWork: ["Selected concepts", "تصوّرات مختارة"],
  navPortfolio: ["Concept gallery", "معرض التصوّرات"],
  navApproach: ["Our approach", "منهجنا"],
  navContact: ["Let’s talk", "لنتحدّث"],
  heroEyebrow: [
    "DIGITAL CRAFT. BUSINESS PURPOSE.",
    "حِرفة رقمية. وغاية تخدم أعمالك.",
  ],
  heroTitle: [
    "We Build Digital<br><em>Experiences</em> That<br>Move Businesses<br>Forward.",
    "نبني تجارب<br><em>رقمية</em> تدفع<br>أعمالك نحو<br>المستقبل.",
  ],
  heroCopy: [
    "From beautiful websites and custom software to powerful business systems and intelligent automation, RatqAI turns ambitious ideas into practical digital solutions.",
    "من المواقع المميّزة والبرمجيات المخصّصة إلى أنظمة الأعمال المتكاملة والأتمتة الذكية، تحوّل RatqAI الأفكار الطموحة إلى حلول رقمية عملية.",
  ],
  heroCTA: ["Start Your Project", "ابدأ مشروعك"],
  heroSecondary: ["Explore Our Work", "استكشف أعمالنا"],
  heroArtLabel: ["THE DETAIL IS THE DIFFERENCE.", "الفرق تصنعه التفاصيل."],
  concept: ["Concept / Demo", "تصوّر / تجربة توضيحية"],
  designReview: ["Design review", "مراجعة التصميم"],
  projectSpace: ["PROJECT SPACE / FORMA", "مساحة المشروع / FORMA"],
  reviewHeadline: ["An idea, taking shape.", "فكرة، تتّضح ملامحها."],
  storeCollection: ["Everyday collection", "تشكيلة كل يوم"],
  storeSeason: ["A NEW PERSPECTIVE", "منظور جديد"],
  storeTitle: ["Less.<br>But better.", "أقلّ.<br>باختيار أجمل."],
  storeEdit: ["Discover the edit —", "استكشف التشكيلة —"],
  screenReady: [
    "Homepage · Ready for review",
    "الصفحة الرئيسية · جاهزة للمراجعة",
  ],
  craftDetail: ["DESIGN + DEVELOPMENT", "تصميم + تطوير"],
  heroArtCaption: [
    "Considered on the surface. Carefully engineered underneath.",
    "عناية بالتجربة الظاهرة. وإتقان في التفاصيل خلفها.",
  ],
  heroFoot: [
    "An independent studio. A business-first perspective.",
    "استوديو مستقل. يبدأ بفهم الأعمال.",
  ],
  heroScope: ["WEBSITES / SOFTWARE / AUTOMATION", "مواقع / برمجيات / أتمتة"],
  servicesLabel: ["01 / OUR EXPERTISE", "01 / خبراتنا"],
  servicesTitle: [
    "Built around<br><em>your business.</em>",
    "نبني حول<br><em>احتياجات أعمالك.</em>",
  ],
  servicesCopy: [
    "A beautiful first impression is only the beginning. We bring design, software, and business thinking together to build what comes next.",
    "الانطباع الجميل هو البداية فقط. نجمع التصميم والبرمجيات وفهم الأعمال لنبني خطوتك القادمة.",
  ],
  expertiseNote: [
    "A considered approach, from the first screen to the work behind it.",
    "منهج مدروس، من الشاشة الأولى إلى العمل خلفها.",
  ],
  workLabel: ["02 / SELECTED CONCEPTS", "02 / تصوّرات مختارة"],
  workTitle: [
    "Made to be seen.<br><em>Built to be used.</em>",
    "تجارب تلفت النظر.<br><em>وتخدم المستخدم.</em>",
  ],
  workCopy: [
    "Two different businesses. The same care for the people using them. A closer look at what we can create.",
    "نشاطان مختلفان، والعناية ذاتها بالمستخدم. نظرة أقرب إلى ما يمكننا بناؤه.",
  ],
  workDisclaimer: [
    "Fictional Concept / Demo experiences. Not delivered client projects.",
    "تصوّرات توضيحية لعلامات خيالية، وليست مشاريع منفّذة لعملاء.",
  ],
  diningCategory: [
    "HOSPITALITY / WEBSITE & RESERVATIONS",
    "الضيافة / موقع وحجوزات",
  ],
  diningCopy: [
    "Warm hospitality, translated into a distinctive website, seasonal menu, and effortless reservation experience.",
    "ضيافة دافئة تتجلّى في موقع مميّز وقائمة موسمية وتجربة حجز سهلة.",
  ],
  academyCategory: [
    "EDUCATION / ENROLLMENT & MANAGEMENT",
    "التعليم / التسجيل والإدارة",
  ],
  academyCopy: [
    "A calmer workspace for applications, students, and the next conversation. Less friction for everyone.",
    "مساحة عمل أوضح للطلبات والطلاب والتواصل القادم. مهام أبسط للجميع.",
  ],
  viewConcept: ["Explore concept", "استكشف التصوّر"],
  portfolioBridge: [
    "Different industries.<br>The same attention to detail.",
    "قطاعات مختلفة.<br>والعناية ذاتها بالتفاصيل.",
  ],
  allConcepts: ["Explore all five concepts", "استكشف التصوّرات الخمسة"],
  portfolioIndustries: [
    "HOSPITALITY · EDUCATION · RETAIL · PROPERTY · SERVICES",
    "الضيافة · التعليم · التجزئة · العقارات · الخدمات",
  ],
  whyLabel: ["03 / WHY RATQAI", "03 / لماذا RatqAI"],
  whyTitle: [
    "Good technology.<br><em>Grounded in your reality.</em>",
    "تقنية مدروسة.<br><em>تنطلق من واقع أعمالك.</em>",
  ],
  whyCopy: [
    "We start with how your business works, not a template. Then shape the right experience and the right engineering around it.",
    "نبدأ بفهم طريقة عملك، لا بقالب جاهز. ثم نصمّم التجربة والتطوير المناسبين لها.",
  ],
  approachLabel: ["04 / OUR PROCESS", "04 / خطواتنا"],
  approachTitle: ["Clarity, at every step.", "وضوح، في كل خطوة."],
  contactLabel: ["05 / START A PROJECT", "05 / ابدأ مشروعك"],
  contactTitle: [
    "Your next chapter<br><em>starts here.</em>",
    "خطوتك القادمة<br><em>تبدأ هنا.</em>",
  ],
  contactCopy: [
    "A new idea or a better way to work. Tell us what you have in mind. We’ll help you find a practical way forward.",
    "فكرة جديدة أو طريقة أفضل للعمل. أخبرنا بما تفكّر به، ولنبحث معًا عن خطوة عملية للأمام.",
  ],
  formName: ["Name", "الاسم"],
  formEmail: ["Email", "البريد الإلكتروني"],
  formPhone: ["Mobile number", "رقم الجوال"],
  formCompany: ["Business name (optional)", "اسم النشاط التجاري (اختياري)"],
  formService: ["Project type", "نوع المشروع"],
  formMessage: ["A little about your project", "نبذة عن مشروعك"],
  formSubmit: ["Send Your Inquiry", "أرسل طلبك"],
  formNote: [
    "Your details are shared with RatqAI to respond to your project inquiry.",
    "تُشارك بياناتك مع RatqAI للتواصل معك بخصوص مشروعك.",
  ],
  openEmail: ["Review email draft ↗", "راجع مسودة الرسالة ↗"],
  footerLine: [
    "Thoughtful technology. Practical outcomes.",
    "تقنية مدروسة. نتائج عملية.",
  ],
  backTop: ["Back to top", "العودة للأعلى"],
  rights: ["All rights reserved.", "جميع الحقوق محفوظة."],
  demoNotice: [
    "Fictional interactive preview. Nothing is sent, booked, or purchased.",
    "تجربة تفاعلية خيالية. لا إرسال فعلي أو حجز أو شراء.",
  ],
  galleryLabel: ["THE CONCEPT COLLECTION", "معرض التصوّرات"],
  galleryTitle: [
    "Different businesses.<br><em>Considered experiences.</em>",
    "أعمال مختلفة.<br><em>وتجارب مدروسة.</em>",
  ],
  galleryCopy: [
    "Explore five fictional product concepts across hospitality, education, retail, property, and professional services. Each is a starting point for a conversation, not a claim of delivered client work.",
    "استكشف خمسة تصوّرات خيالية في الضيافة والتعليم والتجزئة والعقارات والخدمات المهنية. كلّ منها نقطة بداية للنقاش، وليس ادّعاءً بمشروع منفّذ لعميل.",
  ],
  galleryCTA: ["Build something for your business", "لنبنِ ما يناسب أعمالك"],
  filterAll: ["All concepts", "كل التصوّرات"],
  filterWeb: ["Websites & commerce", "المواقع والتجارة"],
  filterSystems: ["Systems & operations", "الأنظمة والعمليات"],
  galleryEnd: [
    "What could this look like<br><em>for your business?</em>",
    "كيف يمكن أن تبدو التجربة<br><em>في أعمالك؟</em>",
  ],
};
const SERVICES = [
  [
    "Websites & Landing Pages",
    "المواقع وصفحات الهبوط",
    "A distinctive digital presence that explains your offer and makes the next step clear.",
    "حضور رقمي مميّز يشرح ما تقدّمه ويسهّل الخطوة التالية للعميل.",
  ],
  [
    "E-commerce Development",
    "تطوير التجارة الإلكترونية",
    "Thoughtful storefronts, useful product discovery, and a practical way to manage orders.",
    "متاجر مدروسة، واستكشاف أسهل للمنتجات، وإدارة عملية للطلبات.",
  ],
  [
    "Custom Software & Business Systems",
    "البرمجيات المخصّصة وأنظمة الأعمال",
    "Focused tools for your processes, built to replace scattered spreadsheets and manual work.",
    "أدوات تناسب إجراءات عملك، وتقلّل الجداول المتفرّقة والعمل اليدوي.",
  ],
  [
    "Web & Mobile Applications",
    "تطبيقات الويب والجوال",
    "Booking, service delivery, and everyday tasks brought closer to the people who need them.",
    "حجز وخدمات ومهام يومية أقرب إلى الأشخاص الذين يحتاجونها.",
  ],
  [
    "Workflow Automation & AI",
    "أتمتة الأعمال والذكاء الاصطناعي",
    "Reduce repetitive tasks with deliberate workflows and AI where it adds real practical value.",
    "قلّل المهام المتكرّرة بإجراءات مدروسة وذكاء اصطناعي يضيف قيمة عملية.",
  ],
  [
    "API Integration & Technology Consulting",
    "التكاملات البرمجية والاستشارات التقنية",
    "Connect the tools you rely on, and make clearer decisions about the technology ahead.",
    "اربط الأدوات التي تعتمد عليها واتخذ قرارات تقنية أوضح لخطوتك القادمة.",
  ],
];
const PROCESS = [
  [
    "Discover",
    "نكتشف",
    "Understand your goals, users, and how the work happens.",
    "نفهم أهدافك ومستخدميك وطريقة سير العمل.",
  ],
  [
    "Design",
    "نصمّم",
    "Shape a clear direction you can see, test, and discuss.",
    "نرسم اتجاهًا واضحًا يمكنك رؤيته وتجربته ومناقشته.",
  ],
  [
    "Develop",
    "نطوّر",
    "Build with care, useful feedback, and focused testing.",
    "نبني بعناية، مع ملاحظات مفيدة واختبارات هادفة.",
  ],
  [
    "Launch",
    "نطلق",
    "A considered handover and a foundation ready to evolve.",
    "تسليم منظّم وأساس قابل للتطوير مع احتياجاتك.",
  ],
];
const VALUES = [
  [
    "Business-first thinking",
    "فهم الأعمال أولًا",
    "The goal comes before the tool.",
    "الغاية قبل الأداة.",
  ],
  [
    "Tailored solutions",
    "حلول تناسبك",
    "Your process deserves the right fit.",
    "حلّ ملائم لطريقة عملك.",
  ],
  [
    "Thoughtful user experience",
    "تجربة مستخدم مدروسة",
    "Clarity for the people using it.",
    "وضوح لمن يستخدمون الحلّ.",
  ],
  [
    "Architecture that can evolve",
    "بنية قابلة للتطوّر",
    "Room for your next step.",
    "مساحة لخطوتك التالية.",
  ],
  [
    "Clear communication",
    "تواصل واضح",
    "Shared expectations from the start.",
    "توقّعات واضحة منذ البداية.",
  ],
];
let lang = "en",
  cart = 0,
  activeDemo = null,
  toastTimer,
  observer;
let galleryFilter = "all";
const demoState = { booking: false, enrolled: false, crmMoved: false };
const $ = (s) => document.querySelector(s);
const t = (en, ar) => (lang === "ar" ? ar : en);
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const browserBar = (name) =>
  `<div class="demo-browser"><span class="window-dots" aria-hidden="true">● ● ●</span><span dir="ltr">${name}</span><span class="concept-tag">${t("Concept / Demo", "تصوّر / تجربة")}</span></div>`;
function diningUI() {
  return `${browserBar("saffron.house / hospitality")}<div class="saffron-ui"><div class="saffron-site-nav"><b class="sample-brand" dir="ltr">saffron house</b><span>${t("Our table / The menu / Our story", "مائدتنا / القائمة / حكايتنا")}</span><button class="sample-button" data-demo="dining">${t("Reserve a table", "احجز طاولة")} ↗</button></div><div class="saffron-photo"><img src="assets/dining.webp" loading="lazy" alt="${t("Illustrative dining photography", "صورة توضيحية لتجربة طعام")}" width="1400" height="933"><div class="saffron-title"><span class="sample-micro">${t("AMMAN / A CONTEMPORARY LEVANTINE TABLE", "عمّان / مائدة شرقية بروح معاصرة")}</span><h4>${t("Good food.<br>Better company.", "مذاق طيّب.<br>وصحبة أجمل.")}</h4><p>${t("Seasonal ingredients. Familiar warmth. A table worth gathering around.", "مكوّنات موسمية. ودفء مألوف. ومائدة تستحقّ أن نجتمع حولها.")}</p><button class="sample-button" data-demo="dining">${t("Find your table", "اختر طاولتك")} ↗</button></div></div><div class="saffron-menu"><span class="sample-micro">${t("FROM OUR KITCHEN", "من مطبخنا")}</span><h4>${t("Seasonal. Simple. Shared.", "موسمي. بسيط. يجمعنا.")}</h4><div class="menu-line"><div>${t("Roasted cauliflower", "قرنبيط مشوي")}<small>${t("Tahini, herbs, pomegranate", "طحينة، أعشاب، رمّان")}</small></div><b>7 ${t("JOD", "د.أ")}</b></div><div class="menu-line"><div>${t("Saffron chicken", "دجاج بالزعفران")}<small>${t("Freekeh, lemon, toasted almonds", "فريكة، ليمون، لوز محمّص")}</small></div><b>14 ${t("JOD", "د.أ")}</b></div><div class="menu-line"><div>${t("Pistachio & rose", "فستق وورد")}<small>${t("Milk pudding, seasonal fruit", "مهلبية، فاكهة موسمية")}</small></div><b>6 ${t("JOD", "د.أ")}</b></div><button class="sample-button" data-demo="dining">${t("Reserve a table", "احجز طاولة")} <span>↗</span></button></div></div>`;
}
function academyUI() {
  return `${browserBar("noura / academy workspace")}<div class="noura-ui"><aside class="noura-sidebar"><b class="sample-brand" dir="ltr">noura.</b><span class="sidebar-item selected">${t("Overview", "نظرة عامة")}</span><span class="sidebar-item">${t("Applications", "طلبات التسجيل")}</span><span class="sidebar-item">${t("Students", "الطلاب")}</span><span class="sidebar-item">${t("Classes", "الصفوف")}</span><small>${t("ACADEMY WORKSPACE<br>ILLUSTRATIVE DATA", "مساحة عمل أكاديمية<br>بيانات افتراضية")}</small></aside><div class="noura-main"><div class="workspace-heading"><div><span class="sample-micro">${t("A NEW DAY TO MAKE A DIFFERENCE", "يوم جديد لنصنع فرقًا")}</span><h4>${t("A clear view of your day.", "يومك، بنظرة أوضح.")}</h4></div><span class="avatar">NA</span></div><div class="metric-row"><div class="metric"><span>${t("Active students", "الطلاب المسجّلون")}</span><b>${"248"}</b><small>${t("Current term · sample", "الفصل الحالي · افتراضي")}</small></div><div class="metric"><span>${t("Applications", "طلبات التسجيل")}</span><b>${demoState.enrolled ? "19" : "18"}</b><small>${t("Awaiting review", "بانتظار المراجعة")}</small></div><div class="metric"><span>${t("Classes today", "صفوف اليوم")}</span><b>12</b><small>${t("Across 4 programs", "ضمن 4 برامج")}</small></div></div><div class="workspace-table"><div class="table-title">${t("Recent applications", "أحدث طلبات التسجيل")}<span>${t("Autumn term", "الفصل الخريفي")}</span></div><table class="sample-table"><thead><tr><th>${t("Student", "الطالب")}</th><th>${t("Program", "البرنامج")}</th><th>${t("Status", "الحالة")}</th></tr></thead><tbody>${demoState.enrolled ? `<tr><td>${t("Demo applicant", "متقدّم تجريبي")}</td><td>${t("English B2", "الإنجليزية B2")}</td><td><span class="tag pending">${t("Review", "للمراجعة")}</span></td></tr>` : ""}<tr><td>${t("Rana K.", "رنا ك.")}</td><td>${t("English B2", "الإنجليزية B2")}</td><td><span class="tag pending">${t("Review", "للمراجعة")}</span></td></tr><tr><td>${t("Adam M.", "آدم م.")}</td><td>${t("Design basics", "أساسيات التصميم")}</td><td><span class="tag">${t("Accepted", "مقبول")}</span></td></tr><tr><td>${t("Leen A.", "لين أ.")}</td><td>${t("English B1", "الإنجليزية B1")}</td><td><span class="tag">${t("Accepted", "مقبول")}</span></td></tr></tbody></table></div><div class="academy-next"><span class="next-icon" aria-hidden="true">▦</span><div><small>${t("NEXT CLASS / 14:00", "الصف القادم / 14:00")}</small><b>${t("English B2 · Room 03", "الإنجليزية B2 · القاعة 03")}</b></div><span>${t("Instructor: Lina H.", "المدرّبة: لينا ح.")}</span></div></div></div>`;
}
function retailUI() {
  return `<div class="demo-frame">${browserBar("forma / everyday essentials")}<div class="retail-ui"><div class="retail-nav"><b class="sample-brand" dir="ltr">FORMA</b><span>${t("THE EVERYDAY COLLECTION", "تشكيلة كل يوم")}</span><button data-action="bag">${t("Bag", "الحقيبة")} (${cart})</button></div><div class="retail-body"><div><span class="sample-micro">${t("LESS, BUT BETTER", "أقلّ، باختيار أجمل")}</span><h4>${t("Everyday.<br>Considered.", "تفاصيل يومية.<br>بعناية.")}</h4><p>${t("A small collection of pieces you’ll reach for, again and again.", "تشكيلة مختارة من القطع التي تحب العودة إليها، كل يوم.")}</p><button class="sample-button" data-demo="retail">${t("Explore the edit", "استكشف التشكيلة")} ↗</button></div><img src="assets/fashion.webp" alt="${t("Illustrative curated clothing collection", "صورة توضيحية لتشكيلة ملابس مختارة")}" loading="lazy" width="1400" height="933"></div></div></div><div class="inventory-ui"><div class="workspace-heading"><div><span class="sample-micro">${t("FORMA / BACK OFFICE", "FORMA / إدارة المتجر")}</span><h4>${t("Everything in order.", "كل شيء في مكانه.")}</h4></div><span class="avatar">F</span></div><div class="metric-row"><div class="metric"><span>${t("Orders today", "طلبات اليوم")}</span><b>${24}</b><small>${t("Demo store activity", "نشاط متجر افتراضي")}</small></div><div class="metric"><span>${t("Ready to ship", "جاهز للشحن")}</span><b>16</b><small>${t("Awaiting dispatch", "بانتظار الإرسال")}</small></div></div><span class="sample-micro">${t("INVENTORY SNAPSHOT", "لمحة عن المخزون")}</span>${[
    [t("Cotton knit", "قطعة قطن محبوكة"), "KN-021", "32", false],
    [t("Everyday tote", "حقيبة يومية"), "TT-004", "5", true],
    [t("Cotton essential", "قطعة قطن أساسية"), "CT-012", "48", false],
  ]
    .map(
      ([name, sku, n, low]) =>
        `<div class="inventory-row"><div><b>${name}</b><small dir="ltr">${sku} · ${n} ${t("in stock", "بالمخزون")}</small></div><div><span class="tag ${low ? "pending" : ""}">${low ? t("Low stock", "مخزون منخفض") : t("Available", "متاح")}</span><div class="stock-bar"><span style="width:${low ? "18" : "70"}%"></span></div></div></div>`,
    )
    .join(
      "",
    )}<span class="disclosure">${t("Concept / Demo · Fictional store data", "تصوّر / تجربة · بيانات متجر خيالية")}</span></div>`;
}
function crmUI() {
  return `${browserBar("folio / client workspace")}<div class="crm-ui"><div class="workspace-heading"><div><span class="sample-micro">${t("FOCUS ON THE NEXT CONVERSATION", "التركيز على المحادثة القادمة")}</span><h4>${t("Your pipeline, at a glance.", "فرصك، بنظرة واحدة.")}</h4></div><span class="avatar">F</span></div><div class="pipeline"><div class="pipeline-column"><h5>${t("New", "جديد")} <span>${demoState.crmMoved ? "1" : "2"}</span></h5>${demoState.crmMoved ? "" : `<div class="lead-card"><b>${t("Atlas Studio", "استوديو أطلس")}</b><small>${t("Website inquiry", "استفسار عن موقع")}</small><span>${t("Owner: Lina", "المسؤول: لينا")}</span></div>`}<div class="lead-card"><b>${t("Noor Clinic", "عيادة نور")}</b><small>${t("Booking system", "نظام حجوزات")}</small><span>${t("Owner: Omar", "المسؤول: عمر")}</span></div></div><div class="pipeline-column"><h5>${t("In discussion", "قيد النقاش")} <span>${demoState.crmMoved ? "2" : "1"}</span></h5><div class="lead-card"><b>${t("Bayt Consulting", "بيت للاستشارات")}</b><small>${t("Operations workspace", "مساحة إدارة الأعمال")}</small><span>${t("Owner: Lina", "المسؤول: لينا")}</span></div>${demoState.crmMoved ? `<div class="lead-card"><b>${t("Atlas Studio", "استوديو أطلس")}</b><small>${t("Website inquiry", "استفسار عن موقع")}</small><span>${t("Owner: Lina", "المسؤول: لينا")}</span></div>` : ""}</div><div class="pipeline-column"><h5>${t("Proposal", "عرض سعر")} <span>1</span></h5><div class="lead-card"><b>${t("Madar Partners", "مدار وشركاؤه")}</b><small>${t("Client portal", "بوابة العملاء")}</small><span>${t("Owner: Omar", "المسؤول: عمر")}</span></div></div></div><div class="automation-note"><b aria-hidden="true">✓</b><span>${t("Reminder prepared: follow up with Bayt Consulting tomorrow.", "تذكير جاهز: متابعة بيت للاستشارات غدًا.")}<br><small>${t("Illustrative automation · nothing sent", "أتمتة توضيحية · لم يتم الإرسال")}</small></span></div></div>`;
}

function refreshSamples() {
  if ($("#dining-preview")) $("#dining-preview").innerHTML = diningUI();
  if ($("#academy-preview")) $("#academy-preview").innerHTML = academyUI();
  if ($("#concept-grid")) renderGallery();
}
function renderServices() {
  if (!$("#service-list")) return;
  const open = [...document.querySelectorAll(".expertise-item")].findIndex(
    (el) => el.open,
  );
  $("#service-list").innerHTML = SERVICES.map(
    (s, i) =>
      `<details class="expertise-item" name="expertise" ${i === (open < 0 ? 0 : open) ? "open" : ""}><summary><span class="service-index">0${i + 1}</span><h3>${t(s[0], s[1])}</h3><span class="detail-sign" aria-hidden="true">＋</span></summary><div class="service-detail"><p>${t(s[2], s[3])}</p><img src="assets/service-${i + 1}.webp" width="960" height="600" loading="lazy" decoding="async" alt="${t(s[0], s[1])} — ${t("illustrative concept interface", "واجهة تصوّر توضيحي")}"></div></details>`,
  ).join("");
  $("#process-steps").innerHTML = PROCESS.map(
    (s, i) =>
      `<article class="process-step reveal"><span>0${i + 1}</span><h3>${t(s[0], s[1])}</h3><p>${t(s[2], s[3])}</p></article>`,
  ).join("");
  $("#value-list").innerHTML = VALUES.map(
    (s) =>
      `<div class="value-row"><h3>${t(s[0], s[1])}</h3><p>${t(s[2], s[3])}</p></div>`,
  ).join("");
}
function options() {
  const a = $("#project-service");
  if (!a) return;
  const previous = a.value;
  a.innerHTML =
    `<option value="Let’s explore together">${t("Let’s explore together", "لنستكشف معًا")}</option>` +
    SERVICES.map(
      (s) => `<option value="${s[0]}">${t(s[0], s[1])}</option>`,
    ).join("");
  a.value = previous || "Let’s explore together";
}
function renderGallery() {
  const data = [
    [
      "dining",
      "websites",
      "Saffron House",
      t("Restaurant website, menu & reservations", "موقع مطعم وقائمة وحجوزات"),
      diningUI(),
    ],
    [
      "academy",
      "systems",
      "Noura Academy",
      t(
        "Student enrollment & academy management",
        "تسجيل الطلاب وإدارة الأكاديمية",
      ),
      academyUI(),
    ],
    [
      "retail",
      "websites",
      "Forma",
      t("Online storefront & order management", "متجر إلكتروني وإدارة الطلبات"),
      `<div class="retail-composition">${retailUI()}</div>`,
    ],
    [
      "property",
      "websites",
      "Darna Properties",
      t("Property discovery & inquiries", "استكشاف العقارات والاستفسارات"),
      `<div class="gallery-property"><img src="assets/residence.webp" alt="" loading="lazy" width="1400" height="933"><b dir="ltr">DARNA<span>PROPERTIES</span></b><p>${t("Find your place.", "اكتشف مساحتك.")}</p></div>`,
    ],
    [
      "crm",
      "systems",
      "Folio",
      t(
        "Client relationships & business operations",
        "علاقات العملاء وعمليات الأعمال",
      ),
      crmUI(),
    ],
  ];
  const visible = data.filter(
    (d) => galleryFilter === "all" || d[1] === galleryFilter,
  );
  $("#concept-grid").innerHTML = visible
    .map(
      ([id, type, name, desc, ui]) =>
        `<article class="concept-card"><div class="concept-thumbnail" aria-hidden="true" inert>${ui}</div><div class="concept-card-caption"><span class="eyebrow">${t("Concept / Demo", "تصوّر / تجربة توضيحية")}</span><h2 dir="ltr">${name}</h2><p>${desc}</p><button data-demo="${id}" class="text-link">${t("Open interactive concept", "افتح التجربة التفاعلية")} ↗</button></div></article>`,
    )
    .join("");
  $("#gallery-count").textContent = t(
    `${visible.length} concepts · fictional businesses and sample data`,
    `${visible.length} تصوّرات · علامات خيالية وبيانات افتراضية`,
  );
}
function observeReveals() {
  if (observer) observer.disconnect();
  if (
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    document.documentElement.classList.remove("motion-ready");
    return;
  }
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => observer.observe(el));
  document.documentElement.classList.add("motion-ready");
}
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (COPY[el.dataset.i18n]) el.innerHTML = t(...COPY[el.dataset.i18n]);
  });
  $("#langToggle").textContent = t("العربية", "English");
  $("#langToggle").setAttribute(
    "aria-label",
    t("Switch to Arabic", "Switch to English"),
  );
  $("#menu-toggle").setAttribute(
    "aria-label",
    t("Toggle navigation", "فتح أو إغلاق القائمة"),
  );
  $("#navigation").setAttribute(
    "aria-label",
    t("Main navigation", "القائمة الرئيسية"),
  );
  $("#close-demo").setAttribute(
    "aria-label",
    t("Close preview", "إغلاق التجربة"),
  );
  document
    .querySelectorAll(".wordmark")
    .forEach((a) =>
      a.setAttribute("aria-label", t("RatqAI home", "RatqAI الرئيسية")),
    );
  $(".store-composition img")?.setAttribute(
    "alt",
    t("Illustrative neutral knitwear", "صورة توضيحية لقطعة ملابس محبوكة"),
  );
  $(".hero-art")?.setAttribute(
    "aria-label",
    t(
      "Fictional software design review interface",
      "تصوّر لواجهة مراجعة تصميم برمجي",
    ),
  );
  document
    .querySelectorAll('[data-demo="dining"].round-link')
    .forEach((b) =>
      b.setAttribute(
        "aria-label",
        t("Explore Saffron House concept", "استكشف تجربة مطعم سافرون"),
      ),
    );
  document
    .querySelectorAll('[data-demo="academy"].round-link')
    .forEach((b) =>
      b.setAttribute(
        "aria-label",
        t("Explore Noura Academy concept", "استكشف تجربة أكاديمية نورا"),
      ),
    );
  $(".gallery-filters")?.setAttribute(
    "aria-label",
    t("Filter concepts", "تصفية التصوّرات"),
  );
  const isGallery = document.body.dataset.page === "concepts";
  document.title = isGallery
    ? t("Concept Gallery | RatqAI", "معرض التصوّرات | RatqAI")
    : t(
        "RatqAI | Websites, Custom Software & AI Automation",
        "RatqAI | المواقع والبرمجيات المخصصة والأتمتة بالذكاء الاصطناعي",
      );
  const description = t(
    "RatqAI is a digital solutions studio offering custom software development, professional websites, business workflow automation, and technology consulting.",
    "RatqAI استوديو للحلول الرقمية يقدّم تطوير البرمجيات المخصصة والمواقع الاحترافية وأتمتة عمليات الأعمال والاستشارات التقنية.",
  );
  $('meta[name="description"]').content = description;
  ["og:title", "twitter:title"].forEach(
    (k) =>
      (document.querySelector(
        `meta[property="${k}"],meta[name="${k}"]`,
      ).content = document.title),
  );
  ["og:description", "twitter:description"].forEach(
    (k) =>
      (document.querySelector(
        `meta[property="${k}"],meta[name="${k}"]`,
      ).content = description),
  );
  $('meta[property="og:locale"]').content = t("en_US", "ar_AR");
  const form = $("#project-form");
  if (form)
    form.elements.message.placeholder = t(
      "What would you like to build or improve?",
      "ما الذي ترغب في بنائه أو تحسينه؟",
    );
  window.RatqMotion?.syncLocale();
  refreshSamples();
  renderServices();
  options();
  observeReveals();
  if (activeDemo) renderDemo(activeDemo);
  updateFormStatus();
  try {
    localStorage.setItem("ratqai-language", lang);
  } catch {}
}
function toast(en, ar) {
  const el = $("#toast");
  el.textContent = t(en, ar);
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.hidden = true), 5500);
}
const dialog = $("#demo-dialog");
let trigger = null;
function renderDemo(kind) {
  const title = {
    dining: t(
      "Saffron House / dining experience",
      "Saffron House / تجربة المطعم",
    ),
    academy: t("Noura / academy workspace", "Noura / إدارة الأكاديمية"),
    retail: t("Forma / storefront & back office", "Forma / المتجر والإدارة"),
    property: t("Darna / property discovery", "Darna / استكشاف العقارات"),
    crm: t("Folio / client workspace", "Folio / مساحة العملاء"),
  };
  $("#demo-title").textContent = title[kind];
  let content = "";
  if (kind === "dining") {
    content = `<div class="demo-frame">${diningUI()}</div><div class="demo-controls"><h3>${t("A table for your next story.", "طاولة لحكايتك القادمة.")}</h3><p>${t("Try a reservation request with sample details. No booking is made.", "جرّب طلب حجز ببيانات افتراضية. لن يُنفَّذ حجز فعلي.")}</p><form id="reservation-demo" class="demo-form"><label>${t("Date", "التاريخ")}<input type="date" name="date" required min="${new Date().toLocaleDateString("en-CA")}" aria-label="${t("Reservation date", "تاريخ الحجز")}"></label><label>${t("Guests", "عدد الضيوف")}<select name="guests"><option>2</option><option>4</option><option>6</option></select></label><label>${t("Time", "الوقت")}<select name="time"><option>18:00</option><option>19:30</option><option>21:00</option></select></label><button class="sample-button">${t("Preview reservation", "جرّب طلب الحجز")} ↗</button></form><p class="demo-output" role="status" id="reservation-result">${demoState.booking ? t("Sample request received. A real system would notify your team.", "تمت محاكاة الطلب. في النظام الفعلي، يصل إشعار لفريقك.") : ""}</p></div>`;
  }
  if (kind === "academy") {
    content = `<div class="demo-frame">${academyUI()}</div><div class="demo-controls"><h3>${t("Try the enrollment experience.", "جرّب تجربة التسجيل.")}</h3><p>${t("Add one fictional applicant to the sample workspace.", "أضف متقدّمًا خياليًا واحدًا إلى مساحة العمل.")}</p><button class="sample-button" data-action="enroll" ${demoState.enrolled ? "disabled" : ""}>${demoState.enrolled ? t("Demo application added ✓", "أُضيف الطلب التجريبي ✓") : t("Add a sample application", "أضف طلبًا تجريبيًا")} ↗</button></div>`;
  }
  if (kind === "retail") {
    content = `<div class="retail-composition">${retailUI()}</div><div class="demo-controls"><h3>${t("A considered everyday essential.", "قطعة يومية، باختيار مدروس.")}</h3><p>${t("Cotton knit · Sand · JOD 45 · Fictional product", "قطعة قطن محبوكة · رملي · 45 د.أ · منتج افتراضي")}</p><div class="demo-form"><label>${t("Size", "المقاس")}<select id="product-size"><option>S</option><option>M</option><option>L</option></select></label><button class="sample-button" data-action="add-cart">${t("Add to demo bag", "أضف للحقيبة التجريبية")} ＋</button></div><p class="demo-output" role="status" id="cart-result">${t("Demo bag", "الحقيبة التجريبية")}: ${cart} · ${t("No checkout or payment", "لا توجد عملية دفع")}</p></div>`;
  }
  if (kind === "property") {
    content = `<div class="demo-controls"><span class="sample-brand" dir="ltr">DARNA PROPERTIES</span><p>${t("Fictional residences in Amman. Photos are illustrative and do not show actual Jordan listings.", "عقارات خيالية في عمّان. الصور توضيحية ولا تمثّل عقارات فعلية في الأردن.")}</p><div class="demo-chips" role="group" aria-label="${t("Filter property location", "فلترة موقع العقار")}"><button data-filter="all" class="active" aria-pressed="true">${t("All residences", "كل العقارات")}</button><button data-filter="Abdoun" aria-pressed="false">${t("Abdoun", "عبدون")}</button><button data-filter="Khalda" aria-pressed="false">${t("Khalda", "خلدا")}</button></div><p id="property-results" role="status">${t("2 residences", "عقاران")}</p></div><div class="property-demo-grid">${[
      [
        "Abdoun",
        "عبدون",
        "The Abdoun Residence",
        "فيلا عبدون",
        "785,000",
        "5",
        "620",
        "residence",
      ],
      [
        "Khalda",
        "خلدا",
        "The Khalda Penthouse",
        "بنتهاوس خلدا",
        "345,000",
        "3",
        "290",
        "interior",
      ],
    ]
      .map(
        ([en, ar, title, at, price, beds, area, img]) =>
          `<article class="listing" data-location="${en}"><img src="assets/${img}.jpg" alt="${t("Illustrative property image", "صورة عقار توضيحية")}" width="1400" height="933"><div><span class="sample-micro">${t(en, ar)} · ${t("Amman", "عمّان")}</span><h3>${t(title, at)}</h3><strong>${price} ${t("JOD", "د.أ")}</strong><p>${beds} ${t("bedrooms", "غرف نوم")} · ${area} m²</p><button class="sample-button" data-action="property-inquiry" data-property="${en}">${t("Request details", "اطلب التفاصيل")} ↗</button></div></article>`,
      )
      .join("")}</div>`;
  }
  if (kind === "crm") {
    content = `<div class="demo-frame">${crmUI()}</div><div class="demo-controls"><h3>${t("Move a conversation forward.", "امنح المحادثة خطوتها التالية.")}</h3><p>${t("Move Atlas Studio from New to In discussion. This changes the sample pipeline only.", "انقل استوديو أطلس من «جديد» إلى «قيد النقاش». التغيير في النموذج فقط.")}</p><button class="sample-button" data-action="move-lead" ${demoState.crmMoved ? "disabled" : ""}>${demoState.crmMoved ? t("Moved to In discussion ✓", "نُقل إلى قيد النقاش ✓") : t("Move Atlas Studio →", "انقل استوديو أطلس ←")}</button></div>`;
  }
  $("#demo-content").innerHTML = `<div class="dialog-content">${content}</div>`;
  const booking = $("#reservation-demo");
  if (booking) {
    const date = booking.elements.date;
    const d = new Date();
    d.setDate(d.getDate() + 1);
    date.value = [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, "0"),
      String(d.getDate()).padStart(2, "0"),
    ].join("-");
    booking.addEventListener("submit", (e) => {
      e.preventDefault();
      demoState.booking = true;
      $("#reservation-result").textContent = t(
        `Sample request: ${booking.elements.guests.value} guests, ${date.value} at ${booking.elements.time.value}. No booking was sent.`,
        `طلب تجريبي: ${booking.elements.guests.value} ضيوف، ${date.value} الساعة ${booking.elements.time.value}. لم يُرسل حجز.`,
      );
    });
  }
}
function openDemo(kind, source) {
  if (!dialog.open) {
    trigger = source;
    activeDemo = kind;
    renderDemo(kind);
    dialog.showModal();
    document.body.classList.add("dialog-open");
    $("#close-demo").focus();
  } else if (kind === "dining") $("#reservation-demo input")?.focus();
}
$("#close-demo").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activeDemo = null;
  if (trigger?.isConnected) trigger.focus();
});
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
document.addEventListener("click", (e) => {
  const demo = e.target.closest("[data-demo]");
  if (demo) {
    openDemo(demo.dataset.demo, demo);
    return;
  }
  const filter = e.target.closest("[data-filter]");
  if (filter) {
    document.querySelectorAll("[data-filter]").forEach((b) => {
      b.classList.toggle("active", b === filter);
      b.setAttribute("aria-pressed", String(b === filter));
    });
    let count = 0;
    document.querySelectorAll(".listing").forEach((card) => {
      card.hidden =
        filter.dataset.filter !== "all" &&
        card.dataset.location !== filter.dataset.filter;
      if (!card.hidden) count++;
    });
    $("#property-results").textContent = t(
      `${count} ${count === 1 ? "residence" : "residences"}`,
      count === 1 ? "عقار واحد" : "عقاران",
    );
    return;
  }
  const action = e.target.closest("[data-action]");
  if (!action) return;
  switch (action.dataset.action) {
    case "enroll":
      demoState.enrolled = true;
      refreshSamples();
      renderDemo("academy");
      $('#demo-content [data-action="enroll"]').focus();
      toast(
        "One fictional application added to Noura. Nothing was submitted.",
        "أُضيف طلب خيالي إلى نورا. لم يُرسل أي طلب فعلي.",
      );
      break;
    case "add-cart":
      cart++;
      refreshSamples();
      renderDemo("retail");
      $('#demo-content [data-action="add-cart"]').focus();
      break;
    case "bag":
      toast(
        `Demo bag: ${cart} items. No checkout or payment.`,
        `الحقيبة التجريبية: ${cart} قطع. لا توجد عملية دفع.`,
      );
      break;
    case "move-lead":
      demoState.crmMoved = true;
      refreshSamples();
      renderDemo("crm");
      $('#demo-content [data-action="move-lead"]').focus();
      toast(
        "Atlas Studio moved to In discussion. No messages sent.",
        "نُقل استوديو أطلس إلى قيد النقاش. لم تُرسل رسائل.",
      );
      break;
    case "property-inquiry":
      toast(
        "Sample inquiry prepared. A real listing would connect this to the property team.",
        "تمت محاكاة الاستفسار. في العقار الفعلي، يصل الطلب إلى الفريق المختص.",
      );
      break;
  }
});

$("#langToggle").addEventListener("click", () =>
  setLanguage(lang === "en" ? "ar" : "en"),
);
$("#menu-toggle").addEventListener("click", () => {
  const open = $("#menu-toggle").getAttribute("aria-expanded") === "true";
  $("#menu-toggle").setAttribute("aria-expanded", String(!open));
  $("#navigation").classList.toggle("is-open", !open);
});
$("#navigation").addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    $("#menu-toggle").setAttribute("aria-expanded", "false");
    $("#navigation").classList.remove("is-open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $("#navigation").classList.remove("is-open");
    $("#menu-toggle").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("click", (e) => {
  const filter = e.target.closest("[data-gallery-filter]");
  if (filter) {
    galleryFilter = filter.dataset.galleryFilter;
    document.querySelectorAll("[data-gallery-filter]").forEach((b) => {
      b.classList.toggle("active", b === filter);
      b.setAttribute("aria-pressed", String(b === filter));
    });
    renderGallery();
  }
});

const inquiryMessages = {
  sending: ["Sending your inquiry…", "جارٍ إرسال طلبك…"],
  success: [
    "Thank you. Your inquiry has been received. We’ll contact you using the details you provided.",
    "شكرًا لك. تم استلام طلبك، وسنتواصل معك عبر البيانات التي أرسلتها.",
  ],
  error: [
    "Your inquiry could not be sent. Please try again, or email hello@ratqai.com. Your details are still here.",
    "تعذّر إرسال طلبك. حاول مجددًا أو راسل hello@ratqai.com. بياناتك ما زالت محفوظة في النموذج.",
  ],
};
function updateFormStatus() {
  const status = $("#form-status");
  if (!status || inquiryState === "idle") return;
  status.hidden = false;
  status.textContent = t(...inquiryMessages[inquiryState]);
}
$("#project-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  if (inquiryState === "sending" || !form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  inquiryState = "sending";
  updateFormStatus();
  button.disabled = true;
  form.setAttribute("aria-busy", "true");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Submission not accepted");
    inquiryState = "success";
    form.reset();
  } catch {
    inquiryState = "error";
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
    form.removeAttribute("aria-busy");
    updateFormStatus();
  }
});
// One restrained photography movement; no scroll-jacking, no idle animation.
let ticking = false;
function updateScroll() {
  ticking = false;
  const y = window.scrollY;
  document.body.classList.toggle("scrolled", y > 30);
  if (
    !matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !document.body.classList.contains("motion-paused")
  ) {
    document
      .querySelectorAll(".case-display .saffron-photo img")
      .forEach((img) => {
        const r = img.parentElement.getBoundingClientRect();
        if (r.bottom > 0 && r.top < innerHeight)
          img.style.transform = `translateY(${Math.max(-12, Math.min(12, (r.top - innerHeight / 2) * 0.025))}px) scale(1.06)`;
      });
  } else
    document
      .querySelectorAll(".saffron-photo img")
      .forEach((img) => (img.style.transform = "none"));
}
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScroll);
    }
  },
  { passive: true },
);
matchMedia("(prefers-reduced-motion: reduce)").addEventListener(
  "change",
  () => {
    observeReveals();
    updateScroll();
  },
);
$("#year").textContent = new Date().getFullYear();
let initial = "en";
try {
  if (localStorage.getItem("ratqai-language") === "ar") initial = "ar";
} catch {}
setLanguage(initial);
