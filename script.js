let slideIndex = 0; // Índice do slide atual
let slides = document.getElementsByClassName("meu-carrossel")[0].getElementsByTagName("img"); // Obter as imagens do carrossel

function mostrarSlide() {
  // Ocultar todas as imagens
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Avançar para o próximo slide
  slideIndex++;
  
  // Verificar se estamos no último slide e voltar para o primeiro
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }    

  // Exibir o slide atual
  slides[slideIndex-1].style.display = "block";  

  // Aguardar 2 segundos antes de exibir o próximo slide
  setTimeout(mostrarSlide, 2000); 
}

// Iniciar o carrossel
mostrarSlide();
