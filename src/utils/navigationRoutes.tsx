/* eslint-disable import/prefer-default-export */
import {
  FaBuilding,
  FaCalendarCheck,
  FaHome,
  FaMoneyBill,
  FaPenAlt,
  FaUserGraduate,
} from "react-icons/fa";

export const adminNavigation = [
  {
    path: "admin",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "dead_bodies",
    icon: <FaPenAlt />,
    title: "Dead Bodies",
  },
  {
    path: "missing_person",
    icon: <FaCalendarCheck />,
    title: "Missing Person",
  },
  {
    path: "found_person",
    icon: <FaMoneyBill />,
    title: "Found Person",
  },
  {
    path: "staff_list",
    icon: <FaMoneyBill />,
    title: "Staff",
  },
  {
    path: "setting",
    icon: <FaUserGraduate />,
    title: "Setting",
  },
];
export const businessNavigation = [
  {
    path: "business_dashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "business_application",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "business_schedule",
    icon: <FaCalendarCheck />,
    title: "Schedule",
  },
  {
    path: "business_payment",
    icon: <FaMoneyBill />,
    title: "Payment",
  },
  {
    path: "business_setting",
    icon: <FaBuilding />,
    title: "Settings",
  },
];
