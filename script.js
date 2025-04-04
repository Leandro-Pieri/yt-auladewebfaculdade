document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    const videoPlayer = document.getElementById('video-player');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const closePlayer = document.querySelector('.close-player');

    // Adiciona evento de clique para cada card de vídeo
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            openVideoPlayer(videoId);
        });
    });

    // Função para abrir o player de vídeo
    function openVideoPlayer(videoId) {
        videoPlayer.style.display = 'flex';
        youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        document.body.style.overflow = 'hidden';
    }

    // Fecha o player de vídeo
    closePlayer.addEventListener('click', function() {
        videoPlayer.style.display = 'none';
        youtubeIframe.src = '';
        document.body.style.overflow = 'auto';
    });

    // Fecha o player ao clicar fora dele
    videoPlayer.addEventListener('click', function(e) {
        if (e.target === videoPlayer) {
            videoPlayer.style.display = 'none';
            youtubeIframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });
}); 