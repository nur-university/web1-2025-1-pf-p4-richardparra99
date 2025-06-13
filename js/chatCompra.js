document.addEventListener('DOMContentLoaded', () => {
    const anuncios = document.querySelectorAll('.anuncio');
    const chatSection = document.getElementById('chatSection');
    const userName = document.getElementById('userName');

    anuncios.forEach(anuncio => {
      anuncio.addEventListener('click', () => {
        chatSection.classList.remove('oculto');

        const producto = anuncio.textContent.trim();
        
        userName.textContent = `Vendedor de ${producto}`;
      });
    });
  });