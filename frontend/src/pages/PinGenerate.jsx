import { useState } from "react";
import { Button } from "../components/Button";
import Heading from "../components/Heading";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const PinGenerate = () => {
    const [firstPin, setFirstPin] = useState()
    const [rePin, setRePin] = useState()
    const nav = useNavigate()
    return (
        <div className="bg-slate-200 w-screen h-screen flex items-center justify-center">
            <div className="h-[60vh] w-[20vw] bg-white rounded-[5px] p-6">
                <Heading label={"Set Pin"} />

                <div className="max-w-sm mb-5 py-[5vh]">
                    <label
                        htmlFor="hs-toggle-firstPin-with-checkbox"
                        className="block text-xl mb-2"
                    >
                        Enter Four Digit Pin
                    </label>
                    <input
                        id="hs-toggle-firstPin-with-checkbox"
                        type="number"
                        className="py-3 px-4 block w-full bg-slate-200 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="1234"
                        onChange={(e) => {
                            setFirstPin(e.target.value)
                        }}
                    />
                </div>
                <div className="max-w-sm mb-5 pb-[3vh] ">
                    <label
                        htmlFor="hs-toggle-rePin-with-checkbox"
                        className="block text-xl mb-2"
                    >
                        Renter Four Digit Pin
                    </label>
                    <input
                        id="hs-toggle-rePin-with-checkbox"
                        type="number"
                        className="py-3 px-4 block w-full bg-slate-200 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="1234"
                        defaultValue="12345qwerty"
                        onChange={(e) => {
                            setRePin(e.target.value)
                        }}
                    />
                </div>

                <Button label={'Set Pin'} onClick={async () => {
                    if (firstPin === rePin) {
                        const originalPin = String(firstPin)
                        if (originalPin.length != 4) {
                            toast.error('Pin Should Be 4 Digit')
                            return
                        }
                        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}pin/setPin`, {
                            pin: originalPin
                        },

                            {
                                headers: {
                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                }
                            },
                        )
                        toast.success(res.data.msg);
                        nav('/dashBoard')
                    }
                    else {
                        toast.error('Rentered Pin doesn\'t match')
                    }


                }} />
            </div>
        </div>
    );
};

export default PinGenerate;
