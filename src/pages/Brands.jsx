import { Link } from "react-router-dom";
const brands = [
  {
    heading: "A",
    list: ["Acm", "Alpecin", "Alter Ego", "Ardene", "Arezi", "Avène"],
  },
  {
    heading: "B",
    list: [
      "B&D",
      "Babaria",
      "Baby Born",
      "Babycare",
      "Balance",
      "Banila co",
      "Batiste",
      "Bee honey",
      "Bell",
      "Beyu",
      "Bielenda",
      "Bigen",
      "Bio oil",
      "Bioderma",
      "Biol",
      "Biorga",
      "Body care",
      "Body Shop",
      "Bourjois",
      "Byzance",
    ],
  },
  {
    heading: "C",
    list: [
      "Callista",
      "Caudalie",
      "CeraVe",
      "Cerita",
      "Challenge",
      "Chicco",
      "cinereh",
      "Clean & clear",
      "Cleanic",
      "Clinique",
      "Cliven",
      "Comeon",
      "Corpore Sano",
      "Cosrx",
      "Cuteskin",
    ],
  },
  {
    heading: "D",
    list: [
      "dafi",
      "Dear body",
      "Deep Romance",
      "Deep Sense",
      "Dermacol",
      "Dermagor",
      "Dermalift",
      "Dermatypique",
      "Dermeden",
      "Dermobay",
      "Dignity",
      "Doucce",
      "Dove",
      "Ducray",
    ],
  },
  {
    heading: "E",
    list: [
      "Echosline",
      "Ego",
      "Ellaro",
      "Endocare",
      "Espanol",
      "Essence",
      "Etude house",
      "Eucerin",
      "Every Strand",
      "Eviderm",
      "Evoluderm",
      "Excilia",
      "Eyesol",
    ],
  },
  {
    heading: "F",
    list: [
      "Farben",
      "Farmasi",
      "Feler",
      "Filorga",
      "Flormar",
      "Framesi",
      "Freeman",
    ],
  },
  {
    heading: "G",
    list: [
      "Galenic",
      "Garnier",
      "Geno biotic",
      "Geo",
      "Gil beaute",
      "Gillette",
      "Ginagen",
      "Golden rose",
      "Goli",
      "Guinot",
    ],
  },
  {
    heading: "H",
    list: ["HAIRtamin", "Hegor", "HYDRODERM"],
  },
  {
    heading: "I",
    list: [
      "IKT",
      "Inebrya",
      "Inecto",
      "Ing",
      "Innisfree",
      "Insight",
      "Instaheal",
      "Ipek",
      "Isdin",
      "Isis pharma",
      "item",
      "iunik",
      "Izadora",
    ],
  },
  {
    heading: "J",
    list: ["Jacques andhrel", "Joelle", "Johnson’s Baby", "Jonzac"],
  },
  {
    heading: "K",
    list: ["Katen", "Kiss", "Klairs", "Kobayashi", "Kuaf"],
  },
  {
    heading: "L",
    list: [
      "L.A. Girl",
      "La farrerr",
      "La roche-posay",
      "Lacvert",
      "LadyBird",
      "Lakmé",
      "Laneige",
      "Lanson",
      "Le chic",
      "Le Petit Marseillais",
      "Lido",
      "Lightness",
      "LOréal Men Expert",
      "LOréal Paris",
    ],
  },
  {
    heading: "M",
    list: [
      "M2 BEAUTE",
      "Marilou bio",
      "Matilda",
      "Maui",
      "Mavala",
      "Max factor",
      "Maxjornal",
      "Maybelline",
      "Miss eden",
      "Misswake",
      "Mitchum",
      "MQ",
      "Mustela",
      "My",
      "MYVITAMINS",
    ],
  },
  {
    heading: "N",
    list: [
      "Nach kodex",
      "Naturalium",
      "Nelly",
      "Neuderm",
      "Neutrogena",
      "Newsaad",
      "Nice lady",
      "Nivea",
      "No Acne",
      "Noreva",
      "Noreva Exfoliac",
      "Note",
      "Noviderm",
      "Nuxe",
      "Nyx",
    ],
  },
  {
    heading: "O",
    list: [
      "Ogx",
      "Old Spice",
      "Olive",
      "Onagrine",
      "Oral-B",
      "Ordinary",
      "Ottie",
    ],
  },
  {
    heading: "P",
    list: [
      "Pantene",
      "Pastel",
      "Phyto",
      "Pierre cardin",
      "Prime",
      "Promax",
      "Provoc",
      "Purederm",
      "PureTree",
    ],
  },

  {
    heading: "R",
    list: [
      "Rassan",
      "Real Techniques",
      "Rejuvenal",
      "Revlon",
      "Revolution",
      "Rimmel london",
      "Rogé cavaillès",
      "Rojina",
      "Roverhair",
      "Royal eternity",
    ],
  },
];
function Brands() {
  return (
    <div
      className="bg-stone-200 dark:bg-stone-600"
      style={{ direction: "ltr" }}
    >
      <div className="bg-[url('./images/brand-bg.jpg')] h-44 flex items-center justify-center text-3xl font-yekanB text-stone-400">
        <p className="">برندها</p>
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-8 py-20">
        {brands.map((brand) => (
          <div
            key={brand.heading}
            className="bg-white dark:bg-stone-400 dark:text-white rounded-md p-4 text-stone-700 leading-7 flex flex-col shadow-lg "
          >
            <p className="font-bold">{brand.heading}</p>
            {brand.list.map((item) => (
              <Link
                key={item}
                to=""
                className="hover:text-pink-300 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
