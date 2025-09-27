const dlg=document.getElementById('pop');const titleEl=document.getElementById('pop-title');const textEl=document.getElementById('pop-text');
document.querySelectorAll('.hotspot:not(.link)').forEach(btn=>{
  btn.addEventListener('click',()=>{
    titleEl.textContent=btn.dataset.title||'Hotspot';
    textEl.textContent=btn.dataset.text||'';
    dlg.showModal();
  });
});
dlg.addEventListener('click',(e)=>{
  const card=dlg.querySelector('.modal-card').getBoundingClientRect();
  const inside=e.clientX>=card.left && e.clientX<=card.right && e.clientY>=card.top && e.clientY<=card.bottom;
  if(!inside) dlg.close();
});

// ====== AUDIO AUTOPLAY (no button) ======
const bg = document.getElementById('bg-music');
const intro = document.getElementById('intro-voice');
if (bg) bg.volume = 0.35;
if (intro) intro.volume = 0.9;
window.addEventListener('DOMContentLoaded', async () => {
  try { await Promise.all([intro?.play(), bg?.play()]); } catch (e) {}
});
window.addEventListener('pointerdown', () => {
  intro?.play().catch(()=>{}); bg?.play().catch(()=>{});
}, {once:true});
