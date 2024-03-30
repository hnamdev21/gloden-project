import React from "react";

import Typography from "@/components/Typography";

const NotFound = () => {
  return (
    <main className="min-h-screen min-w-screen flex flex-col justify-center items-center gap-[3.2rem]">
      <Typography
        tag="h1"
        style={{
          fontSize: "var(--fs-3xl)",
          color: "var(--color-danger)",
          fontWeight: "var(--fw-bold)",
          textAlign: "center",
        }}
      >
        404
      </Typography>
      <div>
        <Typography
          style={{
            fontSize: "var(--fs-md)",
            textAlign: "center",
            marginBottom: "1.6rem",
          }}
        >
          Oops! Something is wrong.
        </Typography>
        <Typography
          style={{
            fontSize: "var(--fs-md)",
            textAlign: "center",
          }}
        >
          The page you are looking for does not exist.
        </Typography>
        <Typography
          style={{
            fontSize: "var(--fs-md)",
            textAlign: "center",
          }}
        >
          How you got here is a mystery. But you can click the button below to go back to the homepage.
        </Typography>
      </div>
    </main>
  );
};

export default NotFound;
