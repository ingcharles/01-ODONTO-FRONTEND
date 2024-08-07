/*
 * Layout
 */
(function () {
  //Get saved layout type from LocalStorage
  var layoutStatus = localStorage.getItem('ma-layout-status');
  if (layoutStatus == 1) {
    $('body').addClass('sw-toggled');
    $('#tw-switch').prop('checked', true);
  }

  $('body').on('change', '#toggle-width input:checkbox', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('toggled sw-toggled');
      localStorage.setItem('ma-layout-status', 1);
    }
    else {
      $('body').removeClass('toggled sw-toggled');
      localStorage.setItem('ma-layout-status', 0);
    }
  });

  var isLogin = !localStorage.getItem('isLogin');
  if (isLogin)
    $('body').removeClass('login-content');
  else
    $('body').addClass('login-content');

  /*$('body').on('click', '.si-inner > ul > li > a', function (e) {
      e.preventDefault();
      $('#sidebar').removeClass('toggled');
  });*/

})();


$(document).ready(function () {

  (function () {
    $('body').on('click', '#top-search > a', function (e) {
      e.preventDefault();
      $('#header').addClass('search-toggled');
    });

  })();

  /*
   * Top Search
   */
  (function () {
    $('body').on('click', '#top-search > a', function (e) {
      e.preventDefault();

      $('#header').addClass('search-toggled');
    });

    $('body').on('click', '#top-search-close', function (e) {
      e.preventDefault();

      $('#header').removeClass('search-toggled');
    });
  })();

  (function () {
    $('body').on('click', '.cuadro', function (e) {

      //$('#addNew-mark').modal('show');
      //$('#addNew-event input:text').val('');
      //$('#getStart').val(start);
      //$('#getEnd').val(end);

    });

    $('body').on('click', '.centro', function (e) {

      //$('#addNew-mark').modal('show');
      //$('#addNew-event input:text').val('');
      //$('#getStart').val(start);
      //$('#getEnd').val(end);

    });
  })();



  /*
   * Sidebar
   */
  (function () {
    //Toggle


    $('body').on('click', '#menu-trigger, #chat-trigger', function (e) {
      e.preventDefault();
      var x = $(this).data('trigger');

      $(x).toggleClass('toggled');
      $(this).toggleClass('open');

      //Close opened sub-menus
      $('.sub-menu.toggled').not('.active').each(function () {
        $(this).removeClass('toggled');
        $(this).find('ul').hide();
      });

      $('.profile-menu .main-menu').hide();

      if (x == '#sidebar') {
        $elem = '#sidebar';
        $elem2 = '#menu-trigger';

        $('#chat-trigger').removeClass('open');

        if (!$('#chat').hasClass('toggled')) {
          $('#header').toggleClass('sidebar-toggled');
        }
        else {
          $('#chat').removeClass('toggled');
        }
      }

      if (x == '#chat') {
        $elem = '#chat';
        $elem2 = '#chat-trigger';

        $('#menu-trigger').removeClass('open');

        if (!$('#sidebar').hasClass('toggled')) {
          $('#header').toggleClass('sidebar-toggled');
        }
        else {
          $('#sidebar').removeClass('toggled');
        }
      }

      //When clicking outside
      if ($('#header').hasClass('sidebar-toggled')) {
        $(document).on('click', function (e) {
          if (($(e.target).closest($elem).length === 0) && ($(e.target).closest($elem2).length === 0)) {
            setTimeout(function () {
              $($elem).removeClass('toggled');
              $('#header').removeClass('sidebar-toggled');
              $($elem2).removeClass('open');
            });
          }
        });
      }
    })

    //Submenu
    $('body').on('click', '.sub-menu > a', function (e) {

      $(this).parent().toggleClass('toggled');
      $(this).next().slideToggle(200);
      e.preventDefault();
    });
  })();

  /*
   * Clear Notification
   */
  $('body').on('click', '[data-clear="notification"]', function (e) {
    e.preventDefault();

    var x = $(this).closest('.listview');
    var y = x.find('.lv-item');
    var z = y.size();

    $(this).parent().fadeOut();

    x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
    x.find('.grid-loading').fadeIn(1500);


    var w = 0;
    y.each(function () {
      var z = $(this);
      setTimeout(function () {
        z.addClass('animated fadeOutRightBig').delay(1000).queue(function () {
          z.remove();
        });
      }, w += 150);
    })

    //Popup empty message
    setTimeout(function () {
      $('#notifications').addClass('empty');
    }, (z * 150) + 200);
  });

  /*
   * Dropdown Menu
   */
  if ($('.dropdown')[0]) {
    //Propagate
    $('body').on('click', '.dropdown.open .dropdown-menu', function (e) {
      e.stopPropagation();
    });

    $('.dropdown').on('shown.bs.dropdown', function (e) {
      if ($(this).attr('data-animation')) {
        $animArray = [];
        $animation = $(this).data('animation');
        $animArray = $animation.split(',');
        $animationIn = 'animated ' + $animArray[0];
        $animationOut = 'animated ' + $animArray[1];
        $animationDuration = ''
        if (!$animArray[2]) {
          $animationDuration = 500; //if duration is not defined, default is set to 500ms
        }
        else {
          $animationDuration = $animArray[2];
        }

        $(this).find('.dropdown-menu').removeClass($animationOut)
        $(this).find('.dropdown-menu').addClass($animationIn);
      }
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
      if ($(this).attr('data-animation')) {
        e.preventDefault();
        $this = $(this);
        $dropdownMenu = $this.find('.dropdown-menu');

        $dropdownMenu.addClass($animationOut);
        setTimeout(function () {
          $this.removeClass('open')

        }, $animationDuration);
      }
    });
  }

  /*
   * Calendar Widget
   */
  if ($('#calendar-widget')[0]) {
    (function () {
      $('#calendar-widget').fullCalendar({
        contentHeight: 'auto',
        theme: true,
        header: {
          right: '',
          center: 'prev, title, next',
          left: ''
        },
        defaultDate: '2014-06-12',
        editable: true,
        events: []
      });
    })();
  }

  /*
   * Weather Widget
   */
  if ($('#weather-widget')[0]) {
    $.simpleWeather({
      location: 'Austin, TX',
      woeid: '',
      unit: 'f',
      success: function (weather) {
        html = '<div class="weather-status">' + weather.temp + '&deg;' + weather.units.temp + '</div>';
        html += '<ul class="weather-info"><li>' + weather.city + ', ' + weather.region + '</li>';
        html += '<li class="currently">' + weather.currently + '</li></ul>';
        html += '<div class="weather-icon wi-' + weather.code + '"></div>';
        html += '<div class="dash-widget-footer"><div class="weather-list tomorrow">';
        html += '<span class="weather-list-icon wi-' + weather.forecast[2].code + '"></span><span>' + weather.forecast[1].high + '/' + weather.forecast[1].low + '</span><span>' + weather.forecast[1].text + '</span>';
        html += '</div>';
        html += '<div class="weather-list after-tomorrow">';
        html += '<span class="weather-list-icon wi-' + weather.forecast[2].code + '"></span><span>' + weather.forecast[2].high + '/' + weather.forecast[2].low + '</span><span>' + weather.forecast[2].text + '</span>';
        html += '</div></div>';
        $("#weather-widget").html(html);
      },
      error: function (error) {
        $("#weather-widget").html('<p>' + error + '</p>');
      }
    });
  }

  /*
   * Todo Add new item
   */
  //if ($('#todo-lists')[0]) {
  //Add Todo Item
  $('body').on('click', '#add-tl-item .add-new-item', function () {
    $(this).parent().addClass('toggled');
  });

  //Dismiss
  $('body').on('click', '.add-tl-actions > a', function (e) {
    e.preventDefault();
    var x = $(this).closest('#add-tl-item');
    var y = $(this).data('tl-action');

    if (y == "dismiss") {
      x.find('textarea').val('');
      x.removeClass('toggled');
    }

    if (y == "save") {
      x.find('textarea').val('');
      x.removeClass('toggled');
    }
  });
  // }

  /*
   * Auto Hight Textarea
   */
  if ($('.auto-size')[0]) {
    $('.auto-size').autosize();
  }

  // /*
  //  * Custom Scrollbars
  //  */
  // function scrollbar(className, color, cursorWidth) {
  //     $(className).niceScroll({
  //         cursorcolor: color,
  //         cursorborder: 0,
  //         cursorborderradius: 0,
  //         cursorwidth: cursorWidth,
  //         bouncescroll: true,
  //         mousescrollstep: 100
  //     });
  // }

  // //Scrollbar for HTML but not for login page
  // //if (!$('.login-content')[0]) {
  // scrollbar('html', 'rgba(0,0,0,0.3)', '5px');
  // //}

  // //Scrollbar Tables
  // if ($('.table-responsive')[0]) {
  //     scrollbar('.table-responsive', 'rgba(0,0,0,0.5)', '5px');
  // }

  //Scrill bar for Chosen
  // if ($('.chosen-results')[0]) {
  //     scrollbar('.chosen-results', 'rgba(0,0,0,0.5)', '5px');
  // }

  // //Scroll bar for tabs
  // if ($('.tab-nav')[0]) {
  //     scrollbar('.tab-nav', 'rgba(0,0,0,0.2)', '2px');
  // }

  // //Scroll bar for dropdowm-menu
  // if ($('.dropdown-menu .c-overflow')[0]) {
  //     scrollbar('.dropdown-menu .c-overflow', 'rgba(0,0,0,0.5)', '0px');
  // }

  // //Scrollbar for rest
  // if ($('.c-overflow')[0]) {
  //     scrollbar('.c-overflow', 'rgba(0,0,0,0.5)', '5px');
  // }

  /*
   * Profile Menu
   */
  $('body').on('click', '.profile-menu > a', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('toggled');
    $(this).next().slideToggle(200);
  });

  /*
   * Text Feild
   */
  // console.log('aaaaaaaaa');
  //Add blue animated border and remove with condition when focus and blur
  //if($('.fg-line')[0]) {
  $('body').on('focus', '.form-control', function () {
    console.log("entra $(this).closest('.fg-line')");
    $(this).closest('.fg-line').addClass('fg-toggled');
    $(this).closest('.fg-line-input-group').addClass('fg-toggled');
    $(this).closest('.fg-line-text-area').addClass('fg-toggled');
  })

  $('body').on('blur', '.form-control', function () {

    var p = $(this).closest('.form-group');
    var i = p.find('.form-control').val();

    if (p.hasClass('fg-float')) {
      if (i.length == 0) {
        $(this).closest('.fg-line').removeClass('fg-toggled');
        $(this).closest('.fg-line-input-group').removeClass('fg-toggled');
        $(this).closest('.fg-line-text-area').removeClass('fg-toggled');
      }
    }
    else {
      $(this).closest('.fg-line').removeClass('fg-toggled');
      $(this).closest('.fg-line-input-group').removeClass('fg-toggled');
      $(this).closest('.fg-line-text-area').removeClass('fg-toggled');
    }
  });
  //}

  //Add blue border for pre-valued fg-flot text feilds
  if ($('.fg-float')[0]) {
    $('.fg-float .form-control').each(function () {
      var i = $(this).val();

      if (!i.length == 0) {
        $(this).closest('.fg-line').addClass('fg-toggled');
        $(this).closest('.fg-line-input-group').addClass('fg-toggled');
        $(this).closest('.fg-line-text-area').addClass('fg-toggled');
      }

    });
  }

  /*
   * Audio and Video
   */
  if ($('audio, video')[0]) {
    $('video,audio').mediaelementplayer();
  }

  /*
   * Custom Select
   */
  // if ($('.selectpickers')) {
  //     $('.selecstpicker').selectpicker();
  // }

  /*
   * Tag Select
   */
  if ($('.tag-select')[0]) {
    $('.tag-select').chosen({
      width: '100%',
      allow_single_deselect: true
    });
  }

  /*
   * Input Slider
   */
  //Basic
  if ($('.input-slider')[0]) {
    $('.input-slider').each(function () {
      var isStart = $(this).data('is-start');

      $(this).noUiSlider({
        start: isStart,
        range: {
          'min': 0,
          'max': 100,
        }
      });
    });
    //$('.input-slider').Link('lower').to('-inline-<div class="is-tooltip"></div>');
  }

  //Range slider
  if ($('.input-slider-range')[0]) {
    $('.input-slider-range').noUiSlider({
      start: [30, 60],
      range: {
        'min': 0,
        'max': 100
      },
      connect: true
    });
  }

  //Range slider with value
  if ($('.input-slider-values')[0]) {
    $('.input-slider-values').noUiSlider({
      start: [45, 80],
      connect: true,
      direction: 'rtl',
      behaviour: 'tap-drag',
      range: {
        'min': 0,
        'max': 100
      }
    });

    $('.input-slider-values').Link('lower').to($('#value-lower'));
    $('.input-slider-values').Link('upper').to($('#value-upper'), 'html');
  }

  /*
   * Input Mask
   */
  if ($('input-mask')[0]) {
    $('.input-mask').mask();
  }

  /*
   * Color Picker
   */
  if ($('.color-picker')[0]) {
    $('.color-picker').each(function () {
      $('.color-picker').each(function () {
        var colorOutput = $(this).closest('.cp-container').find('.cp-value');
        $(this).farbtastic(colorOutput);
      });
    });
  }

  /*
   * HTML Editor
   */
  if ($('.html-editor')[0]) {
    $('.html-editor').summernote({
      height: 150
    });
  }

  if ($('.html-editor-click')[0]) {
    //Edit
    $('body').on('click', '.hec-button', function () {
      $('.html-editor-click').summernote({
        focus: true
      });
      $('.hec-save').show();
    })

    //Save
    $('body').on('click', '.hec-save', function () {
      $('.html-editor-click').code();
      $('.html-editor-click').destroy();
      $('.hec-save').hide();
      notify('Content Saved Successfully!', 'success');
    });
  }

  //Air Mode
  if ($('.html-editor-airmod')[0]) {
    $('.html-editor-airmod').summernote({
      airMode: true
    });
  }

  /*
   * Date Time Picker
   */

  // //Date Time Picker
  // if ($('.date-time-picker')) {
  //     $('.date-time-picker').datetimepicker();
  // }


  // //Time
  // if ($('.time-picker')[0]) {
  //     $('.time-picker').datetimepicker({
  //         format: 'LT'
  //     });
  // }

  // //Date
  // if ($('.date-picker')[0]) {
  //     $('.date-picker').datetimepicker({
  //         format: 'DD/MM/YYYY'
  //     });
  // }

  /*
   * Form Wizard
   */

  if ($('.form-wizard-basic')[0]) {
    $('.form-wizard-basic').bootstrapWizard({
      tabClass: 'fw-nav',
    });
  }

  /*
   * Bootstrap Growl - Notifications popups
   */
  function notify(message, type) {
    $.growl({
      message: message
    }, {
      type: type,
      allow_dismiss: false,
      label: 'Cancel',
      className: 'btn-xs btn-inverse',
      placement: {
        from: 'top',
        align: 'center'
      },
      delay: 10000,
      animate: {
        enter: 'animated fadeIn',
        exit: 'animated fadeOut'
      },
      offset: {
        x: 20,
        y: 85
      }
    });
  };

  //notify('Bienvenidos a la plataforma de gesti&oacute;n de su cl&iacute;nica', 'success');

  /*
   * Waves Animation
   */
  (function () {
    var wavesList = ['.btn'];

    for (var x = 0; x < wavesList.length; x++) {
      if ($(wavesList[x])[0]) {
        if ($(wavesList[x]).is('a')) {
          $(wavesList[x]).not('.btn-icon, input').addClass('waves-effect waves-button');
        }
        else {
          $(wavesList[x]).not('.btn-icon, input').addClass('waves-effect');
        }
      }
    }

    // setTimeout(function () {
    //     if ($('.waves-effect')[0]) {
    //         Waves.displayEffect();
    //     }
    // });
  })();

  /*
   * Lightbox
   */
  if ($('.lightbox')[0]) {
    $('.lightbox').lightGallery({
      enableTouch: true
    });
  }

  /*
   * Link prevent
   */
  $('body').on('click', '.a-prevent', function (e) {
    e.preventDefault();
  });

  /*
   * Collaspe Fix
   */
  if ($('.collapse')[0]) {

    //Add active class for opened items
    $('.collapse').on('show.bs.collapse', function (e) {
      $(this).closest('.panel').find('.panel-heading').addClass('active');
    });

    $('.collapse').on('hide.bs.collapse', function (e) {
      $(this).closest('.panel').find('.panel-heading').removeClass('active');
    });

    //Add active class for pre opened items
    $('.collapse.in').each(function () {
      $(this).closest('.panel').find('.panel-heading').addClass('active');
    });
  }

  /*
   * Tooltips
   */
  if ($('[data-toggle="tooltip"]')[0]) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  /*
   * Popover
   */
  if ($('[data-toggle="popover"]')[0]) {
    $('[data-toggle="popover"]').popover();
  }

  /*
   * Message
   */

  //Actions
  if ($('.on-select')[0]) {
    var checkboxes = '.lv-avatar-content input:checkbox';
    var actions = $('.on-select').closest('.lv-actions');

    $('body').on('click', checkboxes, function () {
      if ($(checkboxes + ':checked')[0]) {
        actions.addClass('toggled');
      }
      else {
        actions.removeClass('toggled');
      }
    });
  }

  if ($('#ms-menu-trigger')[0]) {
    $('body').on('click', '#ms-menu-trigger', function (e) {
      e.preventDefault();
      $(this).toggleClass('open');
      $('.ms-menu').toggleClass('toggled');
    });
  }

  /*
   * Login
   */
  //if ($('.login-content')[0]) {
  //Add class to HTML. This is used to center align the logn box
  $('html').addClass('login-content');

  //$('body').on('click', '.login-navigation > li', function () {
  //    var z = $(this).data('block');
  //    var t = $(this).closest('.lc-block');

  //    t.removeClass('toggled');

  //    //$(z).addClass('toggled');
  //    //setTimeout(function () {

  //    //});
  //})

  // }

  /*
   * Fullscreen Browsing
   */
  if ($('[data-action="fullscreen"]')[0]) {
    var fs = $("[data-action='fullscreen']");
    fs.on('click', function (e) {
      e.preventDefault();

      //Launch
      function launchIntoFullscreen(element) {

        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }

      //Exit
      function exitFullscreen() {

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }

      launchIntoFullscreen(document.documentElement);
      fs.closest('.dropdown').removeClass('open');
    });
  }

  /*
   * Clear Local Storage
   */
  if ($('[data-action="clear-localstorage"]')[0]) {
    var cls = $('[data-action="clear-localstorage"]');

    cls.on('click', function (e) {
      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "All your saved localStorage values will be removed",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, function () {
        localStorage.clear();
        swal("Done!", "localStorage is cleared", "success");
      });
    });
  }

  // (function () {
  //   $('body').on('click', '.menu-table', function () {

  //     //Selection
  //     $("#data-table-treatments").bootgrid({
  //       css: {
  //         icon: 'md icon',
  //         iconColumns: 'md-view-module',
  //         iconDown: 'md-expand-more',
  //         iconRefresh: 'md-refresh',
  //         iconUp: 'md-expand-less'
  //       },
  //       selection: true,
  //       multiSelect: true,
  //       rowSelect: true,
  //       keepSelection: true,
  //       formatters: {
  //         "commands": function (column, row) {
  //           return "<button type=\"button\" class=\"btn btn-icon command-edit\" data-row-id=\"" + row.id + "\" (click)=\"edit()\" ><span class=\"md md-edit\"></span></button> " +
  //             "<button type=\"button\" class=\"btn btn-icon command-delete\" data-row-id=\"" + row.id + "\"><span class=\"md md-delete\"></span></button>" +
  //             "<button type=\"button\" class=\"btn btn-icon command-delete\" data-row-id=\"" + row.id + "\"><span class=\"md md-settings-applications\"></span></button>";
  //         }
  //       }
  //     });

  //   })
  // })();

});

$(document).ready(function () {
  (function () {

    $('body').on('click', '.form-witget', function () {
      $('.date-time-picker').datetimepicker();

      $('.time-picker').datetimepicker({
        format: 'LT'
      });

      $('.date-picker').datetimepicker({
        format: 'DD/MM/YYYY'
      });
    });

  })();
});


