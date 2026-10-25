/* Keep prepositions and short function words with the word that follows.
   Applied to visible text after localisation; source data, URLs and search stay unchanged. */
(() => {
 const words={
  ru:'в во вне на с со к ко у о об обо от до по за из из-за из-под без безо для над надо под подо при про перед передо через сквозь между ради около вокруг вдоль внутри возле вместо среди посреди поперёк напротив против после прежде кроме мимо позади поверх посредством благодаря согласно вопреки навстречу относительно и а но да не ни же ли бы',
  en:'a an the I in on at to of by for as with from into onto upon over under about between through without within across during around before after behind against near beside beyond towards toward throughout and or but not'
 };
 const patterns=Object.fromEntries(Object.entries(words).map(([language,list])=>[language,new RegExp('(?<![\\p{L}\\p{N}_/–-])('+list.split(' ').sort((a,b)=>b.length-a.length).join('|')+')[ \\t]+(?=[\\p{L}\\p{N}«„“"‘(])','giu')]));
 window.cvTypography=(value,language='ru')=>String(value).replace(patterns[language]||patterns.ru,'$1\u00a0');
})();
