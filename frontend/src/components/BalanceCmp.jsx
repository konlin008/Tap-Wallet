import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";
import { useEffect, useState } from "react";

const BalanceCmp = ({ balance }) => {
    const navigate = useNavigate();
    const [res, setRes] = useState(null);

    useEffect(() => {
        const hasPin = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/pin/isPinSet", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                });

                setRes(response.data); 
            } catch (error) {
                console.error("Error fetching PIN status:", error);
                setRes(false); 
            }
        };
        hasPin();
    }, []);

    return (
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 text-2xl">
            <div>
                <b>Your Balance</b>: {balance}
            </div>
            {res === false && ( 
                <Button label={"Generate Pin"} onClick={() => navigate("/pinGenerate")} />
            )}
        </div>
    );
};

export default BalanceCmp;
