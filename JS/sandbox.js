const toggleBtn = document.querySelector('.stack'); // get the first element with class "stack"
const menu = document.querySelector('.nav_links');            // get the first <ul> element

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
