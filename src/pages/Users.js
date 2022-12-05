import {
  Text,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";

import Sidebar from "../components/sidebar/Sidebar";

export default function Users() {
  return (
    <Flex flexDir="row" width="100vw" height="100vh" backgroundColor="#151319">
      <Sidebar />
      <Flex flexDir="column" width="100%" m={4}>
        <Box m={4}>
          <Text color="#C8C8C8">Pages / Users</Text>
          <Heading color="#FFFFFF" size="md" w="100%">
            Users
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
}
