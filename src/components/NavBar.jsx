import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    })
    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      },
    )
  })
  return (
    <nav className=''>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='logo' />
          <p>Velvet Pour</p>
        </a>

        <ul className='flex text-white'>
          {navLinks.map(({ title, id }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
