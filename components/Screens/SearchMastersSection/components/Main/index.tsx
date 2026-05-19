const Main = () => {
    return (
        <div 
            className="flex flex-col flex-1 h-screen p-6"
             style={{
                background: 'linear-gradient(127.16deg, rgba(99, 99, 164, 0.32) 27.97%, rgba(220, 204, 154, 0.1) 82.51%)'
            }}
        >
            <header className="flex justify-between">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-[#101828] text-[18px] font-bold">Найдено 2847 фрилансеров</h3>
                    <span className="text-[#6A7282] text-[14px]">Лучше всего соответствуют вашим критериям</span>
                </div>
            </header>
        </div>
    );
}

export default Main