import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  FormControl,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex
      flexDir="column"
      width="100vw"
      height="100vh"
      backgroundColor="#151319"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "480px" }}>
          <form>
            <Stack
              spacing={4}
              p="2rem"
              backgroundColor="#232429"
              boxShadow="md"
              borderRadius="lg"
              height="400px"
              justifyContent="center"
            >
              <Text as="b" color="#C8C8C8" textAlign="center" mb="-10px">
                WELCOME BACK
              </Text>
              <Heading color="#FFFFFF" size="lg" textAlign="center">
                Log into your account
              </Heading>
              <FormControl>
                <InputGroup display="flex" flexDir="column">
                  <InputLeftElement pointerEvents="none" />
                  <Text color="#FFFFFF" p="5px">
                    E-mail or Username
                  </Text>
                  <Input
                    color="#C8C8C8"
                    type="text"
                    placeholder="Enter your E-mail or Username"
                    _placeholder={{ color: "inherit" }}
                    onChange={(e) => setId(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup display="flex" flexDir="column">
                  <Text color="#FFFFFF" p="5px">
                    Password
                  </Text>
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    color="#C8C8C8"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    _placeholder={{ color: "inherit" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement
                    width="4.5rem"
                    mt="35px"
                    cursor="pointer"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <AiFillEye color="#C8C8C8" />
                    ) : (
                      <AiFillEyeInvisible color="#C8C8C8" />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius="md"
                type="submit"
                variant="solid"
                backgroundColor="#8039c6"
                color="#FFFFFF"
                _hover={{ color: "#3c3d52", backgroundColor: "#d9b3ff" }}
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
