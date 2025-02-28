import { useNavigate } from "react-router-dom";
import { Button } from "./Button"
import { toast } from "react-toastify";


const AppBar = () => {
    const navigate = useNavigate()
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
                        <div className="flex items-center">
                            <Button label={'Logout'} onClick={() => {
                                localStorage.clear();
                                toast.success('Logout Successfully')
                                navigate('/signIn')

                            }} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppBar