import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import videos_list from '../assets/videos_list'
import Slider from 'react-slick'

export default class Video extends Component {
  state = {  
    showVideo: false,
  };
  
  slickSettings = {
    prevArrow: "#prev",
    nextArrow: "#next",
    infinite: true,
    arrows: false
  };

  generateVideos = () => { 
    return videos_list.map((video, index) => {
      return this.createThumbnail(video, index)
    })
  };

  createThumbnail = (video, index) => {
    let style = { backgroundImage: `url('https://i.ytimg.com/vi/${this.getVideo(video)}/maxresdefault.jpg')` };
    return <Video key={ index } style={ style } loadVideo={ this.loadVideo } />
  };

  returnToThumbnail = () => {
    if (this.state.showVideo === true) {
      this.setState({ showVideo: false })
    }
  };
  
  getVideo = (video) => {
    return video.split('v=')[1]
  };

  loadVideo = () => {
    this.setState({ showVideo: !this.state.showVideo })
  };
  
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
  };

  render() {
    return (
      <div className="video">
        <FontAwesomeIcon icon="angle-left" id="prev" />
        <div className="youtube-player">
          <Slider { ...this.slickSettings }>
            { this.generateVideos() }
          </Slider>
        </div>
        <FontAwesomeIcon icon="angle-right" id="next" />
      </div>
    )
  }
}
