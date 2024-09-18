'use client'

import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

function ThemedButton({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className={cn('', className)}
      variant="ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={1.5} />
      ) : (
        <Sun size={18} strokeWidth={1.5} />
      )}
    </Button>
  )
}

export default ThemedButton
