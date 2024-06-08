'use client'

import { SiGithub } from '@icons-pack/react-simple-icons'

import { Krafan } from './svg'
import { ThemeSwitcher } from './theme-switcher'

const Header = () => (
  <header className='container flex items-center justify-between py-4'>
    <Krafan />
    <div className='flex h-5 items-center space-x-4'>
      <ThemeSwitcher />
      <a href='https://github.com/dwinugroho/nextjs-typescript-tailwind'>
        <SiGithub />
      </a>
    </div>
  </header>
)

export { Header }
