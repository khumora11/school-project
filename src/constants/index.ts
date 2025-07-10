
export const navLink = [
  { name: "Bosh sahifa", route: "/" },
  {
    name: "Biz haqimizda", route:"/about"
   
  },
  { name: "Biz bilan bog'lanish", route: "/contact" },
  {
    name: "Dars Jadvali", route:"/lessonTable"
   
  },
  {
    name:"Yangiliklar", route:"/news"
  },
  {name:"Yutuqlar", 
     dropdown: [
      { name: "O'qituvchilar", route: "/Teachers" },
      { name: "O'quvchilar", route: "/pupils" },
    ],
  }
];
