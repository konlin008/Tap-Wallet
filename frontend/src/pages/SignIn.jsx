import BottomWarning from "../components/BottomWarning"
import { Button } from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

export const SignIn = () => {
    return (
        <div className="bg-slate-200 w-screen h-screen flex items-center justify-center">
            <div className="h-[60vh] w-[20vw] bg-white rounded-[5px] p-6">
                <Heading label={'Sign In'} />
                <SubHeading text={"Enter your information to create an account"} />
                <InputBox label={'Email'} placeholder={'example@gmail.com'} />
                <InputBox label={'Password'} placeholder={'password'} />
                <Button label={"Submit"} />
                <BottomWarning label={'Don\'t have a account? '} buttonText={'Sign up'} to={'/signUp'} />

            </div>
        </div>
    )
}
