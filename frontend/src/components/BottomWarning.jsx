import { Link } from "react-router-dom"

const BottomWarning = ({ label, buttonText, to }) => {
    return (
        <div>
            {label}
            <Link to={to}> <b>{buttonText}</b></Link>
        </div>
    )
}

export default BottomWarning