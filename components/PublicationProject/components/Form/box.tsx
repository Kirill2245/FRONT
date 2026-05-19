interface BoxProps {
  children: React.ReactNode;
  header: string; // добавить header в интерфейс
}

const Box = ({ children, header }: BoxProps) => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-white border border-[#F2F2F7] rounded-[14px]">
      <h2 className="text-[#0A0A0A] font-semibold text-[18px]">{header}</h2>
      {children}
    </div>
  );
}

export default Box;