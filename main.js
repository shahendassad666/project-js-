const catBtn = document.querySelector('.cat-btn');
const catList = document.querySelector('.cat-list');
catBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  catList.classList.toggle('show');
});
document.addEventListener('click', () => {
  catList.classList.remove('show');
});
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
if (!href || href === '#') return;
const target = document.querySelector(href);
if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const showMoreBtn = document.querySelector('.show-more');
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('هنا هنزود باقي الكاتيجوري بعدين');
  });
}
const mainNav = document.querySelector('.main-nav');
const topNav = document.querySelector('.top-nav');
const navTop = topNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > navTop) {
    mainNav.classList.add('fixed');
    document.body.style.paddingTop = mainNav.offsetHeight + 'px';
  } else {
    mainNav.classList.remove('fixed');
    document.body.style.paddingTop = '0px';
  }
});

// JS بتاع الـ Hero
document.addEventListener('DOMContentLoaded', function(){
  const shopBtn = document.getElementById('shopBtn');
  const heroImg = document.querySelector('.hero-img img');
  const heroTitle = document.querySelector('.hero-text h1');

  // لما تدوسي على Shop Now ينزل لقسم الشوب
  if(shopBtn){
    shopBtn.addEventListener('click', function(e){
      e.preventDefault();
      const shopSection = document.querySelector('#shop');
      if(shopSection){
        shopSection.scrollIntoView({ behavior:'smooth' });
      } else {
        alert('Shop section لسه مش موجود، اعملي section بـ id="shop"');
      }
    });
  }

  // حركة خفيفة للصورة لما تقفي عليها
  if(heroImg){
    heroImg.addEventListener('mouseenter', function(){
      this.style.transform = 'scale(1.05)';
      this.style.transition = '0.4s';
    });
    heroImg.addEventListener('mouseleave', function(){
      this.style.transform = 'scale(1)';
    });
  }

  // أنيميشن للعنوان أول ما الصفحة تفتح
  if(heroTitle){
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    heroTitle.style.transition = '0.6s';
    setTimeout(function(){
      heroTitle.style.opacity = '1';
      heroTitle.style.transform = 'translateY(0)';
    }, 200);
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const section = document.querySelector('.top-category');
  const track = document.querySelector('.cat-track');
  const cards = document.querySelectorAll('.cat-card');
  const next = document.querySelector('.cat-next');
  const prev = document.querySelector('.cat-prev');

  // كل ما تدخلي السكشن شغّلي، وكل ما تطلعي طفّي عشان يتعاد تاني
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        section.classList.add('in-view');
        cards.forEach(c=>c.classList.add('show'));
      } else {
        section.classList.remove('in-view');
        cards.forEach(c=>c.classList.remove('show'));
      }
    });
  },{threshold:0.3});
  obs.observe(section);

  function step(){
    const card = track.querySelector('.cat-card');
    return card ? card.offsetWidth + 15 : 280;
  }
  next.addEventListener('click', ()=>{
    if(track.scrollLeft + track.clientWidth >= track.scrollWidth - 5){
      track.scrollTo({left:0, behavior:'smooth'});
    } else {
      track.scrollBy({left: step(), behavior:'smooth'});
    }
  });
  prev.addEventListener('click', ()=>{
    if(track.scrollLeft <= 5){
      track.scrollTo({left: track.scrollWidth, behavior:'smooth'});
    } else {
      track.scrollBy({left: -step(), behavior:'smooth'});
    }
  });
});
// ===== script.js - من غير اخفاء =====
document.addEventListener('DOMContentLoaded', function(){

  // 1- التبويبات - Best / New / Sale
  const tabs = document.querySelectorAll('.ftab');
  const cards = document.querySelectorAll('.f-card');

  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(b){ b.classList.remove('active'); });
      tab.classList.add('active');

      const f = tab.dataset.filter;
      cards.forEach(function(c){
        if(f === 'best' || c.dataset.cat === f){
          c.style.display = 'block';
        } else {
          c.style.display = 'none';
        }
      });
    });
  });

  // 2- القلب
  document.querySelectorAll('.f-heart').forEach(function(h){
    h.addEventListener('click', function(){
      h.classList.toggle('liked');
      h.textContent = h.classList.contains('liked') ? '♥' : '♡';
    });
  });

  // 3- Add To Cart
  document.querySelectorAll('.f-add').forEach(function(b){
    b.addEventListener('click', function(){
      b.textContent = '✓ Added';
      b.style.background = '#ff3b30';
      setTimeout(function(){
        b.textContent = 'Add To Cart';
        b.style.background = '#111';
      }, 1500);
    });
  });

  // 4- سكشن العروض 50% و 70% - يظهر على طول من غير اخفاء
  const banners = document.querySelector('.hero-banners');
  if(banners){
    banners.classList.add('in-view');
  }

});
// ===== New Section - زي الفيديو =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.new-section');
  if(!sec) return;
  const grid = sec.querySelector('.new-grid');
  const cards = sec.querySelectorAll('.n-card');

  // انيميشن - يتعاد كل ما تدخلي السكشن
  new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) sec.classList.add('in-view');
      else sec.classList.remove('in-view');
    });
  }, {threshold: 0.15}).observe(sec);

  // التبويبات
  sec.querySelectorAll('.ntab').forEach(function(tab){
    tab.addEventListener('click', function(){
      sec.querySelectorAll('.ntab').forEach(function(b){ b.classList.remove('active'); });
      tab.classList.add('active');
      const f = tab.dataset.filter;
      cards.forEach(function(c){
        c.style.display = (f === 'best' || c.dataset.cat === f) ? 'block' : 'none';
      });
    });
  });

  // القلب
  sec.querySelectorAll('.n-heart').forEach(function(h){
    h.addEventListener('click', function(){
      h.classList.toggle('liked');
      h.textContent = h.classList.contains('liked') ? '♥' : '♡';
    });
  });

  // Add To Cart
  sec.querySelectorAll('.n-add').forEach(function(b){
    b.addEventListener('click', function(){
      b.textContent = '✓ Added';
      b.style.background = '#ff3b30';
      setTimeout(function(){
        b.textContent = 'Add To Cart';
        b.style.background = '#111';
      }, 1500);
    });
  });

  // السلايدر يتحرك لوحده
  let auto = true, dir = 1;
  grid.addEventListener('mouseenter', function(){ auto = false; });
  grid.addEventListener('mouseleave', function(){ auto = true; });

  setInterval(function(){
    if(!auto) return;
    if(dir === 1){
      grid.scrollLeft += 280;
      if(grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10) dir = -1;
    } else {
      grid.scrollLeft -= 280;
      if(grid.scrollLeft <= 10) dir = 1;
    }
  }, 2000);
});
// ===== How It Work - انيميشن زي اللي قبله =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.how-section');
  if(!sec) return;

  new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) sec.classList.add('in-view');
      else sec.classList.remove('in-view');
    });
  }, {threshold: 0.2}).observe(sec);
});
// ===== What's Trending Now =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.trend-section');
  if(!sec) return;
  const grid = sec.querySelector('.trend-grid');

  // انيميشن يتعاد كل مرة
  new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) sec.classList.add('in-view');
      else sec.classList.remove('in-view');
    });
  }, {threshold: 0.15}).observe(sec);

  // زرارين يمين وشمال
  sec.querySelector('.t-next').addEventListener('click', function(){
    grid.scrollLeft += 280;
  });
  sec.querySelector('.t-prev').addEventListener('click', function(){
    grid.scrollLeft -= 280;
  });

  // القلب
  sec.querySelectorAll('.t-heart').forEach(function(h){
    h.addEventListener('click', function(){
      h.classList.toggle('liked');
      h.textContent = h.classList.contains('liked') ? '♥' : '♡';
    });
  });

  // سلايدر يتحرك لوحده زي الفيديو
  let auto = true, dir = 1;
  grid.addEventListener('mouseenter', function(){ auto = false; });
  grid.addEventListener('mouseleave', function(){ auto = true; });

  setInterval(function(){
    if(!auto) return;
    if(dir === 1){
      grid.scrollLeft += 280;
      if(grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10) dir = -1;
    } else {
      grid.scrollLeft -= 280;
      if(grid.scrollLeft <= 10) dir = 1;
    }
  }, 2000);
});
// ===== Deal Countdown - يشتغل لما توصليله ويكمل حتى لو طلعتي =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.deal-section');
  if(!sec) return;

  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');

  // 1- حددي ميعاد انتهاء العرض - هنا 2 يوم و 14 ساعة من اول مرة تفتحي الموقع
  // لو عايزة تغيريه خليه مثلا 3 ايام: 3 * 24 * 60 * 60 * 1000
  let endTime = localStorage.getItem('dealEnd');
  if(!endTime){
    endTime = Date.now() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);
    localStorage.setItem('dealEnd', endTime);
  } else {
    endTime = parseInt(endTime);
  }

  let started = false;
  let timer = null;

  function update(){
    const diff = endTime - Date.now();
    if(diff <= 0){
      // خلص - يفصل
      dEl.textContent = '00';
      hEl.textContent = '00';
      mEl.textContent = '00';
      sEl.textContent = '00';
      clearInterval(timer);
      document.querySelector('.deal-ended').style.display = 'block';
      document.querySelector('.deal-btn').style.display = 'none';
      return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1000*60)) / 1000);

    dEl.textContent = String(d).padStart(2,'0');
    hEl.textContent = String(h).padStart(2,'0');
    mEl.textContent = String(m).padStart(2,'0');
    sEl.textContent = String(s).padStart(2,'0');
  }

  // 2- الانيميشن + العداد يبدأ اول ما توصليله بس
  new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        sec.classList.add('in-view');
        // شغلي العداد مرة واحدة بس، ومش هيقف لو طلعتي
        if(!started){
          started = true;
          update();
          timer = setInterval(update, 1000);
        }
      } else {
        sec.classList.remove('in-view');
        // هنا مش بنوقف العداد، بيسيبوه يكمل
      }
    });
  }, {threshold: 0.2}).observe(sec);
});
// ===== العملاء - كارتين بس وبيتبدلوا =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.clients-section');
  if(!sec) return;
  const cards = sec.querySelectorAll('.c-card');
  let index = 0;
  let auto = true;

  function showTwo(){
    cards.forEach(c => c.classList.remove('show'));
    cards[index % cards.length].classList.add('show');
    cards[(index + 1) % cards.length].classList.add('show');
  }
  showTwo();

  sec.querySelector('.c-next').addEventListener('click', function(){
    index = (index + 2) % cards.length;
    showTwo();
  });
  sec.querySelector('.c-prev').addEventListener('click', function(){
    index = (index - 2 + cards.length) % cards.length;
    showTwo();
  });

  sec.addEventListener('mouseenter', function(){ auto = false; });
  sec.addEventListener('mouseleave', function(){ auto = true; });

  setInterval(function(){
    if(!auto) return;
    index = (index + 2) % cards.length;
    showTwo();
  }, 3000);
});
// ===== Explore Our Articles - زي اللي قبله =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.blog-section');
  if(!sec) return;
  new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) sec.classList.add('in-view');
      else sec.classList.remove('in-view');
    });
  }, {threshold: 0.15}).observe(sec);
});
// ===== Our Newsletter - زي اللي قبله =====
document.addEventListener('DOMContentLoaded', function(){
  const sec = document.querySelector('.news-section');
  if(!sec) return;

  // الانيميشن
  new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) sec.classList.add('in-view');
      else sec.classList.remove('in-view');
    });
  }, {threshold: 0.2}).observe(sec);

  // لما تدوس Subscribe
  const form = document.getElementById('newsForm');
  const email = document.getElementById('newsEmail');
  const msg = document.getElementById('newsMsg');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const val = email.value.trim();

    // لو الايميل غلط
    if(!val.includes('@') || !val.includes('.')){
      msg.textContent = 'Please enter a valid email address ❌';
      msg.style.color = '#ff3b30';
      return;
    }

    // لو صح
    msg.textContent = 'Thanks! You got 20% OFF 🎉 Check your email.';
    msg.style.color = '#1a9e4a';
    email.value = '';
  });
});
// الزرار الأحمر اللي بيطلع فوق
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 400){
    backTop.classList.add('show');
  } else {
    backTop.classList.remove('show');
  }
});
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ===== Cart =====
let cart = JSON.parse(localStorage.getItem('pesco-cart')) || [];

const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsBox = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function openCart(){
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('show');
}
function closeCart(){
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('show');
}
document.getElementById('closeCart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// لما تدوسي على أيقونة السلة اللي فوق في الناف
document.querySelectorAll('.icon-wrap').forEach(icon => {
  icon.addEventListener('click', openCart);
});

function saveCart(){
  localStorage.setItem('pesco-cart', JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  let count = 0;
  let total = 0;
  cart.forEach(item => {
    count += item.qty;
    total += item.qty * item.price;
  });

  cartCount.textContent = count;
  cartTotal.textContent = '$' + total.toFixed(2);

  // البادج اللي فوق في الناف
  const badge = document.querySelector('.icon-wrap .badge');
  if(badge) badge.textContent = count;

  if(cart.length === 0){
    cartItemsBox.innerHTML = '<p class="cart-empty">Your cart is empty 🛒</p>';
    return;
  }

  cartItemsBox.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.img}" alt="">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>$${item.price.toFixed(2)}</span>
        <div class="cart-qty">
          <button onclick="changeQty(${i}, -1)">-</button>
          <b>${item.qty}</b>
          <button onclick="changeQty(${i}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeItem(${i})">🗑️</button>
    </div>
  `).join('');
}

function changeQty(index, change){
  cart[index].qty += change;
  if(cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
}
function removeItem(index){
  cart.splice(index, 1);
  saveCart();
}

// أي زرار Add to Cart في الموقع كله
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.f-add, .n-add');
  if(!btn) return;

  const card = btn.closest('.f-card, .n-card, .t-card');
  if(!card) return;

  const name = card.querySelector('h3')?.textContent.trim() || 'Product';
  const priceText = card.querySelector('.f-price b, .n-price b, .t-price b')?.textContent || '$0';
  const price = parseFloat(priceText.replace('$','').replace(',','')) || 0;
  const img = card.querySelector('img')?.src || '';

  const found = cart.find(item => item.name === name);
  if(found){
    found.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  saveCart();
  openCart();
});

renderCart();
// ===== Search - كامل =====
const searchInput = document.querySelector('.search input');
const searchIcon = document.querySelector('.search-icon');

function doSearch() {
  if (!searchInput) return;

  const word = searchInput.value.toLowerCase().trim();

  // كل كروت المنتجات
  const allCards = document.querySelectorAll('[class*="card"], .product');

  let found = 0;

  allCards.forEach(card => {
    // بندور في نص الكارت كله، مش الاسم بس
    const text = card.textContent.toLowerCase();

    if (word === '' || text.includes(word)) {
      card.style.display = '';
      found++;
    } else {
      card.style.display = 'none';
    }
  });

  // لو كتبتي كلمة، انزلي لقسم المنتجات
  if (word !== '') {
    const shop = document.querySelector('#newArrivals, .featured, .new-arrivals');
    if (shop) shop.scrollIntoView({ behavior: 'smooth' });
  }

  // رسالة لو مفيش نتيجة
  let noResult = document.querySelector('#no-result');
  if (found === 0 && word !== '') {
    if (!noResult) {
      noResult = document.createElement('p');
      noResult.id = 'no-result';
      noResult.textContent = 'مفيش منتج بالاسم ده';
      noResult.style.textAlign = 'center';
      noResult.style.fontSize = '20px';
      noResult.style.margin = '30px';
      document.querySelector('#newArrivals, .featured')?.appendChild(noResult);
    }
    noResult.style.display = 'block';
  } else if (noResult) {
    noResult.style.display = 'none';
  }
}

if (searchInput) {
  searchInput.addEventListener('input', doSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

if (searchIcon) {
  searchIcon.addEventListener('click', doSearch);
}
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 1800);
});

// لو النت بطيء، يخفيه كده كده بعد 3 ثواني
setTimeout(() => {
  document.getElementById('preloader').classList.add('hide');
}, 3000);