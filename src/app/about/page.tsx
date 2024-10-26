
import Brands from "../components/brands";
import Footer from "../components/footer";
import Navbar from "../components/header";
import Branch from "./components/branch";
import Team from "./components/our-team";

function about (){
    return (
        <div>
            
            <Navbar/>
            <Team/>
            <Branch/>
            <Brands/>
            <Footer/>
            
            
        </div>
    )
}
export default about;