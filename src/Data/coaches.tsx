import coach from "../Images/Trainers/coach.jpg";

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
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
  {
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
  {
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
  {
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
  {
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
  {
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
  {
    pic: coach,
    name: "Tom Tom",
    description: {
      info: "Tom is good",
      contacts: {
        ig: "username",
        phone: "+55555",
        email: "email@example.com",
      },
    },
  },
];