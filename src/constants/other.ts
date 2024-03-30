export const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
    subItems: [
      { title: "Product 1", path: "/product-1" },
      { title: "Product 2", path: "/product-2" },
      {
        title: "Product 3",
        path: "/product-3",
        subItems: [
          { title: "Product 3.1", path: "/product-3-1" },
          { title: "Product 3.2", path: "/product-3-2" },
          { title: "Product 3.3", path: "/product-3-3" },
        ],
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
