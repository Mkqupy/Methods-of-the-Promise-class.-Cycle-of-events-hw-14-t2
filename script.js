function randomDelay(value) {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 4000) + 1000; // Затримка від 1000 до 5000 мс
      setTimeout(() => {
        resolve(`Проміс ${value} переміг за ${delay}мс`);
      }, delay);
    });
  }
  
  const promises = [];
  for (let i = 1; i <= 5; i++) {
    promises.push(randomDelay(i));
  }
  
  Promise.race(promises)
    .then(result => {
      const resultElement = document.getElementById('result');
      resultElement.textContent = result;
    })
    .catch(error => {
      console.error('Сталася помилка:', error);
    });
  