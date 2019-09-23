window.addEventListener('scroll', function(e) {
  /* When user scrolls, check position on the page */
  if (window.scrollY > 150) {
    /* if page is scrolled, toggle class scrolled to reduce header size */
    const header = document.getElementsByTagName('header');
    header[0].classList.add('scrolled');
  } else {
    /* if page is not scrolled, remove scrolled class to default header */
    const header = document.getElementsByTagName('header');
    header[0].classList.remove('scrolled');
  }
})
