import AuthorImgOne from "../../public/assets/img/testimonial/Image.png"
import GirlOne from "../../public/assets/img/testimonial/girl-1.png";
import GirlTwo from "../../public/assets/img/testimonial/girl-2.png";
import GirlThree from "../../public/assets/img/testimonial/girl-3.png";
import QuotesImg from "../../public/assets/img/testimonial/quotes.png"
import { testimonialType } from "@/interFace/interFace";

const testimonial_data:testimonialType[] = [
  {
    id: 1,
    image: GirlThree,
    subTitle: "Hemangi Parihar",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Best Experience !",
    description:"Helium has been a game-changer for me during final exams. I'm a visual learner, and the platform's visualizations have made studying incredibly easy and memorable. The way concepts come to life has simplified complex information, making my preparation more efficient and enjoyable.",
    rating: 5,
  },
  {
    id: 2,
    image: GirlOne,
    subTitle: "Bhumi Barot",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Best Experience !",
    description:"Thanks to Helium, I embraced a mindset that prioritizes understanding over mere memorization. This shift in approach proved pivotal, enabling me to sidestep common errors and secure a strong performance in my class 12 board exams.",
    rating:4
  },
  {
    id: 3,
    image: AuthorImgOne,
    subTitle: "Arpit Dabhi",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Helpful Instructors !",
    description:"Helium played a crucial role in my NEET preparation. The video lessons, characterized by their straightforward language and helpful visualizations, made complex concepts crystal clear.",
    rating:5
  },
  {
    id: 4,
    image: GirlTwo,
    subTitle: "Nisha Patel",
    infoCategory:'Student',
    iconImg:QuotesImg,
    title:"Best Experience !",
    description:"Many concepts and chapters taught at school left me with uncertainties, and I struggled to fully grasp them. However, the anticipation of returning home and attending my Helium classes became a source of motivation and clarity in the lead-up to my board exams. The unique teaching approach and engaging content on the Helium platform provided the understanding I needed, turning what was once a challenge into a learning opportunity.",
    rating:4
  },
  // //home three testimonial data
  // {
  //   id: 5,
  //   image: AuthorImgOne,
  //   subTitle: "David Johnson",
  //   infoCategory:'Student',
  //   title:"Great Course !",
  //   description:"Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!",
  //   rating:5
  // },
  // {
  //   id: 6,
  //   image: AuthorImgOne,
  //   subTitle: "Brandon Tylor",
  //   infoCategory:'Student',
  //   title:"Best Experience !",
  //   description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
  //   rating:5
  // },
  // {
  //   id: 7,
  //   image: AuthorImgOne,
  //   subTitle: "Richard Joseph",
  //   infoCategory:'Student',
  //   title:"Helpful Instructors !",
  //   description:"In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
  //   rating:4
  // },

]
export default testimonial_data;
