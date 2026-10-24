/* Employment dates are known to month precision. Completed roles include
   both stated months; an ongoing role is estimated from its month's first day. */
(() => {
 const periods=[['2019-02',null],['2023-10','2026-02'],['2024-03','2025-10'],['2023-10','2024-04'],['2023-06','2024-02'],['2023-05','2024-02'],['2022-01','2024-04']];
 const plural=(n,forms)=>forms[n%10===1&&n%100!==11?0:n%10>=2&&n%10<=4&&(n%100<12||n%100>14)?1:2];
 const today=now=>{
  const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Minsk',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(now);
  const get=k=>Number(parts.find(p=>p.type===k).value);
  return new Date(Date.UTC(get('year'),get('month')-1,get('day')));
 };
 window.employmentDuration=(index,locale='ru',now=new Date())=>{
  const [start,end]=periods[index], [sy,sm]=start.split('-').map(Number);
  const current=today(now);
  let months,days=0;
  if(end){const [ey,em]=end.split('-').map(Number);months=(ey-sy)*12+em-sm+1}
  else {months=(current.getUTCFullYear()-sy)*12+current.getUTCMonth()-(sm-1);days=current.getUTCDate()-1}
  months=Math.max(0,months);
  const values=[Math.floor(months/12),months%12,...(!end?[days]:[])];
  const ru=[['год','года','лет'],['месяц','месяца','месяцев'],['день','дня','дней']], en=['year','month','day'];
  const parts=values.map((n,i)=>n?`${n} ${locale==='en'?en[i]+(n===1?'':'s'):plural(n,ru[i])}`:'').filter(Boolean);
  const text=parts.join(' ')||(locale==='en'?'0 days':'0 дней');
  return {text:(!end?'≈ ':'')+text,title:locale==='en'?(end?'Calculated from the stated months, including the first and last month':'Estimated from the first day of the start month; updated daily in Minsk time'):(end?'Расчёт по указанным месяцам, включая первый и последний месяц':'Примерно: с первого дня месяца начала работы; обновляется ежедневно по времени Минска')};
 };
 window.experienceDurationMarkup=index=>{
  const value=window.employmentDuration(index,window.cvLocale);
  return `<div class="experience-duration" data-experience-duration="${index}" data-no-translate title="${value.title}">(${value.text})</div>`;
 };
 const refresh=()=>document.querySelectorAll('[data-experience-duration]').forEach(el=>{const v=window.employmentDuration(Number(el.dataset.experienceDuration),window.cvLocale);el.textContent=`(${v.text})`;el.title=v.title});
 setInterval(refresh,60000);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
 document.addEventListener('cv-language-change',refresh);
})();
