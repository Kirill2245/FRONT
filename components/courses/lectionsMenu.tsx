import Link from 'next/link';
interface Lecture {
    id: string;
    title: string;
    description: string;
    lectionsUrl: string;
    categoryId: string;
    testId: string;
}

interface LectionsMenuProps {
    lections: Lecture[];
    categoryName: string; // ✅ Добавляем в интерфейс
    slug:string
}
const LectionsMenu = ({ lections, categoryName, slug }: LectionsMenuProps) => {
    if (!lections || lections.length === 0) {
        return (
            <section className="p-8 text-center">
                <p className="text-gray-500">Нет доступных лекций</p>
            </section>
        );
    }
    return (
        <section className="bg-gradient-to-b from-[rgba(187,204,238,0.31)] to-[rgba(57,90,239,0.38)] w-full min-h-screen px-39.25 py-10.25 flex items-center flex-col gap-15.5">
            <h1 className='font-semibold text-4xl'>{categoryName}</h1>
            <div className="flex flex-wrap gap-6 w-full h-auto ">
                {lections.map((item, index) => (
                <Link 
                    key={item.id} 
                    href={{
                        pathname: `/courses/${slug}/lection`,
                        query: {
                            lectureId: item.id,
                            lectureNumber: index + 1,
                            categoryName: categoryName 
                        }
                    }}
                    className="flex gap-4 flex-1 bg-white p-8 flex-col gap-4 min-w-[341.6000061035156px] h-[255.8000030517578px] rounded-[14px] hover:shadow-lg transition-shadow no-underline"
                >
                    <h1>Лекция {index+1}</h1>
                    <div className="flex flex-col gap-[9.4px]">
                    <h3 className="text-[#1D1D1F] font-semibold text-[20px]">
                        {item.title}
                    </h3>
                    </div>
                    
                    <div className="h-[44px] inline-flex items-center justify-center rounded-md border border-gray-200 px-4 hover:bg-gray-50 transition-colors">
                        <span className="text-[#1D1D1F] text-[14px]">Изучить</span>
                    </div>
                </Link>
                ))}
            </div>
        </section>
    )
}

export default LectionsMenu