import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import BalanceCmp from "../components/BalanceCmp";
import UsersCmp from "../components/UsersCmp";
import axios from "axios";

export const DashBoard = () => {
    const [filter, setfilter] = useState('')
    const [searchedResponce, setSearchedResponce] = useState([])
    useEffect(() => {
        const fetchedData = async () => {
            const res = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            if (res.data.users.length === 0) {
                setSearchedResponce([])
            }
            setSearchedResponce(res.data.users)

        }

        fetchedData()

    }, [filter])

    return (
        <>
            <AppBar />
            <BalanceCmp balance={10000} />
            <UsersCmp onChange={e => {
                setfilter(e.target.value)
            }} searchedResponce={searchedResponce} />

        </>
    );
};
