getData()

const youTubeDiv = document.querySelector(".youtube-player");
let lastIndex
let currentIndex = 0
let videos = []

function getData() {
  let request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {

      let response = request.responseText;
      response = response.split('\n')
      
      for (let i = 0; i < response.length; i++) {
        const line = response[i]
        videos.push(line)
      }
      setFirstVideo()
      setLastIndex()
    }
  });
  request.open('GET', '/assets/js/videos.txt', true);
  request.send()
}

function setFirstVideo() {
  let video = videos[currentIndex]
  let videoArr = video.split('v=')
  let videoId = videoArr[1]

  currentIndex = 1

  youTubeDiv.setAttribute("data-id", videoId)
  addThumb(youTubeDiv)
}

function setLastIndex() {
  if (lastIndex === undefined && videos.length > 0) {
    lastIndex = videos.length -1
  }
}

const nextVideo = document.getElementById("next")
nextVideo.addEventListener('click', function() {
  let video = videos[currentIndex]
  let videoArr = video.split('v=')
  let videoId = videoArr[1]
  
  if (currentIndex < lastIndex) {
    currentIndex += 1
  } else {
    currentIndex = 0
  }
  
  youTubeDiv.setAttribute("data-id", videoId)
  addThumb(youTubeDiv)
})

const prevVideo = document.getElementById("prev")
prevVideo.addEventListener('click', function() {
  let video = videos[currentIndex]
  let videoArr = video.split('v=')
  let videoId = videoArr[1]
  
  if (currentIndex > 0) {
    currentIndex -= 1
  } else {
    currentIndex = lastIndex
  }
  
  youTubeDiv.setAttribute("data-id", videoId)
  addThumb(youTubeDiv)
})

youTubeDiv.addEventListener('click', function(event) {
  addIframe(this)
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