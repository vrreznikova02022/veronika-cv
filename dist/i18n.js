window.CV_RU=structuredClone(CV);
const translations={
 'Вероника Резникова':'Veronika Reznikova','Вероника':'Veronika','Резникова':'Reznikova','Веб-дизайнер':'Web designer',
 'Обо мне':'About me','Проекты':'Projects','Визуалы':'Visuals','Опыт работы':'Experience','Навыки и AI':'Skills & AI','Контакты':'Contact','Портфолио':'Portfolio','Резюме':'CV',
 'Привет, я':'Hi, I’m','Веб-дизайнер и арт-директор.':'Web designer and art director.',
 'Создаю сайты и интерфейсы с вниманием к опыту и эстетике.':'I design websites and interfaces with care for experience and aesthetics.',
 'Смотреть проекты':'View projects','Обсудить вакансию':'Discuss a role','Дизайн и команда':'Design & teamwork',
 'Проектирую сайты, сервисы и приложения. Работала арт-директором в агентстве, координировала дизайнеров и кураторов. Использую AI в работе и оптимизирую процессы.':'I design websites, services and applications. My experience includes agency art direction and coordinating designers and mentors. I use AI in my work and optimise processes.',
 'Избранный проект':'Featured project','Все проекты ↗':'All projects ↗','Характер бренда.':'Brand character.','На языке digital.':'In a digital language.','Открыть кейс ↗':'View case ↗',
 'Мой рабочий стол':'My desktop','Рабочий стол':'Desktop','Мои проекты':'My projects','В интернете':'Find me online','Рассматриваю вакансии':'Open to roles','UI/UX-дизайн · Веб-дизайн · Арт-дирекшн · AI-креатор':'UI/UX design · Web design · Art direction · AI creator',
 'Минск · UTC+3':'Minsk · UTC+3','Минск, Беларусь · UTC+3':'Minsk, Belarus · UTC+3','Сделано с вниманием к деталям':'Made with attention to detail',
 'Сайты, интерфейсы и немного характера.':'Websites, interfaces and a little character.','Все':'All','Сайты':'Websites','Интерфейсы':'Interfaces','Материалы':'Resources','AI-визуалы':'AI visuals','Найти проект':'Find a project','Категория проектов':'Project category',
 'Ничего не нашлось':'No projects found','Попробуйте другое название или выберите все проекты.':'Try another name or select all projects.','Показать все проекты':'Show all projects',
 'Ещё реализованные сайты':'More live websites','Больше работ и визуальных экспериментов —':'More work and visual experiments','в Figma ↗':'in Figma ↗',
 'Дизайн, управление проектами и обучение.':'Design, project management and education.','Резюме для печати ↗':'Print-friendly CV ↗',
 'Образование':'Education','Белорусский государственный университет':'Belarusian State University','Факультет социальных коммуникаций · Бакалавриат':'Faculty of Social Communications · Bachelor’s degree','Веб-дизайн и UI/UX-дизайн · Курс':'Web design and UI/UX design · Course',
 'Навыки и инструменты':'Skills & tools','Системный подход. Внимание к деталям.':'A systematic approach. Attention to detail.',
 'Соединяю исследование, логику и визуальный язык. Умею не только создавать макеты, но и выстраивать процесс вокруг них.':'I connect research, logic and visual language, designing both interfaces and the process around them.',
 'Исследую и проектирую':'Research & planning','Анализ аудитории, рынка и конкурентов, карты эмпатии, User Flow и CJM. Информационная архитектура, wireframes и интерактивные прототипы.':'Audience, market and competitor research, empathy maps, user flows and customer journey maps. Information architecture, wireframes and interactive prototypes.',
 'Создаю дизайн':'Interface design','Сайты, сервисы, мобильные приложения и презентации. Адаптивные интерфейсы, UI-компоненты и дизайн-системы. Типографика, композиция и визуальная иерархия.':'Websites, services, mobile applications and presentations. Responsive interfaces, UI components and design systems. Typography, composition and visual hierarchy.',
 'Довожу до результата':'Design delivery','Дизайн-аудит, редизайн, подготовка макетов к разработке и контроль реализации. Взаимодействие с разработчиками и маркетологами, презентация и аргументация решений.':'Design audits, redesigns, developer handoffs and implementation reviews. Collaboration with developers and marketers, presenting and explaining design decisions.',
 'Веду команду':'Team leadership','Арт-дирекшн, коммуникация с клиентами, сметы и документация. Координация дизайнеров и кураторов, наставничество и развивающая обратная связь.':'Art direction, client communication, estimates and documentation. Coordinating designers and course mentors, mentoring and constructive feedback.',
 'Рабочие инструменты':'Work tools','и другие':'and others','AI — часть моего процесса':'AI is part of my process',
 'Активно использую AI-инструменты в работе: создаю концепции и визуальные направления, оптимизирую и ускоряю дизайн-процессы.':'I actively use AI tools in my work to create concepts and visual directions, and to optimise and accelerate design processes.',
 '01 / Инструменты':'01 / Tools','Применяю AI для решения рабочих задач.':'Use AI to tackle work tasks.','02 / Концепции':'02 / Concepts','Создаю концепции и визуальные направления.':'Create concepts and visual directions.','03 / Процессы':'03 / Processes','Оптимизирую и ускоряю работу над дизайном.':'Optimise and accelerate design workflows.',
 'Русский — родной · Английский — B1':'Russian — native · English — B1','Буду рада':'Let’s get','знакомству':'in touch',
 'Рассматриваю вакансии в веб- и UI/UX-дизайне и арт-дирекшне. Буду рада обсудить задачи вашей команды и рассказать о своём опыте.':'I’m considering web design, UI/UX design and art direction roles. I’d be happy to discuss your team’s goals and share more about my experience.',
 'Написать в Telegram ↗':'Message me on Telegram ↗','Telegram · Предпочтительно':'Telegram · Preferred','Электронная почта':'Email','Скопировать Telegram':'Copy Telegram','Скопировать почту':'Copy email','Скопировано':'Copied','Скопируйте адрес из строки контакта':'Copy the address from the contact details',
 'Коллекция моих работ и визуальных решений.':'A collection of my work and visual solutions.','Изображение JPEG':'JPEG image',
 'Моя роль':'My role','Задача':'The task','Что сделано':'The work','← Назад к резюме':'← Back to CV','Следующий проект →':'Next project →',
 'На главную':'Go to home','Перейти к содержимому':'Skip to content','Быстрая навигация':'Quick navigation','Файлы рабочего стола':'Desktop files','Резюме Вероники':'Veronika’s CV','Закрыть окно':'Close window','Свернуть окно':'Minimise window','Развернуть окно':'Maximise window','Вернуть размер окна':'Restore window size','Предыдущий раздел':'Previous section','Следующий раздел':'Next section','Открыть разделы':'Open navigation','Закрыть разделы':'Close navigation','Открыть контакты':'Open contact details','Разделы резюме':'CV sections','Док':'Dock','Версия резюме для печати':'Print-friendly CV',
 'Всё начинается со знакомства.':'It starts with a hello.','Открыть резюме ↗':'Open CV ↗','Закрыть проект':'Close project','Предыдущий проект':'Previous project','Следующий проект':'Next project','Закрыть изображение':'Close image','Увеличить изображение':'Zoom in','Вписать изображение в окно':'Fit image to window','Открыть изображение в новой вкладке':'Open image in a new tab','Предыдущее изображение':'Previous image','Следующее изображение':'Next image',
 'Превью проекта VIEW':'VIEW project preview'
};
function translatedText(value){
 const trimmed=value.trim();let result=translations[trimmed];
 if(result===undefined){
  if(/^Рабочий стол \/ /.test(trimmed))result='Desktop / '+translatedText(trimmed.slice(15));
  else if(/^Проекты \/ /.test(trimmed))result='Projects / '+translatedText(trimmed.slice(10));
  else if(/^\d+ изображений$/.test(trimmed))result=trimmed.replace('изображений','images');
  else if(/^Визуал \d+/.test(trimmed))result=trimmed.replace('Визуал','Visual');
  else if(/^Открыть Визуал \d+$/.test(trimmed))result=trimmed.replace('Открыть Визуал','Open visual');
  else if(/^Открыть Visual \d+$/.test(trimmed))result=trimmed.replace('Открыть Visual','Open visual');
  else if(/^Превью визуала \d+$/.test(trimmed))result=trimmed.replace('Превью визуала','Visual preview');
  else if(/^Увеличить изображение \d+ проекта /.test(trimmed))result=trimmed.replace('Увеличить изображение','Enlarge image').replace(' проекта ',' from ');
  else if(/ — превью проекта$/.test(trimmed))result=trimmed.replace(' — превью проекта',' — project preview');
  else if(/ — обложка проекта$/.test(trimmed))result=trimmed.replace(' — обложка проекта',' — project cover');
  else if(/^Увеличить обложку проекта /.test(trimmed))result=trimmed.replace('Увеличить обложку проекта','Enlarge cover of');
  else if(/ — иллюстрация \d+$/.test(trimmed))result=trimmed.replace(' — иллюстрация ',' — case image ');
  else if(/ — экран \d+$/.test(trimmed))result=trimmed.replace(' — экран ',' — screen ');
  else if(/ — Вероника Резникова$/.test(trimmed))result=translatedText(trimmed.replace(' — Вероника Резникова',''))+' — Veronika Reznikova';
 }
 return result===undefined?value:value.replace(trimmed,result);
}
const textOrigins=new WeakMap(),attributeOrigins=new WeakMap();
let savedLanguage;try{savedLanguage=localStorage.getItem('cv-language')}catch{}
window.cvLocale=new URLSearchParams(location.search).get('lang')||savedLanguage||'ru';if(!['ru','en'].includes(window.cvLocale))window.cvLocale='ru';
Object.assign(CV,structuredClone(window.cvLocale==='en'?window.CV_EN:window.CV_RU));
window.localizeUI=function(root=document){
 const en=window.cvLocale==='en';document.documentElement.lang=window.cvLocale;const description=document.querySelector('meta[name=description]');if(description)description.content=en?'Veronika Reznikova — web designer and art director. Experience, skills, selected projects and contact details. 7+ years in design, 130+ projects.':'Вероника Резникова — веб-дизайнер и арт-директор. Опыт работы, компетенции, избранные проекты и контакты. 7+ лет в дизайне, 130+ проектов.';
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){
  if(node.parentElement?.closest('script,style,[data-no-translate]'))continue;
  if(!textOrigins.has(node))textOrigins.set(node,node.textContent);
  const value=textOrigins.get(node);node.textContent=en?translatedText(value):value;
 }
 for(const el of root.querySelectorAll('[aria-label],[placeholder],[alt],[title]')){
  let originals=attributeOrigins.get(el);if(!originals){originals={};attributeOrigins.set(el,originals)}
  for(const key of ['aria-label','placeholder','alt','title']){if(!el.hasAttribute(key))continue;const v=el.getAttribute(key);if(!(key in originals)||v!==originals[key]&&v!==translatedText(originals[key]))originals[key]=v;el.setAttribute(key,en?translatedText(originals[key]):originals[key])}
 }
 document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('selected',b.dataset.lang===window.cvLocale);b.setAttribute('aria-pressed',String(b.dataset.lang===window.cvLocale))});
 for(const a of document.querySelectorAll('a[href^="cv.html"]'))a.href='cv.html?lang='+window.cvLocale;
 document.title=en?translatedText(document.title):document.title.replace(' — Veronika Reznikova',' — Вероника Резникова');
};
document.addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(!b||b.dataset.lang===window.cvLocale)return;window.cvLocale=b.dataset.lang;try{localStorage.setItem('cv-language',window.cvLocale)}catch{}const url=new URL(location.href);url.searchParams.set('lang',window.cvLocale);history.replaceState(null,'',url);Object.assign(CV,structuredClone(window.cvLocale==='en'?window.CV_EN:window.CV_RU));document.dispatchEvent(new CustomEvent('cv-language-change'));window.localizeUI()});
