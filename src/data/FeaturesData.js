import React from "react";

import { AiTwotoneFileText } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { BiNews } from "react-icons/bi";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Best Courses",
    description: "We offer the best cources, which makes us stand out.",
    icon: iconStyle(AiTwotoneFileText),
    imgClass: "one",
  },
  {
    name: "News",
    description: "we provide a daily updated news.",
    icon: iconStyle(GiNewspaper),
    imgClass: "two",
  },
  {
    name: "Question Papers",
    description: "we provide previous year question papers.",
    icon: iconStyle(BiNews),
    imgClass: "three",
  },
  {
    name: "Updates",
    description:
      "frequently updates regrading job opportunities and exam updates.",
    icon: iconStyle(GrUpdate),
    imgClass: "six",
  },
];
