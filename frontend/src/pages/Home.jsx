import {Navbar} from "./Navbar"
import { Mid1 } from "./Mid1"
import {Footer }from "./Footer"


export function Home(){

    const name = localStorage.getItem("name");

       return (
            <div>
                <Navbar name={name}></Navbar>
                <Mid1></Mid1>
                <Footer></Footer>
            </div>
       )

}







