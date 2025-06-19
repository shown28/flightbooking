import React from 'react'

const PremiumFlights = () => {
  return (
    <>
    
        <div className='border border-slate-200 bg-white rounded rounded-xl flex flex-col  md:flex-row mx-10 justify-between px-10 shadow-md mt-30 py-5 mb-15'>
             {/*flight 1  */}
            <div className='flex flex-col items-center mb-4  '>
                {/* logo */}
                <img className='w-30 h-10 object-cover' src="https://www.logo.wine/a/logo/Air_India/Air_India-Logo.wine.svg" alt="" />
                <span>Air India</span>
            </div>

            <div className='flex flex-col items-center mb-4  '>
                {/* logo */}
                <img className='w-30 h-10 object-cover' src="https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png" alt="" />
                <span>Indigo</span>
            </div>

            <div className='flex flex-col items-center mb-4 '>
                {/* logo */}
                <img className='w-40 h-10 object-cover' src="https://brandlogos.net/wp-content/uploads/2023/10/spicejet-logo_brandlogos.net_0ywcb.png" alt="" />
                <span>SpiceJet</span>
            </div>
            <div className='flex flex-col items-center mb-4 '>
                {/* logo */}
                <img className='w-40 h-10 object-cover' src="https://brandlogos.net/wp-content/uploads/2023/11/vistara-logo_brandlogos.net_pvmrk.png" alt="" />
                <span>Vistara</span>
            </div>
             <div className='flex flex-col items-center mb-4 '>
                {/* logo */}
                <img className='w-40 h-10 object-cover' src="https://www.logo.wine/a/logo/Qatar_Airways/Qatar_Airways-Logo.wine.svg" alt="" />
                <span>Qatar Airways</span>
            </div>
        </div>
        </>
  )
}

export default PremiumFlights