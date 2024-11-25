interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

const mobile_menu_data: MenuItem[] = [
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
      id: 9,
      title: "Features",
      link: "/faq-page",
      hasDropdown: true,
      submenus: [
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
            title:"Sign In",
            link: "/",
          },
             {
            title:"Sign Up",
            link: "/",
          }
      ],
    },
];

export default mobile_menu_data;
