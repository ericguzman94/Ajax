(function (window) {
  'use strict';

  var $titles = $['#title'];

  var tit = '[data-posts="title"]';
  var bod = '[data-posts="body"]';
  var com = '[data-comments="body"]';
  var name = '[data-comments="name"]';
  var email = '[data-comments="email" ]';
  var reff = '[href="mailto:Presley.Mueller@myrl.com"]';

  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: function (data) {
      console.log("success", data)
      $.each(data, function (i, item) { 
        console.log(item.userId);
        if (item.userId == 1 && item.id == 1 ) {
          $(tit).append(item.title);
          $(bod).append(item.body);
        }
        else if (item.userId == 2 && item.id == 2) {
          $(tit).append(item.title);
          $(bod).append(item.body);
        } 
      });
    }
  });

  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
    success: function (data) {
      console.log("success", data)
      $.each(data, function (i, item) { 
        console.log(item.userId);
        if (item.postId == 1 && item.id == 1 ) {
          $(com).append(item.body);
          $(name).append(item.name);
          $(email).append(item.email);
        }
        else if (item.userId == 2 && item.id == 2) {
          $(com).append(item.body);
        } 
      });
    }
  });


  $.ajax({
    type: 'GET',
    
  })




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
