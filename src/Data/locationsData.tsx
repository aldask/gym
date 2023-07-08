import Savanoriai from "../Images/Locations/Savanoriai.jpg";
import Vienuolio from "../Images/Locations/Vienuolio.jpg";
import Pilaite from "../Images/Locations/Pilaite.jpg";
import Europa from "../Images/Locations/Europa.jpg";
import Banginis from "../Images/Locations/Banginis.jpg";
import Antakalnis from "../Images/Locations/Antakalnis.jpg";

interface SlideContent {
  locationPic: string;
  gymName: string;
  gymStreet: string;
  gymPerks: string;
}

export const slides: SlideContent[] = [
  {
    locationPic: Savanoriai,
    gymName: "Savanoriai",
    gymStreet: "Savanorių pr. 168, Kaunas",
    gymPerks: "perks here",
  },
  {
    locationPic: Vienuolio,
    gymName: "Vienuolis",
    gymStreet: "Vienuolio g. 4, Vilnius",
    gymPerks: "perks here",
  },
  {
    locationPic: Pilaite,
    gymName: "Pilaitė",
    gymStreet: "Vydūno g. 2, Vilnius",
    gymPerks: "perks here",
  },
  {
    locationPic: Europa,
    gymName: "Europa",
    gymStreet: "Konstitucijos pr. 7A, Vilnius",
    gymPerks: "perks here",
  },
  {
    locationPic: Banginis,
    gymName: "Banginis",
    gymStreet: "P. Lukšio g. 34, Vilnius",
    gymPerks: "perks here",
  },
  {
    locationPic: Antakalnis,
    gymName: "Antakalnis",
    gymStreet: "Antakalnio g. 37, Vilnius",
    gymPerks: "perks here",
  },
];
