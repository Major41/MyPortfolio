const tablinks = document.getElementsByClassName('tab-link');
const tabcontents = document.getElementsByClassName('tabs-contents');
const opentab = (tabname) => {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }

  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
};

const menu = document.querySelector('.menu');
const cancel = document.querySelector('.cancel');
const links = document.querySelector('.links');

menu.addEventListener('click', () => {
  links.style.right = '0';
});
cancel.addEventListener('click', () => {
  links.style.right = '-100%';
});
