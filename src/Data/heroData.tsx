import pic from "../Components/Hero/Styles/1.jpg";

interface HeroContent {
  id: number;
  title: string;
  text: string;
  picture: any;
}

export const heroContent: HeroContent[] = [
  {
    id: 1,
    title: 'Teambuilding in a',
    text: "Gather your team to a group workout!",
    picture: pic
  },
  {
    id: 2,
    title: "test",
    text: "testsas",
    picture: "url"
  },
];