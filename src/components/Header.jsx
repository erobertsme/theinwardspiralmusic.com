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

const createConfetti = () => {
  let confetti = document.createElement('div')
  confetti.classList.add('confetti-piece')
  return confetti
}

const generateConfetti = () => {
  const birthday = document.getElementById('birthday')
  
  for (let i = 0; i < 100; i++) {
    console.log(i)
    birthday.appendChild(createConfetti())
  }
}

const Header = () => {
  return (
    <header className="header" id="birthday">

      <div className="header-image"><img src={ HeaderImage } alt="The Inward Spiral" /></div>

      <div className="title">The Inward Spiral
        <br/><br/>
        <div onClick={ generateConfetti }><FontAwesomeIcon className="cake" icon={[ 'fas', 'birthday-cake' ]}></FontAwesomeIcon>
      </div>
</div>

      <div className="social">
        { outputSocials() }
      </div>
    </header>
  )
}

export default Header
