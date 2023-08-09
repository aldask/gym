import Alexandra from "../Images/Trainers/Alexandra.jpeg";
import Michael from "../Images/Trainers/Michael.jpeg";
import Sophia from "../Images/Trainers/Sophia.jpeg";
import William from "../Images/Trainers/William.jpg";
import Emily from "../Images/Trainers/Emily.jpeg";
import Daniel from "../Images/Trainers/Daniel.jpg";
import Olivia from "../Images/Trainers/Olivia.jpeg";
import Ethan from "../Images/Trainers/Ethan.jpg";

interface CoachDetails {
  pic: string;
  name: string;
  description: {
    info: string;
    contacts: {
      ig: string;
      phone: string;
      email: string;
    };
  };
}

export const coaches: CoachDetails[] = [
  {
    pic: Alexandra,
    name: "Alexandra Davis",
    description: {
      info: "Alexandra is a dedicated personal trainer with a background in bodybuilding and nutrition.",
      contacts: {
        ig: "alexandra_fit",
        phone: "+37061111111",
        email: "alexandra@irongym.com",
      },
    },
  },
  {
    pic: Michael,
    name: "Michael Carter",
    description: {
      info: "Michael is a seasoned CrossFit coach who loves to challenge his clients to reach new fitness heights.",
      contacts: {
        ig: "michael_crossfit",
        phone: "+37062222222",
        email: "michael@irongym.com",
      },
    },
  },
  {
    pic: Sophia,
    name: "Sophia Martinez",
    description: {
      info: "Sophia is a certified Pilates instructor, focusing on core strength and posture improvement.",
      contacts: {
        ig: "sophia_pilates",
        phone: "+37063333333",
        email: "sophia@irongym.com",
      },
    },
  },
  {
    pic: William,
    name: "William Anderson",
    description: {
      info: "William is a dedicated running coach, helping runners of all levels achieve their marathon goals.",
      contacts: {
        ig: "william_running",
        phone: "+37064444444",
        email: "william@irongym.com",
      },
    },
  },
  {
    pic: Emily,
    name: "Emily Walker",
    description: {
      info: "Emily is a certified nutritionist who believes in a balanced and sustainable approach to healthy eating.",
      contacts: {
        ig: "emily_nutrition",
        phone: "+37065555555",
        email: "emily@irongym.com",
      },
    },
  },
  {
    pic: Daniel,
    name: "Daniel Lee",
    description: {
      info: "Daniel is a passionate group fitness instructor, bringing energy and fun to every workout session.",
      contacts: {
        ig: "daniel_fitness",
        phone: "+37066666666",
        email: "daniel@irongym.com",
      },
    },
  },
  {
    pic: Olivia,
    name: "Olivia Wilson",
    description: {
      info: "Olivia is a dedicated yoga and meditation instructor, guiding her clients towards inner peace and balance.",
      contacts: {
        ig: "olivia_yoga",
        phone: "+37067777777",
        email: "olivia@irongym.com",
      },
    },
  },
  {
    pic: Ethan,
    name: "Ethan Turner",
    description: {
      info: "Ethan is an enthusiastic functional fitness coach, emphasizing full-body strength and mobility.",
      contacts: {
        ig: "ethan_functional",
        phone: "+37068888888",
        email: "ethan@irongym.com",
      },
    },
  },
];
