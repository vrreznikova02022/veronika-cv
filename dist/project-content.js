/* Case contents in reading order. Add or reorder image(...) and text(...)
   entries below. Image paths are relative to dist/. Text uses plain strings.
   These Lorem ipsum paragraphs are intentional placeholders for the owner. */
(() => {
 const image=(src,alt)=>({type:'image',src,...(alt?{alt}:{})});
 const text=(title,text)=>({type:'text',title,text});
 const content={
  view:[
   image('assets/view1.jpg'),
   text('Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'),
   image('assets/view2.jpg'),
   text('Lorem ipsum dolor','Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.'),
   image('assets/view3.jpg')
  ],
  apes:[
   image('assets/apes1.jpg'),
   text('Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'),
   image('assets/apes2.jpg'),
   text('Lorem ipsum dolor','Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.'),
   image('assets/apes3.jpg')
  ],
  crm:[
   image('assets/crm1.jpg'),
   text('Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'),
   image('assets/crm2.jpg'),
   text('Lorem ipsum dolor','Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.'),
   image('assets/crm3.jpg')
  ]
 };
 for(const data of [CV,window.CV_EN]){
  for(const project of data.projects){if(content[project.id])project.content=structuredClone(content[project.id])}
 }
})();
