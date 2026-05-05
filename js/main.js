$(function () {
  $('.hero-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1,
  });

  $('.quotes-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
  });

  const $masonryContainer = $('.masonry');
  const $masonryItems = $masonryContainer.find('.masonry-item');

  function buildMasonry() {
    const columns = parseInt($masonryContainer.css('--cols-amount'));

    if (columns <= 1) {
      return;
    }

    $masonryItems.each(function (index) {
      const $currentItem = $(this);

      $currentItem.css('margin-top', '');

      if (index >= columns) { // start from 2nd row
        const $upperItem = $masonryItems.eq(index - columns);

        const itemHeight = $upperItem.outerHeight();
        const realContentHeight = $upperItem.find('div').first().outerHeight();

        const offset = realContentHeight - itemHeight;

        if (offset >= 0) {
        } else {
          $currentItem.css('margin-top', offset + 'px');
        }
      }
    });
  }

  buildMasonry();

  $(window).on('resize', function () {
    buildMasonry();
  });

  const $returnBtn = $('.return-to-top');
  function toggleReturnButton() {
    const scrollTop = $(window).scrollTop();
    const screenHeight = $(window).height();

    const isVisible = $returnBtn.hasClass('show');
    const shouldBeVisible = scrollTop > screenHeight;

    if (!isVisible && shouldBeVisible) {
      $returnBtn.addClass('show');
    } else if (isVisible && !shouldBeVisible) {
      $returnBtn.removeClass('show');
    }
  }

  toggleReturnButton();

  $(window).on('scroll', function () {
    toggleReturnButton();
  });
});