'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

import { Button } from '@/components/ui/button'

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <Button
      variant='ghost'
      className='flex h-9 w-9 items-center justify-center p-0'
      type='button'
      aria-label='Toggle theme'
      onClick={() => {
        console.log(resolvedTheme)

        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {mounted && resolvedTheme === 'dark' && <Sun size={20} />}
      {mounted && resolvedTheme === 'light' && <Moon size={20} />}
    </Button>
  )
}

export { ThemeSwitcher }
