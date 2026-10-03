
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#main-navigation');
const closeMenu=()=>{navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');};
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
const palettes={essentials:[['Ivory','#E7DCCB'],['Oat','#D2C1A3'],['Sand','#C4AA87'],['Taupe','#A79A84'],['Stone','#909080'],['Espresso','#4C3D32']],accents:[['Rose','#B68780'],['Clay','#B27E6B'],['Terracotta','#AD755C'],['Sage','#809179'],['Olive','#808054'],['Deep teal','#3B6058']]};
function setPalette(mode){const container=document.querySelector('#sample-swatches');container.replaceChildren(...palettes[mode].map(([name,color])=>{const item=document.createElement('div');item.className='sample-color';const chip=document.createElement('div');chip.className='chip';chip.style.setProperty('--swatch',color);chip.setAttribute('aria-hidden','true');const label=document.createElement('span');label.textContent=name;item.append(chip,label);return item;}));document.querySelector('#palette-mode').textContent=mode==='essentials'?'Essentials':'Accents';document.querySelectorAll('[data-palette]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.palette===mode)));}
document.querySelectorAll('[data-palette]').forEach(button=>button.addEventListener('click',()=>setPalette(button.dataset.palette)));
setPalette('essentials');
