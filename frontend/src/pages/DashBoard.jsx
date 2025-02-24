import AppBar from "../components/AppBar";
import BalanceCmp from "../components/BalanceCmp";
import UsersCmp from "../components/UsersCmp";

export const DashBoard = () => {
    return (
        <>
            <AppBar />
            <BalanceCmp balance={10000} />
            <UsersCmp />
        </>
    );
};
