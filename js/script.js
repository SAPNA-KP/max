
(function($){
    "use strict";
    var main = {};
    var plugin_track = 'js/';
    $.fn.exists = function () {
          return this.length > 0;
      };

    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    main.PreLoad = function() {
      document.getElementById("loading").style.display = "none"; 
    }
  
      /*--------------------
          * Menu Close
      ----------------------*/
      main.MenuClose = function(){
        $('.navbar-nav a').on('click', function() {
         var toggle = $('.navbar-toggler').is(':visible');
         if (toggle) {
           $('.navbar-collapse').collapse('hide');
         }
        });
      }
  
  
    main.MenuTogglerClose = function(){
      $(".toggler-menu").on('click', function(){
        $(this).toggleClass('open');
        $('.header-left').stop().toggleClass('menu-open menu-open-desk');
      });
      $('.header-left a').on('click', function() {
       var toggle = $('.toggler-menu').is(':visible');
       if (toggle) {
         $('.header-left').removeClass('menu-open');
         $('.toggler-menu').removeClass('open');
       }
      });
    }
  
    /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
    main.HeaderFixd = function() {
      var HscrollTop  = $(window).scrollTop();  
        if (HscrollTop >= 100) {
           $('body').addClass('fixed-header');
        }
        else {
           $('body').removeClass('fixed-header');
        }
    }
  
  
      /*--------------------
      * OwlSlider
      ----------------------*
      main.Owl = function () {
        var owlslider = $("div.owl-carousel");
        if(owlslider.length > 0) {  
           loadScript(plugin_track + 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', function() {
             owlslider.each(function () {
              var $this = $(this),
                  $items = ($this.data('items')) ? $this.data('items') : 1,
                  $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                  $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                  $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                  $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                  $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                  $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                  $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                  $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                  $space = ($this.attr('data-space')) ? $this.data('space') : 30;    
             
                  $(this).owlCarousel({
                      loop: $loop,
                      items: $items,
                      responsive: {
                        0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                        480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                        768:{items: $this.data('sm-items') ? $this.data('sm-items') : 1},
                        980:{items: $this.data('md-items') ? $this.data('md-items') : 1},
                        1200:{items: $items}
                      },
                      dots: $navdots,
                      autoplayTimeout:$autospeed,
                      smartSpeed: $smartspeed,
                      autoHeight:$autohgt,
                      center:$CenterSlider,
                      margin:$space,
                      nav: $navarrow,
                      navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
                      autoplay: $autoplay,
                      autoplayHoverPause: true   
                  }); 
             }); 
           });
        }
      }
  
    /* ---------------------------------------------- /*
       * lightbox gallery
      /* ---------------------------------------------- *
      main.Gallery = function() {
        if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()){
          loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
            if($(".lightbox-gallery").exists()){
              $('.lightbox-gallery').magnificPopup({
                  delegate: '.gallery-link',
                  type: 'image',
                  tLoading: 'Loading image #%curr%...',
                  mainClass: 'mfp-fade',
                  fixedContentPos: true,
                  closeBtnInside: false,
                  gallery: {
                      enabled: true,
                      navigateByImgClick: true,
                      preload: [0, 1] // Will preload 0 - before current, and 1 after main current image
                  }
              }); 
            }
            if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                  });
              }
          });
        }
      }
  
       /*--------------------
      * Masonry
      ----------------------*/
      main.masonry = function () {
        var portfolioWork = $('.portfolio-content');
        if ($(".portfolio-content").exists()){
          loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
            if ($(".portfolio-content").exists()){
                $(portfolioWork).isotope({
                  resizable: false,
                  itemSelector: '.grid-item',
                  layoutMode: 'masonry',
                  filter: '*'
                });
                //Filtering items on portfolio.html
                var portfolioFilter = $('.filter li');
                // filter items on button click
                $(portfolioFilter).on( 'click', function() {
                  var filterValue = $(this).attr('data-filter');
                  portfolioWork.isotope({ filter: filterValue });
                });
                //Add/remove class on filter list
                $(portfolioFilter).on( 'click', function() {
                  $(this).addClass('active').siblings().removeClass('active');
                });
            }
          });
        }
    }
  
    /*--------------------
          * Progress Bar 
      ----------------------*/
      main.ProgressBar = function(){
          $(".skill-bar .skill-bar-in").each(function () {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if(bottom_window > bottom_object) {
              $(this).css({
                width : progressWidth
              });
            }
          });
      }
  
      /*--------------------
          * particles
      ----------------------*/
      main.particles = function() {
        if ($("#particles-box").exists()){
          loadScript(plugin_track + 'particles/particles.min.js', function() {
          });
          loadScript(plugin_track + 'particles/particles-app.js', function() {
          });
        }
      }
  
  
      /*--------------------
          * Type It
      ----------------------*/
      main.mTypeIt = function() {
        if ($("#type-it").exists()){
              loadScript(plugin_track + 'typeit-master/typeit.js', function() {
                  new TypeIt('#type-it', {
                  speed: 200,
                  loop:true,
                  strings: [
                    'Designer',
                    'Developer'
                  ],
                  breakLines: false
              }); 
            });
          }
      }
      main.one_page = function() {
          //var HHeight = $('.navbar').outerHeight();
          var $one_page_nav = $('.one-page-nav');
          if($one_page_nav.length > 0) {
              $one_page_nav.each(function(){
                  $.scrollIt({
                    upKey: 38,             // key code to navigate to the next section
                    downKey: 40,           // key code to navigate to the previous section
                    easing: 'linear',      // the easing function for animation
                    scrollTime: 600,       // how long (in ms) the animation takes
                    activeClass: 'active', // class given to the active nav element
                    onPageChange: null,    // function(pageIndex) that is called when page is changed
                    topOffset: -70           // offste (in px) for fixed top navigation
                  });
              });
          }
      }
  
    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
      // loadScript
    var _arr  = {};
    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
          _arr[scriptName] = true;
          var body    = document.getElementsByTagName('body')[0];
          var script    = document.createElement('script');
          script.type   = 'text/javascript';
          script.src    = scriptName;
          // mainn bind main event to main callback function
          // mainre are several events for cross browser compatibility
          // script.onreadystatechange = callback;
          script.onload = callback;
          // fire main loading
          body.appendChild(script);
        } else if (callback) {
          callback();
        }
    };
  
    // Window on Load
    $(window).on("load", function(){
      main.masonry(),
      main.PreLoad();
    });
    // Document on Ready
    $(document).ready(function() {
      main.particles(),
      main.HeaderFixd(),
      main.MenuClose(),
      main.MenuTogglerClose(),
      main.Gallery(),
      main.ProgressBar(),
      main.mTypeIt(),
      main.one_page(),
      main.Owl(),
      $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    });
  
    // Document on Scrool
    $(window).on("scroll", function(){
      main.ProgressBar(),
      main.HeaderFixd();
    });
  
    // Window on Resize
    $(window).on("resize", function(){
    });
  
  
  })(jQuery);