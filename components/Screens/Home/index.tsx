import { useAuth } from "@/context/auth-context";
import Header from "./components/Header";
import MainCustomer from "./components/MainCustomer";
import RightPanelCustomer from "./components/RightPanelCustomer";

const Home = () => {
    const {user} = useAuth()
    return (
        <div className="w-full h-auto">
            <Header name={user?.firstName || "N N"}/>
            {
                user?.role === 'CUSTOMER' ? 
                <div className="flex flex-1">
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