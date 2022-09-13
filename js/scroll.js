// busca no menu todos os (a) com #href
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
item.addEventListener('click',scrollOnClick)

})

// faz a referência entre o href e o item e pega o offsetTop
function getScrollTopByHeref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;
}


// Lida com o clique, no momento em que clico ele previne o padrão da página
function scrollOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHeref(event.target)- 100;
  
    scrollToPosition(to);
   
}

// realiza o scroll suave até o campo clicado
function scrollToPosition(to) {
    window.scroll({
    top: to,
    behavior: "smooth",
   });
}

