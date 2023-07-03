import { Button } from "@material-tailwind/react";

export default function ProfilComponent(){
    const profil_text : string = `Ma mission c'est de donner de la joie à tous
    ces enfants africains qui rêve d'avoir 
   une vie meilleure et de propulser
    encore plus loin les limites de la science 
    informatique car il n'existe pas de tière monde dans le 
    numérique.`;
    const our_responsibilities : Array<string> = ["Chrétient","Développeur","Enseignant","Papa","Oncle","Apprenant"];
    return(
        <>
            <section className={`h-full flex flex-col justify-center px-4 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52`}>
                <div>
                   <h2 className={`font-semibold text-[#858ea6]`}>Salut, je m'appelle </h2>
                </div>
                <section className={``}>
                    <h1 className={`text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4`}> <span className="text-[#1b4be8]">E</span>lie <span className="text-[#d61212]">O</span>ko</h1>
                    <div>
                        <span className="text-gray-400">Je suis <i>{our_responsibilities[3]}</i>  </span>
                    </div>
                </section>
                <section className={``}>
                    <blockquote className={``}>
                        <p className={`text-gray-400  text-sm md:text-lg sm:text-md mt-10 tracking-wider`}>{profil_text}</p>
                    </blockquote>
                </section>
                <div>
                    <a href="#" className="text-[#fff]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 animate-bounce-bottom">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                    </a>
                    
                </div>
            </section>
        </>
    )
}