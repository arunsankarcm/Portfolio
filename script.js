let isScrolling;
  let headerDiv = document.querySelector('.header-div');

  window.addEventListener('scroll', function () {
    headerDiv.style.opacity = '1';
    headerDiv.style.transition = 'opacity 0.5s ease-in-out';

    clearTimeout(isScrolling);
    
    isScrolling = setTimeout(function () {
      headerDiv.style.opacity = '0';
    }, 1000); 
  });

  headerDiv.addEventListener('mouseenter', function () {
    headerDiv.style.opacity = '1';
    clearTimeout(isScrolling); 
  });

  headerDiv.addEventListener('mouseleave', function () {
    isScrolling = setTimeout(function () {
      headerDiv.style.opacity = '0';
    }, 1000); 
  });