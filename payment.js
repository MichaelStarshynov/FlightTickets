import { showTicket } from './ticket.js';

export function showPayment(flight) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="payment-card">
    <h2>Оплата рейса</h2>
    <p><strong>${flight.airline}</strong> — ${flight.flightNumber}</p>
    <p>${flight.departureAirport} → ${flight.arrivalAirport}</p>
    <p>Цена: ${flight.price} USD</p>
    <button id="pay">Оплатить</button>
    <button id="back">Назад</button>
    </div>
  `;

  // Назад из формы оплаты
  document.getElementById('back').addEventListener('click', () => location.reload());

  // Оплата
  document.getElementById('pay').addEventListener('click', () => {
    app.innerHTML = `
    <div class="payment-card">
      <h2>✅ Оплата прошла успешно!</h2>
      <p>Спасибо за покупку, ${flight.airline} ждёт вас!</p>
      <button id="back">Вернуться на главную</button>
      <button id="ticket">Посмотреть билет</button>
      </div>
    `;

    // Событие для кнопки "Назад" после оплаты
    document.getElementById('back').addEventListener('click', () => location.reload());

    // Событие для кнопки "Посмотреть билет"
    document.getElementById('ticket').addEventListener('click', () => {
      showTicket(flight);
    });
  });
}
