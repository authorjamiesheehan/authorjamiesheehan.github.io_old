window.addEventListener('load', () => {
    // quicklink.listen();
    quicklink.prefetch([
        '/',
        '/about/',
        '/books/',
        '/contact/',
        '/img/contact_freddy-castro-unsplash-min.jpg',
        '/img/about_alvaro-serrano-min.jpg',
        '/img/temp_cover_HLS-min.png',
        '/img/home_anton-sharov-unsplash-min.jpg'
    ]);
});