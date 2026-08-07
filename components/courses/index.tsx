import { courseApi } from "@/api/services/course";
import { ca } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from 'next/link';
const Courses = () => {
    const [categorys, setCategorys] = useState<{ id: string; name: string ; _count:{lectios:number};slug:string }[]>([])
    useEffect(() => {
        getCategory()
    },[])
    const getCategory = async() => {
        try{
            const response = await courseApi.getCategorys()
            setCategorys(response)
        }
        catch(err){
            console.error(err)
        }
    }
    const selectIcon = (name: string) => {
    switch (name) {
        case 'Веб-разработка':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M36 32L44 24L36 16" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M12 16L4 24L12 32" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M29 8L19 40" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'UI/UX Дизайн':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M27 14C27.5523 14 28 13.5523 28 13C28 12.4477 27.5523 12 27 12C26.4477 12 26 12.4477 26 13C26 13.5523 26.4477 14 27 14Z" 
                fill="#1D1D1F" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M35 22C35.5523 22 36 21.5523 36 21C36 20.4477 35.5523 20 35 20C34.4477 20 34 20.4477 34 21C34 21.5523 34.4477 22 35 22Z" 
                fill="#1D1D1F" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M17 16C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16Z" 
                fill="#1D1D1F" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M13 26C13.5523 26 14 25.5523 14 25C14 24.4477 13.5523 24 13 24C12.4477 24 12 24.4477 12 25C12 25.5523 12.4477 26 13 26Z" 
                fill="#1D1D1F" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C25.852 44 27.296 42.508 27.296 40.624C27.296 39.75 26.936 38.954 26.422 38.374C25.842 37.796 25.546 37.07 25.546 36.124C25.5384 35.6838 25.6195 35.2466 25.7845 34.8385C25.9495 34.4303 26.1949 34.0595 26.5062 33.7482C26.8175 33.4369 27.1883 33.1915 27.5965 33.0265C28.0046 32.8615 28.4418 32.7804 28.882 32.788H32.874C38.976 32.788 43.984 27.782 43.984 21.68C43.93 12.024 34.922 4 24 4Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'Контент-райтинг':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M31.414 42.586C31.0389 42.9609 30.5303 43.1716 30 43.1716C29.4697 43.1716 28.9611 42.9609 28.586 42.586L25.414 39.414C25.0391 39.0389 24.8284 38.5303 24.8284 38C24.8284 37.4697 25.0391 36.9611 25.414 36.586L36.586 25.414C36.9611 25.0391 37.4697 24.8284 38 24.8284C38.5303 24.8284 39.0389 25.0391 39.414 25.414L42.586 28.586C42.9609 28.9611 43.1716 29.4697 43.1716 30C43.1716 30.5303 42.9609 31.0389 42.586 31.414L31.414 42.586Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M36 26L33.25 12.252C33.1752 11.878 32.995 11.5331 32.7307 11.2581C32.4663 10.9831 32.1288 10.7895 31.758 10.7L6.47001 4.05601C6.13687 3.97547 5.78861 3.98188 5.45866 4.07465C5.12871 4.16742 4.82814 4.34343 4.58579 4.58579C4.34343 4.82814 4.16742 5.12871 4.07465 5.45866C3.98188 5.78861 3.97547 6.13687 4.05601 6.47001L10.7 31.758C10.7895 32.1288 10.9831 32.4663 11.2581 32.7307C11.5331 32.995 11.878 33.1752 12.252 33.25L26 36" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M4.59998 4.59998L19.172 19.172" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'Видеомонтаж':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M32 26L42.446 32.964C42.5966 33.0642 42.7715 33.1217 42.9522 33.1303C43.1329 33.139 43.3125 33.0984 43.472 33.0131C43.6315 32.9277 43.7648 32.8007 43.8578 32.6455C43.9508 32.4903 43.9999 32.3129 44 32.132V15.74C44.0001 15.564 43.9537 15.3912 43.8656 15.2389C43.7774 15.0866 43.6507 14.9602 43.4981 14.8726C43.3456 14.7849 43.1726 14.7391 42.9966 14.7397C42.8207 14.7403 42.648 14.7873 42.496 14.876L32 21" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M28 12H8C5.79086 12 4 13.7909 4 16V32C4 34.2091 5.79086 36 8 36H28C30.2091 36 32 34.2091 32 32V16C32 13.7909 30.2091 12 28 12Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'Маркетинг':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M44 14L27 31L17 21L4 34" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M32 14H44V26" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'Копирайтинг':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M30 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V14L30 4Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M20 18H16" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M32 26H16" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M32 34H16" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'Анализ данных':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M24 16C33.9411 16 42 13.3137 42 10C42 6.68629 33.9411 4 24 4C14.0589 4 6 6.68629 6 10C6 13.3137 14.0589 16 24 16Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M6 10V38C6 39.5913 7.89642 41.1174 11.2721 42.2426C14.6477 43.3679 19.2261 44 24 44C28.7739 44 33.3523 43.3679 36.7279 42.2426C40.1036 41.1174 42 39.5913 42 38V10" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M6 24C6 25.5913 7.89642 27.1174 11.2721 28.2426C14.6477 29.3679 19.2261 30 24 30C28.7739 30 33.3523 29.3679 36.7279 28.2426C40.1036 27.1174 42 25.5913 42 24" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        case 'SEO оптимизация':
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M24 4C18.8645 9.39231 16 16.5535 16 24C16 31.4465 18.8645 38.6077 24 44C29.1355 38.6077 32 31.4465 32 24C32 16.5535 29.1355 9.39231 24 4Z" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M4 24H44" 
                stroke="#1D1D1F" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            </svg>
        );
        
        default:
        return null;
    }
    };
    return (
    <section className="bg-[linear-gradient(180deg,rgba(187,204,238,0.31)_50.96%,rgba(57,90,239,0.38)_100%)] w-full h-auto min-h-screen flex flex-col p-12 items-center gap-22.5">
      <h1 className="text-4xl font-semibold text-[#1D1D1F]">
        Проверьте свои навыки — получите сертификат
      </h1>
      
      <div className="flex flex-wrap gap-6 w-full h-auto">
        {categorys.map((item) => (
          <Link 
            key={item.id} 
            href={`/courses/${item.slug}`} // или item.id, если нет slug
            className="flex gap-4 flex-1 bg-white p-8 flex-col gap-4 min-w-[341.6000061035156px] h-[255.8000030517578px] rounded-[14px] hover:shadow-lg transition-shadow no-underline"
          >
            {selectIcon(item.name)}
            
            <div className="flex flex-col gap-[9.4px]">
              <h3 className="text-[#1D1D1F] font-semibold text-[20px]">
                {item.name}
              </h3>
              <p className="text-[#6E6E73] text-[14px]">
                {item._count.lectios} {item._count.lectios < 2 ? 'лекция' : 'лекций'}
              </p>
            </div>
            
            <div className="h-[44px] inline-flex items-center justify-center rounded-md border border-gray-200 px-4 hover:bg-gray-50 transition-colors">
              <span className="text-[#1D1D1F] text-[14px]">Изучить</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    );
}

export default Courses