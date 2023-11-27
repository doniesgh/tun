import Card from 'components/card'
import React from 'react'

const Client = () => {
  return (
    <div className="mt-2 grid grid-cols-1 gap-5  w-full h-full rounded-[20px] md:grid-cols-5">
     <Card extra="pb-7 p-[20px]">
        <p className="text-[30px] text-center text-tunisys-100 font-bold dark:text-white">Biat</p>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          <div className="flex flex-col items-center">
          </div>
        </div>
    </Card>
    <Card extra="pb-7 p-[20px]">
        <p className="text-[30px] text-center text-tunisys-100 font-bold dark:text-white">Amen Bank</p>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          <div className="flex flex-col items-center">
          </div>
        </div>
    </Card>
    <Card extra="pb-7 p-[20px]">
        <p className="text-[30px] text-center text-tunisys-100 font-bold dark:text-white">La poste</p>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          <div className="flex flex-col items-center">
          </div>
        </div>
    </Card>
    </div>
    )
}

export default Client