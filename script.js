// your code here
      const form = document.querySelector('form');
      const nameInput = document.querySelector('#name');
      const yearInput = document.querySelector('#year');
      const url = document.querySelector('#url');

      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value;
        const year = yearInput.value;
        const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
        url.textContent = `https://localhost:8080/${queryString}`;
      });
    
