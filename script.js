document.addEventListener('DOMContentLoaded', function() {
    const accessibilityMenu = document.createElement('div');
    accessibilityMenu.innerHTML = `
        <div id="accessibility-menu" style="position: fixed; top: 10px; right: 10px; background: white; padding: 10px; border: 1px solid #ccc; z-index: 1000;">
            <button id="increase-font" aria-label="Aumentar tamanho da fonte">A+</button>
            <button id="decrease-font" aria-label="Diminuir tamanho da fonte">A-</button>
        </div>
    `;
    document.body.appendChild(accessibilityMenu);

    const body = document.body;
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');

    let currentFontSize = 16; // Tamanho de fonte padrão em pixels

    increaseFontButton.addEventListener('click', function() {
        currentFontSize += 2; // Aumenta o tamanho da fonte
        body.style.fontSize = currentFontSize + 'px';
    });

    decreaseFontButton.addEventListener('click', function() {
        if (currentFontSize > 10) { // Impede que o tamanho da fonte fique muito pequeno
            currentFontSize -= 2; // Diminui o tamanho da fonte
            body.style.fontSize = currentFontSize + 'px';
        }
    });
});