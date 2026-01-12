emailjs.init('mJRT_RtF5UrRYzITH');

const API_ENDPOINT = ''; 
const AUTO_PLAY_MS = 4000; 

const availableLangs = ['hy','en','ru'];
const defaultLang = 'hy';
let currentLang = localStorage.getItem('autobuild_lang') || defaultLang;

const i18n = {
  hy: {
    'brand.name':'Շինարարություն',
    'brand.tagline':'Շինարարություն և ճարտարապետություն',
    'nav.home':'Գլխավոր էջ','nav.services':'Ծառայություններ','nav.projects':'Նախագծեր','nav.about':'Մեր մասին','nav.contact':'Կապ','nav.reviews':'Կարծիքներ',
    'menu.design':'Դիզայն և BIM Բնակելի','menu.residential':'Բնակելի տներ','menu.commercial':'Առևտրային','menu.team':'Թիմ','menu.construction':'Շինարարություն','menu.beforeafter':'Մինչև/Հետո','menu.certs':'Վկայականներ','menu.contact':'Կապ վաճառքի բաժնի հետ','menu.maintenance':'Ծառայություն','menu.infra':'Ենթակառուցվածք','menu.values':'Արժեքներ','menu.reviews':'Հաճախորդների կարծիքներ',
    'home.kicker':'Շինարարական լուծումներ','home.title':'Կառուցենք Ձեր ապագան — ժամանակին և որակով','home.lead':'Մեկ թիմ՝ ամբողջական ծառայություններով՝ նախագծումից մինչև հանձնում․ նոր ժամանակների որակ, անվտանգություն և երաշխիք։',
    'carousel.prev':'Նախորդ','carousel.next':'Հաջորդ',
    'calc.title':'Անմիջական հաշվիչ (նախնակին գին)','calc.area':'մ²','service.build':'Ընդհանուր շինարարություն','service.reno':'Վերանորոգում','service.full':'Նախագիծ + իրականացում','calc.button':'Հաշվել','calc.details':'Մանրամասն','calc.result':'Ընդհանուր արժեք՝',
    'back':'← Հետ վերադառնալ',
    'services.title':'Ծառայություններ — Մենք կարող ենք','services.lead':'Մենք ծառայություններ ենք տրամադրում ամբողջական սպեկտրում։',
    'service.design.title':'Դիզայն ու BIM','service.design.desc':'2D/3D դեզայն, BIM և էներգետիկ օպտիմիզացում։',
    'service.construction.title':'Շինարարություն','service.construction.desc':'Նետ մինչև ավարտ — ամբողջական շինարարություն և որակի վերահսկում։',
    'service.maintenance.title':'Ծառայություն','service.maintenance.desc':'Վերահսկում և տեխնիկական աջակցություն։',
    'projects.title':'Նախագծեր — Վիճակագրություն','projects.lead':'Վերջին նախագծերի ընտրանու ցուցադրում։',
    'about.title':'Մեր մասին','about.lead':'Build միաձուլում է ճարտարագիտական խստությունը և շինարարական գերազանցությունը։',
    'about.mission.title':'Մեր առաքելությունը','about.mission.desc':'Հետևողական, արդյունավետ և անվտանգ շենքեր։',
    'about.team.title':'Դասակարգված թիմ','about.team.desc':'Ճանճված ինժեներներ և պրոֆեսիոնալներ։',
    'contact.title':'Կապ','contact.lead':'Լրացրեք ձևը և մենք կպատասխանենք առաջարկով։',
    'contact.office.title':'Գործասենյակ','contact.office.info':'Հասցե · info.adar.llc@gmail.com · +374 96 837878',
    'contact.hours.label':'Աշխատանքային ժամեր','contact.hours.value':'Կիր–Ուրբ: 9:00–18:00',
    'contact.form.name':'Անուն','contact.form.name.ph':'Անուն','contact.form.email':'Էլ. հասցե','contact.form.email.ph':'example@mail.com','contact.form.phone':'Հեռախոս','contact.form.phone.ph':'+374 ...','contact.form.msg':'Նամակ','contact.form.msg.ph':'Թողեք մանրամասները...',
    'contact.form.send':'Ուղարկել','contact.form.reset':'Հետարկել',
    'reviews.title':'Հաճախորդների կարծիքներ','reviews.lead':'Հատկացրեք վարկանիշ և մեկնաբանություն։',
    'reviews.avg':'Միջին։','reviews.count':'կարծիք','reviews.form.title':'Թողնել կարծիք','reviews.form.lead':'Գնահատեք 1–5 աստղ և գրեք մեկնաբանություն։',
    'reviews.form.name.ph':'Ձեր անունը','reviews.form.comment.ph':'Ձեր մեկնաբանությունը','reviews.form.send':'Արտահայտել','reviews.form.clear':'Մաքրել',
    'footer.copyright':'© Շինարարություն – Բոլոր իրավունքները պաշտպանված են','footer.contacts':'Էլ Հասցե · info.adar.llc@gmail.com · Հեռախոսահամար · +374 96 837878',
    'noReviewsYet':'Մինչ այժմ կարծիքներ չկան — եղեք առաջինը։',
    'demoFormNotice':'Դեմո ռեժիմ — ձևը չի ուղարկվել (API_ENDPOINT չի նշված).',
    'sendError':'Ուղարկման սխալ, փորձեք ավելի ուշ կամ զանգահարեք: +374 00 000000',
    "calc.save": "Անցնել",
    "calc.details": "Մանրամասներ"
  },
  en: {
    'brand.name':'Construction','brand.tagline':'Construction & Architecture',
    'nav.home':'Home','nav.services':'Services','nav.projects':'Projects','nav.about':'About','nav.contact':'Contact','nav.reviews':'Reviews',
    'menu.design':'Design & BIM','menu.residential':'Residential','menu.commercial':'Commercial','menu.team':'Team','menu.construction':'Construction','menu.beforeafter':'Before/After','menu.certs':'Certificates','menu.contact':'Sales contact','menu.maintenance':'Maintenance','menu.infra':'Infrastructure','menu.values':'Values','menu.reviews':'Customer reviews',
    'home.kicker':'Construction solutions','home.title':'We build your future — on time & with quality','home.lead':'One team — full services from design to handover. Quality, safety, warranty.',
    'carousel.prev':'Prev','carousel.next':'Next',
    'calc.title':'Quick calculator (original price)','calc.area':'m²','service.build':'General construction','service.reno':'Renovation','service.full':'Design + execution','calc.button':'Calculate','calc.details':'Details','calc.result':'Total cost:',
    'back':'← Back',
    'services.title':'Services — Our Capabilities','services.lead':'We provide a full spectrum of services.',
    'service.design.title':'Design & BIM','service.design.desc':'2D/3D design, BIM and energy optimization.',
    'service.construction.title':'Construction','service.construction.desc':'Foundations to finishes — end-to-end construction with QC.',
    'service.maintenance.title':'Maintenance','service.maintenance.desc':'Post-handover maintenance and support.',
    'projects.title':'Projects — Case Studies','projects.lead':'Small selection of recent projects.',
    'about.title':'About Build','about.lead':'Build combines engineering rigor with construction excellence.',
    'about.mission.title':'Our mission','about.mission.desc':'Delivering durable, efficient and safe buildings.',
    'about.team.title':'Team','about.team.desc':'Experienced engineers and certified contractors.',
    'contact.title':'Contact','contact.lead':'Fill the form and we\'ll reply with a tailored proposal.',
    'contact.office.title':'Office','contact.office.info':'Address · info.adar.llc@gmail.com · +374 96 837878',
    'contact.hours.label':'Working hours','contact.hours.value':'Mon–Fri: 9:00–18:00',
    'contact.form.name':'Name','contact.form.name.ph':'Name','contact.form.email':'Email','contact.form.email.ph':'example@mail.com','contact.form.phone':'Phone','contact.form.phone.ph':'+374 ...','contact.form.msg':'Message','contact.form.msg.ph':'Project details...',
    'contact.form.send':'Send','contact.form.reset':'Reset',
    'reviews.title':'Visitor Reviews','reviews.lead':'Leave your rating and feedback — helps others choose the right partner.',
    'reviews.avg':'Average:','reviews.count':'reviews','reviews.form.title':'Leave a review','reviews.form.lead':'Rate 1–5 stars and add a short comment.',
    'reviews.form.name.ph':'Your name','reviews.form.comment.ph':'Your comment','reviews.form.send':'Submit review','reviews.form.clear':'Clear',
    'footer.copyright':'© Construction — All rights reserved','footer.contacts':'Email · info.adar.llc@gmail.com · Phone · +374 96 837878',
    'noReviewsYet':'No reviews yet — be the first.',
    'demoFormNotice':'Demo mode — form not sent (API_ENDPOINT empty).',
    'sendError':'Send error, try later or call: +374 00 000000',
    "calc.save": "Next",
    "calc.details": "Details"
  },
  ru: {
    'brand.name':'Строительство','brand.tagline':'Строительство и архитектура',
    'nav.home':'Главная','nav.services':'Услуги','nav.projects':'Проекты','nav.about':'О нас','nav.contact':'Контакты','nav.reviews':'Отзывы',
    'menu.design':'Дизайн & BIM','menu.residential':'Жилые','menu.commercial':'Коммерческие','menu.team':'Команда','menu.construction':'Строительство','menu.beforeafter':'До/После','menu.certs':'Сертификаты','menu.contact':'Связь с продажами','menu.maintenance':'Обслуживание','menu.infra':'Инфраструктура','menu.values':'Ценности','menu.reviews':'Отзывы клиентов',
    'home.kicker':'Строительные решения','home.title':'Мы строим ваше будущее — вовремя и качественно','home.lead':'Одна команда — полный цикл от дизайна до сдачи. Качество, безопасность, гарантия.',
    'carousel.prev':'Назад','carousel.next':'Вперед',
    'calc.title':'Быстрый калькулятор (первоначальная цена)','calc.area':'м²','service.build':'Общее строительство','service.reno':'Ремонт','service.full':'Проект + реализация','calc.button':'Рассчитать','calc.details':'Подробнее','calc.result':'Общая стоимость:',
    'back':'← Назад',
    'services.title':'Услуги — Наши возможности','services.lead':'Мы предоставляем полный спектр услуг.',
    'service.design.title':'Дизайн и BIM','service.design.desc':'2D/3D дизайн, BIM и оптимизация энергии.',
    'service.construction.title':'Строительство','service.construction.desc':'От фундамента до отделки — полный цикл строительства с контролем качества.',
    'service.maintenance.title':'Обслуживание','service.maintenance.desc':'Гарантийное обслуживание и техподдержка.',
    'projects.title':'Проекты — Кейсы','projects.lead':'Небольшой выбор недавних проектов.',
    'about.title':'О Build','about.lead':'Build сочетает инженерную строгость и строительное мастерство.',
    'about.mission.title':'Наша миссия','about.mission.desc':'Создавать прочные, эффективные и безопасные здания.',
    'about.team.title':'Команда','about.team.desc':'Опытные инженеры и сертифицированные подрядчики.',
    'contact.title':'Контакты','contact.lead':'Заполните форму — мы ответим с предложением.',
    'contact.office.title':'Офис','contact.office.info':'Адрес · info.adar.llc@gmail.com · +374 96 837878',
    'contact.hours.label':'Часы работы','contact.hours.value':'Пн–Пт: 9:00–18:00',
    'contact.form.name':'Имя','contact.form.name.ph':'Имя','contact.form.email':'Email','contact.form.email.ph':'example@mail.com','contact.form.phone':'Телефон','contact.form.phone.ph':'+374 ...','contact.form.msg':'Сообщение','contact.form.msg.ph':'Детали проекта...',
    'contact.form.send':'Отправить','contact.form.reset':'Сброс',
    'reviews.title':'Отзывы','reviews.lead':'Оставьте рейтинг и отзыв — это поможет другим.',
    'reviews.avg':'Средний:','reviews.count':'отзывов','reviews.form.title':'Оставить отзыв','reviews.form.lead':'Оцените 1–5 звёзд и добавьте комментарий.',
    'reviews.form.name.ph':'Ваше имя','reviews.form.comment.ph':'Ваш комментарий','reviews.form.send':'Отправить отзыв','reviews.form.clear':'Очистить',
    'footer.copyright':'© Строительство — Все права защищены','footer.contacts':'Email · info.adar.llc@gmail.com · Телефон · +374 96 837878',
    'noReviewsYet':'Пока нет отзывов — будьте первым.',
    'demoFormNotice':'Демо-режим — форма не отправлена (API_ENDPOINT пуст).',
    'sendError':'Ошибка отправки, попробуйте позже или позвоните: +374 00 000000',
    "calc.save": "Следушый",
    "calc.details": "Подробнее"
  }
};


const slidesByLang = (function(){
  const FALLBACK = 'https://source.unsplash.com/1200x800/?architecture&sig=1';

  const galleries = {
    residential: [
      'https://www.rustomjee.com/blog/wp-content/uploads/2024/08/IMAGE_1000-X-374-copy.jpg'
    ],
    trashbins: [
      'axbaman1.png',
      'axbaman2.png',
      'axbaman3.png',
      'axbaman4.png',
      'axbaman5.png',
      'axbaman6.png',
      'axbaman7.png',
      'axbaman8.png',
      'axbaman9.png',
      'axbaman10.png',
      'axbaman11.png',
      'axbaman12.png'
    ],
    benches: [
      'նստարան_1.png',
      'նստարան_2.png',
      'նստարան_3.png',
      'նստարան_4.png',
      'նստարան_5.png'
    ],
    fences: [
      'https://source.unsplash.com/1200x800/?fence&sig=41',
      'https://source.unsplash.com/1200x800/?garden-fence&sig=42',
      'https://source.unsplash.com/1200x800/?metal-fence&sig=43'
    ],
    roofs: [
      'https://source.unsplash.com/1200x800/?roof&sig=51',
      'https://source.unsplash.com/1200x800/?rooftop&sig=52',
      'https://source.unsplash.com/1200x800/?modern-roof&sig=53'
    ],
    playground: [
      'խաղասարքեր 1.png',
      'խաղասարքեր 2.png',
      'խաղասարքեր 3.png',
      'խաղասարքեր 4.png',
      'խաղասարքեր 5.png',
      'խաղասարքեր 6.png',
      'խաղասարքեր 7.png',
      'խաղասարքեր 8.png',
      'խաղասարքեր 9.png',
      'խաղասարքեր 10.png',
      'խաղասարքեր 11.png',
      'խաղասարքեր 12.png'
    ],
    sports: [
      'մարզասարքեր1.png',
      'մարզասարքեր2.png',
      'մարզասարքեր3.png',
      'մարզասարքեր4.png',
      'մարզասարքեր5.png',
      'մարզասարքեր6.png',
      'մարզասարքեր7.png'
    ],
    interiorExterior: [
      'https://source.unsplash.com/1200x800/?interior-design&sig=81',
      'https://source.unsplash.com/1200x800/?exterior-design&sig=82',
      'https://source.unsplash.com/1200x800/?modern-interior&sig=83'
    ],
    concrete: [
      'https://source.unsplash.com/1200x800/?concrete-work&sig=91',
      'https://source.unsplash.com/1200x800/?concrete-construction&sig=92',
      'https://source.unsplash.com/1200x800/?concrete-floor&sig=93'
    ],
    metalComplex: [
      'https://source.unsplash.com/1200x800/?metal-structure&sig=101',
      'https://source.unsplash.com/1200x800/?steel-construction&sig=102',
      'https://source.unsplash.com/1200x800/?industrial-metalwork&sig=103'
    ],
    rubberSurface: [
     'Ռետինե ծածկույթով տարածք 1.png',
     'Ռետինե ծածկույթով տարածք 2.png',
     'Ռետինե ծածկույթով տարածք 3.png',
     'Ռետինե ծածկույթով տարածք 4.png',
     'Ռետինե ծածկույթով տարածք 5.png'
   ],
   grassSurface: [
     'խոտածածկույթ տարածք .png',
     'խոտածածկույթ տարածք 1.png',
     'խոտածածկույթ տարածք 2.png',
     'խոտածածկույթ տարածք 3.png'
   ],
   pavilions: [
    'տաղավար (1).png',
    'տաղավար (2).png',
    'տաղավար (3).png',
    'տաղավար (4).png',
    'տաղավար (5).png'
   ]
  };

  function thumbFor(key){ return (galleries[key] && galleries[key][0]) || FALLBACK; }

  return {
    hy: [
      { type:'image', title:'Բնակելի համալիր', subtitle:'Հարմարավետություն և դիզայն', src: galleries.residential[0], thumb: thumbFor('residential'), gallery: galleries.residential },
      { type:'image', title:'Աղբամաններ', subtitle:'Բարձր որակի մետաղական և պլաստիկ աղբամաններ', src: galleries.trashbins[0], thumb: thumbFor('trashbins'), gallery: galleries.trashbins },
      { type:'image', title:'Նստարաններ', subtitle:'Հարմարավետ նստարաններ այգիների և բակերի համար', src: galleries.benches[0], thumb: thumbFor('benches'), gallery: galleries.benches },
      { type:'image', title:'Ցանկապատեր', subtitle:'Դիմացկուն և գեղեցիկ ցանկապատներ', src: galleries.fences[0], thumb: thumbFor('fences'), gallery: galleries.fences },
      { type:'image', title:'Տանիքներ', subtitle:'Նորարար տարեգծեր ու ապահով ախտորոշում', src: galleries.roofs[0], thumb: thumbFor('roofs'), gallery: galleries.roofs },
      { type:'image', title:'Խաղասարքեր', subtitle:'Ձեռնարկության համար անվտանգ եւ գունավոր խաղասարքեր', src: galleries.playground[0], thumb: thumbFor('playground'), gallery: galleries.playground },
      { type:'image', title:'Մարզասարքեր', subtitle:'Արտերկրյա մարզասարքեր՝ համայնքային տեղամասերի համար', src: galleries.sports[0], thumb: thumbFor('sports'), gallery: galleries.sports },
      { type:'image', title:'Արտաքին ներքին հարդարում', subtitle:'Արտաքին և ներքին լրացուցիչ հարդարում', src: galleries.interiorExterior[0], thumb: thumbFor('interiorExterior'), gallery: galleries.interiorExterior },
      { type:'image', title:'Բետոնային աշխատանքներ', subtitle:'Բետոնային հիմքեր, վահանակներ և հատակներ', src: galleries.concrete[0], thumb: thumbFor('concrete'), gallery: galleries.concrete },
      { type:'image', title:'Մետաղական բարդ կոնստրուկցիա', subtitle:'Ծանրածր և ճշգրիտ մետաղական կոնստրուկցիաներ', src: galleries.metalComplex[0], thumb: thumbFor('metalComplex'), gallery: galleries.metalComplex },
      { type:'image', title:'Ռետինե ծածկույթով տարածք', subtitle:'Անվտանգ և դիմացկուն ռետինե ծածկույթներ', src: galleries.rubberSurface[0],thumb: thumbFor('rubberSurface'),gallery: galleries.rubberSurface},
      { type:'image', title:'Խոտածածկույթով տարածք', subtitle:'Բնական և արհեստական խոտածածկույթներ', src: galleries.grassSurface[0], thumb: thumbFor('grassSurface'), gallery: galleries.grassSurface},
      { type:'image', title:'Տաղավարներ', subtitle:'Այգիների և հանրային տարածքների համար նախատեսված տաղավարներ', src: galleries.pavilions[0], thumb: thumbFor('pavilions'), gallery: galleries.pavilions}
    ],
    en: [
      { type:'image', title:'Residential Complex', subtitle:'Comfort & design', src: galleries.residential[0], thumb: thumbFor('residential'), gallery: galleries.residential },
      { type:'image', title:'Trash bins', subtitle:'High-quality metal & plastic bins', src: galleries.trashbins[0], thumb: thumbFor('trashbins'), gallery: galleries.trashbins },
      { type:'image', title:'Benches', subtitle:'Comfortable benches for parks & yards', src: galleries.benches[0], thumb: thumbFor('benches'), gallery: galleries.benches },
      { type:'image', title:'Fences', subtitle:'Durable & aesthetic fences', src: galleries.fences[0], thumb: thumbFor('fences'), gallery: galleries.fences },
      { type:'image', title:'Roofs', subtitle:'Innovative roofing solutions', src: galleries.roofs[0], thumb: thumbFor('roofs'), gallery: galleries.roofs },
      { type:'image', title:'Playground equipment', subtitle:'Safe colourful playground equipment', src: galleries.playground[0], thumb: thumbFor('playground'), gallery: galleries.playground },
      { type:'image', title:'Exercise equipment', subtitle:'Outdoor fitness and training equipment', src: galleries.sports[0], thumb: thumbFor('sports'), gallery: galleries.sports },
      { type:'image', title:'Exterior & interior decoration', subtitle:'Contemporary interior & exterior finishes', src: galleries.interiorExterior[0], thumb: thumbFor('interiorExterior'), gallery: galleries.interiorExterior },
      { type:'image', title:'Concrete works', subtitle:'Foundations, slabs and structural concrete', src: galleries.concrete[0], thumb: thumbFor('concrete'), gallery: galleries.concrete },
      { type:'image', title:'Complex metal construction', subtitle:'Heavy & precision metal structures', src: galleries.metalComplex[0], thumb: thumbFor('metalComplex'), gallery: galleries.metalComplex },
      { type:'image', title:'Rubber surface area', subtitle:'Safe and durable rubber покрытия', src: galleries.rubberSurface[0], thumb: thumbFor('rubberSurface'), gallery: galleries.rubberSurface},
      { type:'image', title:'Grass covered area', subtitle:'Natural and artificial grass surfaces', src: galleries.grassSurface[0], thumb: thumbFor('grassSurface'), gallery: galleries.grassSurface},
      { type:'image', title:'Pavilions', subtitle:'Pavilions for parks and public spaces', src: galleries.pavilions[0], thumb: thumbFor('pavilions'), gallery: galleries.pavilions}

    ],
    ru: [
      { type:'image', title:'Жилой комплекс', subtitle:'Комфорт и дизайн', src: galleries.residential[0], thumb: thumbFor('residential'), gallery: galleries.residential },
      { type:'image', title:'Мусорные баки и скамейки', subtitle:'Высококачественные металлические и пластиковые баки', src: galleries.trashbins[0], thumb: thumbFor('trashbins'), gallery: galleries.trashbins },
      { type:'image', title:'Скамейки', subtitle:'Удобные скамейки для парков и дворов', src: galleries.benches[0], thumb: thumbFor('benches'), gallery: galleries.benches },
      { type:'image', title:'Заборы', subtitle:'Прочные и эстетичные заборы', src: galleries.fences[0], thumb: thumbFor('fences'), gallery: galleries.fences },
      { type:'image', title:'Крыши', subtitle:'Инновационные решения для кровли', src: galleries.roofs[0], thumb: thumbFor('roofs'), gallery: galleries.roofs },
      { type:'image', title:'Игровое оборудование', subtitle:'Безопасное и красочное игровое оборудование', src: galleries.playground[0], thumb: thumbFor('playground'), gallery: galleries.playground },
      { type:'image', title:'Тренажеры', subtitle:'Уличные тренажёры и спортивное оборудование', src: galleries.sports[0], thumb: thumbFor('sports'), gallery: galleries.sports },
      { type:'image', title:'Внешняя и внутренняя отделка', subtitle:'Современные отделочные решения', src: galleries.interiorExterior[0], thumb: thumbFor('interiorExterior'), gallery: galleries.interiorExterior },
      { type:'image', title:'Бетонные работы', subtitle:'Фундаменты, плиты и монолитные работы', src: galleries.concrete[0], thumb: thumbFor('concrete'), gallery: galleries.concrete },
      { type:'image', title:'Сложная металлоконструкция', subtitle:'Тяжёлые и точные металлоконструкции', src: galleries.metalComplex[0], thumb: thumbFor('metalComplex'), gallery: galleries.metalComplex },
      { type:'image', title:'Территория с резиновым покрытием', subtitle:'Безопасные и износостойкие резиновые покрытия', src: galleries.rubberSurface[0], thumb: thumbFor('rubberSurface'), gallery: galleries.rubberSurface},
      { type:'image', title:'Территория с газонным покрытием', subtitle:'Натуральные и искусственные газонные покрытия', src: galleries.grassSurface[0], thumb: thumbFor('grassSurface'), gallery: galleries.grassSurface},
      { type:'image', title:'Павильоны', subtitle:'Павильоны для парков и общественных территорий', src: galleries.pavilions[0], thumb: thumbFor('pavilions'), gallery: galleries.pavilions}
    ]
  };
})();


function translatePage(lang){
  const dict = i18n[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(!key) return;
    const txt = dict[key] ?? '';
    el.innerHTML = txt;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    const txt = dict[key] ?? '';
    if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = txt;
    else el.setAttribute('placeholder', txt);
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el=>{
    const key = el.dataset.i18nValue;
    const txt = dict[key] ?? '';
    el.value = txt;
  });
  document.querySelectorAll('option[data-i18n-option]').forEach(opt=>{
    const key = opt.dataset.i18nOption;
    const txt = dict[key] ?? '';
    opt.textContent = txt;
  });
  const reviewsList = document.getElementById('reviewsList');
  if(reviewsList && (!reviewsList.children || reviewsList.children.length===0)){
    reviewsList.innerHTML = `<div class="muted">${dict['noReviewsYet'] ?? ''}</div>`;
  }
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>{
    const is = b.dataset.lang === lang;
    b.classList.toggle('active', is);
    b.setAttribute('aria-pressed', is ? 'true' : 'false');
  });
  renderSlides(lang);
}

const carousel = document.getElementById('carousel');
function renderSlides(lang){
  const arr = slidesByLang[lang] || slidesByLang[defaultLang];
  carousel.innerHTML = '';
  arr.forEach((s,i)=>{
    const el = document.createElement('div'); el.className='slide'; el.dataset.index = i;
    if(s.type==='image'){
      const img = document.createElement('img'); img.src = s.src; img.alt = s.title || 'slide';
      el.appendChild(img);
    } else if(s.type==='video'){
      const vid = document.createElement('video'); vid.src = s.src; vid.poster = s.poster||''; vid.muted=true; vid.playsInline=true; vid.loop=true; vid.preload='metadata';
      el.appendChild(vid);
    } else if(s.type==='text'){
      const wrap = document.createElement('div'); wrap.style.padding='18px';
      wrap.innerHTML = `<div style="font-weight:800;font-size:18px">${escapeHtml(s.title)}</div><div style="color:var(--muted);margin-top:6px">${escapeHtml(s.subtitle)}</div><p style="margin-top:12px">${escapeHtml(s.text||'')}</p>`;
      el.appendChild(wrap);
    }
    const meta = document.createElement('div'); meta.className='meta'; meta.innerHTML = `<h4>${escapeHtml(s.title||'')}</h4><p>${escapeHtml(s.subtitle||'')}</p>`;
    el.appendChild(meta);
    carousel.appendChild(el);
  });
  setTimeout(()=> {
    slideEls = Array.from(document.querySelectorAll('.slide'));
    const total = slideEls.reduce((s,el)=> s + el.offsetWidth + 10, 0);
    carousel.style.width = total + 'px';
    slideIndex = 0;
    updateCarousel();
  }, 80);
}


function openGallery(gallery = [], startIndex = 0, meta = {}){
  if(!Array.isArray(gallery) || gallery.length === 0) return;
  const lb = document.getElementById('mediaLightbox');
  const container = document.getElementById('mediaContainer');
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
  container.innerHTML = ''; 

  let idx = Math.max(0, Math.min(startIndex, gallery.length - 1));

  const wrap = document.createElement('div');
  wrap.className = 'gallery-wrap';

  const main = document.createElement('div');
  main.className = 'gallery-main';
  main.style.position = 'relative'; 

  const img = document.createElement('img');
  img.className = 'gallery-main-img';
  img.alt = 'gallery image';
  img.src = gallery[idx];
  main.appendChild(img);


  const caption = document.createElement('div');
  caption.className = 'gallery-caption';
  caption.innerHTML = `<h3>${escapeHtml(meta.title || '')}</h3><p>${escapeHtml(meta.subtitle || '')}</p>`;
  main.appendChild(caption);

  const controls = document.createElement('div');
  controls.className = 'gallery-controls';
  const prev = document.createElement('button');
  prev.className = 'gallery-prev';
  prev.type = 'button';
  prev.innerHTML = '◀';
  const next = document.createElement('button');
  next.className = 'gallery-next';
  next.type = 'button';
  next.innerHTML = '▶';
  controls.appendChild(prev);
  controls.appendChild(next);

  const thumbs = document.createElement('div');
  thumbs.className = 'gallery-thumbs';
  gallery.forEach((src,i)=>{
    const t = document.createElement('img');
    t.className = 'gallery-thumb';
    t.src = src;
    t.dataset.index = i;
    t.alt = 'thumb';
    if(i === idx) t.classList.add('active');
    t.addEventListener('click', ()=> {
      idx = i;
      img.src = gallery[idx];
      caption.innerHTML = `<h3>${escapeHtml(meta.title || '')}</h3><p>${escapeHtml(meta.subtitle || '')}</p>`;
      thumbs.querySelectorAll('.gallery-thumb').forEach(x=>x.classList.toggle('active', Number(x.dataset.index) === idx));
    });
    thumbs.appendChild(t);
  });

  function showIndex(n){
    idx = (n + gallery.length) % gallery.length;
    img.src = gallery[idx];
    thumbs.querySelectorAll('.gallery-thumb').forEach(x=> x.classList.toggle('active', Number(x.dataset.index) === idx));
    caption.innerHTML = `<h3>${escapeHtml(meta.title || '')}</h3><p>${escapeHtml(meta.subtitle || '')}</p>`;
  }
  prev.addEventListener('click', ()=> showIndex(idx - 1));
  next.addEventListener('click', ()=> showIndex(idx + 1));

 
  function onKey(e){}
  function closeGallery(){}

  const closeBtn = document.getElementById('closeMedia');
  const prevCloseHandler = closeBtn._galleryCloseHandler;
  if(prevCloseHandler) closeBtn.removeEventListener('click', prevCloseHandler);
  closeBtn._galleryCloseHandler = () => closeGallery();
  closeBtn.addEventListener('click', closeBtn._galleryCloseHandler);

  document.addEventListener('keydown', onKey);

  wrap.appendChild(controls);
  wrap.appendChild(main);
  wrap.appendChild(thumbs);

  container.appendChild(wrap);
  img.setAttribute('tabindex','0');
  img.focus();
}


function renderSlides(lang){
  const arr = slidesByLang[lang] || slidesByLang[defaultLang];
  carousel.innerHTML = '';
  arr.forEach((s,i)=>{
    const el = document.createElement('div'); el.className='slide'; el.dataset.index = i;
    if(s.type==='image'){
      const img = document.createElement('img'); img.src = s.src; img.alt = s.title || 'slide';
      el.appendChild(img);
    } else if(s.type==='video'){
      const vid = document.createElement('video'); vid.src = s.src; vid.poster = s.poster||''; vid.muted=true; vid.playsInline=true; vid.loop=true; vid.preload='metadata';
      el.appendChild(vid);
    } else if(s.type==='text'){
      const wrap = document.createElement('div'); wrap.style.padding='18px';
      wrap.innerHTML = `<div style="font-weight:800;font-size:18px">${escapeHtml(s.title)}</div><div style="color:var(--muted);margin-top:6px">${escapeHtml(s.subtitle)}</div><p style="margin-top:12px">${escapeHtml(s.text||'')}</p>`;
      el.appendChild(wrap);
    }
  
    const meta = document.createElement('div'); meta.className='meta'; meta.innerHTML = `<h4>${escapeHtml(s.title||'')}</h4><p>${escapeHtml(s.subtitle||'')}</p>`;
    el.appendChild(meta);

  
    const viewWrap = document.createElement('div');
    viewWrap.className = 'slide-view-wrap';
    const viewBtn = document.createElement('button');
    viewBtn.className = 'slide-view-btn';
    viewBtn.type = 'button';
    viewBtn.textContent = (i18n[currentLang] && i18n[currentLang]['carousel.next']) ? 'Դիտել' : 'View';
   viewBtn.addEventListener('click', (ev)=> {
  ev.stopPropagation();
  const gallery = Array.isArray(s.gallery) && s.gallery.length ? s.gallery : (s.src ? [s.src] : []);
  openGallery(gallery, 0, s);
});

    viewWrap.appendChild(viewBtn);
    el.appendChild(viewWrap);

    carousel.appendChild(el);
  });
  setTimeout(()=> {
   

    slideEls = Array.from(document.querySelectorAll('.slide'));
    const total = slideEls.reduce((s,el)=> s + el.offsetWidth + 10, 0);
    carousel.style.width = total + 'px';
    slideIndex = 0;
    updateCarousel();
  }, 80);
}


let slideIndex = 0;
let slideEls = Array.from(document.querySelectorAll('.slide'));
function updateCarousel(){
  if(!slideEls.length) return;
  const gap = 10;
  const slideWidth = slideEls[0].offsetWidth + gap;
  const offset = -(slideIndex * slideWidth);
  carousel.style.transform = `translateX(${offset}px)`;
  slideEls.forEach((el, idx)=>{
    const v = el.querySelector('video');
    if(v){
      if(idx >= slideIndex && idx < slideIndex + Math.ceil(window.innerWidth / slideWidth)) v.play().catch(()=>{});
      else v.pause();
    }
  });
}
function nextSlide(){ slideIndex = (slideIndex + 1) % slideEls.length; updateCarousel(); }
function prevSlide(){ slideIndex = (slideIndex - 1 + slideEls.length) % slideEls.length; updateCarousel(); }
document.getElementById('nextSlide').addEventListener('click', ()=> { nextSlide(); resetAutoplay(); });
document.getElementById('prevSlide').addEventListener('click', ()=> { prevSlide(); resetAutoplay(); });

let autoplayTimer = null;
function startAutoplay(){ stopAutoplay(); autoplayTimer = setInterval(nextSlide, AUTO_PLAY_MS); }
function stopAutoplay(){ if(autoplayTimer){ clearInterval(autoplayTimer); autoplayTimer=null; } }
function resetAutoplay(){ stopAutoplay(); setTimeout(startAutoplay, AUTO_PLAY_MS); }

carousel.addEventListener('mouseenter', ()=> stopAutoplay());
carousel.addEventListener('mouseleave', ()=> startAutoplay());
window.addEventListener('resize', ()=> setTimeout(()=> {
  slideEls = Array.from(document.querySelectorAll('.slide'));
  const total = slideEls.reduce((s,el)=> s + el.offsetWidth + 10, 0); carousel.style.width = total + 'px'; updateCarousel();
}, 120));

const topbar = document.getElementById('topbar');
const menuPanel = document.getElementById('menuPanel');
let menuTimeout = null;
function openMenu(){ if(menuTimeout) clearTimeout(menuTimeout); menuPanel.classList.add('open'); menuPanel.setAttribute('aria-hidden','false'); }
function closeMenuSoon(){ if(menuTimeout) clearTimeout(menuTimeout); menuTimeout = setTimeout(()=> { menuPanel.classList.remove('open'); menuPanel.setAttribute('aria-hidden','true'); }, 200); }
topbar.addEventListener('mouseenter', openMenu);
topbar.addEventListener('mouseleave', closeMenuSoon);
menuPanel.addEventListener('mouseenter', openMenu);
menuPanel.addEventListener('mouseleave', closeMenuSoon);

const primaryNav = document.getElementById('primaryNav');
function adaptMobileNav(){ if(getComputedStyle(primaryNav).display === 'none'){ 
  if(!document.getElementById('mobileToggle')){
    const btn = document.createElement('button'); btn.id='mobileToggle'; btn.textContent='Menu'; btn.style.marginLeft='10px';
    btn.onclick = ()=> menuPanel.classList.toggle('open');
    topbar.querySelector('.inner').appendChild(btn);
  }
} }
window.addEventListener('resize', adaptMobileNav);
adaptMobileNav();

const scrollProgress = document.getElementById('scrollProgress');
function updateProgress(){ const doc=document.documentElement; const pct = doc.scrollHeight>doc.clientHeight ? (doc.scrollTop / (doc.scrollHeight - doc.clientHeight))*100 : 0; scrollProgress.style.width = pct + '%'; }
document.addEventListener('scroll', updateProgress, {passive:true}); window.addEventListener('resize', updateProgress); updateProgress();

const projects = document.querySelectorAll('.project');
const mediaLightbox = document.getElementById('mediaLightbox');
const mediaContainer = document.getElementById('mediaContainer');
document.getElementById('closeMedia').addEventListener('click', ()=> { mediaLightbox.classList.remove('open'); mediaLightbox.setAttribute('aria-hidden','true'); mediaContainer.innerHTML=''; });
projects.forEach(p=> p.addEventListener('click', ()=> {
  const src = p.dataset.src || p.querySelector('img').src;
  const meta = {
    title: p.dataset.title || p.dataset.titleText || (p.querySelector('img')?.alt || ''),
    subtitle: p.dataset.subtitle || p.dataset.subtitleText || ''
  };
  openGallery([src], 0, meta);
}));

document.getElementById('calcBtn').addEventListener('click', ()=> {
  const area = Math.max(0, Number(document.getElementById('area').value) || 0);
  const type = document.getElementById('serviceType').value;
  let rateAMD = 180000; 
  if(type === 'reno') rateAMD = 120000; 
  if(type === 'full') rateAMD = 250000; 


  const totalAMD = Math.round(area * rateAMD);
  const USD_RATE = 410; 
  const RUB_RATE = 4.5; 

  const totalUSD = (totalAMD / USD_RATE).toFixed(2);
  const totalRUB = Math.round(totalAMD / RUB_RATE);

  const dict = i18n[currentLang] || i18n[defaultLang];
  const resultPrefix = dict['calc.result'] ?? '';

  document.getElementById('calcVal').innerHTML = totalAMD
    ? `
      <strong>${totalAMD.toLocaleString()} AMD</strong><br>
      <span style="color:var(--muted)">
        ${(totalUSD)} USD • ${totalRUB.toLocaleString()} RUB
      </span>
    `
    : '—';
  const calcResultEl = document.getElementById('calcResult');
  if(calcResultEl) calcResultEl.firstChild && calcResultEl.firstChild.nodeValue === null ? calcResultEl.innerHTML = `${resultPrefix} <strong id="calcVal">${totalAMD? totalAMD.toLocaleString() + ' AMD' : '—'}</strong>` : null;
});

cfSend.addEventListener('click', async ()=> {
  const name = document.getElementById('cfName').value.trim();
  const email = document.getElementById('cfEmail').value.trim();
  const phone = document.getElementById('cfPhone').value.trim();
  const message = document.getElementById('cfMsg').value.trim();
  const dict = i18n[currentLang] || i18n[defaultLang];

  if(name.length < 2){
    cfStatus.textContent = 'Մուտքագրեք անունը';
    cfStatus.style.color = 'crimson';
    return;
  }

  if(!email && !phone){
    cfStatus.textContent = 'Գրեք email կամ հեռախոս';
    cfStatus.style.color = 'crimson';
    return;
  }

  cfSend.disabled = true;
  cfSend.textContent = 'Ուղարկվում է...';

  try{
    await emailjs.send(
      'service_38y47i4',
      'template_rpzxtii',
      {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
    );

    cfStatus.textContent = '✅ Նամակը ուղարկվել է հաջողությամբ';
    cfStatus.style.color = 'green';
    document.getElementById('contactForm').reset();

  } catch(err){
    console.error(err);
    cfStatus.textContent = '❌ Ուղարկման սխալ, փորձեք կրկին';
    cfStatus.style.color = 'crimson';
  } finally {
    cfSend.disabled = false;
    cfSend.textContent = dict['contact.form.send'] || 'Ուղարկել';
  }
});


const rvStatus = document.getElementById('rvStatus'), reviewsList = document.getElementById('reviewsList'), avgRating = document.getElementById('avgRating'), reviewsCount = document.getElementById('reviewsCount');
let selectedStar = 0;
document.querySelectorAll('#starPicker .star').forEach(s=>{
  s.addEventListener('mouseenter', ()=> {
    const v = Number(s.dataset.value);
    highlightStars(v);
  });
  s.addEventListener('mouseleave', ()=> highlightStars(selectedStar));
  s.addEventListener('click', ()=> { selectedStar = Number(s.dataset.value); highlightStars(selectedStar); });
});
function highlightStars(v){
  document.querySelectorAll('#starPicker .star').forEach(s=> { s.classList.toggle('selected', Number(s.dataset.value) <= v); });
}
document.getElementById('rvClear').addEventListener('click', ()=> { selectedStar =0; highlightStars(0); document.getElementById('rvName').value=''; document.getElementById('rvComment').value=''; rvStatus.textContent=''; });

function loadReviews(){
  const raw = localStorage.getItem('autobuild_reviews') || '[]';
  try{
    const arr = JSON.parse(raw);
    reviewsList.innerHTML = '';
    if(arr.length===0) reviewsList.innerHTML = `<div class="muted">${(i18n[currentLang] || i18n[defaultLang])['noReviewsYet']}</div>`;
    arr.slice().reverse().forEach(r=>{
      const el = document.createElement('div'); el.className='review';
      el.innerHTML = `<div style="display:flex;justify-content:space-between"><strong>${escapeHtml(r.name)}</strong><div>${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div></div><div style="margin-top:8px;color:var(--muted)">${escapeHtml(r.comment)}</div><div style="margin-top:6px;font-size:12px;color:var(--muted)">${new Date(r.ts).toLocaleString()}</div>`;
      reviewsList.appendChild(el);
    });

    const total = arr.reduce((s,x)=> s + (x.rating||0), 0);
    const avg = arr.length ? (total / arr.length) : 0;
    avgRating.textContent = avg ? avg.toFixed(1) + ' / 5' : '—';
    reviewsCount.textContent = arr.length;
  }catch(e){ console.error('reviews parse error', e); reviewsList.innerHTML = '<div class="muted">Error loading reviews.</div>'; }
}
loadReviews();

document.getElementById('rvSend').addEventListener('click', ()=> {
  const name = (document.getElementById('rvName').value||'').trim();
  const comment = (document.getElementById('rvComment').value||'').trim();
  const dict = i18n[currentLang] || i18n[defaultLang];
  if(!selectedStar){ rvStatus.textContent=(dict['reviews.form.lead'] || 'Please select a star rating.'); rvStatus.style.color='crimson'; return; }
  if(name.length < 2){ rvStatus.textContent=(dict['contact.form.name'] || 'Please enter your name.'); rvStatus.style.color='crimson'; return; }
  const last = Number(localStorage.getItem('autobuild_last_review_ts') || '0');
  if(Date.now() - last < 30000){ rvStatus.textContent='Please wait before submitting another review.'; rvStatus.style.color='crimson'; return; }
  const raw = localStorage.getItem('autobuild_reviews') || '[]';
  const arr = JSON.parse(raw);
  const rec = { name: name, comment: comment, rating: selectedStar, ts: Date.now() };
  arr.push(rec);
  localStorage.setItem('autobuild_reviews', JSON.stringify(arr));
  localStorage.setItem('autobuild_last_review_ts', Date.now().toString());
  rvStatus.textContent = (dict['reviews.form.send'] ? 'Thanks — your review is posted.' : 'Thanks — your review is posted.');
  rvStatus.style.color = 'green';
  document.getElementById('rvName').value=''; document.getElementById('rvComment').value=''; selectedStar=0; highlightStars(0);
  loadReviews();
});

function escapeHtml(s){ return String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;'); }
function prefillContactPhone(prefix = '+374') {
  try {
    const cfPhone = document.getElementById('cfPhone');
    if(!cfPhone) return;
    const val = (cfPhone.value || '').trim();
    if(!val || val === '' || val === prefix || val === prefix + ' ') {
      cfPhone.value = prefix + ' ';
      cfPhone.setSelectionRange(cfPhone.value.length, cfPhone.value.length);
    }
  } catch(e) {
    console.warn('prefillContactPhone error', e);
  }
}


document.querySelectorAll('.lang-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    const l = b.dataset.lang;
    if(!availableLangs.includes(l)) return;
    currentLang = l;
    localStorage.setItem('autobuild_lang', l);
    translatePage(l);
    loadReviews();
  });
});

const pages = ['home','services','projects','about','contact','reviews'];
function showPage(slug, push=true){
  pages.forEach(p=> document.getElementById('page-' + p).classList.remove('active'));
  const node = document.getElementById('page-' + slug);
  if(!node) return;
  node.classList.add('active');
  if(slug === 'contact') {
    setTimeout(() => {
      prefillContactPhone('+374');
      const cfName = document.getElementById('cfName');
      if(cfName) cfName.focus();
    }, 90);
  }

  const dict = i18n[currentLang] || i18n[defaultLang];
  const navKey = 'nav.' + slug;
  const label = dict[navKey] || (slug.charAt(0).toUpperCase()+slug.slice(1));
  document.title = `Auto Build — ${label}`;
  if (location.protocol !== 'file:') {
  history.pushState({page:slug}, '', '/' + slug);
}

  window.scrollTo({top: document.querySelector('.hero-ghost') ? document.querySelector('.hero-ghost').offsetTop : 0, behavior:'smooth'});
}
window.addEventListener('popstate', (e)=> {
  const state = e.state && e.state.page ? e.state.page : 'home';
  showPage(state, false);
});
document.querySelectorAll('[data-page]').forEach(a=> a.addEventListener('click', (ev)=>{ ev.preventDefault(); const p = a.dataset.page; showPage(p); }));

document.getElementById('backFromServices').addEventListener('click', ()=> history.back());
document.getElementById('backFromProjects').addEventListener('click', ()=> history.back());
document.getElementById('backFromAbout').addEventListener('click', ()=> history.back());
document.getElementById('backFromContact').addEventListener('click', ()=> history.back());
document.getElementById('backFromReviews').addEventListener('click', ()=> history.back());

(function boot(){
  const path = location.pathname.replace(/^\//,'') || 'home';
  const candidate = pages.includes(path) ? path : 'home';
  translatePage(currentLang);
  renderSlides(currentLang);
  slideEls = Array.from(document.querySelectorAll('.slide'));
  const total = slideEls.reduce((s,el)=> s + el.offsetWidth + 10, 0);
  carousel.style.width = total + 'px';
  updateCarousel();
  startAutoplay();
  showPage(candidate, false);
})();

carousel.addEventListener('keydown', (e)=> {
  if(e.key === 'ArrowLeft') prevSlide();
  if(e.key === 'ArrowRight') nextSlide();
});

document.addEventListener('visibilitychange', ()=> { if(document.hidden) stopAutoplay(); else startAutoplay(); });

(function enhanceMobileToggle(){
  const btn = document.getElementById('mobileToggle');
  if(btn){
    btn.innerHTML = '☰';
    btn.style.fontSize = '20px';
    btn.style.background = 'transparent';
    btn.style.color = '#fff';
    btn.style.border = '0';
    btn.style.padding = '6px 10px';
    btn.style.cursor = 'pointer';
    btn.setAttribute('aria-label','Open menu');
  }
})();


(function(){
  document.addEventListener('DOMContentLoaded', ()=> {
    if(typeof availableLangs === 'undefined') window.availableLangs = ['hy','en','ru'];
    if(typeof defaultLang === 'undefined') window.defaultLang = 'hy';
    if(typeof currentLang === 'undefined') window.currentLang = localStorage.getItem('autobuild_lang') || window.defaultLang;

    const quickForm = document.getElementById('quickCalc');
    const calcBtn = document.getElementById('calcBtn');
    const calcResultEl = document.getElementById('calcResult');
    const calcValEl = () => document.getElementById('calcVal');
    const areaInput = document.getElementById('area');
    const serviceSel = document.getElementById('serviceType');
    if(quickForm){
      quickForm.addEventListener('submit', function(e){
        e.preventDefault();
      }, {passive:false});
    }
    if(calcBtn && calcBtn.tagName === 'BUTTON'){
      try { calcBtn.type = 'button'; } catch(e){}
    }

    function ensureCalcValExists(){
      if(!calcResultEl) return;
      if(!calcValEl()){
        const dict = (typeof i18n !== 'undefined' ? (i18n[currentLang] || i18n[defaultLang]) : null);
        const prefix = dict && dict['calc.result'] ? dict['calc.result'] : 'Ընդհանուր արժեք՝';
        calcResultEl.innerHTML = `${prefix} <strong id="calcVal">—</strong>`;
      }
    }
    ensureCalcValExists();

    if(calcResultEl && window.MutationObserver){
      const mo = new MutationObserver((mutations)=>{
        ensureCalcValExists();
      });
      mo.observe(calcResultEl, {childList:true, subtree:true, characterData:true});
    }

function computeEstimate(){
  if(!areaInput || !serviceSel || !calcValEl()) return;
  const area = Math.max(0, Number(areaInput.value) || 0);
  const type = serviceSel.value || 'build';
  let rateAMD = 180000;   
  if(type === 'reno') rateAMD = 120000;  
  if(type === 'full') rateAMD = 250000;   

  const totalAMD = Math.round(area * rateAMD);
  const USD_RATE = 410;
  const RUB_RATE = 4.5;

  const totalUSD = totalAMD ? (totalAMD / USD_RATE).toFixed(2) : '0.00';
  const totalRUB = totalAMD ? Math.round(totalAMD / RUB_RATE) : 0;

  window.autobuild_last_quote = {
    area,
    type,
    rateAMD,
    totalAMD,
    totalUSD,
    totalRUB,
    ts: Date.now()
  };
  try { localStorage.setItem('autobuild_last_quote', JSON.stringify(window.autobuild_last_quote)); } catch(e){}

  const valHtml = totalAMD
    ? `<strong>${totalAMD.toLocaleString()} AMD</strong><br><span style="color:var(--muted)">${totalUSD} USD • ${totalRUB.toLocaleString()} RUB</span>`
    : '—';

  ensureCalcValExists();
  const valNode = calcValEl();
  const dict = (typeof i18n !== 'undefined') ? (i18n[currentLang] || i18n[defaultLang]) : null;
  const saveLabel = (dict && dict['calc.save']) ? dict['calc.save'] : 'Save estimate';
  const detailsLabel = (dict && dict['calc.details']) ? dict['calc.details'] : 'Details';

  if(valNode) {
    valNode.innerHTML = totalAMD ? `${totalAMD.toLocaleString()} AMD` : '—';
    calcResultEl.querySelector('.__calc_extra')?.remove();
    calcResultEl.querySelector('.__calc_actions')?.remove();

    const small = document.createElement('div');
    small.className = '__calc_extra';
    small.style.color = 'var(--muted)';
    small.style.marginTop = '6px';
    small.innerHTML = `${totalUSD} USD • ${totalRUB.toLocaleString()} RUB`;
    calcResultEl.appendChild(small);

    const actions = document.createElement('div');
    actions.className = '__calc_actions';
    actions.style.marginTop = '10px';
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.alignItems = 'center';

    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.textContent = saveLabel;
    saveBtn.style.padding = '8px 12px';
    saveBtn.style.borderRadius = '8px';
    saveBtn.style.border = '0';
    saveBtn.style.background = 'var(--primary)';
    saveBtn.style.color = '#fff';
    saveBtn.style.cursor = 'pointer';
    saveBtn.onclick = ()=> {
      try{
        const raw = localStorage.getItem('autobuild_saved_quotes') || '[]';
        const arr = JSON.parse(raw);
        arr.push(window.autobuild_last_quote);
        localStorage.setItem('autobuild_saved_quotes', JSON.stringify(arr));
        saveBtn.textContent = (dict && dict['calc.save'] ? dict['calc.save'] : saveLabel) + ' ✓';
        saveBtn.disabled = true;
        setTimeout(()=> { saveBtn.textContent = saveLabel; saveBtn.disabled = false; }, 2000);
      }catch(err){
        console.error('save quote err', err);
        saveBtn.textContent = (dict && dict['calc.save']) ? dict['calc.save'] : saveLabel;
        saveBtn.style.background = 'crimson';
        setTimeout(()=> { saveBtn.textContent = saveLabel; saveBtn.style.background = 'var(--primary)'; }, 2000);
      }
    };

    const existingDetails = document.getElementById('openContactFromCalc');
    let detailsBtn;
    if(existingDetails){
      detailsBtn = existingDetails;
      detailsBtn.textContent = detailsLabel;
    } else {
      detailsBtn = document.createElement('button');
      detailsBtn.id = 'openContactFromCalc';
      detailsBtn.type = 'button';
      detailsBtn.textContent = detailsLabel;
      detailsBtn.style.padding = '8px 12px';
      detailsBtn.style.borderRadius = '8px';
      detailsBtn.style.border = '1px solid #eef2f7';
      detailsBtn.style.background = '#fff';
      detailsBtn.style.color = 'var(--primary)';
      detailsBtn.style.cursor = 'pointer';
    }

    detailsBtn.onclick = (e)=> {
      e.preventDefault();
      const q = window.autobuild_last_quote || JSON.parse(localStorage.getItem('autobuild_last_quote') || 'null');
      try { showPage('contact'); } catch(err){}
      setTimeout(()=> {
        const cfMsg = document.getElementById('cfMsg');
        const cfName = document.getElementById('cfName');
        if(cfMsg){
          const areaTxt = q ? q.area + ' մ²' : (area + ' մ²');
          const typeKey = (q && q.type) || type;
          const typeLabel = (typeKey === 'reno') ? ((dict && dict['service.reno']) || 'Renovation') : (typeKey === 'full' ? ((dict && dict['service.full']) || 'Design+Build') : ((dict && dict['service.build']) || 'Build'));
          const totalTxt = q ? (q.totalAMD.toLocaleString() + ' AMD') : (totalAMD.toLocaleString() + ' AMD');
          const msgIntro = dict ? (dict['contact.form.msg.ph'] || '') : '';
          cfMsg.value = `${msgIntro}\n\n${typeLabel}\n${areaTxt}\n${totalTxt}\n`;
        }
        if(cfName) cfName.focus();
      }, 250);
    };

    actions.appendChild(saveBtn);
    actions.appendChild(detailsBtn);
    calcResultEl.appendChild(actions);
  }
}

    if(calcBtn){
      calcBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        computeEstimate();
      });
    } else {
      [areaInput, serviceSel].forEach(el=>{
        if(!el) return;
        el.addEventListener('input', ()=> { computeEstimate(); });
      });
    }

    
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.addEventListener('click', ()=> {
        setTimeout(()=>{
          ensureCalcValExists();
          computeEstimate();
        }, 90);
      });
    });

    setTimeout(()=> { ensureCalcValExists(); computeEstimate(); }, 120);

  }); 
})(); 

function syncFloatingReviews(){
  const src = document.getElementById('reviewsList');
  const dest = document.getElementById('floatingReviewsList');
  if(!dest || !src) return;
  dest.innerHTML = src.innerHTML || '<div class="muted">—</div>';
}


(function initFloatingReviews(){
  const rl = document.getElementById('reviewsList');
  const fr = document.getElementById('floatingReviews');
  const toggle = document.getElementById('reviewsToggle');

  if(!rl || !fr || !toggle) return;

  syncFloatingReviews();


  if(window.MutationObserver){
    const mo = new MutationObserver((muts)=> { syncFloatingReviews(); });
    mo.observe(rl, { childList:true, subtree:true, characterData:true });
  }


  window.openFloatingReviews = function openFloatingReviews(){
    fr.classList.remove('collapsed');
    const fb = fr.querySelector('.floating-body');
    if(fb) fb.scrollTop = 0;
  };


  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    fr.classList.toggle('collapsed');
  });


})();

 
const modal = document.getElementById("viewModal");
const img   = document.getElementById("viewImg");

document.querySelectorAll(".home-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const images = JSON.parse(card.dataset.gallery);
    img.src = images[0];    
    if (modal && img) {
  img.src = images[0];
  modal.style.display = "flex";
}

  });
});

const viewClose = document.querySelector(".view-close");
const viewBg = document.querySelector(".view-bg");

if (viewClose) {
  viewClose.onclick = () => {
    modal.style.display = "none";
  };
}

if (viewBg) {
  viewBg.onclick = () => {
    modal.style.display = "none";
  };
}


(function(){
  'use strict';
  const CATALOG = {
    'bench': {
      title: {hy:'Նստարան', en:'Bench', ru:'Скамейка'},
      unitPriceAMD: 45000,
      colors: ['Սև','Բեժ','Սալմոն'],
      sizes: ['Թվով՝ S(1 մ)', 'M(1.5 մ)', 'L(2 մ)'],
      descShort: {hy:'Արտադրված մետաղից, դիմացկուն նստարան։'},
      descLong: {hy:'Մետաղական նստարան՝ փոշեկուլով պատված, դիմացկուն բոլոր պայմաններում, կատարյալ այգիների և բակերի համար։ Առկա տարբեր երկարություններ, ներկեր և տեղադրման ծառայություն։'}
    },
    'trashbin': {
      title: {hy:'Աղբաման', en:'Trash bin', ru:'Мусорный бак'},
      unitPriceAMD: 12000,
      colors: ['Կարմիր','Կանաչ','Գորշ'],
      sizes: ['Մեծ','Միջին','Փոքր'],
      descShort: {hy:'Պլաստիկ/մետաղական աղբաման՝ քաղաքացիական օգտագործման համար։'},
      descLong: {hy:'Հիմնական հոդված աղբամաններ՝ UV պաշտպանիչով, հեշտ մաքրությամբ և բազմաֆունկցիոնալ՝ նախատեսված հողային և հանրային տեղերի համար։'}
    },
    'pavilion': {
      title: {hy:'Տաղավար', en:'Pavilion', ru:'Павильон'},
      unitPriceAMD: 320000,
      colors: ['Մոխրագույն','Սպիտակ'],
      sizes: ['3x3 մ','4x4 մ','6x4 մ'],
      descShort: {hy:'Պայմանագրային տաղավար՝ այգիների համար։'},
      descLong: {hy:'Խնթացիկ տաղավարներ՝ մետաղական շրջանակով և weatherproof ծածկով. կարող ենք արտադրել ըստ չափերի, տեղադրել և տրամադրել երաշխիք։'}
    },
    'playground': {
      title: {hy:'Խաղասարք', en:'Playground', ru:'Игровой комплекс'},
      unitPriceAMD: 150000,
      colors: ['Գունավոր'],
      sizes: ['Մոդուլային (ավելի փոքր/մեծ)'],
      descShort: {hy:'Անվտանգ և գունավոր խաղասարքեր երեխաների համար։'},
      descLong: {hy:'Խաղասարք՝ համապատասխան անվտանգության ստանդարտներին, տարբեր տարիքային խմբերի համար, տեղադրման և սպասարկման հնարավորությամբ։'}
    },

    'residential': {
      title: { hy: 'Բնակելի համալիր', en: 'Residential Complex', ru: 'Жилой комплекс' },
      unitPriceAMD: 5000000,
      colors: ['Թխկաշաղ', 'Բժիշկակի', 'Սպիտակ'],
      sizes: ['Փոքր (1 բլոկ)', 'Միջին (2-3 հդ)', 'Մեծ (բազմաբնակարան)'],
      descShort: { hy: 'Բազմաբնակարանային կամ համալիրվային նախագծեր՝ turnkey լուծում։' },
      descLong: { hy: 'Բնակելի համալիրներ՝ նախագծումից մինչեւ հանձնման, ներառում է ինժեներական լուծումներ, ֆասադ, ենթակառուցվածք և կանաչապատում։ Կատարվում է ըստ նախագծի՝ առաջարկվող տարբերակներ և երաշխիք։' }
    },

    'fences': {
      title: { hy: 'Ցանկապատներ', en: 'Fences', ru: 'Заборы' },
      unitPriceAMD: 25000,
      colors: ['Սև','Կանաչ','Գորշ'],
      sizes: ['Փաթեթ (մ/կ) — ըստ երկարության', 'Պանելային արշագներ'],
      descShort: { hy: 'Դիմացկուն ցանկապատներ՝ տարբեր նյութերից։' },
      descLong: { hy: 'Ցանկապատներ՝ մետաղական, փայտե կամ կոմպոզիտ պանելներով, տեղադրման և ֆունդամենտային աշխատանքներով: գին կախված է մետրիայից և բարձրությունից։' }
    },

    'roofs': {
      title: { hy: 'Տանիքներ', en: 'Roofs', ru: 'Крыши' },
      unitPriceAMD: 60000,
      colors: ['Սեւ','Կարմիր','Կանաչ'],
      sizes: ['per m²'],
      descShort: { hy: 'Տանիքային համակարգեր՝ մետաղական կամ ծածկով լուծումներով։' },
      descLong: { hy: 'Տանիքներ՝ նորարարական ծածկույթներով, ջրակայունությամբ և ջերմամոնտաժով. կարող ենք տալ գին ըստ մ²՝ ըստ նյութի և շերտավորման։' }
    },

    'sports': {
      title: { hy: 'Մարզասարքեր', en: 'Exercise Equipment', ru: 'Тренажёры' },
      unitPriceAMD: 90000,
      colors: ['Գունավոր','Արծաթագույն'],
      sizes: ['Ստանդարտ մոդուլներ'],
      descShort: { hy: 'Արտաքին մարզասարքեր՝ համայնքային տեղամասերի համար։' },
      descLong: { hy: 'Արտաքին ֆիթնես սարքեր՝ փոշեկուլով, մոնոլիթ արմատով, տեղադրման և անվտանգության մեխանիկայով՝ նախատեսված հանրային և բնակարանային տարածքների համար։' }
    },

    'interiorExterior': {
      title: { hy: 'Ներքին/Արտաքին հարդարում', en: 'Interior & Exterior Decoration', ru: 'Внешняя и внутренняя отделка' },
      unitPriceAMD: 45000,
      colors: ['Նրբագույն','Սպիտակ','Բնական տոն'],
      sizes: ['per m²'],
      descShort: { hy: 'Մոդեռն ներքին և արտաքին հարդարանք՝ ֆորսթիչ լուծումներով։' },
      descLong: { hy: 'Այն ներառում է որմնազարդում, ներկում, ցուցամփոփ եւ արտաքին բազալտ-կիպո ստեղծագործություններ. արժեքը հաշվարկվում է ըստ աշխատանքի ծավալի և նյութի։' }
    },

    'concrete': {
      title: { hy: 'Բետոնային աշխատանքներ', en: 'Concrete works', ru: 'Бетонные работы' },
      unitPriceAMD: 35000,
      colors: ['Բնական'],
      sizes: ['per m³','per m²'],
      descShort: { hy: 'Ֆունդամենտներ, հատակներ և մոնոլիտային աշխատանքներ։' },
      descLong: { hy: 'Բետոնային աշխատանքներ՝ ֆունդամենտից մինչ հատակ, խստապահանջ որակի վերահսկումով, վիրակապով և խառնուրդի համապատասխանությամբ։' }
    },

    'metalComplex': {
      title: { hy: 'Մետաղական բարդ կոնստրուկցիա', en: 'Complex metal construction', ru: 'Сложная металлоконструкция' },
      unitPriceAMD: 220000,
      colors: ['Սովորական մետաղական'],
      sizes: ['Ամալիգված հատ-չափման բազա'],
      descShort: { hy: 'Ծանր եւ ճշգրիտ մետաղակառույցներ։' },
      descLong: { hy: 'Մետաղական կոնստրուկցիաներ՝ ծանրաբեռնված նախագծերի համար՝ կախված դիզայնից և նյութից։ Կատարման ժամկետները և գինը հաշվարկվում են նախագծով։' }
    },

    'rubberSurface': {
      title: { hy: 'Ռետինե ծածկույթով տարածք', en: 'Rubber surface area', ru: 'Территория с резиновым покрытием' },
      unitPriceAMD: 18000,
      colors: ['Գունավոր երկտון'],
      sizes: ['per m²'],
      descShort: { hy: 'Անվտանգ և դիմացկուն ռետինե ծածկույթներ։' },
      descLong: { hy: 'Ռետինե մակերեսներ՝ երեխաների խաղահրապարակների համար, հարվածի կլանումով և երկար սպասարկման կյանքով։' }
    },

    'grassSurface': {
      title: { hy: 'Խոտածածկույթով տարածք', en: 'Grass covered area', ru: 'Территория с газонным покрытием' },
      unitPriceAMD: 12000,
      colors: ['Բնական','Արհեստական'],
      sizes: ['per m²'],
      descShort: { hy: 'Բնական և արհեստական խոտածածկույթներ։' },
      descLong: { hy: 'Խոտածածկույթ՝ բնական կամ արհեստական տարբերակներով, տեղադրում և դրացի խնամք/փոքր վերանորոգում։' }
    },


    'service.build': { title: { hy: 'Ընդհանուր շինարարություն', en: 'General construction', ru: 'Общее строительство' }, rateAMD: 180000 },
    'service.reno':  { title: { hy: 'Վերանորոգում', en: 'Renovation', ru: 'Ремонт' }, rateAMD: 120000 },
    'service.full':  { title: { hy: 'Նախագիծ + իրականացում', en: 'Design + execution', ru: 'Проект + реализация' }, rateAMD: 250000 }
  };



  const chatBot   = document.getElementById('chatBot');
  const chatFab   = document.getElementById('chatFab');
  const chatClose = document.getElementById('chatClose');
  let chatBody    = document.getElementById('chatBody');
  let chatInput   = document.getElementById('chatInput');
  let chatSend    = document.getElementById('chatSend');

  if(!chatBot || !chatFab){
    console.warn('Missing #chatBot or #chatFab — aborting chat init.');
    return;
  }


  if(!chatBody){
    console.warn('#chatBody not found — creating fallback container inside #chatBot.');
    chatBody = document.createElement('div');
    chatBody.id = 'chatBody';
    chatBot.appendChild(chatBody);
  }

  let currentLang = (navigator.language || 'hy').slice(0,2) || 'hy';


  function esc(s){ return String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
  function fmtAMD(n){ return Number(n).toLocaleString() + ' AMD'; }
  function fmtUSD(n){ return (n/410).toFixed(2) + ' USD'; }
  function fmtRUB(n){ return Math.round(n/4.5) + ' RUB'; }
  function localText(obj){ return (obj && (obj[currentLang] || obj.hy)) || ''; }
  function localTitle(key){ const it = CATALOG[key]; return it ? localText(it.title) : key; }

 
  function addMsg(text, who='bot'){
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg ' + (who === 'user' ? 'user' : 'bot');
    const bubble = document.createElement('div'); bubble.className = 'chat-bubble';
    bubble.innerHTML = String(text).replace(/\n/g,'<br>');
    wrap.appendChild(bubble);
    chatBody.appendChild(wrap);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  function addSuggestions(arr){
    const cont = document.createElement('div'); cont.className = 'chat-suggestion';
    arr.forEach(a=>{
      const b = document.createElement('button'); b.type='button'; b.textContent = a.label;
      b.onclick = ()=> { addMsg(a.label,'user'); handleText(a.value || a.label); };
      cont.appendChild(b);
    });
    chatBody.appendChild(cont); chatBody.scrollTop = chatBody.scrollHeight;
  }


  let state = { step: null, pending: {} };

 
  chatFab.addEventListener('click', openChat);
  if(chatClose) chatClose.addEventListener('click', closeChat);
  if(chatSend && chatInput){
    chatSend.addEventListener('click', ()=> { const t = (chatInput.value||'').trim(); if(t){ addMsg(esc(t),'user'); handleText(t); chatInput.value=''; }});
    chatInput.addEventListener('keydown', e=> { if(e.key === 'Enter'){ e.preventDefault(); chatSend.click(); }});
  } else {
    if(!chatSend) console.warn('#chatSend not found; input send unavailable.');
    if(!chatInput) console.warn('#chatInput not found; manual typing unavailable.');
  }

  function openChat(){
    chatBot.classList.remove('closed'); chatBot.setAttribute('aria-hidden','false');
    if(chatBody.children.length === 0) startGreeting();
    setTimeout(()=> { if(chatInput) chatInput.focus(); }, 80);
  }
  function closeChat(){ chatBot.classList.add('closed'); chatBot.setAttribute('aria-hidden','true'); }

  function startGreeting(){
    addMsg('Բարի գալուստ — ինչով կարող եմ օգնել։\n1) Պատվիրել\n2) Հաշվել գինը\n3) Ապրանքներ / մանրամասներ');
    addSuggestions([
      { label:'Պատվիրել', value:'պատվիրել' },
      { label:'Հաշվել գինը', value:'հաշվել գինը' },
      { label:'Ապրանքներ', value:'ապրանքներ' }
    ]);
    state = { step: null, pending: {} };
  }

  
  function detectIntent(text){
    const t = (text||'').toLowerCase();
    if(t.match(/գույ|գույն/)) return 'attr';
    if(t.match(/չափ|մ2|մ²|սմ|մետր/)) return 'price';
    if(t.match(/քանի՞|քանի|հատ/)) return 'qty';
    if(t.match(/ապրանք|նստարան|աղբաման|տաղավար|խաղասարք|բնակելի|ցանկապատ|տանիք|խաղասարք|ռետին|խոտ/)) return 'catalog';
    if(t.match(/պատվիր|order/)) return 'order';
    if(t.match(/նկարագր|description|ապրանք.*տե/)) return 'desc';
    if(t.match(/թեստ|help|օգն/)) return 'help';
    if(t.startsWith('view ') || t.startsWith('view:')) return 'view';
    return 'chat';
  }

  function mapToProductKey(text){
    if(!text) return null;
    text = text.toLowerCase();
    if(/նստարան|bench/.test(text)) return 'bench';
    if(/աղբաման|trash|bin/.test(text)) return 'trashbin';
    if(/տաղավար|pavilion/.test(text)) return 'pavilion';
    if(/խաղասարք|playground/.test(text)) return 'playground';
    if(/բնակելի|residential/.test(text)) return 'residential';
    if(/ցանկապատ|fence/.test(text)) return 'fences';
    if(/տանիք|roof/.test(text)) return 'roofs';
    if(/մարզասարք|sports|մարզ/i.test(text)) return 'sports';
    if(/ներքին|արտաքին|interior|exterior/.test(text)) return 'interiorExterior';
    if(/բետոն|concrete/.test(text)) return 'concrete';
    if(/մետաղական|metalComplex/.test(text)) return 'metalComplex';
    if(/ռետին|rubberSurface/.test(text)) return 'rubberSurface';
    if(/խոտ|grassSurface/.test(text)) return 'grassSurface';
    if(/^\s*1\s*$/.test(text)) return 'bench';
    if(/^\s*2\s*$/.test(text)) return 'trashbin';
    if(/^\s*3\s*$/.test(text)) return 'pavilion';
    if(/^\s*4\s*$/.test(text)) return 'playground';
    if(CATALOG[text]) return text;
    const m = text.match(/view[:\s]+([a-zA-Z0-9._-]+)/);
    if(m && CATALOG[m[1]]) return m[1];
    return null;
  }

  function buildProductDetail(key, long=false){
    const p = CATALOG[key];
    if(!p) return 'Ապրանքը չի գտնվել։';
    let out = `<strong>${localTitle(key)}</strong>\n`;
    if(p.unitPriceAMD) out += `Գին մեկի համար՝ ${fmtAMD(p.unitPriceAMD)} (${fmtUSD(p.unitPriceAMD)} • ${fmtRUB(p.unitPriceAMD)})\n`;
    if(p.colors) out += `Գույներ՝ ${p.colors.join(', ')}\n`;
    if(p.sizes) out += `Չափեր/մոդուլներ՝ ${p.sizes.join(', ')}\n`;
    if(p.descShort && p.descShort.hy) out += `Կարճ նկարագրություն՝ ${p.descShort.hy}\n`;
    if(long && p.descLong && p.descLong.hy) out += `\n${p.descLong.hy}\n`;
    return out;
  }

  function computeProductTotal(key, qty){
    const unit = (CATALOG[key] && CATALOG[key].unitPriceAMD) || 0;
    const qtyn = qty || 1;
    const total = unit * qtyn;
    return { unit, qty: qtyn, total, usd: (total/410).toFixed(2), rub: Math.round(total/4.5) };
  }
  function computeServiceTotal(serviceKey, area){
    const rate = (CATALOG[serviceKey] && CATALOG[serviceKey].rateAMD) || 0;
    const total = Math.round((area||0) * rate);
    return { rate, area, total, usd: (total/410).toFixed(2), rub: Math.round(total/4.5) };
  }

  function handleText(text){
    const intent = detectIntent(text);
    if(state.step) { continueFlow(text); return; }

    if(intent === 'catalog'){ showCatalog(); return; }
    if(intent === 'order'){ startOrderFlow(); return; }
    if(intent === 'price'){ startPriceFlow(text); return; }
    if(intent === 'attr' || intent === 'desc' || intent === 'qty'){ handleAttributeQuery(text); return; }
    if(intent === 'view'){ const k = mapToProductKey(text); if(k){ addMsg(buildProductDetail(k,true)); addSuggestions([{ label:'Պատվիրել', value:'պատվիրել ' + k }]); return; } }
    fallbackAnswer(text);
  }

  function showCatalog(){
    addMsg('Ահա մեր բոլոր ապրանքներն ու ծառայությունները՝');
    const keys = Object.keys(CATALOG);
    const productKeys = keys.filter(k => !k.startsWith('service.'));
    productKeys.forEach(k=>{
      const p = CATALOG[k];
      const title = localTitle(k);
      let short = '';
      if(p.unitPriceAMD) short += `${fmtAMD(p.unitPriceAMD)} — `;
      if(p.descShort && p.descShort.hy) short += `${p.descShort.hy}`;
      addMsg(`<strong>${title}</strong>\n${short}`);
      addSuggestions([
        { label:'Մանրամասներ', value: 'view ' + k },
        { label:'Պատվիրել', value: 'պատվիրել ' + k }
      ]);
    });
    const serviceKeys = keys.filter(k => k.startsWith('service.'));
    if(serviceKeys.length){
      addMsg('Ծառայություններ՝');
      serviceKeys.forEach(sk=>{
        addMsg(`<strong>${localTitle(sk)}</strong>\n${(CATALOG[sk].rateAMD? 'Արժեք՝ ' + fmtAMD(CATALOG[sk].rateAMD) : '')}`);
      });
    }
    state.step = 'catalog_select';
  }

  function startPriceFlow(text){
    const prodKey = mapToProductKey(text);
    if(prodKey){
      const qty = Number((text.match(/\d+/)||['1'])[0]) || 1;
      const obj = computeProductTotal(prodKey, qty);
      addMsg(`${localTitle(prodKey)} — ${obj.qty} x ${fmtAMD(obj.unit)} = ${fmtAMD(obj.total)} (${obj.usd} • ${obj.rub})`);
      addSuggestions([{ label:'Պատվիրել', value:'պատվիրել ' + prodKey }]);
      return;
    }
    const areaMatch = text.match(/(\d{1,6})\s*(մ²|m2|m\^2|m)/i);
    if(areaMatch){
      addMsg('Գրեք ծառայության տեսակը (1) Շինարարություն (2) Վերանորոգում (3) Նախագիծ+իրականացում։');
      state.step = 'price_choose_service';
      state.pending.area = Number(areaMatch[1]);
      return;
    }
    addMsg('Խնդրում եմ գրեք օրինակ "նստարան 3" կամ "շինարարություն 80 մ²"։');
    state.step = 'price_await_kind';
  }

  function startOrderFlow(){
    addMsg('Ի՞նչ եք ուզում պատվիրել՝ ապրանք (նստարան/աղբաման) թե ծառայություն (շինարարություն)։');
    state.step = 'order_which';
  }

  function handleAttributeQuery(text){
    const key = mapToProductKey(text) || state.pending.product || null;
    const t = (text||'').toLowerCase();
    if(!key){
      addMsg('Որ ապրանքի մասին եք հարցում անում (նստարան/աղբաման/տաղավար/խաղասարք)։');
      state.step = 'await_attribute_product';
      state.pending.attribute = t;
      return;
    }
    if(t.includes('նկարագր') || t.includes('description') || t.includes('հատված')){
      const long = /երկ|մեծ/.test(t) || /long|detailed/.test(t);
      addMsg(buildProductDetail(key, long));
      addSuggestions([{ label:'Պատվիրել', value:'պատվիրել ' + key }]);
      return;
    }
    if(t.includes('գույ') || t.includes('գույն')){
      const p = CATALOG[key];
      addMsg(`${localTitle(key)} — հասանելի գույներ՝ ${p.colors.join(', ')}.`);
      addSuggestions([{ label:'Պատվիրել այս գույնով', value: 'պատվիրել ' + key }]);
      return;
    }
    if(t.includes('չափ') || t.includes('մետր') || t.includes('սմ') || t.includes('size')){
      const p = CATALOG[key];
      addMsg(`${localTitle(key)} — հասանելի չափեր/մոդուլներ՝ ${p.sizes.join(', ')}.`);
      return;
    }
    if(t.includes('գն') || t.includes('գին') || t.includes('արժե')){
      const qty = Number((text.match(/\d+/)||['1'])[0]) || 1;
      const obj = computeProductTotal(key, qty);
      addMsg(`${localTitle(key)} — ${obj.qty} x ${fmtAMD(obj.unit)} = ${fmtAMD(obj.total)} (${obj.usd} • ${obj.rub})`);
      addSuggestions([{ label:'Պատվիրել', value: 'պատվիրել ' + key }]);
      return;
    }
    addMsg(buildProductDetail(key, false));
  }

  function continueFlow(text){
    const s = state.step;
    if(!s) return handleText(text);

    if(s === 'catalog_select'){
      const key = mapToProductKey(text);
      if(!key){ addMsg('Չհամապատասխանող անուն։ Խնդրում ենք գրեք "նստարան" կամ սեղմեք կոճակներից։'); return; }
      addMsg(buildProductDetail(key,false));
      addSuggestions([{ label:'Մանրամասներ (երկար)', value:'view ' + key }, { label:'Պատվիրել', value: 'պատվիրել ' + key }]);
      state.step = null; state.pending = {};
      return;
    }

    if(s === 'price_await_kind'){ handleText(text); return; }

    if(s === 'price_choose_service'){
      let serviceKey = null;
      if(/1|ենգ|շին/i.test(text)) serviceKey = 'service.build';
      if(/2|վեր/i.test(text)) serviceKey = 'service.reno';
      if(/3|նախ/i.test(text)) serviceKey = 'service.full';
      if(!serviceKey){ addMsg('Գրեք 1/2/3 կամ ծառայության անունը։'); return; }
      const area = state.pending.area || 0;
      if(!area){ addMsg('Գրեք տարածությունը մ², օրինակ՝ 80'); state.step = 'price_ask_area'; state.pending.serviceType = serviceKey; return; }
      const obj = computeServiceTotal(serviceKey, area);
      addMsg(`Ընդհանուր արժեքը՝ ${fmtAMD(obj.total)} (${obj.usd} • ${obj.rub}) — ըստ ${localTitle(serviceKey)}`);
      addSuggestions([{ label:'Պատվիրել այս հաշվով', value:'պատվիրել' }]);
      state.step = null; state.pending = {}; return;
    }

    if(s === 'price_ask_area'){
      const area = Number((text.match(/\d+/)||['0'])[0]) || 0;
      if(!area){ addMsg('Խնդրում ենք գրեք թիվ մ²-ով'); return; }
      const serviceKey = state.pending.serviceType;
      const obj = computeServiceTotal(serviceKey, area);
      addMsg(`Ընդհանուր արժեքը՝ ${fmtAMD(obj.total)} (${obj.usd} • ${obj.rub})`);
      addSuggestions([{ label:'Պատվիրել այս հաշվով', value:'պատվիրել' }]);
      state.step = null; state.pending = {}; return;
    }

    if(s === 'order_which'){
      const key = mapToProductKey(text);
      if(key){
        state.pending.product = key;
        addMsg(`Քանի հատ եք ուզում։ (գրեք թիվ)`); state.step = 'order_qty_for_product'; return;
      }
      if(/շին|build|վեր|reno|նախագ/i.test(text.toLowerCase())){
        addMsg('Ընտրեք ծառայության տեսակը՝ 1) Ընդհանուր շինարարություն 2) Վերանորոգում 3) Նախագիծ+իրականացում'); state.step = 'order_service_type'; return;
      }
      addMsg('Չհասկացա, գրեք՝ "նստարան" կամ "շինարարություն"'); return;
    }

    if(s === 'order_qty_for_product'){
      const q = Number((text.match(/\d+/)||['1'])[0]) || 1;
      state.pending.qty = q;
      const obj = computeProductTotal(state.pending.product, q);
      addMsg(`${localTitle(state.pending.product)} — ${obj.qty} հատ — ընդհանուր ${fmtAMD(obj.total)} (${obj.usd} • ${obj.rub}). Պատվիրե՞լ (այո/ոչ)`);
      state.step = 'order_confirm_product'; return;
    }

    if(s === 'order_confirm_product'){
      if(/^(այո|yes|ok|ա)$/i.test((text||'').toLowerCase())){ state.pending.orderType = 'product'; addMsg('Գրեք Ձեր անունը։'); state.step='order_collect_name'; return; }
      else { addMsg('Լավ, չեղյալ։'); state.step=null; state.pending={}; return; }
    }

    if(s === 'order_service_type'){
      let sk = null;
      if(/1|ընդգ|շին/i.test(text)) sk = 'service.build';
      if(/2|վեր/i.test(text)) sk = 'service.reno';
      if(/3|նախ/i.test(text)) sk = 'service.full';
      if(!sk){ addMsg('Գրեք 1/2/3 կամ անունը'); return; }
      state.pending.serviceType = sk;
      addMsg('Գրեք տարածությունը մ² (օր.՝ 80)'); state.step='order_service_area'; return;
    }

    if(s === 'order_service_area'){
      const area = Number((text.match(/\d+/)||['0'])[0]) || 0;
      if(!area){ addMsg('Խնդրում եմ գրեք թիվ մ²-ով'); return; }
      state.pending.area = area;
      const obj = computeServiceTotal(state.pending.serviceType, area);
      addMsg(`Ընդհանուր արժեքը՝ ${fmtAMD(obj.total)}. Պատվիրե՞լ (այո/ոչ)`); state.step='order_confirm_service'; return;
    }

    if(s === 'order_confirm_service'){
      if(/^(այո|yes|ok|ա)$/i.test((text||'').toLowerCase())){ state.pending.orderType = 'service'; addMsg('Գրեք Ձեր անունը։'); state.step='order_collect_name'; return; }
      else { addMsg('Լավ, կարող եք չափը փոխել կամ սկսել նորից։'); state.step=null; state.pending={}; return; }
    }

    if(s === 'order_collect_name'){ state.pending.name = text; addMsg('Գրեք կոնտակտ (հեռախոս կամ email)'); state.step='order_collect_contact'; return; }
    if(s === 'order_collect_contact'){ state.pending.contact = text; addMsg('Հասցե կամ առաքման մանրամասներ (եթե չեք ուզում՝ գրեք "-")'); state.step='order_collect_address'; return; }
    if(s === 'order_collect_address'){ state.pending.address = text; addMsg('Լրացուցիչ նշումներ (չափ/գույն/ժամկետ) կամ "-"'); state.step='order_collect_notes'; return; }
    if(s === 'order_collect_notes'){ state.pending.notes = text; finalizeOrder(); return; }

    if(s === 'await_attribute_product'){
      const key = mapToProductKey(text);
      if(!key){ addMsg('Չգտա այդ ապրանքը։ Գրեք՝ "նստարան" կամ "աղբաման"'); return; }
      handleAttributeQuery(state.pending.attribute + ' ' + key);
      state.step = null; state.pending = {}; return;
    }

    if(s === 'offer_forward'){ continueFlowOfferForward(text); return; }

    fallbackAnswer(text);
  }

  async function finalizeOrder(){
    const p = state.pending;
    let body = `Պատվերի տեսակ: ${p.orderType === 'product' ? (localTitle(p.product)||'Ապրանք') : (localTitle(p.serviceType)||'Ծառայություն')}\n`;
    if(p.qty) body += `Քանակ: ${p.qty}\n`;
    if(p.area) body += `Տարածք: ${p.area} մ²\n`;
    if(p.name) body += `Անուն: ${p.name}\n`;
    if(p.contact) body += `Կոնտակտ: ${p.contact}\n`;
    if(p.address) body += `Հասցե: ${p.address}\n`;
    if(p.notes) body += `Նշումներ: ${p.notes}\n`;

    addMsg('Ուղարկվում է պատվերը… ⏳');

    try{
      if(typeof emailjs !== 'undefined' && emailjs.send){
        await emailjs.send('service_38y47i4','template_rpzxtii',{
          name: p.name || '—',
          email: (p.contact && p.contact.includes('@')) ? p.contact : '',
          phone: (p.contact && !p.contact.includes('@')) ? p.contact : '',
          message: body
        });
        addMsg('✅ Ձեր պատվերը հաջողությամբ ուղարկվեց։ Մենք կկապվենք ձեզ շատ շուտով։');
      } else {
        addMsg('✅ (Demo) Պատվերը ձևակերպվեց — Email ծառայությունը ներկա պահին հասանելի չէ։');
      }
    }catch(e){
      console.error(e); addMsg('❌ Սխալ՝ պատվերը չի ուղարկվել, խնդրում ենք փորձել ավելի ուշ կամ զանգահարել +374 96 837878');
    }

    state = { step: null, pending: {} };
  }

  function fallbackAnswer(text){
    const t = (text||'').toLowerCase();
    if(t.includes('ժամ') || t.includes('ժամեր')){ addMsg('Աշխ. ժամեր՝ Կիր–Ուրբ 9:00–18:00։'); return; }
    addMsg('Չհասկանալով — ուզում եք, որ ուղարկեմ հարցը վաճառքի մենեջերին էլ․ հասցեին (այո/ոչ)՞։');
    state.step = 'offer_forward'; state.pending.forwardQuestion = text;
  }

  function continueFlowOfferForward(text){
    if(/^(այո|yes|ok|ա)$/i.test((text||'').toLowerCase())){
      const body = `User question (chat):\n\n${state.pending.forwardQuestion}\n\nContact if provided: ${state.pending.contact || '—'}`;
      addMsg('Ուղարկում եմ մենեջերին… ⏳');
      if(typeof emailjs !== 'undefined' && emailjs.send){
        emailjs.send('service_38y47i4','template_rpzxtii',{ name:'Chat visitor', email:'', phone:'', message: body })
          .then(()=> addMsg('✅ Հարցը ուղարկվեց։ Պատասխան կտանք աշխատանքային ժամերին։'))
          .catch(e=> { console.error(e); addMsg('❌ Հարցը չի ուղարկվել։'); });
      } else {
        addMsg('✅ (Demo) Հարցը գրանցվեց (EmailJS չի հասանելի)։');
      }
    } else {
      addMsg('Լավ — կարող եմ բացել Կապ էջը կամ թողնել նշում։');
    }
    state.step = null; state.pending = {};
  }

  window.chatComputeEstimate = function(area, typeKey){ return computeServiceTotal(typeKey, area); };

})();
