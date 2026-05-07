// app/not-found.tsx
'use client'

import Link from 'next/link'
import { useAuth } from '@/context/auth-context'

export default function NotFound() {
  const { isAuthenticated } = useAuth()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Страница не найдена</h2>
        <p className="text-muted-foreground">
          Извините, такой страницы не существует
        </p>
        <Link
          href={isAuthenticated ? "/home" : "/login"}
          className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          {isAuthenticated ? "Вернуться на главную" : "Войти"}
        </Link>
      </div>
    </div>
  )
}