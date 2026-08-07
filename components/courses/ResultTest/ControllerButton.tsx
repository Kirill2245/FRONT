import Link from 'next/link';
import { Button } from "../../ui/button";
import { Download } from 'lucide-react';
import ShareIcon from '@/public/icons/ShareIcon';
interface ControllerButtonProps{
    openSharpModal:() => void
}
export default function ControllerButton({openSharpModal}: ControllerButtonProps){
    return (
        <ul className='flex w-full max-w-225 gap-4 flex-wrap'>
            <li className='flex flex-1 min-w-30 max-w-75 h-12'>
                <Button className='w-full h-full'>
                    <Download/>
                    <span>Скачать</span>
                </Button>
            </li>
            <li className='flex flex-1 min-w-30 max-w-75 h-12'>
                <Button className='w-full h-full bg-[#101073]' onClick={openSharpModal}>
                    <ShareIcon/>
                    <span className='text-white'>Поделиться</span>
                </Button>
            </li>
            <li className='flex flex-1 min-w-30 max-w-75 h-12 border-[#F2F2F7] border-[1.6px] bg-white rounded-[10px] items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors'>
                <Link href={'/courses/'} className='flex flex-1 items-center justify-center'>
                    <span>Пройти ещё тест</span>
                </Link>
            </li>
            <li className='flex flex-1 min-w-30 max-w-75 h-12 border-[#F2F2F7] border-[1.6px] bg-white rounded-[10px] items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors'>
                <Link href={'/'} className='flex flex-1 items-center justify-center'>
                    <span>На главную</span>
                </Link>
            </li>
        </ul>
    )
}