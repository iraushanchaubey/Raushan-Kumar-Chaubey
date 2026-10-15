/* Scroll and load animations: split headline, scroll reveals, count-up stats,
   floating shapes, marquee, parallax and progress bar.
   Respects prefers-reduced-motion (everything is shown without motion). */
(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function $(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
var h1=$('h1')[0],n=0,fr=document.createDocumentFragment();
Array.prototype.slice.call(h1.childNodes).forEach(function(c){
 if(c.nodeType===3){c.textContent.split('').forEach(function(t){var s=document.createElement('span');s.className='ch';s.style.setProperty('--i',n++);s.textContent=t;fr.appendChild(s)})}
 else fr.appendChild(c.cloneNode())});
h1.setAttribute('aria-label','Raushan Chaubey');h1.textContent='';h1.appendChild(fr);
$('h2,.stats div,.proj a,.row,.tools div,form label,form .btn,footer').forEach(function(el){
 el.classList.add('rv');
 el.style.setProperty('--d',Math.min(Array.prototype.indexOf.call(el.parentNode.children,el),3)*100+'ms')});
$('h2').forEach(function(h){var s=document.createElement('span');s.className='wipe';while(h.firstChild)s.appendChild(h.firstChild);h.appendChild(s)});
function count(b){var v=parseFloat(b.dataset.n),d=(b.dataset.n.split('.')[1]||'').length,s=performance.now();
 (function f(t){var p=Math.min((t-s)/1400,1);b.textContent=(v*(1-Math.pow(1-p,3))).toFixed(d)+b.dataset.s;if(p<1)requestAnimationFrame(f)})(s)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){
 if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 var b=e.target.parentNode.className==='stats'&&e.target.querySelector('b');if(b)count(b)})},{threshold:.15});
$('.rv').forEach(function(el){rm?el.classList.add('in'):io.observe(el)});
if(rm)return;
var fx=document.createElement('div');fx.className='fx';fx.setAttribute('aria-hidden','true');
var S=[
[`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='none' stroke='currentColor' stroke-width='2'/></svg>`,6,10,150,.2,.06],
[`<svg viewBox='0 0 100 100'><path d='M50 8v84M8 50h84' fill='none' stroke='currentColor' stroke-width='8'/></svg>`,90,45,50,.32,.25],
[`<i class='blob'></i>`,78,-5,230,.12,0],
[`<svg viewBox='0 0 100 100'><path d='M50 8 94 90H6Z' fill='none' stroke='currentColor' stroke-width='3'/></svg>`,3,75,90,.26,-.15],
[`<svg viewBox='0 0 120 40'><path d='M2 20q15-30 29 0t29 0 29 0 29 0' fill='none' stroke='currentColor' stroke-width='4'/></svg>`,60,60,130,.22,.04],
[`<svg viewBox='0 0 100 100'><defs><pattern id='dg' width='25' height='25' patternUnits='userSpaceOnUse'><circle cx='12' cy='12' r='3' fill='currentColor'/></pattern></defs><rect width='100' height='100' fill='url(#dg)'/></svg>`,40,30,90,.17,0],
[`<svg viewBox='0 0 100 100'><path d='M50 0C54 30 70 46 100 50 70 54 54 70 50 100 46 70 30 54 0 50 30 46 46 30 50 0Z' fill='currentColor'/></svg>`,94,80,46,.35,.3],
[`<svg viewBox='0 0 100 100'><path d='M10 70A40 40 0 0 1 90 70' fill='none' stroke='currentColor' stroke-width='6' stroke-linecap='round'/></svg>`,20,90,110,.28,-.2]];
S.forEach(function(s){var d=document.createElement('div');d.className='sh';d.innerHTML=s[0];d.style.left=s[1]+'%';d.style.width=d.style.height=s[3]+'px';fx.appendChild(d);s.push(d)});
document.body.insertBefore(fx,document.body.firstChild);
var bar=document.createElement('div');bar.className='pg';document.body.appendChild(bar);
var badge=$('.badge')[0],ph=$('.frame')[0],mq=$('.mq-t')[0],th=$('.thumb'),last=scrollY,vel=0,mx=0;
var max=1,w=0;function meas(){w=mq.firstElementChild.offsetWidth;max=document.documentElement.scrollHeight-innerHeight}meas();addEventListener('resize',meas);addEventListener('load',meas);if(document.fonts)document.fonts.ready.then(meas);
(function tick(){
 var sy=scrollY,vh=innerHeight,m=vh+300,rs=th.map(function(t){return t.getBoundingClientRect()});
 vel+=((sy-last)-vel)*.12;last=sy;
 bar.style.transform='scaleX('+(max>0?sy/max:0)+')';
 S.forEach(function(s){s[6].style.transform='translate3d(0,'+((((s[2]*vh/100-sy*s[4])%m)+m)%m-150)+'px,0) rotate('+sy*s[5]+'deg)'});
 badge.style.transform='rotate('+sy*.3+'deg)';
 var c=Math.min(sy,700);
 ph.style.transform='translateY('+c*.1+'px)';
 h1.style.transform='translateX('+(-c*.18)+'px)';
 mx-=1+Math.max(-20,Math.min(20,vel))*.5;if(w&&mx<=-w)mx+=w;if(mx>0)mx-=w;
 mq.style.transform='translateX('+mx+'px)';
 th.forEach(function(t,i){var r=rs[i];t.style.setProperty('--p',((r.top+r.height/2)/vh-.5).toFixed(3))});
 requestAnimationFrame(tick)})();
})();
