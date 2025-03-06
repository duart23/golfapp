export default function HolePars({ holePars }: { holePars: number[] }) {
  return (
    <div className="holes flex flex-wrap bg-gray-200">
      {holePars.length <= 9 ? (
        <div className="w-full flex flex-wrap gap-2">
          {holePars.map((par, index) => (
            <div
              key={index}
              className="w-14 h-8 flex items-center justify-center bg-white border rounded shadow"
            >
              {par}
            </div>
          ))}
          </div>
      ) :
      (
        <div className="grid grid-rows-2 grid-cols-9 gap-x-4 gap-y-2 ">
          {holePars.map((par, index) => (
             <div key={index} className="flex flex-col items-center">
            <div className="text-xs text-gray-500 font-semibold">{index + 1}</div>
            <div
              key={index}
              className="w-14 h-8 flex items-center justify-center bg-white border rounded shadow"
            >
              {par}
            </div>
            {/* ADD EACH HOLE PAR */}
            </div>
            ))}
          </div>
      )}

    </div>
    
  );
}


{/* <div className="flex flex-wrap gap-2 p-4 bg-gray-200">
      {holePars.length <= 9 ? (
        <div className="w-full grid grid-cols-9 gap-2">
          {holePars.map((par, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center bg-white border rounded shadow"
            >
              {par}
            </div>
          ))}
        </div>
      ) : (
        holePars.map((par, index) => (
          <div
            key={index}
            className="w-10 h-10 flex items-center justify-center bg-white border rounded shadow"
          >
            {par}
          </div>
        ))
      )}
    </div> */}