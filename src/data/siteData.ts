export const missionText =
  "Rendre la connectivité fiable et accessible à tous, en Afrique, grâce à des solutions réseau et satellite adaptées au terrain.";


  export const navLinks = [
  { label: "Accueil", path: "accueil" },
  { label: "Services", path: "services" },
  
  { label: "A Propos", path: "historique" },
  
  { label: "Contact", path: "contact" },
];

export const company = {
  name: "IAS-TECHNOLOGIE",
  tagline: "Burkina Faso & Afrique",
  ctaLabel: "Demander un devis",
};

export const contact = {
  city: "Ouagadougou, BF",
  phone: "+226 25 30 00 00",
  whatsapp: "+226 70 688331",
  email: "support@iastechnologie.com",
  address: " YEMTENGA, Ouagadougou, Burkina Faso",
};


export const solutions = [
  "Starlink & VSAT Haute Disponibilité",
  "Réseaux WiFi d'Entreprise & Campus",
  "Équipements, Routeurs & Faisceaux",
  "Logiciels & Programmation sur Mesure",
];

export const legalLinks = [
  { label: "Mentions légales", path: "mentions-legales" },
  { label: "Politique de confidentialité", path: "confidentialite" },
];

export const heroBadge = "Partenaire IT & Télécoms de Référence en Afrique";

export const heroTitle = {
  line1: "IAS-TECHNOLOGIE",
  highlight: "Votre partenaire IT",
  line2: "au Burkina Faso.",
};

export const heroText =
  "Distribution, installation et supervision d'équipements réseau haute disponibilité (routeurs, switchs managés, kits Starlink & faisceaux hertziens) à travers le Burkina Faso et l'Afrique de l'Ouest.";

export const trustIndicators = [
  { icon: "timer", title: "Intervention 24/24h", subtitle: "Sur site & régions" },
  { icon: "headset_mic", title: "Support dédié 7j/7", subtitle: "NOC basé à Ouaga" },
  { icon: "verified_user", title: "Agrément & Garantie", subtitle: "Matériel constructeur" },
];

export const historyIntro =
  "IAS-TECHNOLOGIE est une structure spécialisée dans la distribution, l'installation et la gestion d'équipements réseau auprès de clients répartis dans plusieurs pays d'Afrique.";

export const timeline = [
  { year: "2025", title: "Création de l'entreprise", text: "IAS-TECHNOLOGIE voit le jour avec une ambition claire : rendre la connectivité accessible et fiable au Burkina Faso." },
  { year: "[Année]", title: "Premiers grands contrats", text: "Les premières installations réseau à grande échelle posent les bases de la réputation technique de l'entreprise." },
  { year: "[Année]", title: "Expansion régionale", text: "L'activité s'étend à d'autres pays d'Afrique de l'Ouest." },
  { year: "[Année]", title: "Arrivée des kits Starlink", text: "L'intégration de la connectivité satellite permet de couvrir des zones jusque-là hors d'atteinte." },
  { year: "Aujourd'hui", title: "Un acteur reconnu du réseau en Afrique", text: "IAS-TECHNOLOGIE poursuit son développement avec la même exigence : fiabilité, proximité et innovation." },
];

export const values = [
  { title: "Fiabilité", text: "Des installations pensées pour durer, avec un suivi rigoureux." },
  { title: "Innovation", text: "Une veille constante sur les technologies réseau et satellite." },
  { title: "Accessibilité", text: "Rendre la connectivité possible, même dans les zones reculées." },
  { title: "Proximité", text: "Une relation client directe, avant et après l'installation." },
];

export const contactIntro =
  "Une question, un projet réseau ou un devis à demander ? Notre équipe vous répond rapidement.";

export const officeHours = [
  { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
  { day: "Samedi", hours: "8h00 - 13h00" },
  { day: "Dimanche", hours: "Fermé" },
];



export const socials = [
  { label: "Facebook", url: "#" },
  { label: "LinkedIn", url: "#" },
  { label: "WhatsApp", url: "https://wa.me/22670468331" },
];

export const servicesIntro =
  "De la fourniture du matériel à la supervision au quotidien, un accompagnement complet pour vos besoins réseau et connectivité.";

/* -------------------------------------------------------------------------- */
/*  Cartes de l'accueil                                                       */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    slug: "wifi",
    icon: "wifi",
    tag: "Haute densité",
    title: "Réseaux Wifi & Zones Wifi",
    text: "Conception et déploiement de zones Wi-Fi sécurisées pour particuliers, entreprises, hôtels, campus et espaces publics à forte affluence.",
    points: ["Portails captifs", "Couverture multi-zones", "Sécurisation réseau invités"],
    image: "/grandstream.jpg",
  },
  {
    slug: "wifi-communautaire",
    icon: "groups",
    tag: "Accès communautaire",
    title: "Réseau Wifi Communautaire",
    text: "Déploiement de réseaux Wifi partagés à l'échelle d'un quartier ou d'un village, pour un accès Internet abordable et mutualisé.",
    points: ["Bornes Wifi partagées", "Tarification accessible", "Gestion des accès par ticket"],
    image: "/resaux.jpg",
  },
  {
    slug: "starlink-vsat",
    icon: "satellite_alt",
    tag: "Spécialité régionale",
    title: "Antennes & Starlink / VSAT",
    text: "Fourniture et installation de kits Starlink et solutions VSAT pour les zones isolées ou mal desservies par les réseaux terrestres.",
    points: ["Kits Starlink haute performance", "Alignement & installation pylône", "Solutions solaires autonomes"],
    image: "/starlink.png",
  },
  {
    slug: "equipements-reseau",
    icon: "router",
    tag: "Infrastructure",
    title: "Routeurs & Équipements Réseau",
    text: "Distribution et installation de routeurs, switchs et pare-feux, avec câblage réseau et configuration adaptée à chaque site.",
    points: ["Routeurs & switchs managés", "Câblage réseau structuré", "Configuration pare-feu & VPN"],
    image: "/routeur.jpg",
  },
  {
    slug: "maintenance",
    icon: "build",
    tag: "SAV",
    title: "Gestion & Maintenance Réseau",
    text: "Suivi continu, dépannage et support technique, à distance ou sur site, pour garantir la continuité de votre connexion.",
    points: ["Support technique réactif", "Maintenance préventive", "Intervention sur site"],
    image: "/maintenance.jpg",
  },
  {
    slug: "applications",
    icon: "terminal",
    tag: "Développement",
    title: "Conception & Programmation",
    text: "Développement d'outils et d'applications sur mesure pour la gestion, la supervision et l'automatisation de vos réseaux.",
    points: ["Outils de supervision réseau", "Applications web & mobile sur mesure", "Automatisation & tableaux de bord"],
    image: "/programmation.jpeg",
  },
]

/* -------------------------------------------------------------------------- */
/*  Contenu des pages détail (clé = slug)                                     */
/* -------------------------------------------------------------------------- */

export type Expertise = {
  backLabel: string
  eyebrow: string
  title: string
  text: string
  pills: string[]
  heroImage: string
  badgeLabel: string
  badgeTitle: string
  intervention: { eyebrow: string; title: string; text: string }
  actions: { eyebrow: string; title: string; items: [string, string, string, string] }
}

const common = {
  backLabel: "Retour aux expertises",
  badgeLabel: "IASTECH",
  badgeTitle: "Expertise dédiée",
}

export const expertises: Record<string, Expertise> = {
  wifi: {
    ...common,
    eyebrow: "Haute densité",
    title: "Réseaux Wifi & zones Wifi sécurisées",
    text: "Des zones Wi-Fi conçues pour accueillir de nombreux utilisateurs en simultané : entreprises, hôtels, campus et lieux publics.",
    pills: ["Portails captifs", "Couverture multi-zones", "Réseau invités sécurisé"],
    heroImage: "/grandstream.jpg",
    intervention: {
      eyebrow: "Notre intervention",
      title: "Un Wi-Fi stable, même quand tout le monde se connecte.",
      text: "IASTECH étudie votre site, dimensionne le nombre de bornes nécessaires et déploie une couverture homogène. L'accès est contrôlé par un portail captif, et le réseau des invités est isolé de votre réseau interne.",
    },
    actions: {
      eyebrow: "Ce que nous mettons en place",
      title: "Une couverture étudiée, installée et contrôlée.",
      items: [
        "Étude du site, repérage des zones à couvrir et choix des bornes adaptées à l'affluence.",
        "Installation des bornes, câblage et configuration de plusieurs zones de couverture.",
        "Mise en place d'un portail captif : authentification, durée de connexion et limites de débit.",
        "Séparation du réseau invités et du réseau interne, avec règles de sécurité adaptées.",
      ],
    },
  },

  "wifi-communautaire": {
    ...common,
    eyebrow: "Accès communautaire",
    title: "Réseau Wifi communautaire",
    text: "Un accès Internet partagé à l'échelle d'un quartier ou d'un village, abordable pour les habitants et simple à gérer.",
    pills: ["Bornes partagées", "Tarification accessible", "Accès par ticket"],
    heroImage: "/resaux.jpg",
    intervention: {
      eyebrow: "Notre intervention",
      title: "Mutualiser la connexion pour la rendre accessible à tous.",
      text: "Une liaison Internet principale est distribuée par des bornes réparties dans la zone. Les habitants se connectent avec des tickets, et le gestionnaire du réseau suit la consommation et les accès depuis un seul tableau de bord.",
    },
    actions: {
      eyebrow: "Ce que nous mettons en place",
      title: "Un réseau partagé, équitable et facile à gérer.",
      items: [
        "Étude de la zone à desservir et choix de l'emplacement des bornes et de la liaison principale.",
        "Installation des bornes partagées, des pylônes et des alimentations, y compris solaires si besoin.",
        "Création de forfaits et de tickets prépayés adaptés au pouvoir d'achat local.",
        "Formation du gestionnaire : vente des tickets, suivi des connexions et premières interventions.",
      ],
    },
  },

  "starlink-vsat": {
    ...common,
    eyebrow: "Spécialité régionale",
    title: "Antennes, Starlink & VSAT",
    text: "Une connexion Internet fiable là où les réseaux terrestres n'arrivent pas : zones isolées, chantiers, sites miniers et agricoles.",
    pills: ["Kits Starlink", "Installation sur pylône", "Énergie solaire autonome"],
    heroImage: "/starlink.png",
    intervention: {
      eyebrow: "Notre intervention",
      title: "Connecter les sites que les opérateurs ne couvrent pas.",
      text: "IASTECH fournit et installe les kits Starlink et les solutions VSAT, de l'alignement de l'antenne à la mise en service. Quand le site n'a pas d'électricité fiable, nous ajoutons une alimentation solaire autonome.",
    },
    actions: {
      eyebrow: "Ce que nous mettons en place",
      title: "Du choix du kit jusqu'à la mise en service.",
      items: [
        "Analyse du site : dégagement du ciel, besoins en débit et choix entre Starlink et VSAT.",
        "Fourniture du kit, installation de l'antenne et alignement, au sol ou sur pylône.",
        "Installation d'une alimentation solaire avec batteries pour les sites sans électricité stable.",
        "Configuration du routeur, répartition de la connexion sur site et tests de performance.",
      ],
    },
  },

  "equipements-reseau": {
    ...common,
    eyebrow: "Infrastructure",
    title: "Routeurs & équipements réseau",
    text: "Le matériel et le câblage qui font tenir votre réseau : routeurs, switchs, pare-feux, installés et configurés pour votre site.",
    pills: ["Routeurs & switchs managés", "Câblage structuré", "Pare-feu & VPN"],
    heroImage: "/routeur.jpg",
    intervention: {
      eyebrow: "Notre intervention",
      title: "Un réseau propre, documenté et prêt à évoluer.",
      text: "Nous choisissons les équipements selon votre usage, tirons le câblage et configurons chaque appareil. Vos locaux sont connectés de façon fiable, et la sécurité est pensée dès le départ.",
    },
    actions: {
      eyebrow: "Ce que nous mettons en place",
      title: "Des équipements choisis, installés et configurés.",
      items: [
        "Audit de l'existant et choix des routeurs, switchs et pare-feux selon vos besoins.",
        "Câblage réseau structuré : tirage, baies, repérage et tests de chaque liaison.",
        "Configuration des routeurs et switchs managés : VLAN, priorités de trafic, redondance.",
        "Mise en place du pare-feu et des VPN pour sécuriser les accès et le travail à distance.",
      ],
    },
  },

  maintenance: {
    ...common,
    eyebrow: "SAV",
    title: "Gestion & maintenance réseau",
    text: "Un suivi continu et un support réactif, à distance ou sur site, pour que votre connexion ne s'arrête pas.",
    pills: ["Support réactif", "Maintenance préventive", "Intervention sur site"],
    heroImage: "/maintenance.jpg",
    intervention: {
      eyebrow: "Notre intervention",
      title: "Prévenir les pannes, et les résoudre vite quand elles arrivent.",
      text: "IASTECH surveille l'état de votre réseau, intervient à distance quand c'est possible et se déplace sur site quand c'est nécessaire. Chaque intervention est consignée pour garder un historique clair.",
    },
    actions: {
      eyebrow: "Ce que nous mettons en place",
      title: "Un suivi régulier et des interventions tracées.",
      items: [
        "Supervision du réseau et alertes en cas de coupure ou de dégradation de la connexion.",
        "Support technique par téléphone ou à distance, avec prise en charge rapide des incidents.",
        "Visites de maintenance préventive : contrôle du matériel, mises à jour et nettoyage.",
        "Intervention sur site et compte rendu écrit après chaque dépannage.",
      ],
    },
  },

  applications: {
    ...common,
    eyebrow: "Applications métier",
    title: "Développement & intégration d'applications",
    text: "Des applications web, mobiles et portails conçus pour automatiser vos processus, connecter vos équipes et fiabiliser vos opérations.",
    pills: ["Applications web et mobiles", "Portails sécurisés", "Intégrations API et métiers"],
    heroImage: "/programmation.jpeg",
    intervention: {
      eyebrow: "Notre intervention",
      title: "Une prestation structurée pour un résultat exploitable.",
      text: "IASTECH conçoit des solutions digitales adaptées à votre organisation : plateformes de gestion, portails clients, espaces internes, workflows de validation, tableaux de bord et connexions avec vos outils existants. L'objectif est simple : transformer vos méthodes de travail en applications fiables, sécurisées et faciles à utiliser.",
    },
    actions: {
      eyebrow: "Ce que nous mettons en place",
      title: "Des actions concrètes, documentées et suivies.",
      items: [
        "Analyse des besoins, cartographie des processus et rédaction des spécifications fonctionnelles.",
        "Développement d'applications web, mobiles, intranet, extranet et portails métiers.",
        "Intégration avec bases de données, services tiers, outils internes, API et systèmes existants.",
        "Mise en place de rôles utilisateurs, circuits de validation, notifications et tableaux de bord.",
      ],
    },
  },
}


export const stats = [
  { icon: "groups", value: 500, suffix: "+", label: "Clients satisfaits", gradient: "from-signal-emerald to-signal-emerald/60" },
  { icon: "task_alt", value: 150, suffix: "+", label: "Projets réalisés", gradient: "from-solar-amber to-solar-amber/60" },
  { icon: "public", value: 6, suffix: "+", label: "Pays couverts", gradient: "from-brand-cyan to-brand-cyan/60" },
  { icon: "bolt", value: 10, suffix: "+", label: "Années d'expérience", gradient: "from-telecom-navy to-telecom-navy/70" },
];

export const interventionZones = ["Burkina Faso", "Mali", "Cote d'ivoire"];


export const testimonialsIntro = "La satisfaction de nos clients, notre meilleure réussite";

export const testimonials = [
  {
    initials: "MS",
    name: "OUEDRAOGO",
    role: "Directeur des opérations, Ouagadougou",
    rating: 5,
    quote: "L'installation de notre kit Starlink sur notre site isolé a complètement transformé nos communications. Intervention rapide et professionnelle.",
    color: "bg-signal-emerald",
  },
  {
    initials: "AO",
    name: "SAWADOGO",
    role: "Gérante hôtelière, Bobo-Dioulasso",
    rating: 5,
    quote: "IAS-TECHNOLOGIE a refait tout notre câblage réseau et déployé un portail Wifi fluide pour nos clients. Aucune coupure depuis l'installation.",
    color: "bg-solar-amber",
  },
  {
    initials: "IK",
    name: "KABORE",
    role: "Responsable IT, Koudougou",
    rating: 5,
    quote: "Un support technique réactif et un vrai savoir-faire réseau. Ils comprennent les contraintes du terrain local.",
    color: "bg-brand-cyan",
  },
];

export const products = [
  {
    name: "NextLink Cloud",
    tagline: "Application mobile",
    headline: "Gérez vos MikroTik, vos VPN et vos Hotspots depuis une seule plateforme.",
    description:
      "NextLink Cloud connecte, sécurise et supervise l'ensemble de votre réseau MikroTik — sans adresse IP publique — et transforme vos hotspots en source de revenus grâce au paiement Mobile Money.",
    icon: "smartphone",
   link: "https://nextlinkcld.com/",
    image: "/image.png",
  },
];
export const realisations = [
  { title: "Déploiement Wifi campus universitaire", location: "Ouagadougou", category: "Réseau Wifi" },
  { title: "Installation kit Starlink site isolé", location: "Région du Centre-Nord", category: "Starlink" },
  { title: "Câblage réseau complexe hôtelier", location: "Bobo-Dioulasso", category: "Infrastructure" },
  { title: "Supervision réseau multi-sites", location: "Koudougou", category: "Maintenance" },
];