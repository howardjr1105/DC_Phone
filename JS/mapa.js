var map = L.map('mapa').setView([12.138386, -86.227902], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([12.138386, -86.227902]).addTo(map)
    .bindPopup('DC Phone')
    .openPopup();