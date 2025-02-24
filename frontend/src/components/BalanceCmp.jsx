const BalanceCmp = ({ balance }) => {
    return (
        <div className='max-w-screen-xl flex flex-wrap items-center  mx-auto p-4 t text-2xl'>
            <b>Your Balance </b>: {balance}
        </div>
    )
}

export default BalanceCmp