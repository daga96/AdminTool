import { Flex, Text, Box, Avatar, Heading } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsViewList } from "react-icons/bs";

import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <Flex
      sx={{ position: "sticky" }}
      position="relative"
      h="90%"
      pt={4}
      m={4}
      backgroundColor="#232429"
      w="250px"
      flexDir="column"
      borderRadius="lg"
      textAlign="center"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        as="nav"
        color="#C8C8C8"
      >
        <Heading color="#FFFFFF" size="md" w="100%" textAlign="center">
          ADMIN
        </Heading>
      </Flex>
      <Flex flexDir="column" m={4}>
        <NavItem link="/dashboard" icon={RxDashboard} title="Dashboard" />
        <NavItem link="/users" icon={AiOutlineUser} title="Users" />
        <NavItem link="/logs" icon={BsViewList} title="Logs" />
      </Flex>
      <Flex m={4} position="absolute" bottom="0px">
        <Avatar bg="#C8C8C8" />
        <Box textAlign="left" ml={4}>
          <Text color="#FFFFFF">Username</Text>
          <Text color="#C8C8C8">Admin</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
