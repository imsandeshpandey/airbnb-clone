import React from "react";
import Box from "./box";
import { Button, PillButton, TextButton } from "./buttons";

const SignInandUp = ({
  pill,
  signInml,
  signInmr,
  signInProps,
  signUpProps,
  vertical,
  ...props
}) => {
  return (
    <Box display="flex" flexDirection={vertical ? "column" : "row"} {...props}>
      <TextButton
        // sign in button
        mb={vertical ? 3 : 0}
        ml={signInml}
        mr={signInmr}
        fontSize={1}
        fontWeight="regular"
        transition="all 0.075s linear 0.075s"
        {...signInProps}
      >
        Sign in
      </TextButton>

      {pill ? (
        <PillButton fontSize={1} fontWeight="bold" mx={0} {...signUpProps}>
          Sign up
        </PillButton>
      ) : (
        <Button fontWeight="regular" fontSize={1} mx={0} {...signUpProps}>
          Sign up
        </Button>
      )}
    </Box>
  );
};

export default SignInandUp;
