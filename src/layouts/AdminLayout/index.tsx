import React from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = React.PropsWithChildren;

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default AdminLayout;
