window.onscroll = () => {
  const span = document.querySelector('#navbar');
  if(this.scrollY <= 500) span.className = ''; else span.className = 'scroll';
};