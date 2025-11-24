 $(document).ready(function () {
  function updateAnnouncementHeight() {
    var barHeight = $('.announcement-bar-section').outerHeight() || 0;
    document.documentElement.style.setProperty('--announcement-bar-height', barHeight + 'px');
  }

  // Run on page load 
  updateAnnouncementHeight();

  // Update on window resize (in case text wraps on smaller screens)
  $(window).on('resize', function () {
    updateAnnouncementHeight();
  });
});

//Footer Accordian
$(function () {
  const $headers = $('.footer-menu .footer-menu-heading');

  $headers.click(function () {
    const $this = $(this);
    $headers.not($this).removeClass('active');
    $this.toggleClass('active');
  });
});

// Home Banner Slider
function initHomeBannerSlider($section) {
  var $slider = $section.find('.home-banner-slider');

  // Hide until fully initialized
  $slider.css('visibility', 'hidden');

  // Destroy if already initialized
  if ($slider.hasClass('slick-initialized')) {
    $slider.slick('unslick');
  }

  $slider.on('init', function () {
    $(this)
      .removeClass('no-slider-list')
      .css('visibility', 'visible'); // Show after init
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    infinite: true,
    speed: 800,
    lazyLoad: 'ondemand',
    centerMode: true,
    variableWidth: true,
    prevArrow: $section.find('.banner-slick-prev'),
    nextArrow: $section.find('.banner-slick-next'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '8.0rem',
          variableWidth: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '2.5rem',
          variableWidth: false
        }
      }
    ]
  });
}

$(document).ready(function () {
  initHomeBannerSlider($(document));

  // For theme editor section reload
  $(document).on('shopify:section:load', function (e) {
    initHomeBannerSlider($(e.target));
  });
});

// Mobile Category Slider
$(document).ready(function () {
  $('.mobile-category-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    touchThreshold: 10,
    infinite: true,
    speed: 800,
    lazyLoad: 'ondemand',
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 10,
    arrows: false,
    responsive: [
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
});

// Best Seller Slider
// $('.best-seller-slider').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   touchThreshold: 10,
//   infinite: true,
//   speed: 300,
//   lazyLoad: 'ondemand',
//   prevArrow: $('.seller-slick-prev'),
//   nextArrow: $('.seller-slick-next'),
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         infinite: false
//       }
//     }
//   ]
// });

// Watch Shop Slider
$('.watch-shop-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  touchThreshold: 10,
  infinite: true,
  speed: 300,
  lazyLoad: 'ondemand',
  prevArrow: $('.watch-list-arrow.slick-prev'),
  nextArrow: $('.watch-list-arrow.slick-next'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '1.0rem',
      }
    }
  ]
});

// As Logo Slider  
$('.featured-logo-slider').slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  infinite: true,
  speed: 300,
  lazyLoad: 'ondemand',
  arrows: false,
  swipeToSlide: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '4.0rem'
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7
      }
    }
  ]
});

// New arrival Tab
$(document).ready(function () {
  $('.tab-link').on('click', function (e) {
    e.preventDefault();
    const tabId = $(this).data('tab');

    $('.tab-link').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').hide();
    $('#' + tabId).show();
  });
});

// Account Custom Select box
$(function () {
  const $select = $('.account-mobile-select');
  const $items = $('.account-tab-item li');
  const $tab = $('.account-list-tab');

  $items.on('click', function () {
    const text = $(this).html();
    $select.html(text);
    $items.show().filter(this).hide();
    $tab.removeClass('active');
    $items.removeClass('active');
    $(this).addClass('active');
  });

  // Hide the selected item on load
  $items.filter(function () {
    return $(this).text().trim() === $select.text().trim();
  }).hide();

  $select.on('click', function () {
    $tab.toggleClass('active');
  });
});

// Accounts 
$(function () {
  // Show the first section by default
  $(".order-item-details .order-accordion-header").first().addClass("active").next().show();
  $(".order-item-details .order-accordion-header").click(function () {
    $(".order-item-details .order-accordion-content").slideUp();
    $(".order-item-details .order-accordion-header").removeClass("active");

    if (!$(this).next().is(":visible")) {
      $(this).addClass("active").next().slideDown();
    }
  });
});

// FAQs Affiliate
$(document).ready(function () {
  $('.affiliate-faq-question').click(function () {
    let $li = $(this).closest('.affiliate-faq-item');
    let expanded = $(this).attr('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    $(this).attr('aria-expanded', !expanded);

    // Slide toggle the answer
    $(this).next('.affiliate-faq-answer').slideToggle();

    // Toggle active class on <li>
    $li.toggleClass('active', !expanded);
  });
});

// Blog Banner Slider
$('.blog-banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10,
  infinite: true,
  speed: 800,
  lazyLoad: 'ondemand',
});

// Related Articles Slider
$('.related-articles-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  touchThreshold: 10,
  infinite: true,
  speed: 800,
  lazyLoad: 'ondemand',
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px'
      }
    },
  ]
});

// Education Page -> Manicure Step Slider
$('.manicure-step-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10,
  infinite: true,
  speed: 800,
  lazyLoad: 'ondemand'
});

$(document).on('click', '.rebuy-product-actions, .rebuy-bundle-builder__cta-container', function (e) {
  if ($(e.target).closest(".rebuy-bundle-builder__product-quantity").length || $(e.target).hasClass('rebuy-bundle-builder__cta-container')) {
    return;
  }
  setTimeout(function () {
    fetch(`${routes.cart_url}?section_id=cart-drawer`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const selectors = ['.header__icon--cart', '.cart-drawer', 'cart-drawer-items', '.drawer__footer', '.item-count'];
        for (const selector of selectors) {
          const targetElement = document.querySelector(selector);
          const sourceElement = html.querySelector(selector);
          if (targetElement && sourceElement) {
            targetElement.replaceWith(sourceElement);
          }
        }
        $('.drawer__inner-empty').remove()
        $('cart-drawer.drawer').removeClass('is-empty')
        $('cart-drawer.drawer').addClass('active')
        const cartDrawer = document.querySelector('cart-drawer.drawer');
        const overlay = document.querySelector('#CartDrawer-Overlay');
        if (cartDrawer && overlay) {
          overlay.addEventListener('click', cartDrawer.close.bind(cartDrawer));
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, 1200)
});

// Blog Load More
$(document).ready(function () {
  $(".main-blog .blog-articles__article").slice(0, 8).show();

  $("#loadMore").on("click", function (e) {
    e.preventDefault();

    // Show loader
    $("#loader").show();
    $("#loadMore").hide();

    setTimeout(function () {
      $(".main-blog .blog-articles__article:hidden").slice(0, 8).slideDown();
      // Hide loader
      $("#loader").hide();
      $("#loadMore").show();

      if ($(".main-blog .blog-articles__article:hidden").length === 0) {
        $("#loadMore").text("No Content").addClass("noContent").prop("disabled", true);
      }
    }, 500);
  });
});

// Mega Menu
$(document).ready(function () {
  // Menu Desktop

  //Main menu hover
   $('.top-level-menu .list-menu-item').hover(function (e) {
    $(this).toggleClass('active-menu');
    $('body').addClass('menu-main').css({
      'padding-right': '4px',
    })
  }, function () {
    $(this).removeClass('active-menu');
    $('body').removeClass('menu-main').css({
      'padding-right': '',
    });
  });

  //Second level menu hover
  $('.first-level-desktop li').hover(function (e) {
    var targetId = $(this).data('id');
    var targetMenu = $('.second-level-menu#' + targetId);
    if (targetMenu.find('*').length > 0) {
      $('.second-level-menu').removeClass('active');
      targetMenu.addClass('active');

      $('.first-level-menu li').removeClass('active-item');
      $(this).addClass('active-item');
    }
  });

  //Shop by products child menu hover
  $('.second-level-menu-link .sub-menu > li[data-id]').hover(function () {
    var secondLevelSubMenuTargetId = $(this).data('id');
    $('.second-level-menu-link .sub-menu > li').removeClass('active-subitem');
    var $targetSubMenu = $('.third-level-sub-menu#' + secondLevelSubMenuTargetId);
    if ($targetSubMenu.length) {
      $(this).addClass('active-subitem');
    }
    $('.third-level-sub-menu').removeClass('active-submenu');
    $('.third-level-sub-menu#' + secondLevelSubMenuTargetId).addClass('active-submenu');
  });

  // Menu Desktop

  // Main Menu click
  $('.list-menu-item').on('click', function (e) {
    const $clickedItem = $(this);
    const $navMenuDropdown = $clickedItem.find('.nav-menu-dropdown');
    const $subDropdown = $clickedItem.find('.sub-dropdown');

    const isActive = $clickedItem.hasClass('active-list');

    // Remove all active states from all items
    $('.list-menu-item').removeClass('active-list')
      .find('.nav-menu-dropdown').removeClass('active-mobile-submenu');

    // If the clicked item wasn't already active, activate it
    if (!isActive && ($navMenuDropdown.length || $subDropdown.length)) {
      $clickedItem.addClass('active-list');
      $navMenuDropdown.addClass('active-mobile-submenu');
    }
  });

  // First Level Menu Click
  $('.first-level-menu li').on('click', function (e) {
    e.stopPropagation();
    if ($(e.target).is('a')) return;

    $('.main-menu-block').addClass('active-main-menu');

    let targetSubMenuId = $(this).data('id');
    let targetMenu = $('.second-level-menu#' + targetSubMenuId);

    $('.second-level-menu').removeClass('active-main-dropdown');

    if (targetMenu.find('*').length === 0) {
      targetMenu.closest('.main-menu-block').removeClass('active-main-menu');
      $('.first-level-menu li').removeClass('active-item');
    }
    targetMenu.addClass('active-main-dropdown');
    $(this).addClass('active-item');
  });

  $('.main-menu-block').on('click', function (e) {
    e.stopPropagation();
  });

  // First Level Active Class
  $('.menu-drawer .first-level-menu.first-level-mobile > li').each(function () {
    let targetFirstLevel = $(this).data('id');
    let targetSecondLevel = $('.second-level-menu#' + targetFirstLevel);

    if (targetSecondLevel.find('*').length === 0) {
      $(this).removeClass('active-dropdown');
    } else {
      $(this).addClass('active-dropdown');
    }
  });

  //Shop by products child mobile menu
  $('.second-level-menu-link .sub-menu > li[data-id]').click(function (e) {
    e.stopPropagation();

    var targetId = $(this).data('id');
    var $target = $('.third-level-sub-menu#' + targetId);

    $('.third-level-sub-menu').not($target).removeClass('active-mobile-sub-menu');
    $('.second-level-menu-link .sub-menu > li[data-id]').not(this).removeClass('show-dropdown');

    $target.toggleClass('active-mobile-sub-menu');
    $(this).toggleClass('show-dropdown');
  });

  // Child Menu active Class
  $('.menu-drawer .second-level-menu .sub-menu > li').each(function () {
    let targetSecondMenu = $(this).data('id');
    let targetThirdMenu = $('.third-level-mobile-menu#' + targetSecondMenu);

    if (targetThirdMenu.find('*').length === 0) {
      $(this).removeClass('active-sub-dropdown');
    } else {
      $(this).addClass('active-sub-dropdown');
    }
  });

  // Back button click
  $('.mobile-back-btn, .mobile-menu-title').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.main-menu-block').removeClass('active-main-menu');
    $('.second-level-menu').removeClass('active');
    $('.first-level-menu li').removeClass('active-item');
  });

  const items = document.querySelectorAll('.product__media-item');
  const anyActive = Array.from(items).some(item =>
    item.classList.contains('is-active')
  );

  if (!anyActive && items.length > 0) {
    items[0].classList.add('is-active');
  }
});

/* Product Page Nbsp hide in p */
document.querySelectorAll('p').forEach(p => {
  const content = p.innerHTML.replace(/&nbsp;|\s|<br\s*\/?>/gi, '').trim();
  if (content === '') {
    p.style.display = 'none';
  }
});

document.querySelectorAll('.external-variant').forEach(function (select) {
  select.addEventListener('change', function () {
    var selectedOption = this.options[this.selectedIndex];
    var productCard = this.closest('.card-wrapper.product-card-wrapper'); // change selector to your wrapper

    if (!productCard) return;

    var hiddenInput = productCard.querySelector('.product-variant-id');
    var addToCartBtn = productCard.querySelector('.add-to-cart-btn');

    if (hiddenInput) {
      hiddenInput.value = selectedOption.value;

      if (selectedOption.dataset.available === "false") {
        hiddenInput.disabled = true;
        if (addToCartBtn) {
          addToCartBtn.disabled = true;
          addToCartBtn.textContent = "Sold out";
        }
      } else {
        hiddenInput.disabled = false;
        if (addToCartBtn) {
          addToCartBtn.disabled = false;
          addToCartBtn.textContent = "Add to cart";
        }
      }
    }
  });
});

// Read More
$(document).ready(function () {
  var $desc = $('.product-description-main');
  var $readMore = $('.read-more-link');

  $desc.find('p[style*="display: none"]').remove();

  var lineHeight = parseFloat($desc.css('line-height'));
  var maxHeight = lineHeight * 3;
  var descHeight = $desc[0].scrollHeight;

  if (descHeight > maxHeight) {
    $readMore.show();
  } else {
    $readMore.hide();
  }

  $readMore.click(function () {
    $desc.toggleClass('expanded');
    if ($desc.hasClass('expanded')) {
      $(this).text('Read less');
    } else {
      $(this).text('Read more');
    }
  });
});

$(document).ready(function () {
  $(document).on('click', 'quick-add-modal .read-more-link', function() {
    $('.product-description-main').toggleClass('expanded');

    if ($('.product-description-main').hasClass('expanded')) {
      $(this).text('Read less');
    } else {
      $(this).text('Read more');
    }
  });
});