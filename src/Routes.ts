import React from "react";

const DashboardPage = React.lazy(() => import("pages/adminDashboard"));
const DeathPage = React.lazy(() => import("pages/adminDeadPerson"));
const MissingPage = React.lazy(() => import("pages/adminMissingPerson"));
const FoundPage = React.lazy(() => import("pages/adminFoundPerson"));
const SettingPage = React.lazy(() => import("pages/adminSetting"));
const StaffListPage = React.lazy(() => import("pages/adminStaffList"));

const ROUTESWITHLAYER = {
  DashboardPage: {
    element: DashboardPage,
    path: "admin",
  },
  DeathPage: {
    element: DeathPage,
    path: "dead_bodies",
  },

  MissingPage: {
    element: MissingPage,
    path: "missing_person",
  },
  FoundPage: {
    element: FoundPage,
    path: "found_person",
  },
  SettingPage: {
    element: SettingPage,
    path: "setting",
  },
  StaffListPage: {
    element: StaffListPage,
    path: "staff_list",
  },
};

export default ROUTESWITHLAYER;
