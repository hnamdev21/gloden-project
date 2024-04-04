import cn from "classnames";
import React from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import { headerNav } from "@/constants/other";
import { AUTH_ROUTE_PATH } from "@/constants/routePath";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className="sticky lg:py-[1.6rem]">
      <Container className="flex justify-between">
        <div>
          <Typography>Logo</Typography>
        </div>

        <div className="flex gap-[2.4rem]">
          <nav className={cn("flex gap-[.8rem]", styles.nav)}>
            {headerNav.map((menu) => (
              <Button key={menu.label} href={menu.path} variant="tertiary">
                {menu.label}
              </Button>
            ))}
          </nav>

          <div className="flex gap-[.8rem]">
            <Button href={AUTH_ROUTE_PATH.LOGIN} variant="tertiary">
              Login
            </Button>
            <Button href={AUTH_ROUTE_PATH.REGISTER}>Register</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
