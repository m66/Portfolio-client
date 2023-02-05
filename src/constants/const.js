export const LIGHT_MODE = "light-mode";
export const DARK_MODE = "dark-mode";

export const user = {
  info: [
    {
      key: "Birthday",
      value: "11/06/1998",
      tr_key: "bd",
    },
    {
      key: "Website",
      value: "www.manasyan.info",
      url: "#",
      tr_key: "wb",
    },
    {
      key: "City",
      value: "Yerevan, Armenia",
      tr_key: "city",
      tr_value: "cityName",
    },
    {
      key: "Email",
      value: "kar.manasyan98@gmail.com",
      url: "mailto: kar.manasyan98@gmail.com",
      tr_key: "email",
    },
    {
      key: "GitHub",
      value: "m66",
      url: "https://github.com/m66",
    },
    {
      key: "Linkdin",
      value: "karen-manasyan-8129a2180",
      url: "https://www.linkedin.com/in/karen-manasyan-8129a2180",
    },
    {
      key: "Phone",
      value: "(+374)-77-662-608",
      url: "tel:+37477662608",
      tr_key: "phone",
    },
    {
      key: "Freelance",
      value: "Not availabel",
      tr_key: "fc",
      tr_value: "fcAns",
    },
  ],
  skills: [
    {
      skillName: "HTML / HTML5",
      percentKnowledge: 85,
    },
    {
      skillName: "CSS / CSS3 / SASS",
      percentKnowledge: 85,
    },
    {
      skillName: "Bootstrap / Ant Design / ...",
      percentKnowledge: 80,
    },
    {
      skillName: "JavaScript / ES6",
      percentKnowledge: 85,
    },
    {
      skillName: "jQuery",
      percentKnowledge: 70,
    },
    {
      skillName: "React JS / Redux",
      percentKnowledge: 80,
    },
    {
      skillName: "TypeScript",
      percentKnowledge: 70,
    },
    {
      skillName: "Git / GitHub",
      percentKnowledge: 90,
    },
    {
      skillName: "MySQL",
      percentKnowledge: 60,
    },
    {
      skillName: "Figma",
      percentKnowledge: 70,
    },
    {
      skillName: "Node JS / Express",
      percentKnowledge: 70,
    },
    {
      skillName: "MongoDB",
      percentKnowledge: 60,
    },
  ],
  education: [
    {
      startDate: 2016,
      endDate: 2020,
      tr_faculty: "ed_title_b",
      tr_description: "ed_des_b",
    },
    {
      startDate: 2022,
      endDate: 2024,
      tr_faculty: "ed_title_ms",
      tr_description: "ed_des_ms",
    },
    {
      startDate: 2018,
      endDate: 2019,
      tr_faculty: "ed_title_eng",
      tr_description: "ed_des_eng",
    },
  ],
  experience: [
    {
      companyName: "Ogma Inc.",
      utilized: "HTML5, CSS3, JavaScript",
      startDate: "2017",
      endDate: "2018",
      tr_position: "ex_pos",
      tr_type: "ex_type",
    },
    {
      companyName: "AGN Forever Partners",
      utilized: "JavaScript, jQuery, dotJS",
      startDate: "04/2019",
      endDate: "07/2019",
      tr_position: "ex_pos",
    },
    {
      companyName: "TCO Team",
      utilized: "JavaScript, React JS, Redux",
      startDate: "02/2022",
      endDate: "06/2022",
      tr_position: "ex_pos",
      tr_type: "ex_type",
    },
    {
      companyName: "Immortal",
      utilized: "React JS, TypeScript",
      startDate: "10/2022",
      endDate: "12/2022",
      tr_position: "ex_pos",
    },
  ],
};

export const services = [
  {
    name: "Front End",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
    icon: "web_design",
    tr_desc: "services_desc_fe",
  },
  {
    name: "Back End",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
    icon: "back_end",
    tr_desc: "services_desc_be",
  },
  {
    name: "Mobile",
    description: "The service is not yet available",
    icon: "mobile",
    tr_name: "services_title_mb",
    tr_desc: "services_desc_mb",
  },
  {
    name: "Free Consultation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
    icon: "help",
    tr_name: "services_title_fc",
    tr_desc: "services_desc_fc",
  },
];

export const portfolio = [
  {
    title: "Tundra.bet",
    imgUrl: "tundra.PNG",
    link: "https://github.com/m66/tundra.bet",
  },
  {
    title: "Immortal.inc",
    imgUrl: "immortal.PNG",
    link: "https://github.com/m66/immortal",
  },
  {
    title: "NFT Lombard",
    imgUrl: "nft.PNG",
    link: "https://github.com/m66/nft-crypto-lombard/tree/testing",
  },
  {
    title: "Jewelery Store",
    imgUrl: "j-store.PNG",
    link: "https://github.com/m66/my-jewelry-store",
  },
  {
    title: "PRO-ZONE",
    imgUrl: "pro-zone.PNG",
    link: "https://github.com/m66/PRO-ZONE",
  },
  {
    title: "4steps",
    imgUrl: "4steps.PNG",
    link: "https://github.com/m66/4steps",
  },
  {
    title: "Փորձաքննությունների ազգային բյուրո",
    imgUrl: "nbe.PNG",
    link: "https://github.com/m66/nbe.am",
  },
  {
    title: "Alpha Air",
    imgUrl: "alphaAir.PNG",
    link: "https://github.com/m66/alphaairlv",
  },
  {
    title: "To-Do",
    imgUrl: "todo.PNG",
    link: "https://github.com/m66/todo-list",
  },
];

export const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "am",
    name: "Armenian",
    country_code: "am",
  },
  // {
  //   code: "ru",
  //   name: "Armenian",
  //   country_code: "ru",
  // },
];
