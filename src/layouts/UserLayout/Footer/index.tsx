import React from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Gap from "@/components/Gap";
import { FacebookIcon, InstagramIcon } from "@/components/Icons";
import { TextInput } from "@/components/Input";
import Typography from "@/components/Typography";
import { footerNav } from "@/constants/other";

import NavColumn from "./NavColumn";

const Footer = () => {
  return (
    <footer className="lg:pt-[4rem] lg:pb-[1rem] lg:mt-[3rem]" style={{ background: "var(--color-black)" }}>
      <Container className="grid lg:grid-cols-12 lg:gap-[3rem]">
        <div className="lg:col-span-7 grid lg:grid-cols-7 lg:gap-[3rem]">
          {footerNav.map((nav) => (
            <NavColumn key={nav.label} {...nav} className="col-span-2" />
          ))}
        </div>

        <div className="lg:col-span-5">
          <Typography tag="h4" textColor="light" fontSize="xl">
            Be the first to hear about the latest offers
          </Typography>

          <form className="grid lg:grid-cols-5 lg:gap-[3rem]">
            <div className="lg:col-span-4">
              <TextInput placeholder="example@xyz.com" />
            </div>

            <div className="lg:col-span-1 lg:-ml-[3rem]">
              <Button as="button" variant="contained" color="primary" type="submit" size="md" className="w-full">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Container>

      <Container>
        <Gap />
        <Divider />
        <Gap />
      </Container>

      <Container className="grid lg:lg:grid-cols-12 lg:lg:gap-[3rem]">
        <Typography tag="p" textColor="light" textAlign="center" className="lg:col-start-6 lg:col-span-2">
          Copyright &copy; 2024 Shop Pty. Ltd
        </Typography>

        <div className="lg:col-start-11 lg:col-span-2 flex gap-[.8rem] justify-end">
          <Button variant="icon" href="#">
            <FacebookIcon style={{ fill: "var(--color-light)" }} />
          </Button>
          <Button variant="icon" href="#">
            <InstagramIcon style={{ fill: "var(--color-light)" }} />
          </Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
