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