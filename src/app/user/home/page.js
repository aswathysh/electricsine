import { UserHeader } from "@/components/practice/UserHeader";
import { UserHome } from "@/components/user/Home";

export default function Home(){
    return(
        <div style={{ backgroundColor: "white"}}>
             <UserHeader />
             <UserHome />
        </div>
    )
}