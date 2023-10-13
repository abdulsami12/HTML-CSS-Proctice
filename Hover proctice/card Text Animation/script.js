const hoverText = document.querySelector('.hover-text');

hoverText.addEventListener('mouseenter', () => {
    const words = hoverText.textContent.split(' ');

    const newText = words.map((word) => {
        if (word.length <= 2) {
            return word;
        }

        return word.charAt(0) + ' '.repeat(word.length - 2) + word.charAt(word.length - 1);
    });

    hoverText.textContent = newText.join(' ');
});
