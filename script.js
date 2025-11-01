// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o formulário de contato
    const contactForm = document.getElementById('contact-form');

    // Adiciona um "ouvinte" para o evento de "submit" (envio)
    contactForm.addEventListener('submit', (event) => {
        
        // 1. Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault(); 

        // 2. Coleta os dados (opcional por enquanto, mas é como você faria)
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        // 3. Mostra uma mensagem simples de sucesso
        alert(`Obrigado pelo seu contato, ${nome}!\n(Este é um site de demonstração. O formulário não foi enviado.)`);

        // 4. Limpa o formulário
        contactForm.reset();
    });

    // Bônus: Efeito suave de "scroll" (rolagem) para os links do menu
    // (O CSS 'scroll-behavior: smooth' já faz isso na maioria dos navegadores, 
    // mas esta é a forma de fazer com JS para maior compatibilidade)
    
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o salto imediato
            
            const targetId = link.getAttribute('href'); // Pega o ID (ex: "#sobre")
            const targetSection = document.querySelector(targetId); // Seleciona a seção
            
            // Rola suavemente até a seção
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Alinha ao topo
            });
        });
    });

});