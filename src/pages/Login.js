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
  useToast,
} from "@chakra-ui/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => setShowPassword(showPassword);

  return (
    <Flex
      flexDir="column"
      width="100vw"
      height="100vh"
      backgroundColor="#3c3d52"
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
              p="1rem"
              backgroundColor="#595d73"
              boxShadow="md"
              borderRadius="2xl"
              height=" 300px"
              justifyContent="center"
            >
              <Heading color="blue.500" textAlign="center">
                {process.env.REACT_APP_TITLE}
              </Heading>
              <FormControl>
                <InputGroup display="flex" flexDir="column">
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    type="text"
                    placeholder="ID"
                    onChange={(e) => setId(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="#C8C8C8" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowPassword}
                    ></Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius="md"
                type="submit"
                variant="solid"
                backgroundColor="#3c3d52"
                color="#C8C8C8"
                _hover={{ color: "#3c3d52", backgroundColor: "#C8C8C8" }}
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
