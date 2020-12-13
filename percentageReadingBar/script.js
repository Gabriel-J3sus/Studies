//pegar o container do texto
const postWrap = document.querySelector('.post-wrap');

//criar barra
let bar = document.createElement('div');

//estilo da barra
bar.style.height = "4px";
bar.style.width = "0px";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = 0;
bar.style.left = 0;
bar.style.zIndex = "10";
bar.style.transition = "0.2s";

//adiciona ao corpo da página
document.body.append(bar);

//atualizar a barrinha
function updateBar() {
    //o tamanho da caixa que contém o texto
    const textHeight = postWrap.offsetHeight;
    
    //em que posição estamos
    const pagePositionY = window.pageYOffset;
 
    const updatedBar = pagePositionY * 100 / textHeight;
 
    bar.style.width = updatedBar + "%";
}

window.addEventListener('load', () => {
    //verificar o movimento do scroll
    document.addEventListener('scroll', updateBar);
})