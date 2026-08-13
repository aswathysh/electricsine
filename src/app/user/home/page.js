// import { UserHeader } from "@/components/practice/UserHeader";
import { Header } from "@/components/sharables/Header";
import { UserHome } from "@/components/user/Home";

export default function Home(){
    return(
        <div style={{ backgroundColor: "white"}}>
             <Header/>
             <UserHome />
        </div>
    )
}