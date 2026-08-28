const destinations = [

    {
        id: "roma",
        name: "Roma",
        country: "Italia",
        flag: "🇮🇹",

        aliases: [
            "roma",
            "rome",
            "rom"
        ],

        description:
            "Una città dove storia, arte, cucina e vita quotidiana convivono in ogni angolo.",

        currency: "EUR",

        language: "Italiano",

        bestTime: [
            "Aprile",
            "Maggio",
            "Settembre",
            "Ottobre"
        ],

        budget: {
            low: 55,
            medium: 110,
            high: 220
        },

        places: [

            {
                id: "colosseo",
                name: "Colosseo",
                category: "Storia",
                description:
                    "Il simbolo di Roma e uno dei monumenti più iconici al mondo.",
                price: 18,
                duration: "2-3 ore"
            },

            {
                id: "fontana-trevi",
                name: "Fontana di Trevi",
                category: "Iconico",
                description:
                    "Una delle fontane più famose del mondo, nel cuore del centro storico.",
                price: 0,
                duration: "30-60 min"
            },

            {
                id: "pantheon",
                name: "Pantheon",
                category: "Storia",
                description:
                    "Uno degli edifici romani antichi meglio conservati.",
                price: 5,
                duration: "45-60 min"
            },

            {
                id: "vaticano",
                name: "Musei Vaticani",
                category: "Arte",
                description:
                    "Una delle più importanti collezioni d'arte del mondo.",
                price: 20,
                duration: "3-4 ore"
            },

            {
                id: "piazza-navona",
                name: "Piazza Navona",
                category: "Centro",
                description:
                    "Una delle piazze più belle e animate di Roma.",
                price: 0,
                duration: "45-90 min"
            }

        ],

        activities: [

            {
                id: "food-tour",
                name: "Food tour romano",
                category: "Cibo",
                description:
                    "Scopri pasta, pizza, supplì e specialità romane."
            },

            {
                id: "vespa-tour",
                name: "Tour in Vespa",
                category: "Esperienza",
                description:
                    "Esplora Roma attraverso le sue strade più caratteristiche."
            },

            {
                id: "tramonto",
                name: "Tramonto al Gianicolo",
                category: "Panorama",
                description:
                    "Uno dei punti panoramici più belli sulla città."
            }

        ],

        neighborhoods: [

            {
                name: "Centro Storico",
                description:
                    "Perfetto per monumenti, piazze, ristoranti e passeggiate."
            },

            {
                name: "Trastevere",
                description:
                    "Stradine, locali e atmosfera romana soprattutto la sera."
            },

            {
                name: "Monti",
                description:
                    "Quartiere creativo con piccoli locali, negozi e ristoranti."
            }

        ],

        restaurants: [

            {
                name: "Roscioli",
                category: "Tradizionale",
                price: "€€€"
            },

            {
                name: "Pizzarium",
                category: "Pizza",
                price: "€"
            },

            {
                name: "Da Enzo al 29",
                category: "Romano",
                price: "€€"
            }

        ],

        nightlife: [

            {
                name: "Trastevere",
                category: "Bar"
            },

            {
                name: "Testaccio",
                category: "Nightlife"
            }

        ],

        photoSpots: [

            "Fontana di Trevi",
            "Colosseo",
            "Ponte Sant'Angelo",
            "Terrazza del Gianicolo",
            "Piazza di Spagna"

        ],

        itineraries: {

            oneDay: [
                "Colosseo",
                "Foro Romano",
                "Pantheon",
                "Piazza Navona",
                "Fontana di Trevi",
                "Trastevere"
            ],

            threeDays: [
                "Colosseo e Foro Romano",
                "Centro Storico",
                "Musei Vaticani",
                "Trastevere",
                "Monti"
            ],

            fiveDays: [
                "Colosseo e Foro Romano",
                "Centro Storico",
                "Vaticano",
                "Trastevere",
                "Villa Borghese",
                "Appia Antica",
                "Testaccio"
            ]

        }

    },


    {
        id: "parigi",
        name: "Parigi",
        country: "Francia",
        flag: "🇫🇷",

        aliases: [
            "parigi",
            "paris",
            "francia parigi"
        ],

        description:
            "Arte, architettura, moda e gastronomia nel cuore della Francia.",

        currency: "EUR",
        language: "Francese",

        bestTime: [
            "Aprile",
            "Maggio",
            "Settembre",
            "Ottobre"
        ],

        budget: {
            low: 70,
            medium: 140,
            high: 280
        },

        places: [

            {
                id: "torre-eiffel",
                name: "Torre Eiffel",
                category: "Iconico",
                description:
                    "Il simbolo indiscusso di Parigi.",
                price: 0,
                duration: "2 ore"
            },

            {
                id: "louvre",
                name: "Museo del Louvre",
                category: "Arte",
                description:
                    "Uno dei musei più importanti e visitati al mondo.",
                price: 22,
                duration: "3-5 ore"
            },

            {
                id: "montmartre",
                name: "Montmartre",
                category: "Quartiere",
                description:
                    "Atmosfera artistica, stradine e Sacré-Cœur.",
                price: 0,
                duration: "2-3 ore"
            },

            {
                id: "notre-dame",
                name: "Notre-Dame",
                category: "Storia",
                description:
                    "La celebre cattedrale sull'Île de la Cité.",
                price: 0,
                duration: "1 ora"
            }

        ],

        activities: [

            {
                id: "senna",
                name: "Crociera sulla Senna",
                category: "Esperienza",
                description:
                    "Ammira Parigi dal fiume."
            },

            {
                id: "pasticcerie",
                name: "Tour delle pasticcerie",
                category: "Cibo",
                description:
                    "Croissant, macarons e pâtisserie francesi."
            }

        ],

        neighborhoods: [

            {
                name: "Le Marais",
                description:
                    "Boutique, locali e architettura storica."
            },

            {
                name: "Montmartre",
                description:
                    "Arte, vista sulla città e atmosfera bohémien."
            },

            {
                name: "Saint-Germain-des-Prés",
                description:
                    "Caffè storici, librerie e atmosfera elegante."
            }

        ],

        restaurants: [

            {
                name: "Bouillon Pigalle",
                category: "Francese",
                price: "€€"
            },

            {
                name: "L'As du Fallafel",
                category: "Street food",
                price: "€"
            }

        ],

        nightlife: [

            {
                name: "Le Marais",
                category: "Bar"
            },

            {
                name: "Pigalle",
                category: "Nightlife"
            }

        ],

        photoSpots: [

            "Torre Eiffel",
            "Sacré-Cœur",
            "Pont Alexandre III",
            "Louvre",
            "Rue de l'Université"

        ],

        itineraries: {

            oneDay: [
                "Torre Eiffel",
                "Arco di Trionfo",
                "Champs-Élysées",
                "Louvre",
                "Senna"
            ],

            threeDays: [
                "Torre Eiffel",
                "Louvre",
                "Montmartre",
                "Le Marais",
                "Notre-Dame"
            ],

            fiveDays: [
                "Torre Eiffel",
                "Louvre",
                "Montmartre",
                "Le Marais",
                "Versailles",
                "Saint-Germain",
                "Musée d'Orsay"
            ]

        }

    },


    {
        id: "londra",
        name: "Londra",
        country: "Regno Unito",
        flag: "🇬🇧",

        aliases: [
            "londra",
            "london",
            "uk",
            "inghilterra"
        ],

        description:
            "Una metropoli internazionale piena di storia, cultura, musica e quartieri completamente diversi tra loro.",

        currency: "GBP",
        language: "Inglese",

        bestTime: [
            "Maggio",
            "Giugno",
            "Settembre"
        ],

        budget: {
            low: 80,
            medium: 150,
            high: 300
        },

        places: [

            {
                id: "big-ben",
                name: "Big Ben",
                category: "Iconico",
                description:
                    "Uno dei simboli più riconoscibili di Londra.",
                price: 0,
                duration: "45 min"
            },

            {
                id: "tower-bridge",
                name: "Tower Bridge",
                category: "Iconico",
                description:
                    "Lo storico ponte sul Tamigi.",
                price: 15,
                duration: "1-2 ore"
            },

            {
                id: "british-museum",
                name: "British Museum",
                category: "Cultura",
                description:
                    "Uno dei più importanti musei della città.",
                price: 0,
                duration: "2-4 ore"
            },

            {
                id: "hyde-park",
                name: "Hyde Park",
                category: "Natura",
                description:
                    "Uno dei grandi parchi centrali di Londra.",
                price: 0,
                duration: "1-2 ore"
            }

        ],

        activities: [

            {
                id: "pub-tour",
                name: "Pub tour",
                category: "Esperienza",
                description:
                    "Scopri i pub storici della città."
            },

            {
                id: "west-end",
                name: "Spettacolo nel West End",
                category: "Spettacolo",
                description:
                    "Vivi uno dei musical del famoso West End."
            }

        ],

        neighborhoods: [

            {
                name: "Soho",
                description:
                    "Ristoranti, bar, musica e vita notturna."
            },

            {
                name: "Notting Hill",
                description:
                    "Case colorate, mercati e atmosfera elegante."
            },

            {
                name: "Shoreditch",
                description:
                    "Arte urbana, locali e cultura alternativa."
            }

        ],

        restaurants: [

            {
                name: "Dishoom",
                category: "Indian",
                price: "€€"
            },

            {
                name: "Flat Iron",
                category: "Steak",
                price: "€€"
            }

        ],

        nightlife: [

            {
                name: "Soho",
                category: "Nightlife"
            },

            {
                name: "Shoreditch",
                category: "Club"
            }

        ],

        photoSpots: [

            "Tower Bridge",
            "Big Ben",
            "Notting Hill",
            "St Paul's Cathedral",
            "Primrose Hill"

        ],

        itineraries: {

            oneDay: [
                "Big Ben",
                "Westminster",
                "London Eye",
                "Tower Bridge",
                "Soho"
            ],

            threeDays: [
                "Westminster",
                "British Museum",
                "Tower Bridge",
                "Notting Hill",
                "Soho"
            ],

            fiveDays: [
                "Westminster",
                "British Museum",
                "Tower Bridge",
                "Notting Hill",
                "Camden",
                "Greenwich",
                "Shoreditch"
            ]

        }

    },


    {
        id: "tokyo",
        name: "Tokyo",
        country: "Giappone",
        flag: "🇯🇵",

        aliases: [
            "tokyo",
            "tokio",
            "giappone tokyo",
            "tokyo japan"
        ],

        description:
            "Una metropoli futuristica dove tecnologia, tradizione, cultura pop e cucina convivono.",

        currency: "JPY",
        language: "Giapponese",

        bestTime: [
            "Marzo",
            "Aprile",
            "Ottobre",
            "Novembre"
        ],

        budget: {
            low: 60,
            medium: 120,
            high: 250
        },

        places: [

            {
                id: "shibuya",
                name: "Shibuya Crossing",
                category: "Iconico",
                description:
                    "Il celebre incrocio pedonale nel cuore di Tokyo.",
                price: 0,
                duration: "1 ora"
            },

            {
                id: "sensoji",
                name: "Senso-ji",
                category: "Cultura",
                description:
                    "Il più antico tempio buddhista di Tokyo.",
                price: 0,
                duration: "1-2 ore"
            },

            {
                id: "tokyo-skytree",
                name: "Tokyo Skytree",
                category: "Panorama",
                description:
                    "Una delle migliori viste panoramiche sulla città.",
                price: 2100,
                duration: "1-2 ore"
            },

            {
                id: "meiji",
                name: "Meiji Shrine",
                category: "Cultura",
                description:
                    "Un importante santuario immerso nel verde.",
                price: 0,
                duration: "1-2 ore"
            }

        ],

        activities: [

            {
                id: "teamlab",
                name: "teamLab",
                category: "Esperienza",
                description:
                    "Installazioni immersive di arte digitale."
            },

            {
                id: "ramen",
                name: "Ramen tour",
                category: "Cibo",
                description:
                    "Scopri diverse interpretazioni del ramen."
            },

            {
                id: "akihabara",
                name: "Esplora Akihabara",
                category: "Cultura pop",
                description:
                    "Anime, manga, videogiochi e tecnologia."
            }

        ],

        neighborhoods: [

            {
                name: "Shibuya",
                description:
                    "Moda, giovani, shopping e nightlife."
            },

            {
                name: "Shinjuku",
                description:
                    "Grattacieli, ristoranti e vita notturna."
            },

            {
                name: "Asakusa",
                description:
                    "Atmosfera tradizionale e templi."
            },

            {
                name: "Ginza",
                description:
                    "Shopping di lusso e ristoranti raffinati."
            }

        ],

        restaurants: [

            {
                name: "Ichiran",
                category: "Ramen",
                price: "€€"
            },

            {
                name: "Tsukiji Outer Market",
                category: "Street food",
                price: "€€"
            }

        ],

        nightlife: [

            {
                name: "Shibuya",
                category: "Nightlife"
            },

            {
                name: "Shinjuku",
                category: "Bar"
            },

            {
                name: "Roppongi",
                category: "Club"
            }

        ],

        photoSpots: [

            "Shibuya Crossing",
            "Tokyo Skytree",
            "Senso-ji",
            "Tokyo Tower",
            "Odaiba"

        ],

        itineraries: {

            oneDay: [
                "Senso-ji",
                "Asakusa",
                "Shibuya",
                "Shinjuku"
            ],

            threeDays: [
                "Asakusa",
                "Shibuya",
                "Shinjuku",
                "Meiji Shrine",
                "Akihabara"
            ],

            fiveDays: [
                "Asakusa",
                "Shibuya",
                "Shinjuku",
                "Akihabara",
                "Ginza",
                "Odaiba",
                "teamLab"
            ]

        }

    },


    {
        id: "new-york",
        name: "New York",
        country: "Stati Uniti",
        flag: "🇺🇸",

        aliases: [
            "new york",
            "newyork",
            "nyc",
            "new york city"
        ],

        description:
            "Una città enorme e dinamica, famosa per skyline, cultura, quartieri e vita notturna.",

        currency: "USD",
        language: "Inglese",

        bestTime: [
            "Aprile",
            "Maggio",
            "Settembre",
            "Ottobre"
        ],

        budget: {
            low: 100,
            medium: 190,
            high: 400
        },

        places: [

            {
                id: "times-square",
                name: "Times Square",
                category: "Iconico",
                description:
                    "Il cuore luminoso di Manhattan.",
                price: 0,
                duration: "1 ora"
            },

            {
                id: "central-park",
                name: "Central Park",
                category: "Natura",
                description:
                    "L'immenso parco nel cuore di Manhattan.",
                price: 0,
                duration: "2-4 ore"
            },

            {
                id: "empire-state",
                name: "Empire State Building",
                category: "Panorama",
                description:
                    "Uno dei simboli dello skyline di New York.",
                price: 47,
                duration: "2 ore"
            },

            {
                id: "statue-liberty",
                name: "Statua della Libertà",
                category: "Iconico",
                description:
                    "Uno dei simboli degli Stati Uniti.",
                price: 25,
                duration: "3-4 ore"
            }

        ],

        activities: [

            {
                id: "broadway",
                name: "Broadway",
                category: "Spettacolo",
                description:
                    "Assisti a uno dei grandi spettacoli teatrali."
            },

            {
                id: "brooklyn",
                name: "Esplora Brooklyn",
                category: "Quartiere",
                description:
                    "Street art, locali e viste su Manhattan."
            }

        ],

        neighborhoods: [

            {
                name: "SoHo",
                description:
                    "Boutique, ristoranti e architettura industriale."
            },

            {
                name: "Brooklyn",
                description:
                    "Arte, locali e atmosfera creativa."
            },

            {
                name: "Greenwich Village",
                description:
                    "Strade caratteristiche e atmosfera bohémien."
            }

        ],

        restaurants: [

            {
                name: "Katz's Delicatessen",
                category: "Deli",
                price: "€€"
            },

            {
                name: "Joe's Pizza",
                category: "Pizza",
                price: "€"
            }

        ],

        nightlife: [

            {
                name: "Lower East Side",
                category: "Bar"
            },

            {
                name: "Williamsburg",
                category: "Nightlife"
            }

        ],

        photoSpots: [

            "Brooklyn Bridge",
            "Top of the Rock",
            "Central Park",
            "DUMBO",
            "Times Square"

        ],

        itineraries: {

            oneDay: [
                "Central Park",
                "Times Square",
                "Fifth Avenue",
                "Empire State Building"
            ],

            threeDays: [
                "Manhattan",
                "Central Park",
                "Brooklyn",
                "Statua della Libertà",
                "SoHo"
            ],

            fiveDays: [
                "Manhattan",
                "Central Park",
                "Brooklyn",
                "Statua della Libertà",
                "SoHo",
                "Greenwich Village",
                "Musei"
            ]

        }

    },


    {
        id: "barcellona",
        name: "Barcellona",
        country: "Spagna",
        flag: "🇪🇸",

        aliases: [
            "barcellona",
            "barcelona",
            "spagna barcellona"
        ],

        description:
            "Architettura, mare, tapas e vita notturna in una delle città più vivaci d'Europa.",

        currency: "EUR",
        language: "Spagnolo",

        bestTime: [
            "Aprile",
            "Maggio",
            "Settembre",
            "Ottobre"
        ],

        budget: {
            low: 60,
            medium: 120,
            high: 240
        },

        places: [

            {
                id: "sagrada-familia",
                name: "Sagrada Família",
                category: "Iconico",
                description:
                    "Il capolavoro incompiuto di Antoni Gaudí.",
                price: 26,
                duration: "2 ore"
            },

            {
                id: "park-guell",
                name: "Park Güell",
                category: "Arte",
                description:
                    "Il celebre parco progettato da Gaudí.",
                price: 10,
                duration: "2 ore"
            },

            {
                id: "gotico",
                name: "Barri Gòtic",
                category: "Quartiere",
                description:
                    "Stradine medievali nel cuore della città.",
                price: 0,
                duration: "2 ore"
            },

            {
                id: "barceloneta",
                name: "Barceloneta",
                category: "Mare",
                description:
                    "La zona costiera più famosa della città.",
                price: 0,
                duration: "2-3 ore"
            }

        ],

        activities: [

            {
                id: "tapas",
                name: "Tapas tour",
                category: "Cibo",
                description:
                    "Scopri tapas e specialità catalane."
            },

            {
                id: "gaudi",
                name: "Tour di Gaudí",
                category: "Arte",
                description:
                    "Scopri le principali opere dell'architetto."
            }

        ],

        neighborhoods: [

            {
                name: "El Born",
                description:
                    "Boutique, ristoranti e stradine caratteristiche."
            },

            {
                name: "Gràcia",
                description:
                    "Atmosfera locale, piazze e piccoli ristoranti."
            },

            {
                name: "Barceloneta",
                description:
                    "Mare, spiaggia e ristoranti."
            }

        ],

        restaurants: [

            {
                name: "La Boqueria",
                category: "Mercato",
                price: "€€"
            },

            {
                name: "Can Paixano",
                category: "Tapas",
                price: "€"
            }

        ],

        nightlife: [

            {
                name: "El Born",
                category: "Bar"
            },

            {
                name: "Poble Espanyol",
                category: "Nightlife"
            }

        ],

        photoSpots: [

            "Sagrada Família",
            "Park Güell",
            "Bunkers del Carmel",
            "Barceloneta",
            "Casa Batlló"

        ],

        itineraries: {

            oneDay: [
                "Sagrada Família",
                "Park Güell",
                "Barri Gòtic",
                "Barceloneta"
            ],

            threeDays: [
                "Sagrada Família",
                "Park Güell",
                "Barri Gòtic",
                "El Born",
                "Barceloneta"
            ],

            fiveDays: [
                "Sagrada Família",
                "Park Güell",
                "Barri Gòtic",
                "El Born",
                "Montjuïc",
                "Barceloneta",
                "Gràcia"
            ]

        }

    }

];
