$(document).ready(function(){
   var $button = $('#modal-user-btn'),
       $overlay = $('.overlay'),
       $modal = $('.modal'),
       $player = $('#player'),
       $close = $('#modal_close'),
       player,
       getVideoID = 'ze1Uz49Az8k';

   //setup video
   var onYouTubePlayerAPIReady = function() {
      player = new YT.Player('player', {
        /*height: '390',
        width: '640',*/
        videoId: getVideoID,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
   }

   // Open modal after click
   $button.click(function(e){
      e.preventDefault();
      if (!player) onYouTubePlayerAPIReady();
      $overlay.attr('aria-hidden', 'false');
      $modal.attr('tabindex', '0');
      $button.hide();
   });

   // Close modal by btn click/hit
  $close.click(function(e){
     e.preventDefault();
     closeSection();
  });

   // autoplay video
   function onPlayerReady(event) {
      event.target.playVideo();
   }

   // Video ends
   function onPlayerStateChange(event) {
      if(event.data === 0) {
         closeSection();
      }
   }

   // Stop video
   function resetPlayer() {
      player.pauseVideo();
   };

   //close modal
   function closeSection(){
      $button.show();
      $overlay.attr('aria-hidden', 'true');
      $modal.attr('tabindex', '-1');
      resetPlayer();
   }

   //check where mouse is clicked
   $overlay.mousedown(function(e) {
      var clicked = $(e.target); // get the element clicked
      if (clicked.is('.modal') || clicked.parents().is('.modal')) {
         return; // click happened within the dialog, do nothing here
      } else { // click was outside the dialog, so close it
         closeSection();
      }
   });

   $(document).keydown(function(e) {
      // ESCAPE key pressed
      if (e.keyCode === 27) {
         closeSection();
      }
   });
});
