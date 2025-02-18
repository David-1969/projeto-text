// Lista de álbuns (com 20 álbuns por categoria para cada seção)
const albums = [
    // 12 álbuns brasileiros com a categoria "Brasil"
    { id: 1, title: "Os Mutantes", image: "albuns/Os_Mutantes.jpg", category: "Brasil", link:"http://127.0.0.1:5500/Detalhes/os%20mutantes/index.html" },
    { id: 2, title: "A Peleja do Diabo contra o Dono do Céu", image: "albuns/a peleja.jpg", category: "Brasil",link:"http://127.0.0.1:5500/Detalhes/Ze%20ramalho%202/index.html" },
    { id: 3, title: "A Tabua de Esmeralda", image: "albuns/A_Tábua_de_Esmeralda.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/A%20tabua%20de%20esmeralda/index.html" },
    { id: 4, title: "Acabou Chorare", image: "albuns/acabouChorare.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/Acabou%20chorare/index.html" },
    { id: 5, title: "Chega de Saudade", image: "albuns/ChegaSaudade.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/chega%20de%20saudade/index.html" },
    { id: 6, title: "Gita", image: "albuns/Gita.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/Gita/index.html" },
    { id: 7, title: "Construção", image: "albuns/Construção.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/Constru%C3%A7%C3%A3o/index.html" },
    { id: 8, title: "Cartola 1976", image: "albuns/Cartola1976.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/cartola%202/index.html" },
    { id: 9, title: "Roberto Carlos 1969", image: "albuns/Roberto Carlos.jpeg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/Roberto%20Carlos/index.html" },
    { id: 10, title: "Sobrevivendo no Inferno", image: "albuns/inferno.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/Gita/index.html" },
    { id: 11, title: "Admiravel Chip Novo", image: "albuns/Pitty.jpeg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/admiravel%20chip%20novo/index.html" },
    { id: 12, title: "Mamonas Assassinas", image: "albuns/mamonas.jpg", category: "Brasil", link: "http://127.0.0.1:5500/Detalhes/mamonas%20assassinas/index.html" },

    // 20 álbuns recentes (2010-2024) com a categoria "Recente"
    { id: 13, title: "Hackney Diamonds", image: "albuns/Hackney Diamonds.jpg", category: "Recente" },
    { id: 14, title: "After Hours", image: "albuns/after.jpeg", category: "Recente" },
    { id: 15, title: "Damn", image: "albuns/Danm.jpg", category: "Recente", link: "http://127.0.0.1:5500/Detalhes/Damn/index.html" },
    { id: 16, title: "You Want it Darker", image: "albuns/Darker.jpg", category: "Recente" },
    { id: 17, title: "Midnigths", image: "albuns/Mid.jpg", category: "Recente", link:"http://127.0.0.1:5500/Detalhes/Midnights/index.html" },
    { id: 18, title: "Eternal Sunshine", image: "albuns/sunshine.jpg", category: "Recente" },
    { id: 19, title: "333", image: "albuns/333.jpeg", category: "Recente" },
    { id: 20, title: "Cawboy Carter", image: "albuns/carter.jpeg", category: "Recente" },
    { id: 21, title: "Escandolos Intimos", image: "albuns/sonza.jpg", category: "Recente" },
    { id: 22, title: "Hit Me Hard and Soft", image: "albuns/hit.jpg", category: "Recente" },
    { id: 23, title: "Cheek to Cheek", image: "albuns/lady.jpeg", category: "Recente" },
    { id: 24, title: "Camila", image: "albuns/camila.jpeg", category: "Recente" },


    // 20 álbuns dos anos 1950 a 1964 com a categoria "Old"
    { id: 25, title: "Elvis Presley", image: "albuns/elvis.jpeg", category: "Old", link: "http://127.0.0.1:5500/Detalhes/Elvis%20Presley/index.html" },
    { id: 26, title: "The Everly Brothers", image: "albuns/brothers.jpeg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/The%20everly%20Brothers/index.html" },
    { id: 27, title: "Berry on the Top", image: "albuns/berry.jpeg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/berry%20is%20on%20top/index.html" },
    { id: 28, title: "Chega de Saudade", image: "albuns/ChegaSaudade.jpg", category: "Old", link: "http://127.0.0.1:5500/Detalhes/chega%20de%20saudade/index.html" },
    { id: 29, title: "King of the Delta Blues Singers", image: "albuns/robert.jpeg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/delta%20blues/index.html" },
    { id: 30, title: "Johny Cash", image: "albuns/johny.jpg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/johnny%20cash/index.html" },
    { id: 31, title: "This Land is my Land", image: "albuns/woody.jpeg", category: "Old", link: "http://127.0.0.1:5500/Detalhes/This%20land%20is%20my%20land/index.html" },
    { id: 32, title: "Rock Around the Clock", image: "albuns/rock.jpeg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/rock%20around%20the%20clock/index.html" },
    { id: 33, title: "Memorial Album", image: "albuns/memorial.jpg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/memorial%20album/index.html" },
    { id: 34, title: "Buddy Holly", image: "albuns/wolf.webp", category: "Old",link:"http://127.0.0.1:5500/Detalhes/moaning%20moon/index.html" },
    { id: 35, title: "Singin' the Blues", image: "albuns/king.jpeg", category: "Old", link:"http://127.0.0.1:5500/Detalhes/sing%20the%20blues/index.html" },
    { id: 36, title: "Buddy Holly", image: "albuns/holly.jpg", category: "Old", link: "http://127.0.0.1:5500/Detalhes/buddy%20holly/index.html" },


    // 10 álbuns melhoes albuns do mundo (as categorias podem ser misturadas)
    { id: 37, title: "Revolver", image: "albuns/revolver.jpeg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/revolver/index.html" },
    { id: 38, title: "Highway 61 Revisited", image: "albuns/dylan.jpeg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/highway%2061%20revisited/index.html" },
    { id: 39, title: "Pet Sounds", image: "albuns/pet.jpg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/pet%20Sound/index.html" },
    { id: 40, title: "The Darkside of The Moon", image: "albuns/moon.webp", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/The%20Dark%20side%20of%20the%20Moon/index.html" },
    { id: 41, title: "Rubber Soul", image: "albuns/soul.jpg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/rubber%20soul/index.html" },
    { id: 42, title: "The Velvet Underground and Nico", image: "albuns/velvet.jpg", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/velvet%20underground/index.html" },
    { id: 43, title: "Sticky Fingers", image: "albuns/stones.jpg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/Stincky%20Fingers/index.html" },
    { id: 44, title: "The Frewheelin'Bob Dylan", image: "albuns/bob.jpeg", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/Freewheelin/index.html"},
    { id: 45, title: "Led Zepellin 4", image: "albuns/led.jpeg", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/led%20zepelin%204/index.html" },
    { id: 46, title: "Ziggy Stardust", image: "albuns/ziggy.jpeg", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/index.html" },
    { id: 47, title: "All Things Must Pass", image: "albuns/pass.jpeg", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/all%20things%20must%20pass/index.html" },
    { id: 48, title: "Rumours", image: "albuns/rumours.jpeg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/Rumours/index.html" },

     // 10 álbuns melhoes albuns do mundo (as categorias podem ser misturadas)
     { id: 49, title: "Sgt. Peppers Lonely Heart Club Band", image: "albuns/sgt.webp", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/Sgt.%20pepers/index.html" },
     { id: 50, title: "Pet Sound", image: "albuns/pet.jpg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/pet%20Sound/index.html" },
     { id: 51, title: "Revolver", image: "albuns/revolver.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/revolver/index.html" },
     { id: 52, title: "Highway 61 Revisited", image: "albuns/dylan.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/highway%2061%20revisited/index.html" },
     { id: 53, title: "Rubber Soul", image: "albuns/soul.jpg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/rubber%20soul/index.html" },
     { id: 54, title: "What's Going On", image: "albuns/gaye.jpeg", category: "Stone", link:"http://127.0.0.1:5500/Detalhes/whats%20go%20on/index.html" },
     { id: 55, title: "Exile on Main St.", image: "albuns/rolling.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/exile%20on%20main/index.html" },
     { id: 56, title: "London Calling", image: "albuns/london.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/lodon%20calling/index.html" },
     { id: 57, title: "Blonde on Blonde", image: "albuns/blonde.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/blonde%20on%20blonde/index.html" },
     { id: 58, title: "White Album", image: "albuns/white.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/white%20album/index.html" },
     { id: 59, title: "The Sunset Sessions", image: "albuns/sun.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/the%20sun%20sessions/index.html" },
     { id: 60, title: "Kind of Blues", image: "albuns/kinda.jpeg", category: "Stone", link: "http://127.0.0.1:5500/Detalhes/kind%20of%20blues/index.html" },

      // 10 álbuns melhoes albuns do mundo (as categorias podem ser misturadas)
      { id: 61, title: "Ave Sangria", image: "albuns/ave.jpeg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/ave%20sangria/index.html" },
      { id: 62, title: "Autobahn", image: "albuns/auto.jpg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/autograth/index.html" },
      { id: 63, title: "Françoise Hardy 1962", image: "albuns/hardy.jpeg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/Fran%C3%A7ois%20hardy/index.html" },
      { id: 64, title: "Panese Girl", image: "albuns/japan.jpeg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/panese%20girl/index.html" },
      { id: 65, title: "Jane birkin - Serge Gainsbourg", image: "albuns/jane.jpg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/jane%20birkin/index.html" },
      { id: 66, title: "Los Abuelos de la nada 1", image: "albuns/los.jpeg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/Los%20abuelos%20the%20la%20nada/index.html" },
      { id: 67, title: "Luna", image: "albuns/luna.jpg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/Luna/index.html" },
      { id: 68, title: "Kazemachi Roman", image: "albuns/roman.jpg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/Kazemachi%20roman/index.html" },
      { id: 69, title: "Algo Mejor", image: "albuns/mejor.jpg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/algo%20mejor/index.html" },
      { id: 70, title: "The Mask and the Mirror", image: "albuns/Mirror.JPG", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/the%20mask%20and%20the%20mirror/index.html" },
      { id: 71, title: "Psycodelic Sound of Japan", image: "albuns/mops.jpg", category: "Inter", link:"http://127.0.0.1:5500/Detalhes/the%20mops/index.html" },
      { id: 72, title: "Tornero", image: "albuns/tornero.jpg", category: "Inter",link:"http://127.0.0.1:5500/Detalhes/tornero/index.html" },
     
      // 10 álbuns melhoes albuns pop (as categorias podem ser misturadas)
      { id: 73, title: "Abbey road", image: "albuns/abbey road.webp", category: "Pop", link: "http://127.0.0.1:5500/Detalhes/index.html" },
      { id: 74, title: "Thriller", image: "albuns/thriller.jpeg", category: "Pop", link: "http://127.0.0.1:5500/Detalhes/thriller/index.html" },
      { id: 75, title: "Saturday Nigth Fever", image: "albuns/bee gees.jpeg", category: "Pop", link:"http://127.0.0.1:5500/Detalhes/saturday%20nigth%20fever/index.html" },
      { id: 76, title: "AstroWorld", image: "albuns/astro.jpeg", category: "Pop",link:"http://127.0.0.1:5500/Detalhes/astroworld/index.html" },
      { id: 77, title: "Back to Black", image: "albuns/back to black.jpeg", category: "Pop", link:"http://127.0.0.1:5500/Detalhes/back%20to%20black/index.html" },
      { id: 78, title: "Band on the Run", image: "albuns/band.webp", category: "Pop", link:"http://127.0.0.1:5500/Detalhes/band%20on%20the%20run/index.html" },
      { id: 79, title: "Grease", image: "albuns/grease.jpeg", category: "Pop",link:"http://127.0.0.1:5500/Detalhes/grease/index.html" },
      { id: 80, title: "Charlie Brown Jr", image: "albuns/jr.jpg", category: "Pop",link:"http://127.0.0.1:5500/Detalhes/Charlie%20Brown%20jr/index.html" },
      { id: 81, title: "The Graduation", image: "albuns/west.jpeg", category: "Pop", link:"http://127.0.0.1:5500/Detalhes/The%20graduation/index.html" },
      { id: 82, title: "Like a Virgin", image: "albuns/virgin.jpeg", category: "Pop", link:"http://127.0.0.1:5500/Detalhes/Like%20a%20virgin/index.html" },
      { id: 83, title: "As Quartro Estações", image: "albuns/urbana.jpeg", category: "Pop",link:"http://127.0.0.1:5500/Detalhes/As%20quatro%20esta%C3%A7%C3%B5es/index.html" },
      { id: 84, title: "Midnigths", image: "albuns/Mid.jpg", category: "Pop", link:"http://127.0.0.1:5500/Detalhes/Midnights/index.html" },

       // 10 álbuns melhoes albuns rock (as categorias podem ser misturadas)
       { id: 85, title: "Nevermind", image: "albuns/nevermind.jpg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/nevermind/index.html" },
       { id: 86, title: "Ok Computer", image: "albuns/ok.jpeg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/ok%20computer/index.html" },
       { id: 87, title: "Fruto Proibido", image: "albuns/rita.jpg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/fruto%20proibido/index.html" },
       { id: 88, title: "Link Park", image: "albuns/link.jpg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/link%20park/index.html"},
       { id: 89, title: "Krig Ha Bandolo", image: "albuns/KrigHaBandolo.jpg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/krig%20ha%20bandolo/index.html" },
       { id: 90, title: "Beggars Banquet", image: "albuns/banquet.jpeg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/bangers%20banquet/index.html" },
       { id: 91, title: "Appetite for Destroctions", image: "albuns/guns.jpeg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/apetitte%20for%20destroctions/index.html" },
       { id: 92, title: "Black Sabbath", image: "albuns/black.jpeg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/black%20sabath/index.html" },
       { id: 93, title: "Pendunlum", image: "albuns/creadence.jpg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/pendunlum/index.html" },
       { id: 94, title: "Elvis Presley", image: "albuns/elvis.jpeg", category: "Rock", link: "http://127.0.0.1:5500/Detalhes/Elvis%20Presley/index.html" },
       { id: 95, title: "Eletric Ladyland", image: "albuns/land.jpeg", category: "Rock", link:"http://127.0.0.1:5500/Detalhes/eletric%20ladyland/index.html" },
       { id: 96, title: "Velvet Underground and Nico", image: "albuns/velvet.jpg", category: "Rock", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/velvet%20underground/index.html" },
     
        // 10 álbuns melhoes albuns Mais (as categorias podem ser misturadas)
        { id: 97, title: "Alucinação", image: "albuns/alucinação.jpg", category: "Mais", link: "http://127.0.0.1:5500/Detalhes/Alucina%C3%A7%C3%A3o/index.html" },
        { id: 98, title: "Animals", image: "albuns/animals.jpg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/Animals/index.html" },
        { id: 99, title: "Music From Big Pink", image: "albuns/big pink.jpg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/big%20pink/index.html" },
        { id: 100, title: "Blue", image: "albuns/blue.webp", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/blue/index.html" },
        { id: 101, title: "Caetano Veloso", image: "albuns/caetano.jpeg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/caetano%20veloso/index.html" },
        { id: 102, title: "A Divina Comedia", image: "albuns/divina.jpeg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/A%20divina%20comedia/index.html" },
        { id: 103, title: "Mulan Soundtrack", image: "albuns/mulan.jpeg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/Mulan/index.html" },
        { id: 104, title: "Havest Moon", image: "albuns/neil.jpg", category: "Mais", link: "http://127.0.0.1:5500/Detalhes/Harvest%20Moon/index.html" },
        { id: 105, title: "Please Please me", image: "albuns/please.jpeg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/Please%20please%20me/index.html" },
        { id: 106, title: "The Times They are A-Changin", image: "albuns/times.jpeg", category: "Mais" },
        { id: 107, title: "Zé Ramalho", image: "albuns/Zé_ramalho.jpg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/z%C3%A9%20ramalho/index.html" },
        { id: 108, title: "A Nigth of Opera", image: "albuns/opera.jpeg", category: "Mais", link: "http://127.0.0.1:5500/Detalhes/A%20nigth%20of%20opera/index.html" },
      
        // 12 álbuns brasileiros com a categoria "Brasil"
    { id: 109, title: "Abbey Road", image: "albuns/abbey road.webp", category: "New", link: "http://127.0.0.1:5500/Detalhes/index.html"},
    { id: 110, title: "A Nigth of Opera", image: "albuns/opera.jpeg", category: "New", link: "http://127.0.0.1:5500/Detalhes/A%20nigth%20of%20opera/index.html" },
    { id: 111, title: "The Darkside of The Moom", image: "albuns/moon.webp", category: "New", link: "http://127.0.0.1:5500/Detalhes/The%20Dark%20side%20of%20the%20Moon/index.html" },
    { id: 112, title: "Elvis Presley", image: "albuns/elvis.jpeg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Elvis%20Presley/index.html" },
    { id: 113, title: "Roberto Carlos 1969", image: "albuns/Roberto carlos.jpeg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Roberto%20Carlos/index.html" },
    { id: 114, title: "Gita", image: "albuns/Gita.jpg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Gita/index.html" },
    { id: 115, title: "Highway 61 Rivisited", image: "albuns/dylan.jpeg", category: "New", link: "http://127.0.0.1:5500/Detalhes/highway%2061%20revisited/index.html"  },
    { id: 116, title: "Damn", image: "albuns//Danm.jpg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Damn/index.html" },
    { id: 117, title: "Sobrevivendo no Inferno", image: "albuns/inferno.jpg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Gita/index.html" },
    { id: 118, title: "Harvest Monn", image: "albuns//neil.jpg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Harvest%20Moon/index.html" },
    { id: 119, title: "Sticky Fingers", image: "albuns/stones.jpg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Stincky%20Fingers/index.html" },
    { id: 120, title: "Thriller", image: "albuns/thriller.jpeg", category: "New", link: "http://127.0.0.1:5500/Detalhes/thriller/index.html" },
];

function populateAlbums(sectionId, category) {
    const sectionContainer = document.getElementById(sectionId);
    sectionContainer.innerHTML = "";  // Limpa os álbuns existentes

    // Filtra os álbuns pela categoria e exibe os primeiros 12
    const albumsToDisplay = albums.filter(album => album.category === category).slice(0, 12);

    albumsToDisplay.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");

        // Cria o link para o álbum
        const albumLink = document.createElement("a");
        albumLink.href = album.link;  // Definir o link para o álbum
        albumLink.target = "_blank";  // Abre o link em uma nova aba

        // Adiciona o conteúdo do álbum ao link
        albumLink.innerHTML = `
            <img src="${album.image}" alt="${album.title}">
            <p>${album.title}</p>
        `;

        // Adiciona o link ao card de álbum
        albumCard.appendChild(albumLink);

        // Adiciona o card de álbum à seção
        sectionContainer.appendChild(albumCard);
    });
}


// Função para gerenciar o scroll para os álbuns
function scrollAlbums(direction, sectionId) {
    const sectionContainer = document.getElementById(sectionId);
    const cardWidth = sectionContainer.querySelector(".album-card")?.offsetWidth || 130;  // Obter a largura do card de álbum
    const currentScroll = sectionContainer.scrollLeft;

    // Se o usuário clicar para a direita, mova a seção para a direita, caso contrário, mova para a esquerda
    sectionContainer.scrollLeft = currentScroll + (direction * cardWidth);
}

// Preenchendo as seções com álbuns
document.addEventListener('DOMContentLoaded', () => {
    populateAlbums('discover-row', 'New');
    populateAlbums('brazil-row', 'Brasil');
    populateAlbums('world-row', 'Mundo');
    populateAlbums('oldies-row', 'Old');
    populateAlbums('pop-row', 'Pop');
    populateAlbums('recent-row', 'Recente');
    populateAlbums('best-rated-row', 'Rock');
    populateAlbums('rolling-stone-row', 'Stone');
    populateAlbums('followed-row', 'Inter');
    populateAlbums('classics-row', 'Mais');
});

const albuns = [
    { title: "Álbum 1", category: "Pop", link: "#", image: "image1.jpg" },
    { title: "Álbum 2", category: "Rock", link: "#", image: "image2.jpg" },
    { title: "Álbum 3", category: "Jazz", link: "#", image: "image3.jpg" },
    // Adicione mais álbuns conforme necessário
];

document.getElementById("search-btn").addEventListener("click", openSearch);

function openSearch() {
    document.getElementById("search-bar-container").style.display = "block";
    document.getElementById("search-btn").style.display = "none";
}

function closeSearch() {
    document.getElementById("search-bar-container").style.display = "none";
    document.getElementById("search-btn").style.display = "block";
    document.getElementById("search-bar").value = ""; // Limpa a pesquisa
    clearSearchResults(); // Limpa os resultados da pesquisa
}

function searchAlbums() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const results = albums.filter(album => album.title.toLowerCase().includes(query));
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const container = document.getElementById("discover-row");
    container.innerHTML = ""; // Limpa os resultados anteriores

    results.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");
        
        const albumLink = document.createElement("a");
        albumLink.href = album.link;
        albumLink.target = "_blank"; 
        
        albumLink.innerHTML = `
            <img src="${album.image}" alt="${album.title}">
            <p>${album.title}</p>
        `;
        
        albumCard.appendChild(albumLink);
        container.appendChild(albumCard);
    });
}

function clearSearchResults() {
    const container = document.getElementById("discover-row");
    container.innerHTML = ""; // Limpa os resultados da pesquisa
}
