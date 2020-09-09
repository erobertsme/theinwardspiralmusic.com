import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const retailers = [
  { 
    name: 'apple',
    label: 'Buy from Apple Music',
    url: 'https://itunes.apple.com/us/artist/the-inward-spiral/1449060965'
  },
  { 
    name: 'google-play',
    label: 'Buy from Google Play Music',
    url: 'https://play.google.com/store/music/artist?id=Akaiif6etszzgsjiph6sg2vp4xy'
  },
  { 
    name: 'spotify',
    label: 'Buy from Spotify',
    url: 'https://open.spotify.com/artist/5jQUDLYSPps0B66nLConyq?si=wwx6VrL3R9SAGcSDksfocA'
  },
  { 
    name: 'amazon',
    label: 'Buy from Amazon',
    url: 'https://music.amazon.com/artists/B07MFW8ZZN?ref=dm_sh_XDddoNWiT8vMgMXdRIOSJ6JCh'
  },
  { 
    name: 'soundcloud',
    label: 'Listen on Soundcloud',
    url: 'https://soundcloud.com/theinwardspiral'
  },
  {
    name: 'bandcamp',
    label: 'Listen on BandCamp',
    url: 'https://theinwardspiral.bandcamp.com/'
  }
];

const outputRetailers = () => {
  return retailers.map((retailer, index) => (
    <a href={ retailer.url } title={ retailer.label } aria-label={ retailer.label } key={ index } target={ "_blank" }><FontAwesomeIcon icon={['fab', retailer.name ]} /></a>
  ));
};

const Album = () => {
  return (
    <div className="buy-now">
      <div className="tagline">
        New Album
        <div className="album">Between Faces</div>
        Releasing on October 2nd 2020
      </div>

      <div className="links">
        { outputRetailers() }
      </div>
    </div>
  )
};

export default Album
