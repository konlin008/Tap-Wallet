import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import { Button } from "../components/Button"
import InputBox from "../components/InputBox"


const SignUp = () => {
    return (
        <div className="bg-slate-200 w-screen h-screen flex items-center justify-center">
            <div className="h-[60vh] w-[20vw] bg-white rounded-[5px] p-6">
                <Heading label={'Sign Up'} />
                <SubHeading text={"Enter your information to create an account"} />
                <InputBox label={'Email'} placeholder={'example@gmail.com'} />
                <InputBox label={'Password'} placeholder={'password'} />
                <Button label={"Submit"} />

            </div>
        </div>
    )
}

export default SignUp