import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useState } from 'react'

import styles from '../styles/Home.module.css'

// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <header className=''>
      <div className='flex justify-between'>
        <div className=''>
          <a
            className='flex'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
          <ConnectButton />
        </div>

        <div className='mt-10 mr-10'>
          <button onClick={handleMenuOpen} type='button' className='z-50 space-y-2'>
            <div
              className={
                openMenu
                  ? 'h-0.5 w-8 translate-y-2.5 rotate-45 bg-gray-600 transition duration-500 ease-in-out'
                  : 'h-0.5 w-8 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'opacity-0 transition duration-500 ease-in-out'
                  : 'h-0.5 w-8 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'h-0.5 w-8 -rotate-45 bg-gray-600 transition duration-500 ease-in-out'
                  : 'h-0.5 w-8 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            {/* nav */}
            <nav
              className={
                openMenu
                  ? '  fixed -top-5 right-0 flex h-screen  flex-col bg-slate-50 px-3 pt-8 text-left opacity-40 duration-300 ease-linear'
                  : 'fixed right-[-100%] duration-300 ease-linear'
              }
            >
              <ul className=' mx-12 mt-20'>
                <li className='my-3'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='my-3'>
                  <Link href='/about'>about</Link>
                </li>
                <li className='my-3'>
                  <Link href='/mail'>mail</Link>
                </li>
              </ul>
            </nav>
          </button>
        </div>
      </div>
    </header>
  )
})
