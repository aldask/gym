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
  gymCord: number[];
  popUp: string;
}

export const slides: SlideContent[] = [
  {
    locationPic: Savanoriai,
    gymName: "Savanoriai",
    gymStreet: "Savanorių pr. 168, Kaunas",
    gymPerks:
      "FREE PARKING, GROUP TRAININGS, PERSONAL TRAINING, BASKETBALL MACHINE",
    gymCord: [54.9073607, 23.9264831],
    popUp: "test11"
  },
  {
    locationPic: Vienuolio,
    gymName: "Vienuolis",
    gymStreet: "Vienuolio g. 4, Vilnius",
    gymPerks: "GROUP TRAININGS, SAUNA, PERSONAL TRAINING, SPACIOUS CARDIO AREA",
    gymCord: [55.2461399, 24.7904016],
    popUp: "test11"
  },
  {
    locationPic: Pilaite,
    gymName: "Pilaitė",
    gymStreet: "Vydūno g. 2, Vilnius",
    gymPerks:
      "FREE PARKING, PERSONAL TRAINING, BASKETBALL MACHINE, FOOTBALL TABLE",
    gymCord: [54.9073607, 23.9264831],
    popUp: "test11"
  },
  {
    locationPic: Europa,
    gymName: "Europa",
    gymStreet: "Konstitucijos pr. 7A, Vilnius",
    gymPerks: "GROUP TRAININGS, PERSONAL TRAINING, SAUNA, FOOTBALL TABLE",
    gymCord: [54.9073607, 23.926483441],
    popUp: "test11"
  },
  {
    locationPic: Banginis,
    gymName: "Banginis",
    gymStreet: "P. Lukšio g. 34, Vilnius",
    gymPerks:
      "FREE PARKING, PERSONAL TRAINING, GROUP TRAININGS, FOOTBALL TABLE",
    gymCord: [54.9073607, 23.9264841],
    popUp: "test11"
  },
  {
    locationPic: Antakalnis,
    gymName: "Antakalnis",
    gymStreet: "Antakalnio g. 37, Vilnius",
    gymPerks:
      "FREE PARKING, PERSONAL TRAINING, FOOTBALL TABLE, SPACIOUS CARDIO AREA",
    gymCord: [54.9073607, 23.9264841],
    popUp: "test11"
  },
];
