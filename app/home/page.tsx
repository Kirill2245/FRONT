"use client"
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
    const router = useRouter()
    const { loading, isAuthenticated, checkAuth, logout: authLogout } = useAuth()
    useEffect(() => {
        let isMounted = true
        
        const initAuth = async () => {
          if (!isAuthenticated && !loading && isMounted) {
            await checkAuth()
          }
        }
        
        initAuth()
        
        return () => {
          isMounted = false
        }
      }, []) // Пустой массив зависимостей - только при монтировании
    
      // Редирект только когда точно известно, что пользователь не авторизован
      useEffect(() => {
        if (!loading && !isAuthenticated) {
          router.replace("/")
        }
      }, [loading, isAuthenticated, router])
    
      // Пока идет проверка, показываем индикатор загрузки
      if (loading) {
        return (
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )
      }
    
      // Если не авторизован - не показываем контент
      if (!isAuthenticated) {
        return null
      }
    return(
        <main>
            
        </main>
    );
}

export default HomePage