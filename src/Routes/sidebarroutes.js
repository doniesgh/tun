import React from "react";
import Dashboard from "views/admin/default";
import Profile from "views/admin/profile";
import Equipement from "views/admin/equipement";

import {
  MdEscalator,
  MdHome,
  MdPerson,
  MdEventAvailable,
  MdHistory,
  MdOutlinePersonSearch,
} from "react-icons/md";
import Calandar from "views/admin/calandar";
import { IoMdAlert } from "react-icons/io";
import ManageReclamation from "views/admin/Reclamation";
import History from "views/admin/History";
import Client from "views/admin/client";
import RecRep from "views/admin/RecReporte";
import { IoAlert } from "react-icons/io5";

const routes = [
  {
    name: "Acceuil",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
    allowedRoles: ["COORDINATRICE"], // Liste des rôles autorisés pour accéder à cette route
  },
  {
    name: "calendrier",
    layout: "/admin",
    path: "calendrier",
    icon: <MdEventAvailable className="h-6 w-6" />,
    component: <Calandar />,
    allowedRoles: ["COORDINATRICE"], // Liste des rôles autorisés pour accéder à cette route
  },
  {
    name: "Reclamations",
    layout: "/admin",
    path: "reclamations",
    icon: <IoMdAlert className="h-6 w-6" />,
    component: <ManageReclamation />,
    allowedRoles: ["COORDINATRICE"], // Liste des rôles autorisés pour accéder à cette route
  },
  {
    name: "Reportées ",
    layout: "/admin",
    path: "reported",
    icon: <IoAlert className="h-6 w-6" />,
    component: <RecRep/>,
    allowedRoles: ['COORDINATRICE'] // Liste des rôles autorisés pour accéder à cette route

  },
  {
    name: "Equipement",
    layout: "/admin",
    path: "equipement",
    icon: <MdEscalator className="h-6 w-6" />,
    component: <Equipement />,
    allowedRoles: ["COORDINATRICE"], // Liste des rôles autorisés pour accéder à cette route
  },
  {
    name: "history",
    layout: "/admin",
    path: "history",
    icon: <MdHistory className="h-6 w-6" />,
    component: <History />,
    allowedRoles: ["COORDINATRICE"], // Liste des rôles autorisés pour accéder à cette route
  },
  {
    name: "client",
    layout: "/admin",
    path: "client",
    icon: <MdOutlinePersonSearch className="h-6 w-6" />,
    component: <Client />,
    allowedRoles: ["COORDINATRICE"],
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    allowedRoles: ["COORDINATRICE"],
  },
];
export default routes;
