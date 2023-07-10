export default function ParcoursComponent(){
    const our_cursus = [
        {
            name : "La france s'incline en final",
            year : "2006",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :"Ce jour là j'ai vraiment pleuré surtout lorsque Zizou avait eu rouge, hélas on avait perdu en final."
        },
        {
            name : "Apprentissage Bureautique",
            year : "2009-2010",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :""
        },
        {
            name : "Apprentissage ",
            year : "2010-2012",
            city : "Pointe-noire",
            country : "République du Congo",
            image :"",
            content :`La première fois que je suis monté sur un avions c'était entre la destination de Brazza ville et Pointe Noir et
            c'était fréquent ah oui j'étais heureux. Au cours de ces année j'ai pris tellement des choses en étudiant 
            au sein de l'école Abeille de Rita, 
            j'ai appris le chinois moi et mon cousin Jérémie vu qu'on était dans un camps logistique des ingénieurs.
            J'ai appris à aimé les mangas, et j'ai appris les bonnes moeurs auprès de Maman Bety et Papa Denis.`
        },
        {
            name : "Récompense ",
            year : "2012-2013",
            city : "Sibiti",
            country : "République du Congo",
            image :"",
            content :`Année dans laquele j'ai décroché mon CEP et mon concours cela m'a permis de passer
            au niveau supérieure qui était le collège. C'est une année triste pour moi car 
            j'ai échoué pour la première fois pour accéder à l'école des élites du président Sassou. Bon c'est la vie ouff.`
        },
        {
            name : "Apprentissage ",
            year : "2013-2015",
            city : "Sibiti",
            country : "République du Congo",
            image :"",
            content :`Mes débuts au collège Notre dame de Lourde, j'ai appris beaucoup de chose 
            mais cela était bref car j'ai fait que deux ans la 6ème et la 5ème.`
        },
        {
            name : "Apprentissage ",
            year : "2015-2016",
            city : "Brazzaville",
            country : "République du Congo",
            image :"",
            content :`J'ai continué mon cursus et cela n'a pas beaucoup durée. C'est l'année j'ai plus passé du temps avec Papa après 7ans.
             Après avoir réussi cette année au sein de l'école Agostino Neto. La prochaine destination c'était Kinshasa`
        },
        {
            name : "Apprentissage et Spécialisation",
            year : "2016-2017",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Le système éducative Belge et Français se diffère 
            j'étais obligé de faire un choix soit de commencer directement la 5ème ou soit de commencer
             la 4ème car cela est un peu compliqué avec le système français vous faites 13ans 
             pour finir le cursus et au système Belge 12ans. La meilleure option était 
             de commencer en 4ème des humanités, j'ai choisis l'option 
             Commerciale et Gestion Informatique, au départ c'était un peu 
             le brouillard avec la comptabilité mais en fur à mesure j'ai facilement pu m'adapter au rythme.`
        },
        {
            name : "Apprentissage et Spécialisation",
            year : "2017-2018",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Le système éducative Belge et Français se diffère 
            j'étais obligé de faire un choix soit de commencer directement la 5ème ou soit de commencer
             la 4ème car cela est un peu compliqué avec le système français vous faites 13ans 
             pour finir le cursus et au système Belge 12ans. La meilleure option était 
             de commencer en 4ème des humanités, j'ai choisis l'option 
             Commerciale et Gestion Informatique, au départ c'était un peu 
             le brouillard avec la comptabilité mais en fur à mesure j'ai facilement pu m'adapter au rythme.`
        },
        {
            name : "Récompense",
            year : "2018-2019",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`J'ai une mon Bac c'était cool vu que j'étais aussi fatigué du bleu blanc
             mes parents et mes proches mon Soutenus pour que j'y arrive. Le travail acharné nuit et jour finit par payer.`
        },
        {
            name : "Une nouvelle vision",
            year : "2019",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`J'avais le choix entre faire l'économie ou bien autre chose à la fac, 
            Jonathan Malolo nous invita dans sa la soutenance de son Mémoire 
            qui était sur le numérique, après avoir assisté à cela je me suis dit je vais devenir un programmeur
             comme Jonathan et c'est à partir de ce jour là que j'ai choisi de faire l'informatique, 
             pour moi c'était un comeback vers mon acien amour qui est l'ordinateur. 
             J'ai opté pour l'isc juste parceque c'était vaste mdr j'aime bien respiré voilà`
        },
        {
            name : "Étude supérieure G1",
            year : "2019-2020",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Rencontre avec mes nouveaux amies à partir de là
             nous avions créer Database un groupe de partage d'idée cadrant 
             avec le numérique c'était juste sur la fac, 
             durant cet année j'ai rencontré son excellene NDUDA LUAMBA Joseph
              l'un des meilleurs développeurs du pays qui m'a appris l'algorithme et je suis allé approfondir d'avantage sur le sujet via internet.`
        },
        {
            name : "Exploit",
            year : "2020",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Création de mon applications de Stat descriptive en Pascal. j'ai transformé tous les notions de stat desc en algo`
        },
        {
            name : "Cryptographie",
            year : "2020",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`J'ai commencé à apprendre les bases et j'ai réalisé à l'époque l'algorithme du chiffre de César`
        },
        {
            name : "Étude supérieure G2",
            year : "2020-2021",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :``
        },
        {
            name : "Lancement Startup",
            year : "2021",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Nous avions lancé notre startup KongoCode à 3(trois) Ethberg Muzola, Terence Musimbi et moi.`
        },
        {
            name : "Plateforme juridique",
            year : "2021",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Nsiku est la plateforme que nous maintenant en permanence pour offrir une 
            meilleure expérience du droit au internaute et au sein de notre communauté.`
        },
        {
            name : "Stage professionnel ODC",
            year : "2022",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Au cours de mon stage au sein de l'ODC j'ai encore appris 
            beaucoup de chose, et j'ai rencontré les futurs grands de ce mondes.`
        },
        {
            name : "Récompense",
            year : "2022-2023",
            city : "Kinshasa",
            country : "République Démocratique du Congo",
            image :"",
            content :`Obtention de mon diplôme de Graduat`
        },
    ]
    interface IE{
        title:string;
        category:string;
    }
    const project : Array<IE> = [
        { title: 'API Integration', category: 'Engineering' },
        { title: 'New Benefits Plan', category: 'Human Resources' },
        { title: 'Onboarding Emails', category: 'Customer Success' },
      ]
      
    return(

  <section>
  <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-slate-900">Projects</h2>
      <a href="/new" className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
        <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New
      </a>
    </div>
    <form className="group relative">
      <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..."/>
    </form>
  </header>
  <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
    <li x-for="project in projects">
      <a href="project.url" className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white font-semibold text-slate-900">
              {'title'}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Category</dt>
            <dd className="group-hover:text-blue-200">{'project.category'}</dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
            <dt className="sr-only">Users</dt>
            <dd x-for="user in project.users" className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img src=".avatar" alt="user.name" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy"/>
            </dd>
          </div>
        </dl>
      </a>
    </li>
    <li className="flex">
      <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
        <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a>
    </li>
  </ul>
</section>
        )
}