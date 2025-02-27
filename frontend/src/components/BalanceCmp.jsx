import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

const BalanceCmp = ({ balance }) => {
    const navigate = useNavigate()
    return (
        <div className='max-w-screen-xl flex  items-center  justify-between mx-auto p-4 t text-2xl'>
            <div >
                <b>Your Balance </b>: {balance}
            </div>
            <Button label={'Generate Pin'} onClick={() => {
                navigate('/pinGenerate')
            }} />
        </div>

    )
}

export default BalanceCmp