const UsersCmp = () => {
    return (
        <div className='max-w-screen-xl flex flex-col mx-auto p-4 t text-2xl'>
            <h1 className="font-semibold">users</h1>
            <form className="mt-[10px]">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black bg-slate-200 rounded-lg  focus:border-blue-500  placeholder-black" placeholder="Search User" required />
                    <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="  mt-[50px]">
                <div className="flex items-center justify-between   py-4">
                    <div className="flex items-center  ">

                        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center h-full text-xl">
                                A
                            </div>
                        </div>
                        <div className="flex flex-col justify-center h-full mr-4">
                            Aman Mondal
                        </div>
                    </div>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                </div>
                <div className="flex items-center justify-between    py-4">
                    <div className="flex items-center  ">

                        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center h-full text-xl">
                                T
                            </div>
                        </div>
                        <div className="flex flex-col justify-center h-full mr-4">
                            Tania Molla
                        </div>
                    </div>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                </div>

            </div>

        </div>
    )
}

export default UsersCmp