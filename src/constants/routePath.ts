// Define all route paths
export const USER_ROUTE_PATH = {
  HOME: "/",
  PRODUCTS: "/products",
  ABOUT: "/about",
  CONTACT: "/contact",
  BLOGS: "/blogs",
} as const;

export const AUTH_ROUTE_PATH = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE: "/profile",
} as const;

export const ADMIN_ROUTE_PATH = {
  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_USERS: "/admin/users",
  ADMIN_ROLES: "/admin/roles",
  ADMIN_PRODUCTS: "/admin/products",
  ADMIN_BLOGS: "/admin/blogs",
} as const;

// Array
export const USER_ROUTE_PATHS = [
  {
    label: "Home",
    path: USER_ROUTE_PATH.HOME,
  },
  {
    label: "Products",
    path: USER_ROUTE_PATH.PRODUCTS,
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
    label: "Blogs",
    path: USER_ROUTE_PATH.BLOGS,
  },
];

export const AUTH_ROUTE_PATHS = [
  {
    label: "Login",
    path: AUTH_ROUTE_PATH.LOGIN,
  },
  {
    label: "Register",
    path: AUTH_ROUTE_PATH.REGISTER,
  },
  {
    label: "Forgot Password",
    path: AUTH_ROUTE_PATH.FORGOT_PASSWORD,
  },
  {
    label: "Reset Password",
    path: AUTH_ROUTE_PATH.RESET_PASSWORD,
  },
  {
    label: "Profile",
    path: AUTH_ROUTE_PATH.PROFILE,
  },
];

export const ADMIN_ROUTE_PATHS = [
  {
    label: "Admin",
    path: ADMIN_ROUTE_PATH.ADMIN,
  },
  {
    label: "Dashboard",
    path: ADMIN_ROUTE_PATH.ADMIN_DASHBOARD,
  },
  {
    label: "Users",
    path: ADMIN_ROUTE_PATH.ADMIN_USERS,
  },
  {
    label: "Roles",
    path: ADMIN_ROUTE_PATH.ADMIN_ROLES,
  },
  {
    label: "Products",
    path: ADMIN_ROUTE_PATH.ADMIN_PRODUCTS,
  },
  {
    label: "Blogs",
    path: ADMIN_ROUTE_PATH.ADMIN_BLOGS,
  },
];
