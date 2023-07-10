import AboutComponent from "./about";
import ParcoursComponent from "./parcours";
import ProfilComponent from "./profil";

export default function HomeComponent(){
    return(
        <>
            <ProfilComponent/>
            <AboutComponent/>
            <ParcoursComponent/>
        </>
    )
}