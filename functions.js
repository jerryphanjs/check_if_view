"use strict";
(function () {

  /*===================================================
  Viewport width fit for Tablet and Mobile
  ===================================================*/
  var _ua = (function(u) {
    return {
      Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
      Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) || u.indexOf("blackberry") != -1
    }
  }

  )(window.navigator.userAgent.toLowerCase());
  if (_ua.Tablet) {
    $("meta[name='viewport']").attr('content', 'width=1100');
  }

  /*===================================================
  Banner Slider
  ===================================================*/
  $('.c-banner__slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    draggable: false,
    fade: true,
    focusOnSelect: true,
    easing: 'ease-out',
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 3000
  });
  
  /*===================================================
  Slider Service Page
  ===================================================*/
  $('.c-service2__slider').slick({
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    focusOnSelect: true,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<a class="prev"><img src="./assets/img/service/service_icon_prev.png" alt=""></a>',
    nextArrow: '<a class="next"><img src="./assets/img/service/service_icon_next.png" alt=""></a>'
  });
  /*===================================================
  Slider Studio Page
  ===================================================*/
  $('.c-studio__slider').slick({
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    focusOnSelect: true,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<a class="p-studio__arr prev "><img src="./assets/img/service/service_icon_prev.png" alt=""></a>',
    nextArrow: '<a class="p-studio__arr next"><img src="./assets/img/service/service_icon_next.png" alt=""></a>'
  });
  /*===================================================
  FAQ Toggle
  ===================================================*/
  $('.p-service5__faq dt').on('click', function() {
    $(this).next().slideToggle('fast');
  });
  /*===================================================
  Button ScrollTop
  ===================================================*/
  $('.c-btn__scrollTop').on('click', function(e) {
    e.preventDefault();
    $('html, boy').animate({
      scrollTop: 0
    }, 800);
  }); 
  let menuIcon = document.querySelector('.c-globalhead__menubar');
  let menuSp = document.querySelector('.c-globalhead__navisp');
  let header = document.querySelector('.c-globalhead');
  let menuStatus = false;

  menuIcon.addEventListener('click', function() {
    if(menuStatus === false) {
      this.classList.add('open');
      header.classList.add('fixed');
      menuSp.classList.add('open-menu');
      menuStatus = true;
      return menuStatus;
    }else if(menuStatus == true) {
      this.classList.remove('open');
      header.classList.remove('fixed');
      menuSp.classList.remove('open-menu');
      menuStatus = false;
      return menuStatus;
    }
  });

  /*===================================================
  Circle Menu Center Top Page
  ===================================================*/
  let anchor = document.querySelectorAll('.c-index1__cnav a');
  let menu = document.querySelectorAll('.c-index1__menu li');
  let center = document.querySelectorAll('.c-index1__center .point');
  for(let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener('mouseover', imageOver);
    anchor[i].addEventListener('mouseout', imageOut);
  }

  function imageOver() {
    let url = this.getAttribute('data-bg');
    for(let i = 0 ; i < menu.length; i++) {
      menu[i].classList.remove('is-on');
      center[i].classList.remove('on');
    }
    document.getElementById('menuTitle').style.visibility = 'hidden';
    menu[url].classList.add('is-on');
    center[url].classList.add('on');
  }
  function imageOut() {
    for(let i = 0 ; i < menu.length; i++) {
      menu[i].classList.remove('is-on');
      center[i].classList.remove('on');
    }
    document.getElementById('menuTitle').style.transition = 'all 0.3s ease-out';
    document.getElementById('menuTitle').style.visibility = 'visible';
  }
  /*===================================================
  Toggle Modal Service
  ===================================================*/
  const target = document.querySelectorAll('.c-imgtext1__btn');
  const modal = document.querySelector('.c-service2__modal');
  const modalControl = document.querySelectorAll('.c-imgtext1');

  for(let i = 0; i < modalControl.length; i++) {
    modalControl[i].addEventListener('click', function() {
      let _thisParent = this.parentElement.children;
      modal.classList.add('is-openModal');
      for(let n = 0; n < _thisParent.length; n++) {
        _thisParent[n].classList.remove('is-active');
      }
      this.classList.add('is-active');
    });
  }

  for(let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function(e) {
      e.preventDefault();
    });
    let closeModal = document.querySelectorAll('.c-service2__btnclose');
    for(let i = 0; i < closeModal.length; i++) {
      closeModal[i].addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-openModal');
        for(let n = 0; n < target.length; n++) {
          modalControl[n].classList.remove('is-active');
        }
      });
    }
  }
  
  /*===================================================
  Toggle Menu Studio
  ===================================================*/
  let btnClose = $('.c-studio__btnClose');
  let btnOpen = $('.open-menu');

  btnOpen.each(function() {
    let _this = $(this);
        _this.on('click', function(e){
        e.preventDefault();
        $(this).hide();
        let parentEle = $(this).parent();
        parentEle.css({zIndex: 10});
        parentEle.find('.morph').addClass('is-active').css({zIndex: -1});
        parentEle.find('.c-studio__inner').addClass('is-menuActive');
      });

  btnClose.each(function() {
    let _thisClose = $(this);
        _thisClose.on('click', function(e) {
          e.preventDefault();
          let parentEle2 = $(this).parent('.c-studio__inner');
          let totalParent = parentEle2.parent();
          totalParent.css({zIndex: 0});
          parentEle2.removeClass('is-menuActive');
          totalParent.find('.morph').removeClass('is-active').css({zIndex: 0}).addClass('changepath');
          totalParent.find('.open-menu').show();
        });
      }); 
    });
  /*===================================================
  Form Validate
  ===================================================*/
    const _input = $('.c-form__input input');
    const _textArea = $('.c-form__input textarea');

    _input.on('focus', function() {
      if(_input.val().length === 0){
        $(this).css({borderColor: '#c0272d'})
      }
      $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
    }).on('blur', function() {
      $(this).attr('placeholder', $(this).data('placeholder'));
    });
    requireInput(_input);
    requireInput(_textArea);

    function requireInput(input) {
      input.on('keyup', function() {
        let keyUpData = $(this).val().length;
        if(keyUpData === 0) {$(this).css({borderColor: '#c0272d'});}
        else {$(this).css({borderColor: 'transparent'});}
      });
    }

    if($(window).width() < 699) {
      $('#contact-form').validationEngine({
        promptPosition: "topLeft"
      });
    }else {
      $('#contact-form').validationEngine({
        promptPosition: "topRight"
      });
    }
  /*===================================================
  Video Customize
  ===================================================*/
    $('.videoPoster').on('click', function() {
      let poster = $(this);
      let wrapper = poster.closest('.videoWrapper');
      videoPlay(wrapper);
    });
    function videoPlay(wrapper) {
      let iFrame = wrapper.find('.videoIframe');
      let src = iFrame.data('src');
      wrapper.addClass('videoActive')
      iFrame.attr('src', src);
    }
  /*===================================================
  Filter Topics
  ===================================================*/
  $('.p-topics__tab a').each(function() {
    let _this = $(this);
    _this.on('click', function() {
      let _thisAttr = _this.attr('target');
      $('.p-topics__content li').fadeOut(100);
      $('.' + _thisAttr).fadeIn(300);
    });
  });

  let _window = window;
  let targetLeft = document.querySelectorAll('.fade-h-left');
  let targetRight = document.querySelectorAll('.fade-h-right');
  let targetScale = document.querySelectorAll('.fade-c');
 
  function _a(ele) {
    let wTopPosition = _window.pageYOffset;
    let wBotPosition = (_window.innerHeight + _window.pageYOffset);
    let styleEle = _window.getComputedStyle(ele);
    let elePadding = parseFloat(styleEle.paddingTop) + parseFloat(styleEle.paddingBottom);
    let eleHeight = ele.clientHeight - elePadding;
    let eleTop = ele.offsetTop;
    let eleBot = (eleHeight + eleTop);
    if((eleBot >= wTopPosition) && (eleTop <= wBotPosition)) {
      _b(ele);
    }
  }
  function _b(item) {
    item.classList.add('fadeIn');
  }
  function _c(ele) {
    for(let i = 0 ; i < ele.length; i++) {
      _a(ele[i]);
    }
  }
  function check_if_view() {
    _c(targetLeft);
    _c(targetRight);
    _c(targetScale);
  }
  
  _window.addEventListener('scroll', check_if_view);

}())

