const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.desktop-nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.category').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.category.active').classList.remove('active');button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.product-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.type!==filter;});}));
document.querySelectorAll('.favorite').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();button.classList.toggle('selected');button.textContent=button.classList.contains('selected')?'♥':'♡';showToast(button.classList.contains('selected')?'Toegevoegd aan je favorieten':'Verwijderd uit je favorieten');}));
document.querySelector('.bag-button').addEventListener('click',()=>showToast('Je winkelmandje is nog leeg — kijk eens bij Studioans favorieten.'));
document.querySelector('.search-button').addEventListener('click',()=>showToast('Zoeken komt binnenkort. Stuur Anna gerust een berichtje.'));
const newsletter=document.querySelector('.newsletter-form');
if(newsletter)newsletter.addEventListener('submit',event=>{event.preventDefault();document.querySelector('.form-message').textContent='Dankjewel! Je staat op Studioans lijstje.';event.currentTarget.reset();});
let toastTimer;function showToast(message){const toast=document.querySelector('.toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2600);}
