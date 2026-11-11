// Sổ tay Tip: lọc theo từ khóa và theo chương
(function(){
  const o=document.getElementById('OTim'),s=document.getElementById('ChonChuong'),
        d=[...document.querySelectorAll('.DongTip')],k=document.getElementById('KhongCo'),dem=document.getElementById('SoKetQua');
  function loc(){
    const q=o.value.trim().toLowerCase(),c=s.value;let n=0;
    d.forEach(r=>{const ok=(!c||r.dataset.c===c)&&(!q||r.dataset.t.includes(q));r.hidden=!ok;if(ok)n++});
    k.hidden=n>0;dem.textContent=n+' tip';
  }
  o.addEventListener('input',loc);s.addEventListener('change',loc);loc();
})();
