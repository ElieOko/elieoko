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
                   <h2 className={`font-semibold text-sky-500`}>Salut, j'ai pour nom </h2>
                </div>
                <section className={``}>
                    <h1 className={`text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4`}>Elie Oko</h1>
                    <div>
                        <span>Je suis <i>{our_responsibilities[1]}</i>  </span>
                    </div>
                </section>
                <section className={``}>
                    <blockquote className={``}>
                        <p className={`text-gray-400  text-sm md:text-lg sm:text-md mt-10 tracking-wider`}>{profil_text}</p>
                    </blockquote>
                </section>
                
            </section>
        </>
    )
}