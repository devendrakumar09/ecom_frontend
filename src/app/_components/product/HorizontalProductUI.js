import Link from 'next/link'
import React from 'react'

const HorizontalProductUI = () => {
    return (

        <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">

                <Link href={'/p/asdsadss'}>

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </Link>
            </div>
            <div className="p-6">

                <Link href={'/p/asdsadss'} className="mb-2 block font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Lyft launching cross-platform service this week
                </Link>


                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>

            </div>
        </div>



    )
}

export default HorizontalProductUI