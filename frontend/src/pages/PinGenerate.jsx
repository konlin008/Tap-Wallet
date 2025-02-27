import { useState } from "react";
import { Button } from "../components/Button";
import Heading from "../components/Heading";



const PinGenerate = () => {
    const [firstPin, setFirstPin] = useState()
    const [rePin, setRePin] = useState()
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

                <Button label={'Set Pin'} onClick={() => {
                    console.log(firstPin);
                    console.log(rePin);
                }} />
            </div>
        </div>
    );
};

export default PinGenerate;
