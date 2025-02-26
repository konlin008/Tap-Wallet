import { useNavigate, useSearchParams } from "react-router-dom"
import Heading from "../components/Heading"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"



const SendMoney = () => {
    const [searchParms] = useSearchParams()
    const id = searchParms.get('id')
    const name = searchParms.get('name')
    const [amount, setAmount] = useState()
    const navigate = useNavigate()

    return (
        <div className="bg-slate-200 w-screen h-screen flex items-center justify-center ">
            <div className="h-[50vh] w-[25vw] bg-white rounded-[5px] p-6">
                <Heading label={'Send Money'} />
                <div className="flex items-center  pt-[10vh] mb-[20px] ">

                    <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full text-2xl font-semibold">
                            {name[0]}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-full text-2xl ml-2 font-semibold">
                        {name}
                    </div>
                </div>
                <form className="">
                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900">Amount (in Rs)</label>
                    <input type="number" id="number-input" onChange={e => {
                        setAmount(e.target.value)
                    }} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={'₹100'} required />
                </form>



                <div className="py-[10px] flex justify-end mt-[20px] " >
                    <button type="button"
                        onClick={async () => {
                            const res = await axios.post('http://localhost:3000/api/v1/account/transfer',
                                {
                                    amount: amount,
                                    to: id
                                }, {
                                headers: {
                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                }
                            })
                            toast(res.data.msg)
                            navigate('/dashBoard')
                        }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                </div>

            </div>
        </div >

    )

}

export default SendMoney