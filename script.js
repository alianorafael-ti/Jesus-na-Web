function toggleMobile() {
    const nav = document.querySelector("nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// Função para compartilhamento nativo nos estudos
function compartilharEstudo(titulo, texto) {
    if (navigator.share) {
        navigator.share({
            title: titulo,
            text: texto,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Caso o navegador não tenha a função nativa (ex: alguns PCs antigos), abre o WhatsApp
        const url = encodeURIComponent(window.location.href);
        const mensagem = encodeURIComponent(texto + " " + window.location.href);
        window.open(`https://api.whatsapp.com/send?text=${mensagem}`, '_blank');
    }
}
