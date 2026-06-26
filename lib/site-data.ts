export const mainSite = "https://formeclinic.ru";

export const packageItems = [
  {
    title: "Импланты Mentor",
    text: "Сертифицированные импланты американского бренда Mentor: анатомические и круглые модели из базовой линейки.",
    image: "/images/package/1.png",
  },
  {
    title: "Работа хирурга",
    text: "Операцию проводят пластические хирурги ForMe, участвующие в программе, по протоколам клиники.",
    image: "/images/package/2.webp",
  },
  {
    title: "Анестезия",
    text: "Общий наркоз под контролем анестезиолога в собственном операционном блоке клиники.",
    image: "/images/package/3.webp",
  },
  {
    title: "Палата класса люкс",
    text: "Ночь после операции в комфортной палате под наблюдением медицинского персонала 24/7.",
    image: "/images/package/4.webp",
  },
];

export const packageNotes = [
  "Акция действует при выборе имплантов Mentor из базовой линейки.",
  "Операцию проводят три хирурга — участницы программы: Темирчева Валерия, Терентьева Ольга, Кузнецова Наталия.",
  "Если вы хотите другой бренд имплантов или конкретного хирурга вне списка, стоимость рассчитают индивидуально.",
];

export const doctors = [
  {
    name: "Темирчева Валерия Васильевна",
    role: "Пластический хирург",
    experience: "Стаж работы: 4 года",
    image: "/forme/doctor-temircheva.webp",
    cta: "Записаться к Валерии",
  },
  {
    name: "Терентьева Ольга Андреевна",
    role: "Пластический хирург",
    experience: "Стаж работы: 4 года",
    image: "/forme/doctor-terenteva.webp",
    cta: "Записаться к Ольге",
  },
  {
    name: "Кузнецова (Головина) Наталия Вадимовна",
    role: "Пластический хирург",
    experience: "Стаж работы: 4 года",
    image: "/forme/doctor-kuznetsova.webp",
    cta: "Записаться к Наталии",
  },
];

export const results = [
  {
    id: "tem-1",
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди круглыми имплантами",
    before: "/images/results/tem-1-before.png",
    after: "/images/results/tem-1-after.png",
  },
  {
    id: "tem-2",
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди круглыми имплантами",
    before: "/images/results/tem-2-before.png",
    after: "/images/results/tem-2-after.png",
  },
  {
    id: "tem-3",
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди анатомическими имплантами",
    before: "/images/results/tem-3-before.png",
    after: "/images/results/tem-3-after.png",
  },
  {
    id: "tem-4",
    surgeon: "Темирчевой В.В.",
    label:
      "Увеличение груди. Импланты Mentor, круглые, гладкие 325 мл средняя + проекция. Рост 167 см. Обхват грудной клетки 69 см. Ширина железы 11,5 см. Доступ по нижнему краю ареолы.",
    before: "/images/results/tem-4-before.png",
    after: "/images/results/tem-4-after.png",
  },
  {
    id: "tem-5",
    surgeon: "Темирчевой В.В.",
    label: "Увеличение груди анатомическими имплантами, периареолярная подтяжка",
    before: "/images/results/tem-5-before.png",
    after: "/images/results/tem-5-after.png",
  },
  {
    id: "ter-1",
    surgeon: "Терентьевой О.А.",
    label:
      "Увеличение груди. Анатомические импланты, 255 мл средняя + проекция. Рост 162 см. Обхват под грудью 71 см. Ширина железы 11,5 см. Доступ по верхнему краю ареолы",
    before: "/images/results/ter-1-before.webp",
    after: "/images/results/ter-1-after.webp",
  },
  {
    id: "ter-2",
    surgeon: "Терентьевой О.А.",
    label: "Увеличение груди. Импланты Mentor, 250 мл, круглые. Субмаммарный доступ.",
    before: "/images/results/ter-2-before.webp",
    after: "/images/results/ter-2-after.webp",
  },
  {
    id: "ter-3",
    surgeon: "Терентьевой О.А.",
    label: "Увеличение груди. Импланты Mentor, 300 мл, анатомические. Субмаммарный доступ.",
    before: "/images/results/ter-3-before.webp",
    after: "/images/results/ter-3-after.webp",
  },
  {
    id: "ter-4",
    surgeon: "Терентьевой О.А.",
    label: "Увеличение груди. Импланты Mentor, 275 мл, круглые. Доступ по нижнему краю ареолы.",
    before: "/images/results/ter-4-before.webp",
    after: "/images/results/ter-4-after.webp",
  },
] as const;

export const resultFilters = [
  { id: "all", label: "Все работы" },
  { id: "Темирчевой В.В.", label: "Темирчева" },
  { id: "Терентьевой О.А.", label: "Терентьева" },
] as const;

export function formatResultCaption(surgeon: string, label: string) {
  const prefix = `Работа пластического хирурга ${surgeon}`;

  if (label.startsWith("Увеличение груди.")) {
    const details = label.replace(/^Увеличение груди\.\s*/, "").trim();
    return `${prefix}. ${details}`;
  }

  if (/анатомическими.*периареолярная/i.test(label)) {
    return `${prefix}. Импланты Mentor, анатомические. Периареолярная подтяжка.`;
  }

  if (/анатомическ/i.test(label)) {
    return `${prefix}. Импланты Mentor, анатомические.`;
  }

  if (/круглыми/i.test(label)) {
    return `${prefix}. Импланты Mentor, круглые.`;
  }

  return `${prefix}. Импланты Mentor.`;
}

export const whySectionMeta = {
  eyebrow: "Почему ForMe",
  title: "ForMe — не просто клиника. Это место, где вам не страшно.",
  text: "Безопасность, комфорт и сопровождение на каждом этапе — от консультации до результата.",
};

export const whySlides = [
  {
    id: "operating",
    image: "/images/why/operating.webp",
    title: "Собственный операционный блок",
    content: [
      "3 операционные с оборудованием",
      "экспертного класса.",
      "Всё — в одном здании, без транспортировки.",
    ],
    href: `${mainSite}/clinic/osnashchenie-kliniki`,
    cta: "Подробнее",
  },
  {
    id: "reanimation",
    image: "/images/why/reanimation.webp",
    title: "Собственное отделение реанимации",
    content: [
      "Вы приходите в себя под наблюдением",
      "анестезиолога и реаниматолога —",
      "прямо в клинике.",
    ],
    href: `${mainSite}/clinic`,
    cta: "Подробнее",
  },
  {
    id: "wards",
    image: "/images/why/wards.webp",
    title: "13 палат класса люкс",
    content: [
      "С видом на Неву, каминами",
      "и спокойной атмосферой.",
      "Больше похоже на отель, чем на больницу.",
    ],
    href: `${mainSite}/clinic`,
    cta: "Подробнее",
  },
  {
    id: "monitoring",
    image: "/images/why/monitoring.webp",
    title: "Наблюдение 24/7",
    content: [
      "Медицинский персонал рядом",
      "в течение всей ночи после операции.",
    ],
    href: "#consultation",
    cta: "Записаться",
  },
  {
    id: "experience",
    image: "/images/why/experience.webp",
    title: "Опыт врачей",
    content: [
      "Хирурги клиники ForMe",
      "проводят операции с 2008 года.",
    ],
    href: `${mainSite}/doctors`,
    cta: "Подробнее",
  },
  {
    id: "support",
    image: "/images/why/support.webp",
    title: "Сопровождение до результата",
    content: [
      "Контрольные осмотры, ответы на вопросы",
      "и поддержка — всё включено.",
    ],
    href: "#consultation",
    cta: "Записаться",
  },
] as const;

export const steps = [
  ["Консультация", "Обсуждаем желаемый результат, форму и объём имплантов Mentor."],
  ["Обследование", "Координатор объясняет, какие анализы нужны и где их удобно сдать."],
  ["День операции", "Встреча в клинике, беседа с анестезиологом и операция 1–1,5 часа."],
  ["Ночь в палате", "Комфортная палата класса люкс и наблюдение персонала 24/7."],
  ["Выписка", "Рекомендации, контрольные осмотры и сопровождение до результата."],
] as const;

export const faqs = [
  {
    question: "В цену 320 000 ₽ действительно входит всё?",
    answer:
      "Да. Импланты Mentor, работа хирурга, анестезия и ночь в палате — это полная стоимость без доплат. Единственное, что оплачивается отдельно — предоперационные анализы и консультации узких специалистов, если они потребуются по медицинским показаниям.",
  },
  {
    question: "Какие именно импланты входят в стоимость?",
    answer:
      "Импланты американского бренда Mentor — лидера мирового рынка с 40-летней историей. Доступны анатомические и круглые модели. Конкретный вариант подбирается индивидуально с хирургом на консультации с учётом вашей анатомии и пожеланий.",
  },
  {
    question: "Могу ли я выбрать другого хирурга?",
    answer:
      "Пакет за 320 000 ₽ действует при операции с Темирчевой Валерией, Терентьевой Ольгой или Кузнецовой Наталией. Если вы хотите другого хирурга клиники — мы рассчитаем стоимость индивидуально.",
  },
  {
    question: "Есть ли рассрочка?",
    answer:
      "Да, в клинике действует беспроцентная рассрочка. Подробные условия уточняйте у администратора на консультации.",
  },
  {
    question: "Как долго длится реабилитация?",
    answer:
      "Первые 2–3 недели — ограничение физических нагрузок и ношение компрессионного белья. Вернуться к обычной жизни большинство пациенток могут через 10–14 дней. Окончательная форма груди формируется в течение 6–12 месяцев.",
  },
  {
    question: "Когда виден результат?",
    answer:
      "Предварительный результат заметен сразу. Отёк проходит в течение 3–4 недель. Финальная форма — через 6–12 месяцев.",
  },
  {
    question: "До какого числа действует акция?",
    answer:
      "Акция действует до 30 сентября 2026 года. Запись на консультацию необходимо оформить до этой даты.",
  },
  {
    question: "Как записаться?",
    answer:
      "Оставьте заявку на этой странице или позвоните по номеру +7 (812) 209-0-209. Мы свяжемся с вами в течение 15 минут и предложим удобное время консультации.",
    consultationLink: true,
  },
] as const;

export const topLinks = [
  { label: "Акции", href: `${mainSite}/discount` },
  { label: "Цены", href: `${mainSite}/prices` },
];

export const mainNav = [
  { label: "Клиника", href: `${mainSite}/clinic` },
  { label: "Пластическая хирургия", href: `${mainSite}/plasticheskaia-khirurgiya` },
  { label: "Косметология", href: `${mainSite}/cosmetology` },
  { label: "Флебология", href: `${mainSite}/flebologiya` },
  { label: "Превентивная медицина", href: `${mainSite}/preventivnaya-meditsina` },
  { label: "Врачи", href: `${mainSite}/doctors` },
  { label: "Контакты", href: `${mainSite}/contact` },
];

export const footerColumns = [
  {
    title: "Клиника",
    links: [
      { label: "О клинике", href: `${mainSite}/clinic` },
      { label: "Официальная информация и документы", href: `${mainSite}/clinic/litsenzii` },
      { label: "Отзывы", href: `${mainSite}/clinic/reviews` },
      { label: "Врачи", href: `${mainSite}/doctors` },
      { label: "Акции", href: `${mainSite}/discount` },
      { label: "Контакты", href: `${mainSite}/contact` },
      { label: "Онлайн оплата", href: `${mainSite}/clinic/onlajn-oplata` },
    ],
  },
  {
    title: "Направления",
    links: [
      { label: "КДЦ", href: `${mainSite}/kdts` },
      { label: "Косметология", href: `${mainSite}/cosmetology` },
      { label: "Флебология", href: `${mainSite}/flebologiya` },
      { label: "Пластическая хирургия", href: `${mainSite}/plasticheskaia-khirurgiya` },
    ],
  },
  {
    title: "Результаты",
    links: [
      { label: "Результаты пластических операций", href: `${mainSite}/do-i-posle-plastiki` },
      {
        label: "Результаты косметологических процедур",
        href: `${mainSite}/clinic/results/rezultaty-kosmetologicheskikh-protsedur`,
      },
      { label: "Результаты флебологических операций", href: `${mainSite}/clinic/results/result-flebology` },
    ],
  },
];

export const socialLinks = [
  { label: "VK", href: "https://vk.com/public208613839" },
  { label: "TG", href: "https://t.me/formeclinic" },
  { label: "YT", href: "https://www.youtube.com/channel/UCwWQqyBi2Rz-fveV56YZYxA" },
  { label: "WA", href: "https://wa.me/79522307041" },
];

export const trustItems = [
  "Бесплатная консультация",
  "Ответ в течение 15 минут",
  "Сопровождение после выписки",
];

export const leaveReviewHref =
  "https://yandex.ru/maps/org/136872920497/?add-review=true";

export const reviewsOverall = {
  rating: 4.9,
  count: 2766,
};

export const reviewPlatforms = [
  {
    id: "all" as const,
    label: "Все отзывы",
    rating: "4.9",
    count: 2766,
    logo: "https://res.smartwidgets.ru/res/review_all.svg",
    reviewUrl: leaveReviewHref,
  },
  {
    id: "yandex" as const,
    label: "Яндекс Карты",
    rating: "5.0",
    count: 1328,
    logo: "https://res.smartwidgets.ru/res/review_yandex_map.svg",
    reviewUrl: "https://yandex.ru/maps/org/136872920497/?add-review=true",
  },
  {
    id: "prodoctorov" as const,
    label: "ПроДокторов",
    rating: "5.0",
    count: 750,
    logo: "https://res.smartwidgets.ru/res/review_prodoctorov.svg",
    reviewUrl: "https://prodoctorov.ru/spb/lpu/80321-for-me/",
  },
  {
    id: "google" as const,
    label: "Google Maps",
    rating: "4.7",
    count: 141,
    logo: "https://res.smartwidgets.ru/res/review_google_map.svg",
    reviewUrl:
      "https://www.google.ru/maps/place/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0+%D1%8D%D1%81%D1%82%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%8B+ForMe",
  },
  {
    id: "zoon" as const,
    label: "Zoon",
    rating: "4.7",
    count: 81,
    logo: "https://res.smartwidgets.ru/res/review_zoon.svg",
    reviewUrl:
      "https://zoon.ru/spb/medical/klinika_esteticheskoj_meditsiny_forme_na_srednem_prospekte_vo/addreview/",
  },
  {
    id: "napopravku" as const,
    label: "НаПоправку",
    rating: "4.8",
    count: 466,
    logo: "https://res.smartwidgets.ru/res/review_napopravku.svg",
    reviewUrl: "https://spb.napopravku.ru/clinics/forme-klinika/",
  },
];

export const platformReviews = [
  {
    id: "pr-1",
    platform: "prodoctorov" as const,
    user: "+7 952 66XXXXX",
    rating: 5,
    date: "23 июня 2026",
    title: "История пациента",
    text: "Обращалась к Елене Викторовне ранее по поводу удаления родинок, плазмотерапии и контурной пластики — всё максимально комфортно и практически безболезненно. Замечательный специалист и прекрасный человек, искренне заинтересована в результате, видит проблему и рекомендует необходимую процедуру, не навязывая лишнего.",
    sourceLabel: "Отзыв ПроДокторов",
    sourceHref: "https://prodoctorov.ru/spb/lpu/80321-for-me/",
  },
  {
    id: "pr-2",
    platform: "prodoctorov" as const,
    user: "+7 914 69XXXXX",
    rating: 5,
    date: "23 июня 2026",
    title: "История пациента",
    text: "Хочу поделиться подробным отзывом о пластическом хирурге. На первичной консультации подкупило чуткое, бережное отношение и честность: доктор не обещал «волшебства», а спокойно объяснил, какой результат реален. Результатом я невероятно довольна, а послеоперационное сопровождение лишь укрепило уверенность в правильном выборе.",
    sourceLabel: "Отзыв ПроДокторов",
    sourceHref: "https://prodoctorov.ru/spb/lpu/80321-for-me/",
  },
  {
    id: "pr-3",
    platform: "yandex" as const,
    user: "Елена С.",
    avatar: "https://avatars.mds.yandex.net/get-yapic/38663/0s-9/islands-200",
    rating: 5,
    date: "5 июня 2026",
    text: "Всё на высшем уровне: обходительный персонал, сильные специалисты, отношение к клиентам оправдало мои ожидания. Операция прошла успешно.",
    sourceLabel: "Отзыв Яндекс Карты",
    sourceHref: "https://yandex.ru/maps/org/136872920497/reviews/",
  },
  {
    id: "pr-4",
    platform: "yandex" as const,
    user: "Татьяна",
    avatar: "https://avatars.mds.yandex.net/get-yapic/27232/YI5WtvBnew6NG9EKEEOBYFxr5Y-1/islands-200",
    rating: 5,
    date: "20 июня 2026",
    text: "Делала в клинике ForMe подтягивающую маммопластику и корректирующую ринопластику. У хирурга золотые руки, всё сделано на высшем уровне. В клинике прекрасный уход, внимание, интерьер и комфортные палаты. Клинику рекомендую на 100%.",
    sourceLabel: "Отзыв Яндекс Карты",
    sourceHref: "https://yandex.ru/maps/org/136872920497/reviews/",
  },
  {
    id: "pr-5",
    platform: "yandex" as const,
    user: "Лиза И.",
    avatar: "https://avatars.mds.yandex.net/get-yapic/26311/0u-1/islands-200",
    rating: 5,
    date: "20 июня 2026",
    text: "Делала ринопластику в данной клинике. Хороший наркоз, очень приветливый и дружелюбный персонал. В клинике спокойная атмосфера, от которой самой становится спокойно. Очень довольна, рекомендую эту клинику.",
    sourceLabel: "Отзыв Яндекс Карты",
    sourceHref: "https://yandex.ru/maps/org/136872920497/reviews/",
  },
  {
    id: "pr-6",
    platform: "google" as const,
    user: "Вячеслав",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWlgm42MwjTDVU58QH1IxYmArlZ90CajNMqvrkj9T10HH8U0wg-=s120-c-rp-mo-br100",
    rating: 5,
    date: "21 июня 2026",
    text: "После операции у этого врача я убедился, что результат действительно того стоит. Врач внимательно выслушал пожелания, честно рассказал о реабилитации и сопровождал после выписки. Клиника ForMe поражает внимательным отношением к пациентам.",
    sourceLabel: "Отзыв Google Maps",
    sourceHref: "https://www.google.ru/maps/place/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0+%D1%8D%D1%81%D1%82%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%8B+ForMe",
  },
  {
    id: "pr-7",
    platform: "napopravku" as const,
    user: "Анна",
    rating: 5,
    date: "10 июня 2026",
    text: "Отличная клиника, заботливый и вежливый персонал. Операция прошла быстро, результатом очень довольна. На всех этапах подготовки всё подробно объясняли и отвечали на вопросы.",
    sourceLabel: "Отзыв НаПоправку",
    sourceHref: "https://spb.napopravku.ru/clinics/forme-klinika/",
  },
  {
    id: "pr-8",
    platform: "zoon" as const,
    user: "Дарья",
    rating: 5,
    date: "10 июня 2026",
    text: "Чудесная клиника. Персонал максимально заботливый, добрый и приветливый. Врачи всегда готовы ответить на любой вопрос. Стационар прекрасный, врачи работают оперативно. Я довольна и рекомендую.",
    sourceLabel: "Отзыв Zoon",
    sourceHref:
      "https://zoon.ru/spb/medical/klinika_esteticheskoj_meditsiny_forme_na_srednem_prospekte_vo/",
  },
];

export const surgeonReviews = [
  {
    patient: "Татьяна",
    date: "20 июня 2025",
    doctorName: "Темирчева Валерия Васильевна",
    doctorShort: "Темирчева В.В.",
    doctorHref: `${mainSite}/doctors/temircheva-valeriya-vasilevna`,
    department: "Пластическая хирургия",
    departmentHref: `${mainSite}/plasticheskaia-khirurgiya`,
    image: "/forme/doctor-temircheva.webp",
    text: "Делала в клинике ForMe маммопластику у Валерии Васильевны — очень довольна! У хирурга золотые руки, всё сделала на высшем уровне. В клинике прекрасный уход, внимание, интерьер, удобная кровать с регулировкой. Клинику рекомендую на 100%.",
  },
  {
    patient: "Анна",
    date: "10 июня 2025",
    doctorName: "Терентьева Ольга Андреевна",
    doctorShort: "Терентьева О.А.",
    doctorHref: `${mainSite}/doctors/terenteva-olga-andreevna`,
    department: "Пластическая хирургия",
    departmentHref: `${mainSite}/plasticheskaia-khirurgiya`,
    image: "/forme/doctor-terenteva.webp",
    text: "Отличная клиника, заботливый и вежливый персонал. Операция прошла быстро, результатом очень довольна. На всех этапах подготовки всё подробно объясняли и отвечали на вопросы. Палата комфортная, еда очень вкусная. Если буду делать ещё пластические операции — точно обращусь сюда.",
  },
  {
    patient: "Надежда",
    date: "5 декабря 2024",
    doctorName: "Кузнецова (Головина) Наталия Вадимовна",
    doctorShort: "Кузнецова Н.В.",
    doctorHref: `${mainSite}/doctors/kuznetsova-golovina-nataliya-vadimovna`,
    department: "Пластическая хирургия",
    departmentHref: `${mainSite}/plasticheskaia-khirurgiya`,
    image: "/forme/doctor-kuznetsova.webp",
    text: "Решилась на маммопластику после долгих раздумий. Наталия Вадимовна внимательно выслушала пожелания, честно рассказала о возможном результате и сопровождала на всех этапах. Всё прошло спокойно, восстановление комфортное. Форма груди выглядит естественно — именно то, чего я хотела.",
  },
  {
    patient: "Инга",
    date: "26 июня 2025",
    doctorName: "Темирчева Валерия Васильевна",
    doctorShort: "Темирчева В.В.",
    doctorHref: `${mainSite}/doctors/temircheva-valeriya-vasilevna`,
    department: "Пластическая хирургия",
    departmentHref: `${mainSite}/plasticheskaia-khirurgiya`,
    image: "/forme/doctor-temircheva.webp",
    text: "На консультации Валерия Васильевна спокойно объяснила все этапы, помогла выбрать импланты и форму. После операции чувствовала себя под надёжным присмотром — медсёстры всегда рядом. Результат гармоничный, без эффекта «переделки». Спасибо всей команде ForMe!",
  },
  {
    patient: "Юлия",
    date: "24 сентября 2025",
    doctorName: "Терентьева Ольга Андреевна",
    doctorShort: "Терентьева О.А.",
    doctorHref: `${mainSite}/doctors/terenteva-olga-andreevna`,
    department: "Пластическая хирургия",
    departmentHref: `${mainSite}/plasticheskaia-khirurgiya`,
    image: "/forme/doctor-terenteva.webp",
    text: "Делала маммопластику у Ольги Андреевны — очень довольна! Доктор внимательная, с тонким чувством меры: всё объяснила, подобрала импланты, операция прошла аккуратно. Атмосфера в клинике спокойная, всё чисто и уютно. Никто не заметил вмешательства — просто говорят, что я «отдохнула».",
  },
  {
    patient: "Оксана",
    date: "3 октября 2025",
    doctorName: "Кузнецова (Головина) Наталия Вадимовна",
    doctorShort: "Кузнецова Н.В.",
    doctorHref: `${mainSite}/doctors/kuznetsova-golovina-nataliya-vadimovna`,
    department: "Пластическая хирургия",
    departmentHref: `${mainSite}/plasticheskaia-khirurgiya`,
    image: "/forme/doctor-kuznetsova.webp",
    text: "Обратилась с желанием скорректировать форму груди после родов. Наталия Вадимовна внимательно выслушала запрос, предложила несколько вариантов и честно рассказала о плюсах и рисках. Процедура прошла комфортно, результат естественный, но заметный. Доктор всегда была на связи после операции.",
  },
];

export const heroCases = [
  {
    before: "/images/hero/hero-after.png",
    after: "/images/hero/hero-before.png",
    alt: "Результат маммопластики — кейс 1",
  },
  {
    before: "/images/hero/hero-after-2.png",
    after: "/images/hero/hero-before-2.png",
    alt: "Результат маммопластики — кейс 2",
  },
];
