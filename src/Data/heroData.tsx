import Gym1 from "../Images/Hero/Gym1.jpg";
import Gym2 from "../Images/Hero/Gym2.jpg";
import Gym3 from "../Images/Hero/Gym3.jpeg";

interface HeroContent {
  id: number;
  title: string;
  text: string;
  picture: any;
}

export const heroContent: HeroContent[] = [
  {
    id: 0,
    title: "Teambuilding in a",
    text: "Unleash your team's potential with invigorating group workouts! Boost synergy, productivity, and communication skills in a healthy work environment. Strengthen cohesion and create a results-driven atmosphere. Join us for an energizing experience and watch your team thrive!",
    picture: Gym1,
  },
  {
    id: 1,
    title: "Transform with an Intense",
    text: "Experience the ultimate fitness transformation with our team of top-notch personal trainers! Unlock your true potential, push your boundaries, and achieve remarkable results in a supportive and motivating environment. Our highly skilled trainers are dedicated to customizing workout programs tailored to your specific goals. Start your journey towards a fitter, stronger you today!",
    picture: Gym2,
  },
  {
    id: 2,
    title: "Atmosphere for a Rewarding",
    text: "Experience the difference of a welcoming atmosphere that enhances your workout journey. Our fitness center is more than just a place to exercise—it's a community where you'll feel a sense of belonging and encouragement. Our dedicated staff is committed to creating an inclusive environment where all fitness levels are embraced and celebrated. Join us and discover the joy of a rewarding and enjoyable workout in an atmosphere that feels like home.",
    picture: Gym3,
  },
];
