import AcUnitIcon from "@mui/icons-material/AcUnit";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TryIcon from "@mui/icons-material/Try";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "About",
    path: "./about",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "Team",
    path: "./team",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Products",
    path: "./products",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "Solutions",
    path: "./solutions",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "Pricing",
    path: "./pricing",
    cName: "nav-item",
  },
  {
    id: 7,
    title: "Contact Us",
    path: "./contactus",
    cName: "nav-item",
  },
];

export const serviceDropdown = [
  {
    id: 1,
    icon: <AcUnitIcon />,
    title: "Marketing",
    path: "./marketing",
    cName: "submenu-item",
  },
  {
    id: 2,
    icon: <ConfirmationNumberIcon />,
    title: "Consulting",
    path: "./consulting",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Design",
    icon: <DesignServicesIcon />,
    path: "./design",
    cName: "submenu-item",
  },
  {
    id: 4,
    icon: <DeveloperModeIcon />,
    title: "Development",
    path: "./development",
    cName: "submenu-item",
  },
];
export const solutionsDropdown2 = [
  {
    id: 1,
    title: "Testing",
    icon: <AssignmentIcon />,
    path: "./testing",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Implemente",
    icon: <TryIcon />,
    path: "./implemente",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Design",
    icon: <DesignServicesIcon />,
    path: "./design",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Analysis",
    icon: <AnalyticsIcon />,
    path: "./analysis",
    cName: "submenu-item",
  },
];
