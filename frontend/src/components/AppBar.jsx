

const AppBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 border-b-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="/signUp"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Tapwallet"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                            TapWallet
                        </span>
                    </a>
                    <div className="flex items-center">
                        <div className="flex flex-col justify-center h-full mr-4">
                            Welcome
                        </div>
                        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center h-full text-xl">
                                U
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppBar