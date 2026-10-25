"use strict";
// Fictional examples only. All sample interaction stays in memory.
const COPY = {
  skip: ["Skip to content", "انتقل إلى المحتوى"],
  navWork: ["The possibilities", "ما يمكننا بناؤه"],
  navServices: ["Expertise", "خبراتنا"],
  navApproach: ["Our approach", "منهجنا"],
  navContact: ["Start a conversation", "لنبدأ الحديث"],
  heroEyebrow: [
    "INDEPENDENT DIGITAL ENGINEERING STUDIO",
    "استوديو مستقل للتصميم والتطوير الرقمي",
  ],
  heroTitle: [
    "Your ambition.<br>Our craft.<br><em>Real possibility.</em>",
    "طموحك.<br>خبرتنا.<br><em>إمكانات تتحقّق.</em>",
  ],
  heroCopy: [
    "Distinctive websites. Purpose-built systems. Thoughtful automation. We turn the way you want to work into the way you do.",
    "مواقع تترك انطباعًا. أنظمة تناسب أعمالك. وأتمتة مدروسة. نحوّل تصوّرك لطريقة العمل إلى تجربة عملية.",
  ],
  heroCTA: ["Explore what’s possible", "اكتشف الإمكانات"],
  heroSecondary: ["Tell us your idea", "احكِ لنا فكرتك"],
  heroNote: [
    "Designed with intent. Engineered around you.",
    "تصميم هادف. وتطوير يبدأ من احتياجاتك.",
  ],
  stageLabel: ["A GLIMPSE OF WHAT WE BUILD", "لمحة عمّا يمكننا بناؤه"],
  concept: ["Concept / Demo", "تصوّر / تجربة توضيحية"],
  restaurantMicro: ["AMMAN · MODERN LEVANTINE", "عمّان · مذاق شرقي معاصر"],
  restaurantHero: [
    "A table.<br>A story.<br>A little saffron.",
    "طاولة.<br>حكاية.<br>ولمسة زعفران.",
  ],
  restaurantBook: ["Find your table ↗", "اختر طاولتك ↗"],
  enrollmentLabel: ["ENROLLMENT PREVIEW", "تصوّر لتجربة التسجيل"],
  ticketTitle: ["A clearer start to learning.", "بداية أوضح لرحلة التعلّم."],
  ticketBody: ["Application → review → welcome", "طلب تسجيل · مراجعة · ترحيب"],
  stageFoot: [
    "Different industries. The same attention to detail.",
    "قطاعات مختلفة. والعناية ذاتها بالتفاصيل.",
  ],
  ribbonLead: ["YOUR INDUSTRY. NEW POSSIBILITIES.", "قطاعك. وإمكانات جديدة."],
  industries: [
    "Hospitality <i>·</i> Education <i>·</i> Retail <i>·</i> Real estate <i>·</i> Professional services",
    "الضيافة <i>·</i> التعليم <i>·</i> التجزئة <i>·</i> العقارات <i>·</i> الخدمات المهنية",
  ],
  workLabel: [
    "01 / POSSIBILITIES, MADE TANGIBLE",
    "01 / إمكانات تراها وتجرّبها",
  ],
  workTitle: [
    "Don’t just imagine it.<br><em>Step inside.</em>",
    "لا تتخيّل فقط.<br><em>اكتشف التجربة.</em>",
  ],
  workCopy: [
    "A restaurant with a better first impression. An academy with a simpler day. A business with room to grow. Explore what thoughtful technology can look like.",
    "مطعم بحضور يليق به. أكاديمية بيوم عمل أبسط. وشركة تتهيّأ للنمو. اكتشف كيف تبدو التقنية حين تُصمَّم بعناية.",
  ],
  workDisclaimer: [
    "All examples are fictional Concept / Demo experiences, not client projects or results.",
    "جميع الأمثلة تصوّرات توضيحية لعلامات خيالية، وليست مشاريع عملاء أو نتائج فعلية.",
  ],
  diningCategory: ["01 / RESTAURANTS & CAFÉS", "01 / المطاعم والمقاهي"],
  diningTitle: [
    "Make the first impression<br>before the first course.",
    "الانطباع الأول،<br>قبل الطبق الأول.",
  ],
  diningCopy: [
    "An inviting website, a considered menu, and a simple path to a reservation. Bring your hospitality to every screen.",
    "موقع يستقبل الزائر بذوق، وقائمة طعام واضحة، وطريق بسيط لحجز طاولة. اجعل ضيافتك حاضرة على كل شاشة.",
  ],
  diningFeatures: [
    "Brand experience / Digital menu / Reservations",
    "تجربة العلامة / قائمة رقمية / حجوزات",
  ],
  exploreDemo: ["Explore the concept", "اكتشف التصوّر"],
  academyCategory: ["02 / SCHOOLS & ACADEMIES", "02 / المدارس والأكاديميات"],
  academyTitle: [
    "More learning.<br><em>Less admin.</em>",
    "تعلّم أكثر.<br><em>وأعباء أقل.</em>",
  ],
  academyCopy: [
    "Give prospective students a clear path to enrollment. Give your team one considered workspace for applications, classes, and the next conversation.",
    "امنح الطلاب الجدد طريقًا واضحًا للتسجيل، وفريقك مساحة عمل منظّمة للطلبات والصفوف والتواصل القادم.",
  ],
  academyTag1: ["Student enrollment", "تسجيل الطلاب"],
  academyTag2: ["Management workspace", "مساحة عمل للإدارة"],
  openWorkspace: ["Open the workspace", "افتح مساحة العمل"],
  sampleData: [
    "Concept / Demo · Illustrative data",
    "تصوّر / تجربة توضيحية · بيانات افتراضية",
  ],
  retailCategory: [
    "03 / RETAIL & ECOMMERCE",
    "03 / التجزئة والتجارة الإلكترونية",
  ],
  retailTitle: [
    "Beautiful to browse.<br>Simple to run.",
    "تسوّق ممتع.<br>وإدارة أبسط.",
  ],
  retailCopy: [
    "A distinctive storefront paired with a practical view of products, inventory, and orders. An experience that considers both sides of the counter.",
    "واجهة متجر مميّزة، ورؤية عملية للمنتجات والمخزون والطلبات. تجربة تراعي العميل وفريق العمل معًا.",
  ],
  retailFeatures: [
    "Online storefront / Product discovery / Order management",
    "متجر إلكتروني / استكشاف المنتجات / إدارة الطلبات",
  ],
  propertyCategory: ["04 / REAL ESTATE", "04 / العقارات"],
  propertyTitle: [
    "Spaces worth<br>a closer look.",
    "مساحات تستحقّ<br>نظرة أقرب.",
  ],
  propertyCopy: [
    "Property discovery with useful filters, rich details, and an easy path to an inquiry.",
    "استكشاف للعقارات بفلاتر مفيدة وتفاصيل واضحة وخطوة سهلة للاستفسار.",
  ],
  exploreProperties: ["Explore the properties", "استكشف العقارات"],
  crmCategory: [
    "05 / SERVICES & BUSINESS OPERATIONS",
    "05 / الخدمات وعمليات الأعمال",
  ],
  crmTitle: [
    "Every inquiry.<br>A thoughtful next step.",
    "كل استفسار.<br>وخطوة تالية مدروسة.",
  ],
  crmCopy: [
    "A focused CRM that helps your team follow conversations, assign ownership, and spend less time on routine follow-ups.",
    "نظام لإدارة علاقات العملاء يساعد فريقك على متابعة المحادثات وتوزيع المسؤوليات وتقليل المتابعات الروتينية.",
  ],
  exploreCRM: ["Explore the CRM", "اكتشف إدارة العملاء"],
  servicesLabel: ["02 / OUR EXPERTISE", "02 / خبراتنا"],
  servicesTitle: [
    "The experience.<br><em>And the engineering.</em>",
    "التجربة.<br><em>وما يجعلها تعمل.</em>",
  ],
  servicesCopy: [
    "From the first screen to the work behind it, we build around what your business actually needs.",
    "من الشاشة الأولى إلى العمل خلفها، نبني ما تحتاجه أعمالك فعلًا.",
  ],
  approachLabel: [
    "03 / A CONSIDERED WAY FORWARD",
    "03 / خطوات مدروسة نحو الأمام",
  ],
  approachTitle: [
    "Good work starts<br>with understanding.",
    "العمل المتقن يبدأ<br>بالفهم.",
  ],
  approachCopy: [
    "RatqAI is an independent digital solutions studio. We bring business understanding, clear design, and practical engineering to the same conversation.",
    "RatqAI استوديو مستقل للحلول الرقمية. نجمع فهم الأعمال ووضوح التصميم والتطوير العملي في حوار واحد.",
  ],
  contactLabel: ["04 / YOUR NEXT CHAPTER", "04 / خطوتك القادمة"],
  contactTitle: [
    "Let’s build<br><em>something<br>that matters.</em>",
    "لنبنِ معًا<br><em>شيئًا<br>يصنع فرقًا.</em>",
  ],
  contactCopy: [
    "A new idea, an existing challenge, or a better way to work. Tell us where you want to go.",
    "فكرة جديدة، أو تحدٍّ قائم، أو طريقة أفضل للعمل. أخبرنا إلى أين تطمح.",
  ],
  formName: ["Your name", "اسمك"],
  formEmail: ["Email address", "البريد الإلكتروني"],
  formCompany: ["Company / brand", "الشركة / العلامة"],
  formService: ["What do you have in mind?", "ما الذي تفكّر به؟"],
  formIndustry: ["Your industry", "قطاع أعمالك"],
  formMessage: [
    "Tell us a little about your project",
    "أخبرنا قليلًا عن مشروعك",
  ],
  formSubmit: ["Prepare project inquiry", "جهّز رسالة المشروع"],
  formNote: [
    "This prepares an email in your email app. Your details are not stored on this website.",
    "يجهّز هذا النموذج رسالة في تطبيق بريدك. لا تُحفظ بياناتك على الموقع.",
  ],
  openEmail: ["Open your email app ↗", "افتح تطبيق البريد ↗"],
  footerLine: [
    "Thoughtful technology.<br>Practical outcomes.",
    "تقنية مدروسة.<br>نتائج عملية.",
  ],
  backTop: ["Back to top", "العودة للأعلى"],
  rights: ["All rights reserved.", "جميع الحقوق محفوظة."],
  footerNote: ["Websites. Systems. Possibilities.", "مواقع. أنظمة. إمكانات."],
  demoNotice: [
    "A fictional, interactive front-end sample. No bookings, orders, or applications are sent or saved.",
    "نموذج تفاعلي خيالي للواجهة فقط. لا تُرسل أو تُحفظ حجوزات أو طلبات شراء أو تسجيل.",
  ],
};
const SERVICES = [
  [
    "Websites & digital experiences",
    "المواقع والتجارب الرقمية",
    "Give your business a clear, distinctive presence that makes the next step easy.",
    "حضور واضح ومميّز لأعمالك، يسهّل على العميل اتخاذ الخطوة التالية.",
    "↗",
  ],
  [
    "Ecommerce",
    "التجارة الإلكترونية",
    "Help customers discover, choose, and buy. Give your team a practical way to manage the store.",
    "ساعد العملاء على الاستكشاف والاختيار والشراء، وفريقك على إدارة المتجر بوضوح.",
    "＋",
  ],
  [
    "Bespoke business systems",
    "أنظمة أعمال مخصّصة",
    "Replace scattered spreadsheets with focused tools for your actual processes.",
    "استبدل الجداول المتفرّقة بأدوات مركّزة تناسب إجراءات عملك الفعلية.",
    "◫",
  ],
  [
    "Mobile applications",
    "تطبيقات الجوال",
    "Put booking, service access, or everyday tasks directly in your customers’ hands.",
    "اجعل الحجز والخدمات والمهام اليومية في متناول عملائك أينما كانوا.",
    "▯",
  ],
  [
    "Automation & applied AI",
    "الأتمتة والذكاء الاصطناعي",
    "Reduce repetitive work with deliberate workflows and AI where it adds practical value.",
    "قلّل العمل المتكرّر بإجراءات مدروسة وذكاء اصطناعي يضيف قيمة عملية.",
    "✳",
  ],
  [
    "APIs & integrations",
    "واجهات برمجية وتكاملات",
    "Let your existing tools exchange information, with less re-entry and fewer disconnected tasks.",
    "دع أدواتك الحالية تتبادل البيانات، مع إدخال يدوي أقل ومهام أكثر ترابطًا.",
    "↔",
  ],
];
const PROCESS = [
  [
    "Understand",
    "نفهم",
    "Your goals, your users, and how the work happens today.",
    "أهدافك، ومستخدموك، وكيف يجري العمل اليوم.",
  ],
  [
    "Shape",
    "نصمّم",
    "A clear scope and a design direction you can see and discuss.",
    "نطاق واضح واتجاه تصميم يمكنك رؤيته ومناقشته.",
  ],
  [
    "Build",
    "نطوّر",
    "Careful engineering, useful feedback, and testing along the way.",
    "تطوير متقن، وملاحظات مفيدة، واختبارات خلال التنفيذ.",
  ],
  [
    "Launch & evolve",
    "نطلق ونحسّن",
    "A considered handover, a clear launch, and room for what comes next.",
    "تسليم منظّم، وإطلاق واضح، ومساحة للخطوة القادمة.",
  ],
];
let lang = "en",
  cart = 0,
  activeDemo = null,
  toastTimer,
  observer;
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
  return `${browserBar("saffron.house / dining")}<div class="saffron-ui"><div class="saffron-photo"><img src="assets/dining.jpg" loading="lazy" alt="${t("Illustrative fine dining interior", "صورة توضيحية لمطعم راقٍ")}" width="1400" height="933"><div class="saffron-title"><span class="sample-brand" dir="ltr">saffron house</span><h4>${t("Good food.<br>Better company.", "مذاق طيّب.<br>وصحبة أجمل.")}</h4><span class="sample-micro">${t("A CONTEMPORARY LEVANTINE TABLE", "مائدة شرقية بروح معاصرة")}</span></div></div><div class="saffron-menu"><span class="sample-micro">${t("FROM OUR KITCHEN", "من مطبخنا")}</span><h4>${t("Seasonal. Simple. Shared.", "موسمي. بسيط. يجمعنا.")}</h4><div class="menu-line"><div>${t("Roasted cauliflower", "قرنبيط مشوي")}<small>${t("Tahini, herbs, pomegranate", "طحينة، أعشاب، رمّان")}</small></div><b>7 ${t("JOD", "د.أ")}</b></div><div class="menu-line"><div>${t("Saffron chicken", "دجاج بالزعفران")}<small>${t("Freekeh, lemon, toasted almonds", "فريكة، ليمون، لوز محمّص")}</small></div><b>14 ${t("JOD", "د.أ")}</b></div><div class="menu-line"><div>${t("Pistachio & rose", "فستق وورد")}<small>${t("Milk pudding, seasonal fruit", "مهلبية، فاكهة موسمية")}</small></div><b>6 ${t("JOD", "د.أ")}</b></div><button class="sample-button" data-demo="dining">${t("Reserve a table", "احجز طاولة")} <span>↗</span></button></div></div>`;
}
function academyUI() {
  return `${browserBar("noura / academy workspace")}<div class="noura-ui"><aside class="noura-sidebar"><b class="sample-brand" dir="ltr">noura.</b><span class="sidebar-item selected">${t("Overview", "نظرة عامة")}</span><span class="sidebar-item">${t("Applications", "طلبات التسجيل")}</span><span class="sidebar-item">${t("Students", "الطلاب")}</span><span class="sidebar-item">${t("Classes", "الصفوف")}</span><small>${t("ACADEMY WORKSPACE<br>ILLUSTRATIVE DATA", "مساحة عمل أكاديمية<br>بيانات افتراضية")}</small></aside><div class="noura-main"><div class="workspace-heading"><div><span class="sample-micro">${t("A NEW DAY TO MAKE A DIFFERENCE", "يوم جديد لنصنع فرقًا")}</span><h4>${t("Good morning, Noura.", "صباح الخير، نورا.")}</h4></div><span class="avatar">NA</span></div><div class="metric-row"><div class="metric"><span>${t("Active students", "الطلاب المسجّلون")}</span><b>${demoState.enrolled ? "249" : "248"}</b><small>${t("Current term · sample", "الفصل الحالي · افتراضي")}</small></div><div class="metric"><span>${t("Applications", "طلبات التسجيل")}</span><b>${demoState.enrolled ? "19" : "18"}</b><small>${t("Awaiting review", "بانتظار المراجعة")}</small></div><div class="metric"><span>${t("Classes today", "صفوف اليوم")}</span><b>12</b><small>${t("Across 4 programs", "ضمن 4 برامج")}</small></div></div><div class="workspace-table"><div class="table-title">${t("Recent applications", "أحدث طلبات التسجيل")}<span>${t("Autumn term", "الفصل الخريفي")}</span></div><table class="sample-table"><thead><tr><th>${t("Student", "الطالب")}</th><th>${t("Program", "البرنامج")}</th><th>${t("Status", "الحالة")}</th></tr></thead><tbody>${demoState.enrolled ? `<tr><td>${t("Demo applicant", "متقدّم تجريبي")}</td><td>${t("English B2", "الإنجليزية B2")}</td><td><span class="tag pending">${t("Review", "للمراجعة")}</span></td></tr>` : ""}<tr><td>${t("Rana K.", "رنا ك.")}</td><td>${t("English B2", "الإنجليزية B2")}</td><td><span class="tag pending">${t("Review", "للمراجعة")}</span></td></tr><tr><td>${t("Adam M.", "آدم م.")}</td><td>${t("Design basics", "أساسيات التصميم")}</td><td><span class="tag">${t("Accepted", "مقبول")}</span></td></tr><tr><td>${t("Leen A.", "لين أ.")}</td><td>${t("English B1", "الإنجليزية B1")}</td><td><span class="tag">${t("Accepted", "مقبول")}</span></td></tr></tbody></table></div><div class="academy-bottom"><img src="assets/campus.jpg" alt="${t("Illustrative students studying together", "صورة توضيحية لطلاب يدرسون معًا")}" loading="lazy" width="1200" height="800"><div><b>${t("Make room for the next generation.", "مساحة أوسع للجيل القادم.")}</b><span>${t("A simpler enrollment experience, from the start.", "تجربة تسجيل أبسط، من البداية.")}</span></div></div></div></div>`;
}
function retailUI() {
  return `<div class="demo-frame">${browserBar("forma / everyday essentials")}<div class="retail-ui"><div class="retail-nav"><b class="sample-brand" dir="ltr">FORMA</b><span>${t("THE EVERYDAY COLLECTION", "تشكيلة كل يوم")}</span><button data-action="bag">${t("Bag", "الحقيبة")} (${cart})</button></div><div class="retail-body"><div><span class="sample-micro">${t("LESS, BUT BETTER", "أقلّ، باختيار أجمل")}</span><h4>${t("Everyday.<br>Considered.", "تفاصيل يومية.<br>بعناية.")}</h4><p>${t("A small collection of pieces you’ll reach for, again and again.", "تشكيلة مختارة من القطع التي تحب العودة إليها، كل يوم.")}</p><button class="sample-button" data-demo="retail">${t("Explore the edit", "استكشف التشكيلة")} ↗</button></div><img src="assets/fashion.jpg" alt="${t("Illustrative curated clothing collection", "صورة توضيحية لتشكيلة ملابس مختارة")}" loading="lazy" width="1400" height="933"></div></div></div><div class="inventory-ui"><div class="workspace-heading"><div><span class="sample-micro">${t("FORMA / BACK OFFICE", "FORMA / إدارة المتجر")}</span><h4>${t("Everything in order.", "كل شيء في مكانه.")}</h4></div><span class="avatar">F</span></div><div class="metric-row"><div class="metric"><span>${t("Orders today", "طلبات اليوم")}</span><b>${24 + cart}</b><small>${t("Demo store activity", "نشاط متجر افتراضي")}</small></div><div class="metric"><span>${t("Ready to ship", "جاهز للشحن")}</span><b>16</b><small>${t("Awaiting dispatch", "بانتظار الإرسال")}</small></div></div><span class="sample-micro">${t("INVENTORY SNAPSHOT", "لمحة عن المخزون")}</span>${[
    [t("Linen shirt", "قميص كتان"), "LN-021", "32", false],
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
  $("#dining-preview").innerHTML = diningUI();
  $("#academy-preview").innerHTML = academyUI();
  $("#retail-preview").innerHTML = retailUI();
  $("#crm-preview").innerHTML = crmUI();
}
function renderServices() {
  $("#service-list").innerHTML = SERVICES.map(
    (s, i) =>
      `<article class="service-row reveal"><span class="service-index">0${i + 1}</span><h3>${t(s[0], s[1])}</h3><p>${t(s[2], s[3])}</p><span class="service-symbol" aria-hidden="true">${s[4]}</span></article>`,
  ).join("");
  $("#process-steps").innerHTML = PROCESS.map(
    (s, i) =>
      `<article class="process-step reveal"><span>0${i + 1}</span><h3>${t(s[0], s[1])}</h3><p>${t(s[2], s[3])}</p></article>`,
  ).join("");
}
function options() {
  const a = $("#project-service"),
    b = $("#project-industry"),
    av = a.value,
    bv = b.value;
  a.innerHTML =
    `<option value="">${t("Let’s explore together", "لنستكشف معًا")}</option>` +
    SERVICES.map(
      (s) => `<option value="${s[0]}">${t(s[0], s[1])}</option>`,
    ).join("");
  b.innerHTML =
    `<option value="">${t("Select your industry", "اختر قطاعك")}</option>` +
    [
      ["Restaurants & cafés", "المطاعم والمقاهي"],
      ["Schools & academies", "المدارس والأكاديميات"],
      ["Retail & ecommerce", "التجزئة والتجارة الإلكترونية"],
      ["Real estate", "العقارات"],
      ["Professional services", "الخدمات المهنية"],
      ["Other", "قطاع آخر"],
    ]
      .map((s) => `<option value="${s[0]}">${t(s[0], s[1])}</option>`)
      .join("");
  a.value = av;
  b.value = bv;
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
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 },
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
    const pair = COPY[el.dataset.i18n];
    if (pair) el.innerHTML = t(...pair);
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
  $(".hero-stage").setAttribute(
    "aria-label",
    t(
      "Fictional restaurant and academy interface previews",
      "تصوّرات لواجهات مطعم وأكاديمية",
    ),
  );
  $("#project-form").querySelector("[name=message]").placeholder = t(
    "What would you like to build or improve?",
    "ما الذي ترغب في بنائه أو تحسينه؟",
  );
  document.title = t(
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
  refreshSamples();
  renderServices();
  options();
  observeReveals();
  if (activeDemo) renderDemo(activeDemo);
  if (!$("#form-status").hidden)
    $("#form-status").textContent = t(
      "Your inquiry is ready. Open your email app to review and send it.",
      "رسالتك جاهزة. افتح تطبيق البريد لمراجعتها وإرسالها.",
    );
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
    content = `<div class="retail-composition">${retailUI()}</div><div class="demo-controls"><h3>${t("A considered everyday essential.", "قطعة يومية، باختيار مدروس.")}</h3><p>${t("Linen shirt · Sand · JOD 45 · Fictional product", "قميص كتان · رملي · 45 د.أ · منتج افتراضي")}</p><div class="demo-form"><label>${t("Size", "المقاس")}<select id="product-size"><option>S</option><option>M</option><option>L</option></select></label><button class="sample-button" data-action="add-cart">${t("Add to demo bag", "أضف للحقيبة التجريبية")} ＋</button></div><p class="demo-output" role="status" id="cart-result">${t("Demo bag", "الحقيبة التجريبية")}: ${cart} · ${t("No checkout or payment", "لا توجد عملية دفع")}</p></div>`;
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
$("#project-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget,
    data = new FormData(form);
  const subject = `RatqAI project inquiry${data.get("company") ? " — " + data.get("company") : ""}`;
  const body = [
    `${t("Name", "الاسم")}: ${data.get("name")}`,
    `${t("Email", "البريد")}: ${data.get("email")}`,
    `${t("Company", "الشركة")}: ${data.get("company")}`,
    `${t("Service", "الخدمة")}: ${$("#project-service").selectedOptions[0].textContent}`,
    `${t("Industry", "القطاع")}: ${$("#project-industry").selectedOptions[0].textContent}`,
    "",
    data.get("message"),
  ].join("\n");
  const link = $("#mail-draft");
  link.href = `mailto:hello@ratqai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  link.hidden = false;
  $("#form-status").hidden = false;
  $("#form-status").textContent = t(
    "Your inquiry is ready. Open your email app to review and send it.",
    "رسالتك جاهزة. افتح تطبيق البريد لمراجعتها وإرسالها.",
  );
  link.focus();
});
matchMedia("(prefers-reduced-motion: reduce)").addEventListener(
  "change",
  observeReveals,
);
$("#year").textContent = new Date().getFullYear();
let initial = "en";
try {
  if (localStorage.getItem("ratqai-language") === "ar") initial = "ar";
} catch {}
setLanguage(initial);
