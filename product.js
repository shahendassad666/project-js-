
// يظهر الكروت من تحت
window.addEventListener('scroll', ()=>{
  document.querySelectorAll('.reveal').forEach(c=>{
    if(c.getBoundingClientRect().top < window.innerHeight - 50) c.classList.add('show');
  });
});

// فلترة لما تيجي من الهوم product.html?cat=shirts
const cat = new URLSearchParams(window.location.search).get('cat');
if(cat){
  document.querySelectorAll('.p-card').forEach(card=>{
    if(card.dataset.cat !== cat) card.style.display = 'none';
  });
}

