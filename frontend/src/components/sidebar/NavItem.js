import React from "react";
import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";

export default function NavItem({ link, icon, title }) {
  return (
    <Flex mt="10px" flexDir="column" w="100%" alignItems="flex-start">
      <Menu placement="right">
        <Link
          w="100%"
          href={link}
          p={3}
          borderRadius={8}
          _hover={{ backgroundColor: "#42444d" }}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color="#FFFFFF" />
              <Text ml={5} display="flex" color="#FFFFFF" textAlign="left">
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
