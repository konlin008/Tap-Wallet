import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import { Button } from "../components/Button";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    return (
        <div className="bg-slate-200 w-screen h-screen flex items-center justify-center">
            <div className="h-[60vh] w-[20vw] bg-white rounded-[5px] p-6">
                <Heading label={"Sign Up"} />
                <SubHeading text={"Enter your credentials to access your account"} />
                <InputBox
                    label={"First Name"}
                    placeholder={"John"}
                    onChange={(e) => {
                        setFirstname(e.target.value);
                    }}
                />
                <InputBox
                    label={"Last Name"}
                    placeholder={"Doe"}
                    onChange={(e) => {
                        setLastname(e.target.value);
                    }}
                />
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
                        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}user/signup`, {
                            email,
                            firstname,
                            lastname,
                            password,
                        })
                        localStorage.setItem('token', res.data.token)
                        if (res.data.token) {
                            toast.success(res.data.msg)
                            navigate('/dashBoard')
                        }
                    } catch (err) {
                        toast.error(err.response?.data?.msg || "Something went wrong. Please try again.");
                    }
                }} />
                <BottomWarning
                    label={"Already have a account? "}
                    buttonText={"Sign In"}
                    to={"/signIn"}
                />
            </div>
        </div>
    );
};

export default SignUp;
