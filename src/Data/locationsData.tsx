import Savanoriai from "../Images/Locations/Savanoriai.jpg";
import Vienuolio from "../Images/Locations/Vienuolio.jpg";
import Pilaite from "../Images/Locations/Pilaite.jpg";
import Europa from "../Images/Locations/Europa.jpg";
import Banginis from "../Images/Locations/Banginis.jpg";
import Antakalnis from "../Images/Locations/Antakalnis.jpg";

export interface SlideContent {
  locationPic: string;
  gymName: string;
  gymStreet: string;
  description: string;
  gymPerks: string;
  gymCord: number[];
  popUp: string;
  plans: {
    Price: number;
    features: {
      name: string;
      benefits: boolean;
    }[];
  }[];
}

export const slides: SlideContent[] = [
  {
    locationPic: Savanoriai,
    gymName: "Savanoriai",
    gymStreet: "Savanorių pr. 168, Kaunas",
    description: "Savanoriai Lemon Gym – a club close to your work and home! The club is young and youthful, and here you can find an exercise space for calm stretches, a wide functional area, and a group training room for real sports parties! You won’t feel crowded in the main hall either – it’s spacious, and there are enough exercise machines for everyone. For active and fun breaks, you will find a basketball machine and the comfiest massage chairs ever… Everything to help you achieve your goals!",
    gymPerks:
      "FREE PARKING, GROUP TRAININGS, PERSONAL TRAINING, BASKETBALL MACHINE",
    gymCord: [54.9077288679767, 23.926749497639175],
    popUp: "<h2>Savanoriai</h2><p>Savanorių pr. 168, Kaunas</p>",
    plans: [
      {
        Price: 20.99,
        features: [
          { name: "1 month minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: false },
          { name: "Access to all Iron Gym clubs", benefits: false },
          { name: "Sauna", benefits: false },
          { name: "Group trainings", benefits: false },
          { name: "Membership freeze", benefits: false },
          { name: "Rewriting the contract", benefits: false },
        ],
      },
      {
        Price: 28.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: false },
          { name: "Free water", benefits: false },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: false },
        ],
      },
      {
        Price: 32.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: true },
          { name: "Free water", benefits: true },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
    ],
  },
  {
    locationPic: Vienuolio,
    gymName: "Vienuolis",
    gymStreet: "Vienuolio g. 4, Vilnius",
    description: "The new Vienuolis LEMON GYM opens its doors on August 1! In this club, you will find the latest sports equipment, exercise machines, spacious functional and cardio areas with a view of the old town of Vilnius. We invite you to workout together with LEMON GYM community – in 2 group training halls!",
    gymPerks: "GROUP TRAININGS, SAUNA, PERSONAL TRAINING, SPACIOUS CARDIO AREA",
    gymCord: [54.68854730571488, 25.27646161112141],
    popUp: "<h2>Vienuolis</h2><p>Vienuolio g. 4, Vilnius</p>",
    plans: [
      {
        Price: 21.99,
        features: [
          { name: "1 month minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: false },
          { name: "Sauna", benefits: false },
          { name: "Group trainings", benefits: false },
          { name: "Membership freeze", benefits: false },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 26.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: false },
          { name: "Free water", benefits: false },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 31.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: true },
          { name: "Free water", benefits: true },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
    ],
  },
  {
    locationPic: Pilaite,
    gymName: "Pilaitė",
    gymStreet: "Vydūno g. 2, Vilnius",
    description: "Lemon Gym Pilaite – your nearest home club! Here you will find an exercise space for calm stretching, as well as a functional area. You won’t feel crowded in the main workout hall either – it’s spacious, and there is enough exercise equipment for everyone. You will exercise with modern equipment, tested and loved by professionals. Everything to achieve your goals!",
    gymPerks:
      "FREE PARKING, PERSONAL TRAINING, BASKETBALL MACHINE, FOOTBALL TABLE",
    gymCord: [54.70736374382466, 25.189616339958025],
    popUp: "<h2>Pilaitė</h2><p>Vydūno g. 2, Vilnius</p>",
    plans: [
      {
        Price: 23.99,
        features: [
          { name: "1 month minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: false },
          { name: "Group trainings", benefits: false },
          { name: "Membership freeze", benefits: false },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 30.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: false },
          { name: "Free water", benefits: false },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 35.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: true },
          { name: "Free water", benefits: true },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
    ],
  },
  {
    locationPic: Europa,
    gymName: "Europa",
    gymStreet: "Konstitucijos pr. 7A, Vilnius",
    description: "You will find the newly renovated club in the PC Europa building, on the 3rd floor! Here you will find an exercise space for calm stretching, a wide functional area, and a group training room for real workout parties! You won’t feel crowded in the main exercise area either – it’s spacious, and there is enough exercise equipment for everyone. Don’t forget to capture your sports achievements next to the famous golden mirror in the functional area;)",
    gymPerks: "GROUP TRAININGS, PERSONAL TRAINING, SAUNA, FOOTBALL TABLE",
    gymCord: [54.69619096586617, 25.27625653070827],
    popUp: "<h2>Europa</h2><p>Konstitucijos pr. 7A, Vilnius</p>",
    plans: [
      {
        Price: 21.99,
        features: [
          { name: "1 month minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: false },
          { name: "Sauna", benefits: false },
          { name: "Group trainings", benefits: false },
          { name: "Membership freeze", benefits: false },
          { name: "Rewriting the contract", benefits: false },
        ],
      },
      {
        Price: 29.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: false },
          { name: "Free water", benefits: false },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 32.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: true },
          { name: "Free water", benefits: true },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
    ],
  },
  {
    locationPic: Banginis,
    gymName: "Banginis",
    gymStreet: "P. Lukšio g. 34, Vilnius",
    description: "Banginis Lemon Gym – a club close to your work and home. Here you will find an exercise space for calm stretching, a wide functional area, and a group training room for real workout parties! Go through the second floor – here you will find a spacious cardio training area and a BOOTY ZONE! You won’t feel crowded in the main hall either – it’s spacious, and there are enough exercise machines for everyone.",
    gymPerks:
      "FREE PARKING, PERSONAL TRAINING, GROUP TRAININGS, FOOTBALL TABLE",
    gymCord: [54.71034513961146, 25.29922939447378],
    popUp: "<h2>Banginis</h2><p>P. Lukšio g. 34, Vilnius</p>",
    plans: [
      {
        Price: 21.99,
        features: [
          { name: "1 month minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: false },
          { name: "Sauna", benefits: false },
          { name: "Group trainings", benefits: false },
          { name: "Membership freeze", benefits: false },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 29.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: false },
          { name: "Free water", benefits: false },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 32.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: true },
          { name: "Free water", benefits: true },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
    ],
  },
  {
    locationPic: Antakalnis,
    gymName: "Antakalnis",
    gymStreet: "Antakalnio g. 37, Vilnius",
    description: "Antakalnis Lemon Gym – a club close to your home! This is a club of like-minded people, where everyone knows each other! Here you will find an exercise space for quiet stretching, as well as a functional area. When you come to the hall, you won’t feel crowded either – it’s spacious, and there are enough exercise machines for everyone. You will be working out with modern equipment, tested and loved by professionals.",
    gymPerks:
      "FREE PARKING, PERSONAL TRAINING, FOOTBALL TABLE, SPACIOUS CARDIO AREA",
    gymCord: [54.70386195755908, 25.310660926464948],
    popUp: "<h2>Antakalnis</h2><p>Antakalnio g. 37, Vilnius</p>",
    plans: [
      {
        Price: 21.99,
        features: [
          { name: "1 month minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: false },
          { name: "Sauna", benefits: false },
          { name: "Group trainings", benefits: false },
          { name: "Membership freeze", benefits: false },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 29.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: false },
          { name: "Free water", benefits: false },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
      {
        Price: 33.99,
        features: [
          { name: "12 months minimal term of membership", benefits: true },
          { name: "Unlimited visit and 24/7 club", benefits: true },
          { name: "Access to all Iron Gym clubs", benefits: true },
          { name: "Sauna", benefits: true },
          { name: "Group trainings", benefits: true },
          { name: "Free water", benefits: true },
          { name: "Membership freeze", benefits: true },
          { name: "Rewriting the contract", benefits: true },
        ],
      },
    ],
  },
];
