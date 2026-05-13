"use client"
import Publication from "@/components/Publication";
import Home from "@/components/Screens/Home";
import { useAuth } from "@/context/auth-context";
import { UserRole } from "@/types/user-role.enum";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PublicationPage = () => {
    const router = useRouter()
    const {user, loading, isAuthenticated, checkAuth, logout: authLogout } = useAuth()
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

      if(user?.role !== UserRole.CUSTOMER){
        return <div className="flex items-center justify-center w-full h-screen text-3xl">Нет прав доступа</div>
      }
    return(
        <main className="flex flex-1 min-w-0 h-auto bg-[#FBFBFD]">
            <Publication/>
        </main>
    );
}

export default PublicationPage