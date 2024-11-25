import {counterType } from "@/interFace/interFace"
import CounterIconOne from "@/svg/counter-icon-one";
import CounterIconTwo from "@/svg/counter-icon-two";
import CounterIconThere from "@/svg/counter-icon-there";
import CounterIconFour from "@/svg/counter-icon-four";
import CounterIconFive from "@/svg/counter-icon-five";
import CounterIconSix from "@/svg/counter-icon-six";
import CounterIconSeven from "@/svg/counter-icon-seven";
import CounterIconEight from "@/svg/counter-icon-eight";
import AboutCounterIcon from "@/svg/about-counter-icon";
import AboutCounterIconTwo from "@/svg/about-counter-icon-two";
import AboutCounterIconThree from "@/svg/about-counter-icon-three";
import AboutCounterIconFour from "@/svg/about-counter-icon-four";


    const counter_data:counterType[]=[
        {
            id:1,
            icon:CounterIconOne,
            countNum:68806,
            description:"Helium."
        },
        {
            id:2,
            icon:CounterIconTwo,
            countNum:5740,
            description:"Helium."
        },
        {
            id:3,
            icon:CounterIconThere,
            countNum: 470,
            countPlus:"+",
            description:"Helium.",
        },
        {
            id:4,
            icon:CounterIconFour,
            countNum:6548,
            description:"Helium."
        },
        //home three counter data
        {
            id:5,
            icon:CounterIconEight,
            countNum:68806,
            description:"Helium."
        },
        {
            id:6,
            icon:CounterIconFive,
            countNum:5740,
            description:"Helium."
        },
    ]

export default counter_data;