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
var aTitle1 = 'Hurricane Igor';
var aTitle2 = 'Hurricane Sandy';
var aTitle3 = 'Hurricane Katrina';
var aTitle4 = 'Hurricane Harvey';
var aTitle5 = 'Hurricane Sandy';

$("#modal1").iziModal({
    title: aTitle1.fontcolor('#f7d45f').fontsize(5).bold(),
    headerColor: '#1F1D1D',
});

$("#modal2").iziModal({
  title: aTitle2.fontcolor('#f7d45f').fontsize(5).bold(),
  headerColor: '#1F1D1D',
});
$("#modal3").iziModal({
  title: aTitle3.fontcolor('#f7d45f').fontsize(5).bold(),
  headerColor: '#1F1D1D',
});
$("#modal4").iziModal({
  title: aTitle3.fontcolor('#f7d45f').fontsize(5).bold(),
  headerColor: '#1F1D1D',
});
$("#modal5").iziModal({
  title: aTitle4.fontcolor('#f7d45f').fontsize(5).bold(),
  headerColor: '#1F1D1D',
});
$("#modal6").iziModal({
  title: aTitle5.fontcolor('#f7d45f').fontsize(5).bold(),
  headerColor: '#1F1D1D',
});
$("#modal7").iziModal();

// For Quiz
var myQuestions = [{
    question: "Between what dates is hurricane season?",
    answers: ["Dec. 1 to June 1", "Aug. 15 to Oct. 15", "March 22 to Jun 21", "May 1 to Dec. 1"],
    correct: "June 1 to Dec. 1"
  }, {
    question: "Which hurricane is the worst natural disaster in U.S. history?",
    answers: ["Katrina", "Harvey", "Sandy", "Labor Day Hurricane"],
    correct: "Great Galveston Hurricane"
  }, {
    question: "How much of New Orleans was underwater after Hurricane Katrina?",
    answers: ["20%", "15%", "none", "70%"],
    correct: "80%"
  }, {
    question: "How much rain fell over Texas in total during Hurricane Harvey?",
    answers: ["50 inches", "51 inches", "25 trillion gallons", "27 billion gallons"],
    correct: "27 trillion gallons"
  }, {
    question: "What was the maximum sustained winds of the Labor Day Hurricane of 1935?",
    answers: ["200", "189", "170", "180"],
    correct: "185"
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
