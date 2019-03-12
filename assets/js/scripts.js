const youTubeDiv = document.querySelector(".youtube-player");

addThumb(youTubeDiv)

youTubeDiv.addEventListener('click', function(event){
  addIframe(this)
  console.log("Click!")
})

// The below code was provided from: https://hellbach.us/blog/tech/dev/efficient-method-embedding-youtube-videos/
function addThumb(item) { 
  item.innerHTML = `<div class="youtube-thumb" style="background-image: url('https://i.ytimg.com/vi/${item.dataset.id}/maxresdefault.jpg')"><i class="fas fa-play fa-3x"></i></div>`;
}

function addIframe(item) {
  let iframe = document.createElement("iframe");
iframe.setAttribute("src", `https://www.youtube.com/embed/${item.dataset.id}?autoplay=1&autohide=1&rel=0`);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "accelerometer; encrypted-media; gyroscope; picture-in-picture");
  iframe.setAttribute("height", "338");
  iframe.setAttribute("width", "600");
  iframe.setAttribute("allowfullscreen", "")
  item.innerHTML = ""
  item.appendChild(iframe);
}