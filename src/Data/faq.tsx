interface faqContent {
  ask: string;
  answer: string;
}

export const questions: faqContent[] = [
  {
    ask: "What are opening hours of the club?",
    answer: "All of our clubs are open 24/7!",
  },
  {
    ask: "What equipment brand is being used in Iron Gym clubs?",
    answer:
      "We work with the best equipment manufacturers in the market – Life Fitness, Hammer, Cybex, Technogym.",
  },
  {
    ask: "Can I rewrite my membership to another person?",
    answer:
      "Yes, one membership can be transfered twice in the register, and after paying the transfer fee.",
  },
];

export const trial: faqContent[] = [
  {
    ask: "STEP 1",
    answer:
      "Submit your email address and we will send you a link to register you free account in our system",
  },
  {
    ask: "STEP 2",
    answer:
      "Click the link in your e-mail to create yourself a free account at Iron Gym.",
  },
  {
    ask: "STEP 3",
    answer:
      "Arrive at the club and register your fingerprint at a self service kiosk to enter the club. If you want to join a group workout, be sure to register your attendance in advance.",
  },
  {
    ask: "STEP 4",
    answer: "Enjoy your training!",
  },
];
