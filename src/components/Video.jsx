import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import videos from '../assets/videos'

export default class Video extends Component {
  state = {  
    lastIndex: videos.length -1,
    currentIndex: 0,
    showVideo: false,
    classes: "youtube-thumb embed-link"
  }

  prev = () => {
    this.returnToThumbnail()
    this.slideIn('left');
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    } else {
      this.setState({ currentIndex: this.state.lastIndex })
    }
  }
  
  next = () => {
    this.returnToThumbnail()
    this.slideIn('right');
    if (this.state.currentIndex < this.state.lastIndex) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    } else {
      this.setState({ currentIndex: 0 })
    }
  }

  returnToThumbnail = () => {
    if (this.state.showVideo === true) {
      this.setState({ showVideo: false })
    }
  }
  
  getVideo = () => {
    return videos[this.state.currentIndex].split('v=')[1]
  }

  loadVideo = () => {
    this.setState({ showVideo: !this.state.showVideo })
  }

  slideIn = (direction) => {
    this.setState({ classes: `youtube-thumb embed-link slide-${direction}` })
  }
  
  addThumbnail = () => {
    let style = { backgroundImage: `url('https://i.ytimg.com/vi/${this.getVideo()}/maxresdefault.jpg')` }
    return <div className={ this.state.classes } style={ style } onClick={ this.loadVideo }><FontAwesomeIcon icon={[ 'fab', 'youtube' ]} /></div>
  }
  
  addIframe = () => {
    return (
    <iframe 
      title="Music video" 
      src={ `https://www.youtube.com/embed/${this.getVideo()}?autoplay=1&autohide=1&rel=0&enablejsapi=1&playsinline=1` }
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      height="338"
      width="600"
    >
    </iframe>
    )
  }

  render() {
    return (
      <div className="video">
        <FontAwesomeIcon icon="angle-left" id="prev" onClick={ this.prev } />
          <div className="youtube-player">{ this.state.showVideo ? this.addIframe() : this.addThumbnail() }</div>
        <FontAwesomeIcon icon="angle-right" id="next" onClick={ this.next } />
      </div>
    )
  }
}
