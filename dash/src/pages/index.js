

export default function Home() {
  return (
    <div className="flex flex-row bg-neutral-900 w-screen h-screen flex-auto p-5 gap-5 text-neutral-500">
      <div className="w-14 h-screen flex-none bg-neutral-800">
       
      </div>
      <div className="flex flex-col h-screen flex-auto p-5 gap-5 overflow-y-auto">

      
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
       <div className="col-span-1 h-32 bg-neutral-700"></div>
       <div className="col-span-1 h-32 bg-neutral-700"></div>
       <div className="col-span-1 h-32 bg-neutral-700"></div>
       <div className="col-span-1 h-32 bg-neutral-700"></div>
     </div>

     <div className="flex flex-col md-flex-row gap-5">
       <div className="flex flex-col gap-5 h-full w-full md:w-800 flex-none">
         <div className="h-1/2 w-full rounded-lg bg-neutral-800"></div>
         <div className="h-1/2 w-full rounded-lg bg-neutral-800"></div>
       </div>
       <div className="h-[80vh] w-full rounded-lg bg-neutral-800"></div>
     </div>
     </div>
    </div>
  )
}
