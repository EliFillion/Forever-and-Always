export type Locale = "en" | "fr";

export const locales = {
  en: {
    label: "English",
    shortLabel: "EN",
    path: "/",
    switchLabel: "Français",
    switchPath: "/fr",
    htmlLang: "en",
  },
  fr: {
    label: "Français",
    shortLabel: "FR",
    path: "/fr",
    switchLabel: "English",
    switchPath: "/",
    htmlLang: "fr",
  },
} as const;

const shared = {
  couple: {
    groom: "Éli-Samuel Fillion",
    bride: "Delilah J. Hershberger",
  },
  wedding: {
    title: "Forever & Always",
    date: "October 11, 2026",
    shortDate: "October 11 • 2026",
    countdown: "2026-10-11T21:00:00Z",
  },
};

export const site = {
  en: {
    ...shared,
    metaTitle: "Forever & Always | Éli-Samuel & Delilah",
    navigation: [
      { label: "Our Story", href: "#story" },
      { label: "Wedding", href: "#wedding" },
      { label: "Accommodations", href: "#accommodations" },
      { label: "Travel", href: "#travel" },
      { label: "Gifts", href: "#gifts" },
      { label: "FAQ", href: "#faq" },
    ],
    rsvpLabel: "RSVP",
    hero: {
      welcome:
        "Welcome to our wedding website! We are so thankful you're taking the time to celebrate this special season with us. Whether you're joining us from nearby or traveling from afar, your love, prayers, and friendship mean more to us than words can express. We cannot wait to celebrate the beginning of our marriage with all of you.",
      cta: "RSVP",
    },
    countdown: {
      labels: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
    },
    story: {
      heading: {
        eyebrow: "Our Story",
        title: "Every Story Has A Beginning",
        verse: "He has made everything beautiful in its time.",
        reference: "Ecclesiastes 3:11",
      },
      cards: [
        {
          image: "/images/story/story-1.jpg",
          title: "How We Met",
          date: "Late 2022",
          text: "We first met at our church's youth group in late 2022 where we had the opportunity to serve together. Through serving side by side, conversations came naturally, and what started as friendship slowly grew into something much deeper. Before long, we were talking every day, getting to know one another, encouraging each other in our faith, and becoming best friends.",
        },
        {
          image: "/images/story/story-2.jpg",
          title: "Our Journey Begins",
          date: "May 22, 2024",
          text: "We officially started dating just one week before Éli-Samuel left for Canada. Over the next two years, including two summers of long distance, our relationship only grew stronger. We knew we had found someone special, sharing a deep love for Christ, the same values, and our greatest joy in simply being together. Around each other, we could always be completely ourselves.",
          reverse: true,
        },
        {
          image: "/images/story/story-3.jpg",
          title: "She Said Yes",
          date: "May 25, 2026",
          text: "After two incredible years together, our next chapter began. While Delilah and her family were enjoying a vacation in Florida, Éli-Samuel secretly flew there to surprise her with the help of her parents. Waiting on the beach outside their Airbnb, he asked her to marry him, and amid a few joyful tears, she said yes!",
        },
        {
          image: "/images/story/story-4.jpg",
          title: "Forever Begins",
          date: "October 11, 2026",
          text: "Now we are incredibly thankful for God's faithfulness throughout our journey and for the love and support of our family and friends. We can't wait to celebrate this special day with all of you!",
          reverse: true,
        },
      ],
      closingReference: "Psalm 63:7",
      closingVerse:
        "Because You have been my help, therefore in the shadow of Your wings I will rejoice.",
    },
    weddingDetails: {
      date: "October 11, 2026",
      eyebrow: "Wedding Day",
      title: 'Join Us As We Say "I Do"',
      intro:
        "We are so excited to celebrate the beginning of our marriage with our family and friends. Here are the details for our special day.",
      day: "Sunday",
      location: "Hartsel Ranch",
      locationArea: "Hartsel, Colorado",
      dressCodeLabel: "Dress Code",
      dressCode: "Semi-Formal",
      mapLabel: "View Venue on Google Maps",
      venueText:
        "Our ceremony and reception will both take place at Hartsel Ranch, surrounded by the beautiful Colorado mountains. We can't wait to celebrate this unforgettable day with you.",
      timelineTitle: "Wedding Day Timeline",
      events: [
        { time: "3:00 PM", label: "Ceremony", icon: "ceremony" },
        { time: "4:00 PM", label: "Refreshments & Fellowship", icon: "coffee" },
        { time: "5:00 PM", label: "Reception", icon: "reception" },
        { time: "Evening", label: "Celebration", icon: "celebration" },
      ],
    },
    accommodations: {
      heading: {
        eyebrow: "Accommodations",
        title: "A Place to Stay",
      },
      labels: {
        driveTime: "Drive time from venue",
        details: "Details",
        click: "Click to see details",
        pricing: "Pricing:",
        space: "Space:",
        booking: "Booking:",
        website: "Website:",
        visitWebsite: "Visit website",
        booked: "Booked",
      },
      cards: [
        {
          image: "/images/accommodations/lodge.jpg",
          title: "Hartsel Ranch Lodge",
          description:
            "Our main lodge offers beautiful mountain views and is located right at the wedding venue, making it the most convenient place to stay.",
          driveTime: "On site",
          directions: "Right at the venue",
          website: "https://www.hartselranch.co/book-a-room",
          cost: "$200 per room per night for our discounted wedding rate",
          space:
            "Cozy lodge rooms with warm mountain charm and welcoming shared gathering spaces",
          backDescription:
            "The lodge is the most convenient option for guests staying close to the celebration. It brings together mountain views, comfortable rooms, and a cozy, welcoming atmosphere that feels right at home for a weekend wedding getaway.",
          backImages: ["/images/accommodations/lodge2.jpg", "/images/accommodations/lodge3.jpg"],
          bookingNote:
            "Please contact us before booking any room. Reservations must be arranged through us.",
        },
        {
          image: "/images/accommodations/cabin.jpg",
          title: "Luxury Cabins at Hartsel Ranch",
          description:
            "There are several cozy cabins available near the venue for couples, families, and groups looking to enjoy a Colorado mountain getaway.",
          driveTime: "On site",
          directions: "Just minutes from the venue",
          website: "https://www.hartselranch.co/book-a-room",
          cost: "$400 per cabin per night for our discounted wedding rate",
          space:
            "Private, cozy cabins with mountain charm and a peaceful setting for a restful stay",
          backDescription:
            "These cabins offer a more secluded option for guests who want a cozy mountain retreat close to the celebration. They’re ideal for couples, families, or small groups looking for privacy and comfort.",
          backImages: ["/images/accommodations/cabin2.jpeg", "/images/accommodations/cabin3.jpg"],
          bookingNote:
            "Please contact us before booking any cabin. Reservations must be arranged through us.",
          isBooked: true,
        },
        {
          image: "/images/accommodations/buena.jpg",
          title: "Best Western Vista Inn",
          description:
            "Comfortable hotel-style accommodations with a simple, convenient place to rest close to the mountains.",
          driveTime: "About 25 minutes",
          directions: "Take Highway 24 toward Buena Vista and follow signs for the hotel.",
          website:
            "https://www.bestwestern.com/en_US/book/hotels-in-buena-vista/best-western-vista-inn/propertyCode.06164.html",
          cost: "$150-$200 per night",
          space:
            "Comfortable guest rooms with a practical, relaxed stay for travelers looking for an easy mountain base",
          backDescription:
            "The Best Western Vista Inn is a convenient option for guests who want a straightforward hotel stay with easy access to Buena Vista and the surrounding mountains.",
          backImages: ["/images/accommodations/buena2.jpg", "/images/accommodations/buena3.jpg"],
          bookingNote: "Guests can book this stay on their own whenever they’d like.",
        },
        {
          image: "/images/accommodations/micro.jpg",
          title: "Microtel Inn & Suites by Wyndham Woodland Park",
          description:
            "A practical and comfortable stay with convenient access to Woodland Park and the surrounding mountains.",
          driveTime: "About 50 minutes",
          directions: "Head to Woodland Park and follow the main route into town for the hotel.",
          website:
            "https://www.wyndhamhotels.com/microtel/woodland-park-colorado/microtel-inn-and-suites-by-wyndham-woodland-park/overview",
          cost: "$170-$200 per night",
          space:
            "Simple, comfortable rooms that make a convenient stopover for a relaxed mountain weekend",
          backDescription:
            "This hotel offers a comfortable, easygoing option for guests who want a straightforward stay near Woodland Park without overcomplicating the trip.",
          backImages: ["/images/accommodations/micro2.jpg", "/images/accommodations/micro3.jpg"],
          bookingNote: "Guests can book this stay on their own whenever they’d like.",
        },
      ],
    },
    travel: {
      heading: {
        eyebrow: "Travel",
        title: "Planning Your Trip",
      },
      cards: [
        {
          image: "/images/travel/airport.jpg",
          title: "Flying In",
          description:
            "Colorado Springs Airport is the closest major airport to the venue, with Denver International Airport offering additional flight options for guests traveling from farther away. From Colorado Springs, the drive to Hartsel Ranch is about 1 hour 30 minutes, and from Denver it is about 2 hours 30 minutes.",
        },
        {
          image: "/images/travel/drive.jpg",
          title: "Driving",
          description:
            "Hartsel Ranch is easily accessible by car, and the scenic route makes for a beautiful arrival. Use the map below to find directions to the venue.",
          linkText: "Open Map",
          linkUrl:
            "https://google.com/maps/search/39.015132,+-105.757222?entry=tts&g_ep=EgoyMDI2MDYyNC4wIPu8ASoASAFQAw%3D%3D&skid=c6956dfc-acad-41b4-ad07-2fed73d80c0a",
        },
        {
          image: "/images/travel/colorado.jpg",
          title: "Colorado Tips",
          description:
            "October in the Rockies can bring warm afternoons and cool evenings. We recommend dressing in layers and staying hydrated, as the elevation is over 9,000 feet and the mountain air can feel crisp even on sunny days.",
        },
      ],
    },
    gifts: {
      heading: {
        eyebrow: "Gifts",
        title: "Your Presence Is Our Greatest Gift",
      },
      celebrateTitle: "Celebrate With Us",
      celebrateDescription:
        "The greatest gift we could receive is the opportunity to celebrate our wedding day with you. Your love, prayers, and support mean more to us than anything else. We are so grateful to share this special day with each of you.",
      registryTitle: "Wedding Registry",
      registryDescription:
        "For those who desire to bless us further, we do have an Amazon Registry. Thank you for your generosity and kindness as we begin this new chapter together.",
      registryLink: "View Our Amazon Registry",
    },
    faq: {
      heading: {
        eyebrow: "FAQ",
        title: "Frequently Asked Questions",
      },
      items: [
        {
          question: "When should I RSVP by?",
          answer:
            "Our RSVP closes on September 1st. Please consider taking your spot as soon as possible, as we may reach our venue capacity.",
        },
        {
          question: "Can I bring a guest?",
          answer:
            "Please refer to the names listed on your invitation. If you have any questions, don't hesitate to reach out to us.",
        },
        {
          question: "Are children invited?",
          answer:
            "All children of invited parents are welcome and invited. There will in fact be assigned tables for children. That being said, considering our limited venue capacity, if you would rather have them stay home, you are more than welcome to do so as well. Excited to see every face, from young to old!",
        },
        {
          question: "What about dietary restrictions?",
          answer:
            "Unfortunately we will not be in measure to accomodate allergies and intolerances. Our food will include eggs, milk, and likely nuts.We encourage every concerned guest to bring their own food in case of doubt. Please contact us concerning any such questions.",
        },
        {
          question: "Is there parking available?",
          answer:
            "Yes! Parking will be available at Hartsel Ranch, with signs directing guests upon arrival.",
        },
        {
          question: "Will the ceremony be indoors or outdoors?",
          answer: "Our current plan is to celebrate outdoors, weather permitting.",
        },
        {
          question: "What should I wear?",
          answer:
            "Our dress code is semi-formal. Since October afternoons and evenings in Colorado can be cool, we recommend bringing a light jacket.",
        },
      ],
    },
    gallery: {
      heading: {
        eyebrow: "Gallery",
        title: "Engagement Pictures",
      },
      photoAlt: "Photo",
      closingVerse: "What therefore God has joined together, let no man separate.",
      closingReference: "Mark 10:9",
    },
    footer: {
      thanks: "Thank you for being part of our story.",
      message:
        "Whether you've known us for years or have only recently become part of our lives, your presence on our wedding day is a tremendous blessing to us. We look forward to celebrating with you and beginning this new chapter surrounded by the people we love.",
    },
  },
  fr: {
    ...shared,
    wedding: {
      ...shared.wedding,
      date: "11 octobre 2026",
      shortDate: "11 octobre • 2026",
    },
    metaTitle: "Pour toujours | Éli-Samuel & Delilah",
    navigation: [
      { label: "Notre histoire", href: "#story" },
      { label: "Mariage", href: "#wedding" },
      { label: "Hébergement", href: "#accommodations" },
      { label: "Voyage", href: "#travel" },
      { label: "Cadeaux", href: "#gifts" },
      { label: "FAQ", href: "#faq" },
    ],
    rsvpLabel: "RSVP",
    hero: {
      welcome:
        "Bienvenue sur notre site de mariage! Nous sommes tellement reconnaissants que vous preniez le temps de célébrer cette belle saison avec nous. Que vous veniez de tout près ou de très loin, votre amour, vos prières et votre amitié comptent énormément pour nous. Nous avons tellement hâte de célébrer le début de notre mariage avec vous tous.",
      cta: "RSVP",
    },
    countdown: {
      labels: {
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes",
      },
    },
    story: {
      heading: {
        eyebrow: "Notre histoire",
        title: "Chaque histoire a un commencement",
        verse: "Il fait toute chose belle en son temps.",
        reference: "Ecclesiaste 3:11",
      },
      cards: [
        {
          image: "/images/story/story-1.jpg",
          title: "Notre rencontre",
          date: "Fin 2022",
          text: "Nous nous sommes rencontrés au groupe de jeunes de notre église à la fin de 2022, où nous avons eu l'occasion de servir ensemble. En servant côte à côte, les conversations sont venues naturellement, et ce qui a commencé comme une amitié est peu à peu devenu quelque chose de beaucoup plus profond. Très vite, nous parlions chaque jour, apprenant à nous connaître, nous encourageant dans notre foi, et devenant meilleurs amis.",
        },
        {
          image: "/images/story/story-2.jpg",
          title: "Le début de notre parcours",
          date: "22 mai 2024",
          text: "Nous avons officiellement commencé à sortir ensemble une semaine avant le départ d'Éli-Samuel pour le Canada. Au cours des deux années suivantes, y compris deux étés à distance, notre relation n'a fait que grandir. Nous savions que nous avions trouvé quelqu'un de précieux, avec un amour profond pour Christ, les mêmes valeurs, et une grande joie simplement à être ensemble. L'un avec l'autre, nous pouvions toujours être pleinement nous-mêmes.",
          reverse: true,
        },
        {
          image: "/images/story/story-3.jpg",
          title: "Elle a dit oui",
          date: "25 mai 2026",
          text: "Après deux merveilleuses années ensemble, un nouveau chapitre a commencé. Pendant que Delilah et sa famille profitaient de vacances en Floride, Éli-Samuel s'y est rendu en secret pour lui faire la surprise, avec l'aide de ses parents. Sur la plage devant leur Airbnb, il lui a demandé de l'épouser, et au milieu de quelques larmes de joie, elle a dit oui!",
        },
        {
          image: "/images/story/story-4.jpg",
          title: "Pour toujours commence",
          date: "11 octobre 2026",
          text: "Aujourd'hui, nous sommes profondément reconnaissants pour la fidélité de Dieu tout au long de notre parcours, ainsi que pour l'amour et le soutien de notre famille et de nos amis. Nous avons très hâte de célébrer cette journée spéciale avec vous tous!",
          reverse: true,
        },
      ],
      closingReference: "Psaume 63:7",
      closingVerse:
        "Car tu es mon secours, et je suis dans l'allégresse à l'ombre de tes ailes.",
    },
    weddingDetails: {
      date: "11 octobre 2026",
      eyebrow: "Jour du mariage",
      title: 'Venez célébrer notre "oui"',
      intro:
        "Nous sommes tellement heureux de célébrer le début de notre mariage avec notre famille et nos amis. Voici les détails de cette journée spéciale.",
      day: "Dimanche",
      location: "Hartsel Ranch",
      locationArea: "Hartsel, Colorado",
      dressCodeLabel: "Tenue",
      dressCode: "Semi-formelle",
      mapLabel: "Voir le lieu sur Google Maps",
      venueText:
        "La cérémonie et la réception auront lieu au Hartsel Ranch, entouré des magnifiques montagnes du Colorado. Nous avons très hâte de vivre cette journée inoubliable avec vous.",
      timelineTitle: "Déroulement de la journée",
      events: [
        { time: "15 h 00", label: "Cérémonie", icon: "ceremony" },
        { time: "16 h 00", label: "Rafraîchissements et communion", icon: "coffee" },
        { time: "17 h 00", label: "Réception", icon: "reception" },
        { time: "Soirée", label: "Célébration", icon: "celebration" },
      ],
    },
    accommodations: {
      heading: {
        eyebrow: "Hébergement",
        title: "Où rester",
      },
      labels: {
        driveTime: "Temps de route depuis le lieu",
        details: "Détails",
        click: "Cliquez pour voir les détails",
        pricing: "Prix :",
        space: "Espace :",
        booking: "Réservation :",
        website: "Site web :",
        visitWebsite: "Visiter le site",
        booked: "Réservé",
      },
      cards: [
        {
          image: "/images/accommodations/lodge.jpg",
          title: "Hartsel Ranch Lodge",
          description:
            "Le lodge principal offre une magnifique vue sur les montagnes et se trouve directement sur le lieu du mariage, ce qui en fait l'option la plus pratique.",
          driveTime: "Sur place",
          directions: "Directement au lieu du mariage",
          website: "https://www.hartselranch.co/book-a-room",
          cost: "200 $ par chambre par nuit avec notre tarif de mariage",
          space:
            "Chambres chaleureuses de style montagne avec des espaces communs accueillants",
          backDescription:
            "Le lodge est l'option la plus pratique pour les invités qui souhaitent rester tout près de la célébration. Il réunit une vue sur les montagnes, des chambres confortables et une atmosphère chaleureuse pour une fin de semaine de mariage.",
          backImages: ["/images/accommodations/lodge2.jpg", "/images/accommodations/lodge3.jpg"],
          bookingNote:
            "Veuillez nous contacter avant de réserver une chambre. Les réservations doivent passer par nous.",
        },
        {
          image: "/images/accommodations/cabin.jpg",
          title: "Chalets de luxe au Hartsel Ranch",
          description:
            "Plusieurs chalets confortables sont disponibles près du lieu pour les couples, familles et groupes qui souhaitent profiter des montagnes du Colorado.",
          driveTime: "Sur place",
          directions: "À quelques minutes du lieu",
          website: "https://www.hartselranch.co/book-a-room",
          cost: "400 $ par chalet par nuit avec notre tarif de mariage",
          space:
            "Chalets privés et confortables avec charme montagnard dans un cadre paisible",
          backDescription:
            "Ces chalets offrent une option plus privée pour les invités qui souhaitent un séjour tranquille près de la célébration. Ils conviennent très bien aux couples, familles ou petits groupes qui recherchent confort et intimité.",
          backImages: ["/images/accommodations/cabin2.jpeg", "/images/accommodations/cabin3.jpg"],
          bookingNote:
            "Veuillez nous contacter avant de réserver un chalet. Les réservations doivent passer par nous.",
          isBooked: true,
        },
        {
          image: "/images/accommodations/buena.jpg",
          title: "Best Western Vista Inn",
          description:
            "Un hébergement confortable de style hôtel, simple et pratique, pour se reposer près des montagnes.",
          driveTime: "Environ 25 minutes",
          directions: "Prenez la Highway 24 vers Buena Vista et suivez les indications pour l'hôtel.",
          website:
            "https://www.bestwestern.com/en_US/book/hotels-in-buena-vista/best-western-vista-inn/propertyCode.06164.html",
          cost: "150 $-200 $ par nuit",
          space:
            "Chambres confortables et pratiques pour un séjour simple près des montagnes",
          backDescription:
            "Le Best Western Vista Inn est une option pratique pour les invités qui veulent un séjour d'hôtel simple avec un bon accès à Buena Vista et aux montagnes environnantes.",
          backImages: ["/images/accommodations/buena2.jpg", "/images/accommodations/buena3.jpg"],
          bookingNote: "Les invités peuvent réserver cet hébergement eux-mêmes.",
        },
        {
          image: "/images/accommodations/micro.jpg",
          title: "Microtel Inn & Suites by Wyndham Woodland Park",
          description:
            "Un séjour pratique et confortable avec un accès facile à Woodland Park et aux montagnes environnantes.",
          driveTime: "Environ 50 minutes",
          directions: "Rendez-vous à Woodland Park et suivez la route principale jusqu'à l'hôtel.",
          website:
            "https://www.wyndhamhotels.com/microtel/woodland-park-colorado/microtel-inn-and-suites-by-wyndham-woodland-park/overview",
          cost: "170 $-200 $ par nuit",
          space:
            "Chambres simples et confortables pour une fin de semaine détendue en montagne",
          backDescription:
            "Cet hôtel offre une option confortable et simple pour les invités qui souhaitent rester près de Woodland Park sans compliquer leur voyage.",
          backImages: ["/images/accommodations/micro2.jpg", "/images/accommodations/micro3.jpg"],
          bookingNote: "Les invités peuvent réserver cet hébergement eux-mêmes.",
        },
      ],
    },
    travel: {
      heading: {
        eyebrow: "Voyage",
        title: "Planifier votre déplacement",
      },
      cards: [
        {
          image: "/images/travel/airport.jpg",
          title: "Arriver en avion",
          description:
            "L'aéroport de Colorado Springs est le grand aéroport le plus près du lieu. L'aéroport international de Denver offre aussi plus d'options de vols pour les invités qui viennent de plus loin. Depuis Colorado Springs, le trajet jusqu'au Hartsel Ranch prend environ 1 h 30, et depuis Denver environ 2 h 30.",
        },
        {
          image: "/images/travel/drive.jpg",
          title: "Venir en voiture",
          description:
            "Le Hartsel Ranch est facilement accessible en voiture, et la route panoramique rend l'arrivée très belle. Utilisez la carte ci-dessous pour obtenir l'itinéraire vers le lieu.",
          linkText: "Ouvrir la carte",
          linkUrl:
            "https://google.com/maps/search/39.015132,+-105.757222?entry=tts&g_ep=EgoyMDI2MDYyNC4wIPu8ASoASAFQAw%3D%3D&skid=c6956dfc-acad-41b4-ad07-2fed73d80c0a",
        },
        {
          image: "/images/travel/colorado.jpg",
          title: "Conseils pour le Colorado",
          description:
            "En octobre, les Rocheuses peuvent offrir des après-midis doux et des soirées fraîches. Nous recommandons de porter plusieurs couches et de bien vous hydrater, car l'altitude dépasse 9 000 pieds et l'air de montagne peut être frais même par beau temps.",
        },
      ],
    },
    gifts: {
      heading: {
        eyebrow: "Cadeaux",
        title: "Votre présence est notre plus beau cadeau",
      },
      celebrateTitle: "Célébrer avec nous",
      celebrateDescription:
        "Le plus beau cadeau que nous puissions recevoir est de célébrer notre journée de mariage avec vous. Votre amour, vos prières et votre soutien comptent plus que tout pour nous. Nous sommes tellement reconnaissants de partager cette journée spéciale avec chacun de vous.",
      registryTitle: "Liste de mariage",
      registryDescription:
        "Pour ceux qui désirent nous bénir davantage, nous avons une liste de mariage Amazon. Merci pour votre générosité et votre bonté alors que nous commençons ce nouveau chapitre ensemble.",
      registryLink: "Voir notre liste Amazon",
    },
    faq: {
      heading: {
        eyebrow: "FAQ",
        title: "Questions fréquentes",
      },
      items: [
        {
          question: "Quelle est la date limite pour répondre?",
          answer:
            "Le RSVP se termine le 1er septembre. Nous vous encourageons à réserver votre place dès que possible, car la capacité du lieu est limitée.",
        },
        {
          question: "Puis-je amener un invité?",
          answer:
            "Veuillez vous référer aux noms indiqués sur votre invitation. Si vous avez des questions, n'hésitez pas à nous contacter.",
        },
        {
          question: "Les enfants sont-ils invités?",
          answer:
            "Tous les enfants des parents invités sont les bienvenus. Des tables seront prévues pour les enfants. Cela dit, comme la capacité du lieu est limitée, si vous préférez les garder à la maison, vous êtes aussi libres de le faire. Nous avons hâte de voir chaque visage, des plus jeunes aux plus âgés!",
        },
        {
          question: "Qu'en est-il des restrictions alimentaires?",
          answer:
            "Malheureusement, nous ne serons pas en mesure d'accommoder les allergies et intolérances. Le repas contiendra des oeufs, du lait et probablement des noix. Nous encourageons toute personne concernée à apporter sa propre nourriture en cas de doute. Veuillez nous contacter pour toute question à ce sujet.",
        },
        {
          question: "Y aura-t-il du stationnement?",
          answer:
            "Oui! Du stationnement sera disponible au Hartsel Ranch, avec des indications pour guider les invités à leur arrivée.",
        },
        {
          question: "La cérémonie aura-t-elle lieu à l'intérieur ou à l'extérieur?",
          answer:
            "Notre plan actuel est de célébrer à l'extérieur, si la météo le permet.",
        },
        {
          question: "Quelle tenue devrais-je porter?",
          answer:
            "La tenue est semi-formelle. Comme les après-midis et les soirées d'octobre au Colorado peuvent être fraîches, nous recommandons d'apporter une veste légère.",
        },
      ],
    },
    gallery: {
      heading: {
        eyebrow: "Galerie",
        title: "Photos de fiançailles",
      },
      photoAlt: "Photo",
      closingVerse: "Que l'homme donc ne sépare pas ce que Dieu a joint.",
      closingReference: "Marc 10:9",
    },
    footer: {
      thanks: "Merci de faire partie de notre histoire.",
      message:
        "Que vous nous connaissiez depuis des années ou que vous soyez entrés récemment dans nos vies, votre présence le jour de notre mariage est une immense bénédiction pour nous. Nous avons hâte de célébrer avec vous et de commencer ce nouveau chapitre entourés des personnes que nous aimons.",
    },
  },
} as const;

export const getSite = (locale: Locale = "en") => site[locale];
