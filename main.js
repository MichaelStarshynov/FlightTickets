import { createForm } from './form.js';
import { showPayment } from './payment.js';
import { API } from './apikeys.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const form = createForm();
  app.appendChild(form);

  const resultsDiv = document.createElement('div');
  resultsDiv.id = 'results';
  app.appendChild(resultsDiv);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const from = document.getElementById('from').value.toUpperCase();
    const to = document.getElementById('to').value.toUpperCase();
    const date = document.getElementById('date').value;

    try {
      const response = await fetch(API.MOCK_API_URL);
      const data = await response.json();
      const flights = data.record;

      resultsDiv.innerHTML = '';

      const filteredFlights = flights.filter(f =>
        f.departureAirport === from && f.arrivalAirport === to && f.date === date
      );

      if (filteredFlights.length === 0) {
        resultsDiv.textContent = 'Рейсы не найдены';
        return;
      }

      filteredFlights.forEach(flight => {
        const div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.innerHTML = `
          <strong>${flight.airline}</strong> — ${flight.flightNumber}<br>
          Вылет: ${flight.departureTime} | Прибытие: ${flight.arrivalTime}<br>
          Цена: ${flight.price} USD<br>
          <button>Выбрать и оплатить</button>
        `;

        div.querySelector('button').addEventListener('click', () => {
          showPayment(flight);
        });

        resultsDiv.appendChild(div);
      });

    } catch (err) {
      console.error(err);
      resultsDiv.textContent = 'Ошибка при получении данных';
    }
  });
});
