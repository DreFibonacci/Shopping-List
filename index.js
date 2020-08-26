/* $(function(event) {
  $('.js-shopping-list-form').submit(function() {
    this.preventDefault();
  })
}); */


$(function() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
  
// new variable for inputted list items
const newShoppingItem = $(event.currentTarget).find("#shopping-list-entry");

// adds new list item from input
$('ul').append(`<li><span class="shopping-item">${newShoppingItem.val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)

// clear the input field
newShoppingItem.val("");
  })
});

$(function() {
  $("ul").on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
  })
});

$(function() {
  $("ul").on('click', '.shopping-item-toggle', function(event) {
$(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  })
});
