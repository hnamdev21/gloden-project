import React from "react";

import Button from "@/components/Button";
import FieldContainer from "@/components/FieldContainer";
import { TextInput } from "@/components/Input";
import { PasswordInput } from "@/components/Input/TextInput";
import Label from "@/components/Label";
import Typography from "@/components/Typography";
import { BRAND_NAME } from "@/constants/metadata";
import { AUTH_ROUTE_PATH } from "@/constants/routePath";

const LoginModule = () => {
  return (
    <div className="w-full h-full flex">
      <div className="h-full flex-1 flex flex-col justify-center items-center">
        <Typography tag="h1" fontSize="3xl" textAlign="center">
          Welcome to {BRAND_NAME}
        </Typography>

        <div className="lg:w-1/6">
          <form>
            <FieldContainer>
              <Label htmlFor="email">Email</Label>
              <TextInput id="email" type="email" placeholder="example@xyz.com" sizeElement="sm" />
            </FieldContainer>

            <FieldContainer>
              <div className="w-full flex justify-between">
                <Label htmlFor="password">Password</Label>

                <Button as="a" href={AUTH_ROUTE_PATH.FORGOT_PASSWORD} variant="text">
                  Forgot password?
                </Button>
              </div>
              <PasswordInput id="password" placeholder="********" sizeElement="sm" />
            </FieldContainer>

            <Button as="button" className="w-full" rounded="square" type="submit">
              Login
            </Button>
          </form>

          <FieldContainer className="mt-[1.6rem] flex justify-center">
            <Typography fontSize="sm">Don&apos;t have an account?&nbsp;</Typography>
            <Button href={AUTH_ROUTE_PATH.REGISTER} variant="text" fontSize="sm">
              Register now
            </Button>
          </FieldContainer>
        </div>
      </div>
    </div>
  );
};

export default LoginModule;
