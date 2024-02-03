      document.addEventListener('DOMContentLoaded', function () {
        const menuBtn = document.querySelector('.menu-btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');
  
        menuBtn.addEventListener('click', function () {
          dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
        });
  
        // Close the dropdown if the user clicks outside of it
        document.addEventListener('click', function (event) {
          if (!event.target.closest('.navbar')) {
            dropdownMenu.style.display = 'none';
          }
        });
      });
   