// Shared by index.html and experience.html: color swatches, stamps, and Undo Guy.
document.addEventListener('DOMContentLoaded', () => {
    const surface = document.querySelector('.stamp-surface');
    const undoGuy = document.getElementById('undo-guy');
    const swatches = document.querySelectorAll('.swatch');
    if (!surface || !undoGuy) {
        console.error('Element with class "stamp-surface" or ID "undo-guy" not found.');
        return;
    }

    // ︎ keeps these as plain text shapes so they take the paint color
    const shapes = ['✿', '★', '♥︎', '✸'];
    const stamps = [];
    let paint = '#8A1042';

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            paint = swatch.dataset.color;
            document.documentElement.style.setProperty('--paint', paint);
            swatches.forEach(other => other.setAttribute('aria-pressed', other === swatch));
        });
    });

    surface.addEventListener('click', event => {
        // only stamp on empty space, never on top of the writing
        if (event.target.closest('.card, .sticker, .hint, .no-stamp, h2, a, button')) return;
        if (String(window.getSelection())) return;

        const box = surface.getBoundingClientRect();
        const stamp = document.createElement('span');
        stamp.className = 'stamp';
        stamp.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        stamp.style.left = `${event.clientX - box.left}px`;
        stamp.style.top = `${event.clientY - box.top}px`;
        stamp.style.color = paint;
        stamp.style.fontSize = `${28 + Math.random() * 28}px`;
        stamp.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 60 - 30}deg)`;
        stamp.setAttribute('aria-hidden', 'true');
        surface.appendChild(stamp);
        stamps.push(stamp);
    });

    undoGuy.addEventListener('click', () => {
        const last = stamps.pop();
        if (last) last.remove();
    });
});
