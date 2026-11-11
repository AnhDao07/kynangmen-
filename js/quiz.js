// Quiz: đoán xem chủ đề / tip nằm trong chương nào (dữ liệu lấy từ dulieu.js)
(function(){
  const C=DULIEU.chapters.slice(0,9),box=document.getElementById('KhungQuiz');
  const mix=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  const ngan=[];
  C.forEach((c,ci)=>c.topics.forEach(t=>{
    ngan.push({q:'Chủ đề “'+t.vi+'” thuộc chương nào?',a:ci});
    t.tips.forEach(k=>ngan.push({q:'Tip '+k[0]+': “'+k[1]+'” nằm trong chương nào?',a:ci}));
  }));
  const SO=10;let ds,i,diem;
  const h=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
  function bat(){ds=mix(ngan).slice(0,SO);i=0;diem=0;hien()}
  function hien(){
    box.replaceChildren();
    if(i>=SO){
      box.append(h('p','CauHoi','Hoàn thành!'),h('div','KetQuaSo',diem+' / '+SO),
        h('p','GhiChu',diem>=8?'Tuyệt vời, bạn nắm rất chắc bố cục cuốn sách.':diem>=5?'Khá tốt. Xem lại các chương còn lẫn nhé.':'Hãy đọc lại các chương rồi thử lần nữa.'));
      const hang=h('div','HangNut');const n=h('button','NutVang NutNho','Chơi lại');n.onclick=bat;
      const a=h('a','NutXanh NutNho','Xem lại các chương');a.href='../index.html#chuong';hang.append(n,a);box.append(hang);return;
    }
    const q=ds[i],tien=h('div','TienDo');tien.append(h('i'));tien.firstChild.style.width=(i/SO*100)+'%';
    const dap=h('div','DapAn');
    const opts=mix([q.a,...mix(C.map((_,x)=>x).filter(x=>x!==q.a)).slice(0,3)]);
    opts.forEach(x=>{const b=h('button','','Chương '+(x+1)+' · '+C[x].title);
      b.onclick=()=>{[...dap.children].forEach((e,j)=>{e.disabled=true;if(opts[j]===q.a)e.classList.add('Dung')});
        if(x===q.a)diem++;else b.classList.add('Sai');
        const tiep=h('button','NutVang NutNho',i===SO-1?'Xem kết quả':'Câu tiếp theo');tiep.style.marginTop='18px';tiep.onclick=()=>{i++;hien()};box.append(tiep)};
      dap.append(b)});
    box.append(h('small','GhiChu','Câu '+(i+1)+' / '+SO),tien,h('p','CauHoi',q.q),dap);
  }
  bat();
})();
