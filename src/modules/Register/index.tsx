import React from "react";

import Button from "@/components/Button";
import FieldContainer from "@/components/FieldContainer";
import { TextInput } from "@/components/Input";
import { PasswordInput } from "@/components/Input/TextInput";
import Label from "@/components/Label";
import Typography from "@/components/Typography";
import { AUTH_ROUTE_PATH } from "@/constants/routePath";

const RegisterModule = () => {
  return (
    <React.Fragment>
      <Typography tag="h1" fontSize="xl" textAlign="center">
        Register
      </Typography>

      <form>
        <FieldContainer>
          <Label htmlFor="email">Email</Label>
          <TextInput id="email" type="email" placeholder="example@xyz.com" sizeElement="sm" />
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" placeholder="********" sizeElement="sm" />
        </FieldContainer>

        <FieldContainer className="mb-[2.4rem]">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <PasswordInput id="confirm_password" placeholder="********" sizeElement="sm" />
        </FieldContainer>

        <Button as="button" className="w-full" rounded="square" type="submit">
          Register
        </Button>
      </form>

      <FieldContainer className="mt-[1.6rem] flex justify-center">
        <Typography fontSize="sm">Already have an account?&nbsp;</Typography>
        <Button href={AUTH_ROUTE_PATH.LOGIN} variant="link" fontSize="sm">
          Login now
        </Button>
      </FieldContainer>
    </React.Fragment>
  );
};

export default RegisterModule;
