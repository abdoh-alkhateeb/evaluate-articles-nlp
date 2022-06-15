function updateDOM(data) {
  console.log('::: Running updateDOM :::');

  const results = document.getElementById('results');
  results.innerHTML = '';

  for (const key in data) {
    const container = document.createElement('p');
    const keyNode = document.createElement('strong');
    keyNode.innerHTML = `${key}: `;
    const valueNode = document.createTextNode(`${data[key]}`);

    container.appendChild(keyNode);
    container.appendChild(valueNode);

    results.appendChild(container);
  }
}

module.exports = {
  updateDOM
};
