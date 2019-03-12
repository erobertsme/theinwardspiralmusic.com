const youTubeDiv = document.querySelector(".youtube-player");

addThumb(youTubeDiv)

youTubeDiv.addEventListener('click', function(event){
  addIframe(this)
  console.log("Click!")
})

// The below code was partially provided from: https://hellbach.us/blog/tech/dev/efficient-method-embedding-youtube-videos/
function addThumb(item) { 
  item.innerHTML = `<a class="youtube-thumb embed-link" style="background-image: url('https://i.ytimg.com/vi/${item.dataset.id}/maxresdefault.jpg')"><i class="fab fa-youtube embed-link"></i></a>`;
}

function addIframe(item) {
  let iframe = document.createElement("iframe");
iframe.setAttribute("src", `https://www.youtube.com/embed/${item.dataset.id}?autoplay=1&autohide=1&rel=0&enablejsapi=1&playsinline=1`);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "accelerometer; encrypted-media; gyroscope; picture-in-picture");
  iframe.setAttribute("height", "338");
  iframe.setAttribute("width", "600");
  iframe.setAttribute("allowfullscreen", "")
  item.innerHTML = ""
  item.appendChild(iframe);
}