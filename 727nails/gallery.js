

$(document).ready(function () {
  $('.gallery-grid img').on('click', function () {
    const src = $(this).attr('src');
    const popupImg = `<div class="popup-overlay active">
        <div class="popup active">
          <img src="${src}" style="max-width: 100%; border-radius: 10px;">
        </div>
      </div>`;
    
    $('body').append(popupImg);

    $('.popup-overlay').on('click', function () {
      $(this).remove();
    });
  });
});
