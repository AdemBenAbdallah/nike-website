import headerLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants/index'
import { useState } from 'react';

const Nav = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };


  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className={`lg:flex flex-1 flex justify-center items-center gap-16 ${mobileNavVisible ? 'block max-h-screen bg-black top-0 left-0 bottom-0 w-1/2 fixed flex-col z-50' : 'hidden'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block cursor-pointer' onClick={toggleMobileNav}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav