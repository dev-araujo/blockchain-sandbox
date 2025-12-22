export function TxnsListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border rounded-md divide-y border-gray-800 divide-gray-800">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col p-4 border-l-2 border-transparent gap-4 md:flex-row md:items-start"
          >
            <div className="flex items-center gap-4 w-full md:w-1/2">
              <div className="h-10 w-10 rounded-full p-2 border border-gray-700 flex-shrink-0 bg-gray-800 animate-pulse" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-5 w-3/4 bg-gray-800 rounded-md animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-800 rounded-md animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-1/2 md:justify-end">
              <div className="flex items-center gap-2 flex-wrap justify-start text-xs">
                <div className="h-4 w-20 bg-gray-800 rounded-md animate-pulse" />
              </div>
              <div className="flex items-center gap-1 font-bold text-xs text-gray-500 flex-wrap justify-start">
                <div className="h-4 w-28 bg-gray-800 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
