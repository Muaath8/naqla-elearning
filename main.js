// تعتمد على COURSES من data.js
const grid = document.getElementById('grid');
const q = document.getElementById('q');
const showAll = document.getElementById('showAll');

function card(c){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="thumb">${c.icon||'📘'}</div>
    <div class="card-body">
      <h3 class="title">${c.id}</h3>
      <p class="meta">${c.desc}</p>
      <a class="btn" href="course.html?course=${encodeURIComponent(c.id)}">ادخل الدورة</a>
    </div>`;
  return el;
}

function render(){
  grid.innerHTML = '';
  const term = (q?.value||'').toLowerCase().trim();
  const list = term ? COURSES.filter(c => (c.id + ' ' + c.desc).toLowerCase().includes(term)) : COURSES;
  list.forEach(c => grid.append(card(c)));
}

if(q){
  let t;
  q.addEventListener('input', ()=>{ clearTimeout(t); t = setTimeout(render, 180); });
}
showAll?.addEventListener('click', render);

document.getElementById('toggleTheme')?.addEventListener('click', (e)=>{
  const light = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', light ? 'dark' : 'light');
  e.currentTarget.setAttribute('aria-pressed', String(!light));
});

document.getElementById('year').textContent = new Date().getFullYear();
render();
