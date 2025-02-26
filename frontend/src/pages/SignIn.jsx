import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import { Button } from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    return (
        <div className="bg-slate-200 w-screen h-screen flex items-center justify-center">
            <div className="h-[60vh] w-[20vw] bg-white rounded-[5px] p-6">
                <Heading label={"Sign In"} />
                <SubHeading text={"Enter your information to create an account"} />
                <InputBox
                    label={"Email"}
                    placeholder={"example@gmail.com"}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <InputBox
                    label={"Password"}
                    placeholder={"password"}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <Button label={"Submit"} onClick={async () => {
                    try {
                        const res = await axios.post('http://localhost:3000/api/v1/user/signin', {
                            email,
                            password,
                        })
                        localStorage.setItem('token', res.data.token)
                        if (res.data.token) {
                            toast(res.data.msg)
                            navigate('/dashBoard')
                        }
                    } catch (err) {
                        toast.error(err.response?.data?.msg || "Something went wrong. Please try again.");
                    }
                }} />
                <BottomWarning
                    label={"Don't have a account? "}
                    buttonText={"Sign up"}
                    to={"/signUp"}
                />
            </div>
        </div>
    );
};
