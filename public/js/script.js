let imgBanner = document.getElementById('banner');
const closeMessage = document.querySelector('#close-message');
const mensagem = document.querySelector('.message');

if(closeMessage != null) {
closeMessage.addEventListener("click", function (){
  mensagem.style.display = "none";
});

setTimeout(() => {
  mensagem.style.display = "none";
}, 5000);

}

const viewDropdown = () => {
  const buttons = document.querySelectorAll(".dropdown-button");
  
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const content = event.target.parentElement.parentElement.children[1];
      content.classList.toggle("active");

      if(content.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    })
  })
}

function slide1(){
  imgBanner.src="./img-banner/imagem01.jpg";
  setTimeout("slide2()", 5000);
  }
  
  function slide2(){
    imgBanner.src="./img-banner/imagem03.jpg";
    setTimeout("slide1()", 5000);
  }


  
viewDropdown();