const InputBox = ({ label, placeholder }) => {
    return (
        <div className="py-[10px]" >
            <p className="font-semibold">{label}</p>
            <input
                type="text"
                id={label}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default InputBox