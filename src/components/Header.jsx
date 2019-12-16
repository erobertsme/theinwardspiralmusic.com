import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderImage from '../assets/images/JULYEP_xsm.png'

const socials = [
  { name:'facebook-f', url:'https://facebook.com/theinwardspiral' },
  { name:'instagram', url:'https://www.instagram.com/theinwardspiral/' },
  { name:'twitter', url:'https://twitter.com/spiral_inward' },
  { name:'youtube', url:'https://www.youtube.com/channel/UC_yZofN6BM5xsoHaVxQ-QFQ' }
]

const outputSocials = () => {
  return socials.map((social, index) => (
    <a href={ social.url } alt={ social.name + ' link' } aria-label={ social.name + ' link' }  key={ index }><div className="social-icon"><FontAwesomeIcon icon={[ 'fab', social.name ]} size="2x" /></div></a>
  ))
}

const Header = () => {
  return (
    <header className="header">

      <div className="header-image"><img src={ HeaderImage } alt="The Inward Spiral" /></div>

      <div className="title">The Inward Spiral</div>

      <div className="social">
        { outputSocials() }
      </div>
    </header>
  )
}

export default Header
