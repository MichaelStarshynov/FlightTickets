export function showTicket(flight) {
  const app = document.getElementById('app');
  app.innerHTML = `
   <div class="ticket-card">
    <h2>🎫 Ваш билет</h2>
    <p><strong>Авиакомпания:</strong> ${flight.airline}</p>
    <p><strong>Рейс:</strong> ${flight.flightNumber}</p>
    <p><strong>Откуда:</strong> ${flight.departureAirport}</p>
    <p><strong>Куда:</strong> ${flight.arrivalAirport}</p>
    <p><strong>Дата:</strong> ${flight.date}</p>
    <p><strong>Вылет:</strong> ${flight.departureTime}</p>
    <p><strong>Прибытие:</strong> ${flight.arrivalTime}</p>
    <p><strong>Цена:</strong> ${flight.price} USD</p>
    <button id="back">Вернуться</button>
    </div>
  `;

  document.getElementById('back').addEventListener('click', () => location.reload());
}
