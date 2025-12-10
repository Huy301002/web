// Zalo Button Component
(function() {
    'use strict';
    
    // Tạo nút Zalo
    const zaloButton = document.createElement('a');
    zaloButton.href = 'https://zalo.me/0972266748';
    zaloButton.target = '_blank';
    zaloButton.className = 'zalo-button';
    zaloButton.title = 'Chat với chúng tôi trên Zalo';
    
    // Tạo SVG logo Zalo (speech bubble với chữ Zalo)
    const zaloSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    zaloSvg.setAttribute('viewBox', '0 0 100 100');
    zaloSvg.setAttribute('width', '100%');
    zaloSvg.setAttribute('height', '100%');
    zaloSvg.setAttribute('class', 'zalo-logo');
    
    // Speech bubble path
    const bubblePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    bubblePath.setAttribute('d', 'M20 15 L75 15 Q85 15 85 25 L85 50 Q85 60 75 60 L50 60 L35 75 L35 60 L20 60 Q10 60 10 50 L10 25 Q10 15 20 15 Z');
    bubblePath.setAttribute('fill', 'white');
    bubblePath.setAttribute('stroke', '#0068FF');
    bubblePath.setAttribute('stroke-width', '2');
    
    // Text "Zalo"
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '50');
    text.setAttribute('y', '42');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-family', 'Arial, sans-serif');
    text.setAttribute('font-size', '20');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', '#0068FF');
    text.textContent = 'Zalo';
    
    zaloSvg.appendChild(bubblePath);
    zaloSvg.appendChild(text);
    
    // Thêm SVG vào nút
    zaloButton.appendChild(zaloSvg);
    
    // Thêm vào body
    document.body.appendChild(zaloButton);
})();

