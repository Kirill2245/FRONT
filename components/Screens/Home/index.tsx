import { useAuth } from "@/context/auth-context";
import Header from "./components/Header";
import MainCustomer from "./components/MainCustomer";
import RightPanelCustomer from "./components/RightPanelCustomer";
import { useEffect, useEffectEvent } from "react";

const Home = () => {
    const {user} = useAuth()
    useEffect(() => {console.log(user)},[])
    return (
        <div className=" flex flex-col w-full h-auto min-w-0">
            <Header name={user?.firstName || "N N"} avatarLink={user?.titleImg as string | undefined}/>
            {
                user?.role === 'CUSTOMER' ? 
                <div className="flex flex-1 w-full min-w-0">
                    <MainCustomer user={user}/>
                    <RightPanelCustomer/>
                </div>
                :
                <div>
                    MASTER
                </div>
            }   
        </div>
    );
}

export default Home