window.addEventListener('scroll', onScroll)


//Algo muito importante para a lógica de programação é a captura de dados, lembre-se disso
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

//Função para ativar os botões do menu com scroll
//inneHeight é a visão total que o usuario tem
//Evite usar var para criar variaveis, é um metodo antigo, se precisa de um valor fixo use const se precisa de um valor que mude use let

//linha alvo abaixo
function activeMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight /2

//verificar se a seção passou da linha
//quais dados vou precisar?
//offsetTop vai mostrar o valor em pixel de onde começa(no caso) o home
//o topo da seção
const sectionTop = section.offsetTop
//altura da sessão
const sectionHeight = section.offsetHeight

//const o topo da seção chegou ou ultrapassou a linha alvo. Procure usar nome significativos, como abaixo, assim evita encher o programa de comentários
const sectionTopReach0rPassedTargetLine = targetLine >= sectionTop
   

//informações dos dados e da lógica
console.log('O topo da seção chegou ou passou da linha', sectionTopReach0rPassedTargetLine)

//verificar se a base está abaixo da linha alvo
//quais dados vou precisar?

const sectionEndsAt= sectionTop + sectionHeight

//final da seção passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline)

//limites da seção, veja que com ! nega a segunda preposição
const sectionBoundaries = sectionEndPassedTargetline && !sectionEndPassedTargetline

const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a [href*=${section.getAttribute('id')}]`)

manuElement.classList.remove('active')
if(sectionBoundaries){
 menuElement.classList.add('active')
}

}//fim da function activeMenuAtCurrentSection










function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)





  /*Abaixo está trechos de códigos que achei interessante



//linha alvo abaixo
function activeMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight /2

//verificar se a seção passou da linha
//quais dados vou precisar?
//offsetTop vai mostrar o valor em pixel de onde começa(no caso) o home
//o topo da seção
const sectionTop = section.offsetTop
//altura da sessão
const sectionHeight = section.offsetHeight


const sectionTopReach0rPassedTargetLine = targetLine >= sectionTop
   

//informações dos dados e da lógica
console.log('O topo da seção chegou ou passou da linha', sectionTopReach0rPassedTargetLine)

//vrificar se a base está abaixo da linha alvo
//quais dados vou precisar?

const sectionEndsAt= sectionTop + sectionHeight

//final da seção passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline) */