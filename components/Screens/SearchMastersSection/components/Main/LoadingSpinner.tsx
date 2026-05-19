// components/Screens/SearchMastersSection/components/LoadingSpinner.tsx
const LoadingSpinner = () => {
    return (
        <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#101073]"></div>
        </div>
    );
};

export default LoadingSpinner;