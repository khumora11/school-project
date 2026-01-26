
export const navLink = [
  { name: "home", route: "/" },
  {
    name: "about", route:"/about"
   
  },
  { name: "contact", route: "/contact" },
  {
    name: "lesson", route:"/lessonTable"
   
  },

  {
    name:"news", route:"/news"
  },
  {name:"achievements", 
     dropdown: [
      { name: "teachers", route: "/teachers" },
      { name: "pupils", route: "/pupils" },
    ],
  },
    {name:"books", 
     dropdown: [
      { name: "e-books", route: "/e-books" },
      { name: "audio-books", route: "/audio-books" },
    ],
  }
];
export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
];


export const Ebooks = [
  {
    id: 1,
    title: "O‘tkan kunlar",
    author: "Abdulla Qodiriy",
    type: "ebook",
    subject: "Adabiyot",
    cover: "/images/otkan-kunlar.jpg",
    file: "/ebooks/otkan-kunlar.pdf"
  },

];

export const audioBooks=[
    {
    id: 1,
    title: "Odam bo‘lish qiyin",
    author: "O‘tkir Hoshimov",
    type: "audiobook",
    subject: "Adabiyot",
    cover: "/images/odam-bolish.jpg",
    file: "/audio/odam-bolish.mp3"
  }
]