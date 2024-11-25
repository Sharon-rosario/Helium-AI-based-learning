

interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  megaMenu?: boolean;
  pages?: boolean;
  mega_menus?: any[]; // Corrected type here
}


const menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Home",
    pluseIncon: true,
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "/about",
    pluseIncon: false,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Courses",
    link: "/",
    pluseIncon: false,
  },
  {
    id: 4,
    hasDropdown: false,
    title: "Contact Us",
    link: "/contact",
    pluseIncon: false,
  },
  {
    id: 5,
    title: "Features",
    hasDropdown : true,
    megaMenu: true,
    link: "",
    pluseIncon: true,
    pages: true,
    mega_menus: [
      {
        title: "Practice",
        link: "/",
      },
      {
        title: "Test",
        link: "/",
      },
      {
        title: "Daily Challenges",
        link: "/",
      },
      {
        title: "Notes",
        link: "/",
      },
      {
        title: "Doubts",
        link: "/",
      },
      {
        title: "E-Library",
        link: "/",
      },
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Blog",
        link: "/",
        hasDropdown: true,
        submenus: [
          { title: "Blog", link: "/" },
          { title: "blog details", link: "/" },
        ],
      },
       {
        title: "FAQ page",
        link: "/",
        hasDropdown: true,
        submenus: [
          { title: "FAQ page", link: "/" },
          { title: "FAQ details", link: "/" },
        ],
      },
         {
        title:"Sign In",
        link: "/",
      },
         {
        title:"Sign Up",
        link: "/",
      },
         {
        title:"Contact",
        link: "/contact",
      },


    ],
  },
];

export default menu_data;
