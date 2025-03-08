import { CiLocationOn } from "react-icons/ci";
import { VscCallIncoming } from "react-icons/vsc";
import { HiOutlineEnvelope } from "react-icons/hi2";
import React from "react";

export interface ContactInfoType {
  title: string;
  desc: string;
  tag: string;
  icon: React.ElementType;
}

export const info: ContactInfoType[] = [
  {
    title: "VISIT US",
    desc: "Lorem ipsum dolor sit amet. In galisum necessitatibus qui voluptatibus ipsa aut quis obcaecati.",
    tag: "00, Abule Egba Lagos Nig",
    icon: CiLocationOn,
  },
  {
    title: "CALL US",
    desc: "Lorem ipsum dolor sit amet. In galisum necessitatibus qui voluptatibus ipsa aut quis obcaecati.",
    tag: "+234(0) 9021234567",
    icon: VscCallIncoming,
  },
  {
    title: "CONTACT US",
    desc: "Lorem ipsum dolor sit amet. In galisum necessitatibus qui voluptatibus ipsa aut quis obcaecati.",
    tag: "Beauty@gmail.com",
    icon: HiOutlineEnvelope,
  },
];
