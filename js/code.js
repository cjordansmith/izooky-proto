// Get the modal
var modal = document.getElementById('modal_window');

// Get the button that opens the modal
var btn = document.getElementById("modal-user-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];

var vid = document.getElementById("my-video");


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
		vid.autoplay = true;
		vid.load();
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
		$('#my-video')[0].pause();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
				$('#my-video')[0].pause();
    }

}
