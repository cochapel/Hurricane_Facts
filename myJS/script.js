// For Slider
$(function() {

  var Page = (function() {

    var $navArrows = $( '#nav-arrows' ),
      $nav = $( '#nav-dots > span' ),
      slitslider = $( '#slider' ).slitslider( {
        onBeforeChange : function( slide, pos ) {

          $nav.removeClass( 'nav-dot-current' );
          $nav.eq( pos ).addClass( 'nav-dot-current' );

        }
      } ),

      init = function() {

        initEvents();

      },
      initEvents = function() {

        // add navigation events
        $navArrows.children( ':last' ).on( 'click', function() {

          slitslider.next();
          return false;

        } );

        $navArrows.children( ':first' ).on( 'click', function() {

          slitslider.previous();
          return false;

        } );

        $nav.each( function( i ) {

          $( this ).on( 'click', function( event ) {

            var $dot = $( this );

            if( !slitslider.isActive() ) {

              $nav.removeClass( 'nav-dot-current' );
              $dot.addClass( 'nav-dot-current' );

            }

            slitslider.jump( i + 1 );
            return false;

          } );

        } );

      };

      return { init : init };

  })();

  Page.init();

  /**
   * Notes:
   *
   * example how to add items:
   */

  /*

  var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

  // call the plugin's add method
  ss.add($items);

  */

});

// For iziModal
$("#modal1").iziModal();
$("#modal2").iziModal();
$("#modal3").iziModal();
$("#modal4").iziModal();
$("#modal5").iziModal();
$("#modal6").iziModal();
$("#modal7").iziModal();

// For Quiz
var myQuestions = [{
    question: "What is the sixth month of the year?",
    answers: ["July", "August", "May", "April"],
    correct: "June"
  }, {
    question: "Fill in the missing number: 24, 31, 38, 45, 52, ?",
    answers: ["54", "23", "65", "44"],
    correct: "59"
  }, {
    question: "Which of the dates below is the latest?",
    answers: ["February 20, 1992", "June 14, 1929", "May 31, 1992", "June 6, 1929"],
    correct: "October 14, 1992"
  }, {
    question: "A clock lost 2 minutes and 20 seconds in 40 days. How many seconds did it lose per day?",
    answers: ["1.5", "2", "2.5", "3"],
    correct: "3.5"
  }, {
    question: "A test has 30 questions. If Tom gets 70% correct, how many questions did Tom get wrong?",
    answers: ["7", "8", "10", "6"],
    correct: "9"
  }];

  var myQuiz = new ysQuiz(myQuestions, {
    title: '',
  });

// For Interactive Map
  $("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  if('data-info' != null) {
      $('#info-box').html($(this).data('info'));
  }
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
