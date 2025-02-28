export function Skeleton() {
    return <>
        {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 animate-pulse">
                <div className="flex items-center space-x-4 w-full md:w-auto">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
                    <div className="h-6 bg-gray-200 rounded w-48 md:hidden"></div>
                </div>
                <div className="flex-1 border-t-2 md:border-l-2 md:border-t-0 border-gray-200 pt-4 md:pt-0 md:pl-6 w-full">
                    <div className="h-6 bg-gray-200 rounded w-64 mb-4 hidden md:block"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {[...Array(6)].map((_, j) => (
                            <div key={j} className="h-4 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </>
}