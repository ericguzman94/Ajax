(function (window) {
  'use strict';

  var $titles = $['#title'];

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (data) {
      $.each(data, function (indexInArray, valueOfElement) { 
         $titles.append(valueOfElement.);
      });
    }
  });




  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) { 
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();

    });
  });
})(window);
