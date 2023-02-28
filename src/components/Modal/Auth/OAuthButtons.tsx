import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      {error && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {error?.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
