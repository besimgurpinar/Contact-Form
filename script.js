const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch('YOUR_FORM_URL', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  console.log(result);
});