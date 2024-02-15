window.onscroll = () => {
    const span = document.querySelectorAll('#navbar');
    if(this.scrollY <= 500) span.className = ''; else span.className = 'scroll';
  };