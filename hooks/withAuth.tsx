// hooks/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserRole } from '@/types/user-role.enum';
import { useAuth } from '@/context/auth-context';


export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  requiredRole?: UserRole
) {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();
    const { user, loading, isAuthenticated, checkAuth } = useAuth();

    useEffect(() => {
      let isMounted = true;

      const initAuth = async () => {
        if (!isAuthenticated && !loading && isMounted) {
          await checkAuth();
        }
      };

      initAuth();

      return () => {
        isMounted = false;
      };
    }, []);

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.replace("/");
      }
    }, [loading, isAuthenticated, router]);

    if (loading) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return null;
    }

    if (requiredRole && user?.role !== requiredRole) {
      return (
        <div className="flex items-center justify-center w-full h-screen text-3xl">
          Нет прав доступа
        </div>
      );
    }

    return <Component {...props} />;
  };
}