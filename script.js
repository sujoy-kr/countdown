const submitBtn = document.getElementById('submitBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
submitBtn.addEventListener('click', () => {
  console.log('click');
  let userName = document.getElementById('userName').value;
  let password = document.getElementById('password').value;
  if (userName === 'azman' && password === 'azman') {
    submitBtn.style.display = 'none';
    nextPageBtn.style.display = 'inline-block';
  }
});
