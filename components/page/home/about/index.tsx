export default function AboutComponent(){

    const about_me : string = `Je suis Elie Oko je suis née le 29 octobre d'une certaines année XY, je suis passioné par la nouvelle 
    technologie et je professe dans le domaine du numérique entant que developpeur FullStack web des applications modernes reposant sur SSR(Server Side Render)
    et en parallèle je suis développeur mobile native sur Android avec Kotlin. Je suis aussi formateur au sein de KC, cela ne m'empêche pas de faire
    du freelance auprès des clients. Je suis un produit purs de l'institut supérieure de commerce et de la grande plateforme digital ODC(Orange Digital Center) 
    que j'ai intégré il y'a de cela 1 an membre de la première cohorte de cette plateforme.`;
  const technologies = [
    ["JavaScript (ES6+)", "TypeScript", "VB", "Pascal","C#","PHP","Python","Kotlin"],
    ["Nextjs","Reactjs","Tailwind CSS", "Uikit","Bootstrap","Laravel", "Django", "Jetpack compose"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            {/* <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} /> */}
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Apropos de moi
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header note note-light mb-6 rounded border-l-4 border-neutral-800 p-4">
              <span className="text-gray-400 ">
               {about_me }
              </span>
            </div>
            <div className="font-Header note note-light mb-6 rounded border-l-4 border-neutral-800 p-4 ">
              <span className="text-gray-400 ">
                Since pursuing my engineering degree, my career has taken me through diverse industries, allowing me to
                refine my expertise in desktop and web development. In the realm of{" "}
                <span className="text-AAsecondary">web3</span>, I am dedicated to pushing boundaries and driving
                advancements. With experience working alongside esteemed organizations like{" "}
                <span className="text-AAsecondary">ENS Vision</span>, where I played a key role in releasing v2 of{" "}
                <span className="text-AAsecondary">ENS Vision Marketplace</span> , my passion for web3 and continuous
                learning drives me to make a positive impact and advance technology.
              </span>
            </div>


            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
               Voici les technologies que j'utilise au quotidien :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        {/* <ArrowIcon className={"h-3 w-3 text-AAsecondary"} /> */}
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        {/* <ArrowIcon className={"h-3 w-3 text-AAsecondary"} /> */}
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <img
                src={"https://i.pinimg.com/originals/34/16/65/341665199bb597cdfae9848f975b844f.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <img
                src={"https://i.pinimg.com/originals/34/16/65/341665199bb597cdfae9848f975b844f.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}