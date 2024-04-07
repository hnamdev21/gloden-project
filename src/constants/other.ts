import { USER_ROUTE_PATH } from "./routePath";

export const headerNav = [
  {
    label: "Blogs",
    path: USER_ROUTE_PATH.BLOGS,
  },
  {
    label: "About",
    path: USER_ROUTE_PATH.ABOUT,
  },
  {
    label: "Contact",
    path: USER_ROUTE_PATH.CONTACT,
  },
  {
    label: "FAQs",
    path: USER_ROUTE_PATH.FAQ,
  },
];

export const footerNav = [
  {
    label: "Information",
    items: [
      {
        label: "About Us",
        path: USER_ROUTE_PATH.ABOUT,
      },
      {
        label: "Contact Us",
        path: USER_ROUTE_PATH.CONTACT,
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        label: "FAQ",
        path: USER_ROUTE_PATH.FAQ,
      },
      {
        label: "Privacy Policy",
        path: USER_ROUTE_PATH.PRIVACY_POLICY,
      },
    ],
  },
];
