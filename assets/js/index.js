document.addEventListener('DOMContentLoaded', main())

const youTubeDiv = document.querySelector('.youtube-player')
const nextVideo = document.getElementById('next')
const prevVideo = document.getElementById('prev')

let lastIndex
let currentIndex = 0
let videos = []

youTubeDiv.addEventListener('click', () => {
  addIframe()
})

nextVideo.addEventListener('click', () => {
  next()
  addThumb(getVideo())
})

prevVideo.addEventListener('click', () => {
  prev()
  addThumb(getVideo())
})

async function main() {
  await addVideos()
  addThumb()
  lastIndex = videos.length -1
}

function getData() {
  return fetch('/assets/js/videos.txt').then(results => results.text())
}

async function addVideos() {
  let data = await getData()
  data = data.split('\n')

  for (let i = 0; i < data.length; i++) {
    let line = data[i]

    if (line !== '') {
      let video = line.split('v=')
      videos.push(video[1])
    }
  }
}

function prev() {
  if (currentIndex > 0) {
    currentIndex --
  } else {
    currentIndex = lastIndex
  }
}

function next() {
  if (currentIndex < lastIndex) {
    currentIndex ++
  } else {
    currentIndex = 0
  }
}

function getVideo() {
  return videos[currentIndex]
}

function addThumb() { 
  let a = document.createElement('a')
  a.setAttribute('class', 'youtube-thumb embed-link' )
  a.style.backgroundImage = `url('https://i.ytimg.com/vi/${getVideo()}/maxresdefault.jpg')`

  let icon = document.createElement('i')
  icon.setAttribute('class', 'fab fa-youtube embed-link')

  a.appendChild(icon)

  while (youTubeDiv.firstChild) {
    youTubeDiv.firstChild.remove()
  }
  youTubeDiv.appendChild(a)
}

function addIframe() {
  let iframe = document.createElement('iframe')
  iframe.src = `https://www.youtube.com/embed/${getVideo()}?autoplay=1&autohide=1&rel=0&enablejsapi=1&playsinline=1`
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allow', 'accelerometer; encrypted-media; gyroscope; picture-in-picture')
  iframe.height = '338'
  iframe.width = '600'
  iframe.setAttribute('allowfullscreen', '')

  while (youTubeDiv.firstChild) {
    youTubeDiv.firstChild.remove()
  }

  youTubeDiv.appendChild(iframe)
}