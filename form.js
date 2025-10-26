export function createForm() {
  const form = document.createElement('form');
  form.id = 'searchForm';

  const fields = [
    { label: 'Откуда', id: 'from', type: 'text' },
    { label: 'Куда', id: 'to', type: 'text' },
    { label: 'Дата', id: 'date', type: 'date' },
    { label: 'Пассажиры', id: 'passengers', type: 'number', value: 1, min: 1 }
  ];

  fields.forEach(f => {
    const label = document.createElement('label');
    label.textContent = f.label;
    label.htmlFor = f.id;
    form.appendChild(label);

    const input = document.createElement('input');
    input.type = f.type;
    input.id = f.id;
    if (f.value) input.value = f.value;
    if (f.min) input.min = f.min;
    input.required = true;

    form.appendChild(input);
    form.appendChild(document.createElement('br'));
  });

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Искать рейсы';
  form.appendChild(button);

  return form;
}
