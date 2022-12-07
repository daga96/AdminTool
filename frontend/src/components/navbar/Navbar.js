import { Box, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      backgroundColor="#42444d"
      color="#FFFFFF"
      w="100%"
      h="60px"
      justify="space-between"
    >
      <Box backgroundColor="#4bc0c0" w="218px" p={4}>
        <Text as="b" fontSize="18px" color="#232429" ml="4">
          ADMIN
        </Text>
        <Text as="b" fontSize="12px" color="#232429" ml="4">
          v 1.0.0
        </Text>
      </Box>
    </Flex>
  );
}
