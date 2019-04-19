(function (window) {
  'use strict';

  var $titles = $['#title'];

  // Variables that piont to the html ids
  var tit = '[data-posts="title"]';
  var bod = '[data-posts="body"]';
  var com = '[data-comments="body"]';
  var name = '[data-comments="name"]';
  var email = '[data-comments="email" ]';
  var reff = '[href="mailto:Presley.Mueller@myrl.com"]';

  // Ajax to get the posts from server 
  //and loading them dynamicly to the html
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

  // Ajax to get the comment information 
  //from server and loading them dynamicly to the html
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
          $(email).append('<a data-comments="email" href="' 
                  + item.email +'">'+ item.name + '</a>');
        }
        else if (item.postId == 2 && item.id == 2) {
          $(com).append(item.body);
          $(email).append('<a data-comments="email" href="' 
          + item.email +'">'+ item.name + '</a>');
        } 
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
