import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface ProfileProps{
    firstName: string
    emailVerified:boolean
    createdAt:string
    avatarLink?:string | undefined,
    specialization:string,
    location:string
}

const Profile:React.FC<ProfileProps> = ({firstName,emailVerified, createdAt, avatarLink, specialization, location}) => {
    const datastat = [
        {
            lable:location
        },
        {
            lable:`Зарегестрирован с ${createdAt.split('-')[0]}`
        },
        {
            lable:'98% Успешные работы'
        }
    ]
    return (
        <div className="w-full bg-white h-auto p-6.25 rounded-2xl flex gap-6 border border-[#00000014]">
            <div className="w-24 h-24 relative"> {/* Добавьте relative */}
                {avatarLink && (
                    <Image 
                        src={avatarLink} 
                        alt="logo profile" 
                        fill
                        sizes="96px"
                        className="rounded-full object-cover"
                    />
                )}
                <div className="bg-[#B7C5F9] w-7 h-7 rounded-full absolute z-10 top-17 left-[65%] flex items-center justify-center">
                    <CheckCircle size={16}/>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <header className="flex justify-between w-full">
                    <h1 className="text-[#0A0A0A] text-[28px] ">{firstName}</h1>
                    <div className="bg-[#F2F4FE]  h-7 rounded-[12px] flex items-center justify-center pl-2.5 pr-2.5">
                        <p className="">{emailVerified ? 'Verified' : 'No Verified'}</p>
                    </div>
                </header>
                <p className="text-[#717182]">{specialization}</p>
                <div className="flex gap-4">
                    {
                        datastat.map((item, index) => (
                            <div key={index} className="flex gap-4 text-[#717182]">
                                <span>{item.lable}</span>
                                {index !== 2 && <span>•</span>}
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default Profile