$('body').on('keyup', '.js-search-matches', function (e) {
  let self = $(this);
  let list = $('.' + self.data('list'));
  $.ajax({
    url: self.data('url') + '?q=' + self.val(),
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      list.empty();

      if (response.items.length) {
        $.each(response.items, function (i, item) {
          list.append(`<a class="match-link" href="${item.url}">${item.title}</a>`);
        });
      }
    }
  });
});