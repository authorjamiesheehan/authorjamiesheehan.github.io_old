// Allows the entire page to load completely before requesting the IG stuff to happen

window.addEventListener('load', () => {
    const ig_script = document.createElement('script');
    ig_script.src = '//www.instagram.com/embed.js';
    const ig_root = document.getElementsByClassName('ig_embed')[0];
    ig_root.appendChild(ig_script);
});