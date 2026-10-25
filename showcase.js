/* Isolated, front-end product demonstrations. All records are fictional. */
(() => {
  const q = (s) => document.querySelector(s),
    tr = (en, ar) => (document.documentElement.lang === "ar" ? ar : en);
  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const state = {
    kind: null,
    tab: "overview",
    bag: 0,
    items: [],
    showApplication: false,
    applicant: "Demo applicant",
    applied: false,
    moved: false,
    filter: "all",
    property: null,
    search: "",
    notice: "",
  };
  const image = (file, alt, cls = "") =>
    `<img class="${cls}" src="assets/${file}.webp" alt="${alt}" loading="lazy" width="1400" height="933">`;
  const button = (action, en, ar, extra = "") =>
    `<button type="button" class="sx-button" data-sx="${action}" ${extra}>${tr(en, ar)} <span aria-hidden="true">↗</span></button>`;
  const eyebrow = (en, ar) => `<p class="sx-eyebrow">${tr(en, ar)}</p>`;
  function field(name, en, ar, type = "text", required = true) {
    return `<label>${tr(en, ar)}<input name="${name}" type="${type}" ${required ? "required" : ""} ${type === "email" || type === "tel" ? 'dir="ltr"' : ""} maxlength="150"></label>`;
  }
  function summary(en, ar) {
    return `<div class="sx-feedback" role="status">${tr(en, ar)}</div>`;
  }
  function nav(brand, sub, items) {
    return `<div class="sx-nav"><div class="sx-brand" dir="ltr">${brand}<small>${sub}</small></div><div class="sx-tabs" role="group" aria-label="${tr("Demo sections", "أقسام التجربة")}">${items.map(([id, en, ar]) => `<button type="button" data-sx="tab" data-tab="${id}" aria-pressed="${state.tab === id}">${tr(en, ar)}</button>`).join("")}</div></div>`;
  }
  function header(en, ar, descEn, descAr) {
    return `<header class="sx-heading"><div>${eyebrow("A WORKING PRODUCT CONCEPT", "تصوّر منتج تفاعلي")}<h2>${tr(en, ar)}</h2><p>${tr(descEn, descAr)}</p></div><span class="sx-chip">${tr("Demo workspace", "مساحة تجريبية")}</span></header>`;
  }
  const properties = [
    [
      "Abdoun",
      "عبدون",
      "The Garden Residence",
      "فيلا الحديقة",
      "785,000",
      "5",
      "620",
      "residence",
    ],
    [
      "Khalda",
      "خلدا",
      "The Skyline Penthouse",
      "بنتهاوس الأفق",
      "345,000",
      "3",
      "290",
      "interior",
    ],
    [
      "Dabouq",
      "دابوق",
      "A Quiet Retreat",
      "ملاذ هادئ",
      "620,000",
      "4",
      "480",
      "garden",
    ],
  ];
  function dining() {
    let body = "";
    if (state.tab === "reserve")
      body = `<div class="sx-split"><div class="sx-reservation-photo">${image("dining", tr("Illustrative restaurant dining room", "صورة توضيحية لمطعم"))}<div><h2>${tr("A place at our table.", "مكانك على مائدتنا.")}</h2><p>${tr("Dinner · 18:00–23:00 / Amman", "العشاء · 18:00–23:00 / عمّان")}</p></div></div><div class="sx-form-wrap">${eyebrow("RESERVATIONS", "الحجوزات")}<h2>${tr("Make an evening of it.", "أمسية تستحقّ اللقاء.")}</h2><p>${tr("Choose your evening and seating preference. A real implementation can connect availability, confirmations and your front-of-house team.", "اختر الموعد والجلسة. يمكن ربط النظام الفعلي بتوفّر الطاولات والتأكيدات وفريق الاستقبال.")}</p><form class="sx-form" data-sx-form="reservation" id="reservation-demo">${field("name", "Full name", "الاسم الكامل")}${field("email", "Email", "البريد الإلكتروني", "email")}<div class="sx-pair"><label>${tr("Date", "التاريخ")}<input name="date" type="date" required min="${new Date().toISOString().slice(0, 10)}"></label><label>${tr("Guests", "الضيوف")}<select name="guests"><option>2</option><option>4</option><option>6</option></select></label></div><div class="sx-pair"><label>${tr("Time", "الوقت")}<select name="time"><option>18:00</option><option>19:30</option><option>21:00</option></select></label><label>${tr("Seating", "الجلسة")}<select name="seating"><option>${tr("Dining room", "الصالة الداخلية")}</option><option>${tr("Terrace", "التراس")}</option></select></label></div><button class="sx-button">${tr("Preview reservation request", "معاينة طلب الحجز")} ↗</button><p id="reservation-result" role="status">${esc(state.notice)}</p></form></div></div>`;
    else if (state.tab === "menu")
      body = `<div class="sx-menu-heading">${eyebrow("THE SEASONAL TABLE", "مائدة الموسم")}<h2>${tr("Rooted here. Made with care.", "من أرضنا. وبكل عناية.")}</h2><p>${tr("Levantine ingredients, contemporary cooking. Illustrative menu and prices.", "مكوّنات شرقية وطهي معاصر. قائمة وأسعار توضيحية.")}</p></div><div class="sx-menu-grid">${[
        [
          "01",
          "To begin",
          "البداية",
          [
            [
              "Roasted cauliflower",
              "قرنبيط مشوي",
              "Tahini · pomegranate · herbs",
              "طحينة · رمّان · أعشاب",
              "7",
            ],
            [
              "Heirloom tomato",
              "طماطم موسمية",
              "Labneh · basil · sourdough",
              "لبنة · ريحان · خبز مخمّر",
              "8",
            ],
          ],
        ],
        [
          "02",
          "From the kitchen",
          "من مطبخنا",
          [
            [
              "Saffron chicken",
              "دجاج بالزعفران",
              "Freekeh · lemon · almonds",
              "فريكة · ليمون · لوز",
              "14",
            ],
            [
              "Slow-cooked lamb",
              "لحم مطهو ببطء",
              "Aubergine · warm spices",
              "باذنجان · بهارات دافئة",
              "19",
            ],
          ],
        ],
        [
          "03",
          "A sweet finish",
          "ختام حلو",
          [
            [
              "Pistachio & rose",
              "فستق وورد",
              "Milk pudding · seasonal fruit",
              "مهلبية · فاكهة موسمية",
              "6",
            ],
            [
              "Dark chocolate",
              "شوكولاتة داكنة",
              "Sea salt · olive oil",
              "ملح بحري · زيت زيتون",
              "7",
            ],
          ],
        ],
      ]
        .map(
          ([n, en, ar, items]) =>
            `<section><span>${n}</span><h3>${tr(en, ar)}</h3>${items.map(([en, ar, d, da, p]) => `<article><div><h4>${tr(en, ar)}</h4><p>${tr(d, da)}</p></div><b>${p} JOD</b></article>`).join("")}</section>`,
        )
        .join("")}</div>${button("reserve", "Reserve a table", "احجز طاولة")}`;
    else
      body = `<div class="sx-dining-hero">${image("dining", tr("Illustrative contemporary dining", "صورة توضيحية لتجربة طعام"))}<div>${eyebrow("AMMAN / A CONTEMPORARY LEVANTINE TABLE", "عمّان / مائدة شرقية بروح معاصرة")}<h2>${tr("An evening.<br>A table.<br>A little connection.", "أمسية.<br>ومائدة.<br>وحكاية تجمعنا.")}</h2><p>${tr("Seasonal plates, unhurried conversations, and the warmth of a table made for sharing.", "أطباق موسمية، وأحاديث بلا عجلة، ودفء مائدة تجمعنا.")}</p>${button("reserve", "Find your table", "اختر طاولتك")}</div><span class="sx-photo-credit">${tr("Illustrative photography / Fictional restaurant", "صور توضيحية / مطعم خيالي")}</span></div><div class="sx-dining-bottom"><div>${eyebrow("OUR PHILOSOPHY", "فلسفتنا")}<h3>${tr("Good things happen<br>around a table.", "أجمل الحكايات<br>تبدأ حول مائدة.")}</h3></div><p>${tr("A restaurant experience should feel personal before a guest walks through the door. Explore the seasonal menu, choose a seating preference, and preview a reservation request.", "تبدأ تجربة الضيافة قبل وصول الضيف. استكشف القائمة الموسمية، واختر الجلسة، وجرّب طلب حجز.")}</p>${button("menu", "Discover the menu", "استكشف القائمة")}</div>`;
    return `<div class="sx sx-dining">${nav(
      "saffron house",
      "A CONTEMPORARY TABLE",
      [
        ["overview", "The restaurant", "المطعم"],
        ["menu", "Seasonal menu", "القائمة الموسمية"],
        ["reserve", "Reservations", "الحجوزات"],
      ],
    )}${body}</div>`;
  }
  function property() {
    const chosen = state.property !== null ? properties[state.property] : null;
    const cards = properties.filter(
      (p) => state.filter === "all" || p[0] === state.filter,
    );
    return `<div class="sx sx-property">${nav("DARNA", "PRIVATE RESIDENCES", [
      ["overview", "The collection", "العقارات"],
      ["inquiry", "Private viewing", "معاينة خاصة"],
    ])}${state.tab === "inquiry" ? `<div class="sx-split sx-property-inquiry">${image(chosen?.[7] || "interior", tr("Illustrative residential interior", "صورة داخلية توضيحية"))}<div class="sx-form-wrap">${eyebrow("A MORE PERSONAL SEARCH", "بحث أكثر خصوصية")}<h2>${tr("Let’s find your place.", "لنجد المكان الذي يناسبك.")}</h2><form class="sx-form" data-sx-form="viewing">${field("name", "Full name", "الاسم الكامل")}${field("email", "Email", "البريد الإلكتروني", "email")}${field("phone", "Phone", "رقم الهاتف", "tel")}<label>${tr("Interested residence", "العقار المطلوب")}<select name="property">${properties.map((p, i) => `<option ${i === state.property ? "selected" : ""}>${tr(p[2], p[3])}</option>`).join("")}</select></label><button class="sx-button">${tr("Preview viewing request", "معاينة طلب الزيارة")} ↗</button><p role="status">${esc(state.notice)}</p></form></div></div>` : chosen ? `<div class="sx-property-detail">${image(chosen[7], tr("Illustrative property photography", "صورة عقار توضيحية"))}<div>${eyebrow(tr(chosen[0], chosen[1]) + " / AMMAN", tr(chosen[0], chosen[1]) + " / عمّان")}<h2>${tr(chosen[2], chosen[3])}</h2><strong>JOD ${chosen[4]}</strong><div class="sx-property-specs"><span>${chosen[5]} ${tr("Bedrooms", "غرف نوم")}</span><span>${chosen[6]} m²</span><span>${tr("Private outdoor space", "مساحة خارجية خاصة")}</span></div><p>${tr("Generous proportions, carefully considered living spaces and a calm residential setting. An illustrative listing showing how photography, floor-area details and a private-viewing workflow can work together.", "مساحات واسعة وتفاصيل معيشة مدروسة في محيط سكني هادئ. عقار توضيحي يبيّن عرض الصور والمواصفات وتجربة طلب المعاينة.")}</p><ul><li>${tr("Open-plan living & dining", "مساحة معيشة وطعام مفتوحة")}</li><li>${tr("Dedicated parking", "موقف سيارات مخصّص")}</li><li>${tr("Terrace & garden access", "تراس ومدخل إلى الحديقة")}</li></ul>${button("viewing", "Arrange a private viewing", "رتّب معاينة خاصة")}${button("properties", "Back to the collection", "العودة إلى العقارات")}</div></div>` : `<div class="sx-property-hero">${image("residence", tr("Illustrative contemporary residence", "صورة توضيحية لمسكن معاصر"))}<div>${eyebrow("CURATED RESIDENCES / AMMAN", "مساكن مختارة / عمّان")}<h2>${tr("A considered place<br>to call home.", "مكانٌ مدروس<br>لتسمّيه بيتك.")}</h2></div></div><div class="sx-property-collection"><header><div>${eyebrow("THE PRIVATE COLLECTION", "المجموعة الخاصة")}<h3>${tr("Spaces with a sense of belonging.", "مساحات تشبه إحساس الانتماء.")}</h3></div><label>${tr("Neighbourhood", "المنطقة")}<select data-sx-location aria-label="${tr("Filter neighbourhood", "فلترة المنطقة")}"><option value="all">${tr("All neighbourhoods", "كل المناطق")}</option>${properties.map((p) => `<option value="${p[0]}" ${state.filter === p[0] ? "selected" : ""}>${tr(p[0], p[1])}</option>`).join("")}</select></label></header><div class="sx-property-grid">${cards.map((p) => `<article>${image(p[7], tr("Illustrative residential photography", "صورة عقار توضيحية"))}<div>${eyebrow(tr(p[0], p[1]) + " / AMMAN", tr(p[0], p[1]) + " / عمّان")}<h4>${tr(p[2], p[3])}</h4><strong>JOD ${p[4]}</strong><p>${p[5]} ${tr("beds", "غرف")} / ${p[6]} m²</p>${button("property", "View residence", "تفاصيل العقار", `data-id="${properties.indexOf(p)}"`)}</div></article>`).join("")}</div><p class="sx-disclaimer">${tr("Fictional listings and prices. Photos do not represent actual Jordan properties.", "عقارات وأسعار خيالية. الصور لا تمثّل عقارات فعلية في الأردن.")}</p></div>`}</div>`;
  }
  function retail() {
    return `<div class="sx sx-retail">${nav(
      "forma.",
      "OBJECTS FOR EVERYDAY LIVING",
      [
        ["overview", "The collection", "التشكيلة"],
        ["bag", `Bag (${state.bag})`, `الحقيبة (${state.bag})`],
      ],
    )}${state.tab === "bag" ? `<div class="sx-bag">${eyebrow("YOUR SELECTION", "اختياراتك")}<h2>${tr("Good choices. Made simply.", "اختيارات جميلة. بكل بساطة.")}</h2>${state.bag ? `<div class="sx-bag-line">${image("fashion", tr("Illustrative knitwear", "صورة توضيحية لملابس محبوكة"))}<div><h3>${tr("The Everyday Knit", "قطعة اليوم المحبوكة")}</h3><p>${tr("Sand / Cotton knit / Size", "رملي / قطن محبوك / المقاس")} ${esc(state.items.join(", "))}</p><p>${state.bag} × JOD 45</p></div><strong>JOD ${state.bag * 45}</strong></div><div class="sx-bag-total"><span>${tr("Subtotal", "المجموع")}</span><b>JOD ${state.bag * 45}</b></div>${button("remove", "Remove one item", "إزالة قطعة")}${summary("Demo bag only. Checkout, payment and delivery are not active.", "حقيبة تجريبية فقط. الدفع والتوصيل غير مفعّلين.")}` : `<p>${tr("Your bag is empty. Start with the everyday essentials.", "حقيبتك فارغة. ابدأ بالقطع اليومية.")}</p>`}${button("collection", "Continue exploring", "تابع الاستكشاف")}</div>` : `<div class="sx-retail-hero"><div>${eyebrow("THE EVERYDAY EDIT / 01", "تشكيلة كل يوم / 01")}<h2>${tr("Fewer things.<br>Better chosen.", "قطع أقلّ.<br>باختيار أجمل.")}</h2><p>${tr("Quiet colour. Honest texture. Essentials that feel right, season after season.", "ألوان هادئة. وملمس صادق. وقطع ترافقك موسمًا بعد موسم.")}</p><span>01 — 03 / ${tr("THE CONSIDERED WARDROBE", "خزانة باختيار مدروس")}</span></div>${image("fashion", tr("Illustrative neutral knitwear collection", "صورة توضيحية لتشكيلة ملابس محايدة"))}</div><div class="sx-product"><div class="sx-product-photo">${image("fashion", tr("Illustrative cotton knit product", "صورة توضيحية لقطعة قطن محبوكة"))}<span>${tr("TEXTURE / NATURAL COTTON", "الملمس / قطن طبيعي")}</span></div><div>${eyebrow("THE EVERYDAY KNIT", "قطعة اليوم المحبوكة")}<h3>${tr("Made for the everyday.", "صُمّمت لكل يوم.")}</h3><strong>JOD 45</strong><p>${tr("A relaxed cotton knit in a soft sand tone. An illustrative product detail experience with size selection, an editable bag and a transparent subtotal.", "قطعة قطن بقصّة مريحة ولون رملي هادئ. تجربة توضيحية لاختيار المقاس وحقيبة قابلة للتعديل ومجموع واضح.")}</p><label class="sx-size">${tr("Choose size", "اختر المقاس")}<select id="product-size"><option>S</option><option selected>M</option><option>L</option></select></label>${button("add-cart", "Add to demo bag", "أضف للحقيبة التجريبية")}<p id="cart-result" role="status">${esc(state.notice)}</p><details><summary>${tr("Materials & care", "الخامة والعناية")}</summary><p>${tr("Illustrative specifications: cotton knit, gentle wash, dry flat.", "مواصفات توضيحية: قطن محبوك، غسيل لطيف وتجفيف مسطّح.")}</p></details><details><summary>${tr("Delivery & returns", "التوصيل والإرجاع")}</summary><p>${tr("Policy preview only. A real store can connect delivery zones, return windows and order tracking.", "معاينة لسياسة المتجر. يمكن ربط مناطق التوصيل والإرجاع وتتبّع الطلبات في المتجر الفعلي.")}</p></details></div></div>`}</div>`;
  }
  const applications = [
    ["Rana K.", "English B2", "Review", "للمراجعة"],
    ["Adam M.", "Design foundations", "Accepted", "مقبول"],
    ["Leen A.", "English B1", "Accepted", "مقبول"],
    ["Omar S.", "Digital marketing", "Review", "للمراجعة"],
  ];
  function academy() {
    const records = state.applied
      ? [
          [
            state.applicant,
            state.program || "English B2",
            "Review",
            "للمراجعة",
          ],
          ...applications,
        ]
      : applications;
    return `<div class="sx sx-system sx-academy">${nav(
      "noura.",
      "ACADEMY OPERATIONS",
      [
        ["overview", "Overview", "نظرة عامة"],
        ["applications", "Admissions", "القبول"],
        ["schedule", "Class schedule", "جدول الصفوف"],
      ],
    )}<div class="sx-workspace">${header("A clearer day starts here.", "يوم أوضح يبدأ هنا.", "Admissions, class capacity and the next task, in one considered workspace.", "طلبات القبول وسعة الصفوف والمهام القادمة في مساحة عمل واحدة.")}<div class="sx-metrics">${[
      ["248", "Active students", "الطلاب المسجّلون"],
      [state.applied ? "19" : "18", "Awaiting review", "بانتظار المراجعة"],
      ["12", "Classes today", "صفوف اليوم"],
      ["6", "Available seats / B2", "مقاعد متاحة / B2"],
    ]
      .map(
        ([v, en, ar]) =>
          `<article><span>${tr(en, ar)}</span><strong>${v}</strong><small>${tr("Illustrative current-term data", "بيانات فصل دراسي افتراضية")}</small></article>`,
      )
      .join("")}</div>${
      state.tab === "schedule"
        ? `<section class="sx-panel"><div class="sx-panel-heading"><h3>${tr("Today’s learning schedule", "برنامج التعلّم اليوم")}</h3><span>${tr("4 sample sessions", "4 جلسات افتراضية")}</span></div>${[
            ["09:00", "English B1", "Lina H.", "Room 02", "18 / 20"],
            [
              "11:00",
              "Design foundations",
              "Kareem A.",
              "Studio 01",
              "16 / 18",
            ],
            ["14:00", "English B2", "Lina H.", "Room 03", "14 / 20"],
            ["17:00", "Digital marketing", "Sami R.", "Online", "22 / 25"],
          ]
            .map(
              ([time, program, teacher, room, capacity]) =>
                `<div class="sx-schedule-row"><b dir="ltr">${time}</b><div><strong>${program}</strong><small>${teacher} / ${room}</small></div><span>${capacity} ${tr("seats", "مقعد")}</span></div>`,
            )
            .join("")}</section>`
        : `<div class="sx-operation-grid"><section class="sx-panel"><div class="sx-panel-heading"><h3>${tr("Admissions inbox", "طلبات القبول")}</h3><label class="sx-search">${tr("Search applicants", "البحث عن متقدّم")}<input data-sx-search value="${esc(state.search)}" placeholder="${tr("Name or program…", "الاسم أو البرنامج…")}"></label></div><div class="sx-table-wrap"><table><thead><tr>${["Applicant|المتقدّم", "Program|البرنامج", "Status|الحالة"].map((v) => `<th>${tr(...v.split("|"))}</th>`).join("")}</tr></thead><tbody>${
            records
              .filter((r) =>
                r.join(" ").toLowerCase().includes(state.search.toLowerCase()),
              )
              .map(
                ([name, program, status, ar]) =>
                  `<tr><td><span class="sx-avatar">${esc(name.slice(0, 1))}</span>${esc(name)}</td><td>${program}</td><td><span class="sx-status ${status === "Accepted" ? "accepted" : ""}">${tr(status, ar)}</span></td></tr>`,
              )
              .join("") ||
            `<tr><td colspan="3">${tr("No matching applications.", "لا توجد طلبات مطابقة.")}</td></tr>`
          }</tbody></table></div></section><aside class="sx-panel sx-admission"><span class="sx-chip">${tr("ADMISSIONS WORKFLOW", "إجراءات القبول")}</span><h3>${tr("From interest<br>to enrollment.", "من الاهتمام<br>إلى التسجيل.")}</h3><p>${tr("Preview an application entering the review queue. Active enrollment stays unchanged until approval.", "جرّب إضافة طلب إلى قائمة المراجعة. لا يتغيّر عدد المسجّلين قبل الموافقة.")}</p>${state.showApplication ? `<form class="sx-form" data-sx-form="application">${field("applicant", "Applicant name", "اسم المتقدّم")}${field("email", "Email", "البريد الإلكتروني", "email")}<label>${tr("Program", "البرنامج")}<select name="program"><option>English B2</option><option>Design foundations</option><option>Digital marketing</option></select></label><button class="sx-button">${tr("Add to review queue", "أضف إلى قائمة المراجعة")} ↗</button></form>` : button("enroll", state.applied ? "Application added to review ✓" : "New application", state.applied ? "أُضيف الطلب للمراجعة ✓" : "طلب تسجيل جديد", state.applied ? "disabled" : "")}<p class="sx-disclaimer">${tr("Fictional student records. Nothing submitted externally.", "سجلات طلاب خيالية. لا إرسال خارجي.")}</p></aside></div>`
    }<div class="sx-system-footer"><span>NO / 01</span><span>${tr("ADMISSIONS → REVIEW → ENROLLMENT", "الطلب ← المراجعة ← التسجيل")}</span><span>${tr("A product concept by RatqAI", "تصوّر منتج من RatqAI")}</span></div></div></div>`;
  }
  function crm() {
    const columns = [
      [
        "New",
        "جديد",
        [
          ["Noor Clinic", "Booking platform", "3,200"],
          ...(state.moved
            ? []
            : [["Atlas Studio", "Website & client portal", "4,500"]]),
        ],
      ],
      [
        "In discussion",
        "قيد النقاش",
        [
          ["Bayt Consulting", "Operations workspace", "6,800"],
          ...(state.moved
            ? [["Atlas Studio", "Website & client portal", "4,500"]]
            : []),
        ],
      ],
      [
        "Proposal sent",
        "أُرسل العرض",
        [["Madar Partners", "Customer portal", "8,400"]],
      ],
      ["Won", "مكتمل", [["Line Architecture", "Portfolio website", "2,600"]]],
    ];
    return `<div class="sx sx-system sx-folio">${nav(
      "folio",
      "CLIENT OPERATIONS",
      [
        ["overview", "Pipeline", "الفرص"],
        ["activity", "Activity & next steps", "النشاط والخطوات القادمة"],
      ],
    )}<div class="sx-workspace">${header("Every conversation. A next step.", "لكل محادثة، خطوة قادمة.", "A sales workspace for teams that need clear ownership and consistent follow-up.", "مساحة مبيعات لمسؤوليات واضحة ومتابعة منتظمة.")}<div class="sx-metrics">${[
      ["5", "Opportunities", "الفرص"],
      ["25,500", "Pipeline / JOD", "الفرص / د.أ"],
      ["2", "Follow-ups due", "متابعات مستحقة"],
      ["2,600", "Won / JOD", "مكتمل / د.أ"],
    ]
      .map(
        ([v, en, ar]) =>
          `<article><span>${tr(en, ar)}</span><strong>${v}</strong><small>${tr("Sample workspace data", "بيانات مساحة افتراضية")}</small></article>`,
      )
      .join("")}</div>${
      state.tab === "activity"
        ? `<div class="sx-operation-grid"><section class="sx-panel"><h3>${tr("Follow-up queue", "قائمة المتابعة")}</h3>${[
            ["10:00", "Atlas Studio", "Discovery call / Lina"],
            ["14:30", "Bayt Consulting", "Scope review / Omar"],
            ["Tomorrow", "Madar Partners", "Proposal follow-up / Lina"],
          ]
            .map(
              ([time, name, task]) =>
                `<div class="sx-schedule-row"><b>${time}</b><div><strong>${name}</strong><small>${task}</small></div><span class="sx-status">${tr("Scheduled", "مجدول")}</span></div>`,
            )
            .join(
              "",
            )}</section><aside class="sx-panel"><h3>${tr("Prepared, not sent.", "جاهز، دون إرسال.")}</h3><p>${tr("A real implementation can connect email, reminders and customer records. This demo only changes the local sample pipeline.", "يمكن ربط البريد والتذكيرات وسجلات العملاء في النظام الفعلي. هذه التجربة تغيّر الفرص الافتراضية محليًا فقط.")}</p></aside></div>`
        : `<div class="sx-board">${columns.map(([en, ar, leads]) => `<section><header><h3>${tr(en, ar)}</h3><span>${leads.length}</span></header>${leads.map(([name, scope, value]) => `<article class="sx-deal"><span class="sx-deal-type">${tr("INBOUND / WEBSITE", "وارد / الموقع")}</span><h4>${name}</h4><p>${scope}</p><strong>JOD ${value}</strong><footer><span class="sx-avatar">${name === "Atlas Studio" ? "L" : "O"}</span><span>${name === "Atlas Studio" ? "Lina H." : "Omar S."}</span></footer>${name === "Atlas Studio" ? button("move-lead", state.moved ? "In discussion ✓" : "Move to discussion", state.moved ? "قيد النقاش ✓" : "انقل إلى المناقشة", state.moved ? "disabled" : "") : ""}</article>`).join("")}</section>`).join("")}</div>`
    }<div class="sx-system-footer"><span>F / 01</span><span>${tr("CAPTURE → QUALIFY → PROPOSE → CLOSE", "استقبال ← تأهيل ← عرض ← إغلاق")}</span><span>${tr("Fictional records / Demo", "سجلات خيالية / تجربة")}</span></div></div></div>`;
  }
  function render(kind) {
    state.kind = kind;
    q("#demo-content").innerHTML = (
      { dining, property, retail, academy, crm }[kind] || dining
    )();
    q("#demo-dialog").classList.add("product-showcase");
  }
  function open(kind) {
    if (state.kind !== kind) {
      state.kind = kind;
      state.tab = "overview";
      state.notice = "";
      state.property = null;
      state.search = "";
    }
    render(kind);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-sx]");
    if (!b) return;
    const a = b.dataset.sx;
    if (a === "tab") {
      state.tab = b.dataset.tab;
      state.notice = "";
      if (state.tab === "overview") state.property = null;
    }
    if (a === "reserve") state.tab = "reserve";
    if (a === "menu") state.tab = "menu";
    if (a === "viewing") state.tab = "inquiry";
    if (a === "properties") {
      state.property = null;
      state.tab = "overview";
    }
    if (a === "property") state.property = Number(b.dataset.id);
    if (a === "collection") state.tab = "overview";
    if (a === "add-cart") {
      state.size = q("#product-size").value;
      state.items.push(state.size);
      state.bag++;
      state.notice = tr(
        `Added to demo bag. ${state.bag} item(s) / JOD ${state.bag * 45}. No payment taken.`,
        `أُضيف للحقيبة التجريبية. ${state.bag} قطعة / ${state.bag * 45} د.أ. لا دفع فعلي.`,
      );
    }
    if (a === "remove") {
      state.items.pop();
      state.bag = state.items.length;
    }
    if (a === "enroll") state.showApplication = true;
    if (a === "move-lead") state.moved = true;
    render(state.kind);
    const replacement = q(`[data-sx="${a}"]`);
    replacement?.focus({ preventScroll: true });
  });
  document.addEventListener("change", (e) => {
    if (e.target.matches("[data-sx-location]")) {
      state.filter = e.target.value;
      render(state.kind);
      q("[data-sx-location]")?.focus();
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-sx-search]")) {
      const pos = e.target.selectionStart;
      state.search = e.target.value;
      render(state.kind);
      const input = q("[data-sx-search]");
      input.focus();
      input.setSelectionRange(pos, pos);
    }
  });
  document.addEventListener("submit", (e) => {
    const form = e.target.closest("[data-sx-form]");
    if (!form) return;
    e.preventDefault();
    const data = new FormData(form);
    if (form.dataset.sxForm === "application") {
      state.applied = true;
      state.showApplication = false;
      state.applicant = data.get("applicant");
      state.program = data.get("program");
      render(state.kind);
      return;
    }
    state.notice =
      form.dataset.sxForm === "reservation"
        ? tr(
            `Preview request: ${data.get("guests")} guests / ${data.get("date")} / ${data.get("time")} / ${data.get("seating")}. No booking was sent.`,
            `معاينة الطلب: ${data.get("guests")} ضيوف / ${data.get("date")} / ${data.get("time")} / ${data.get("seating")}. لم يُرسل حجز.`,
          )
        : tr(
            `Viewing request prepared for ${data.get("property")}. This is a demo; no inquiry was sent.`,
            `تمت معاينة طلب زيارة ${data.get("property")}. هذه تجربة، ولم يُرسل طلب.`,
          );
    const status = form.querySelector('[role="status"]');
    status.textContent = state.notice;
  });
  function paintPreviews() {
    const d = q("#dining-preview"),
      a = q("#academy-preview");
    if (d)
      d.innerHTML = `<div class="sx-cover sx-cover-dining">${image("dining", "")}<div><span>SAFFRON HOUSE / AMMAN</span><h4>${tr("An evening.<br>A table.<br>A little connection.", "أمسية.<br>ومائدة.<br>وحكاية تجمعنا.")}</h4><b>${tr("DISCOVER THE RESTAURANT →", "اكتشف تجربة المطعم ←")}</b></div></div>`;
    if (a)
      a.innerHTML = `<div class="sx-cover sx-cover-system"><div class="sx-cover-sidebar"><b>noura.</b><span>${tr("Overview", "نظرة عامة")}</span><span>${tr("Admissions", "القبول")}</span><span>${tr("Class schedule", "جدول الصفوف")}</span></div><div><span>ACADEMY OPERATIONS / 01</span><h4>${tr("A clearer day<br>starts here.", "يوم أوضح<br>يبدأ هنا.")}</h4><div class="sx-cover-metrics"><div><b>248</b>${tr("Active students", "طالب مسجّل")}</div><div><b>18</b>${tr("Applications to review", "طلبًا للمراجعة")}</div><div><b>12</b>${tr("Classes today", "صفًا اليوم")}</div></div><div class="sx-cover-table">${applications
        .slice(0, 3)
        .map(
          (r) =>
            `<p><b>${r[0]}</b><span>${r[1]}</span><em>${tr(r[2], r[3])}</em></p>`,
        )
        .join("")}</div></div></div>`;
    document.querySelectorAll(".concept-card").forEach((card, i) => {
      const thumb = card.querySelector(".concept-thumbnail");
      thumb.classList.add("sx-thumbnail");
      const id = card.querySelector(".concept-card-caption [data-demo]").dataset
        .demo;
      if (id === "dining")
        thumb.innerHTML =
          d?.innerHTML ||
          `<div class="sx-cover sx-cover-dining">${image("dining", "")}<div><span>SAFFRON HOUSE</span><h4>${tr("An evening.<br>A table.", "أمسية.<br>ومائدة.")}</h4></div></div>`;
      else if (id === "property" || id === "retail")
        thumb.innerHTML = `<div class="sx-cover sx-cover-dining ${id === "retail" ? "sx-cover-retail" : ""}">${image(id === "property" ? "residence" : "fashion", "")}<div><span>${id === "property" ? "DARNA / PRIVATE RESIDENCES" : "FORMA / EVERYDAY EDIT"}</span><h4>${id === "property" ? tr("A considered place<br>to call home.", "مكانٌ مدروس<br>لتسمّيه بيتك.") : tr("Fewer things.<br>Better chosen.", "قطع أقلّ.<br>باختيار أجمل.")}</h4></div></div>`;
      else
        thumb.innerHTML = `<div class="sx-mini-system"><span>${id === "academy" ? "noura. / ACADEMY OPERATIONS" : "folio / CLIENT OPERATIONS"}</span><h4>${id === "academy" ? tr("A clearer day starts here.", "يوم أوضح يبدأ هنا.") : tr("Every conversation.<br>A next step.", "لكل محادثة.<br>خطوة قادمة.")}</h4><div class="sx-mini-cards">${(id === "academy" ? ["248", "18", "12"] : ["5", "25,500", "2"]).map((n) => `<b>${n}<small>${tr("Sample activity", "نشاط افتراضي")}</small></b>`).join("")}</div><div class="sx-mini-lines"><i></i><i></i><i></i></div></div>`;
    });
  }
  window.RatqShowcase = { open, paintPreviews };
})();
