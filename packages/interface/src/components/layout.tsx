import { ReactElement } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <div data-theme='retro'>
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main className='h-screen '>{children}</main>
      <div className='sticky bottom-0'>
        <Footer />
      </div>
    </div>
  </>
)
