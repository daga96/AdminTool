import { Heading, Avatar, Box, Center, Text } from "@chakra-ui/react";

export default function Profile({ name, tag, text, photo }) {
  return (
    <Center py={6}>
      <Box maxW="320px" w="full" borderRadius="15px" p={6} textAlign="center">
        <Avatar
          size={"xl"}
          src={photo}
          alt={"Avatar Alt"}
          mb={4}
          backgroundColor="#C8C8C8"
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} color="#FFFFFF">
          User Name
        </Heading>
        <Text fontWeight={600} color="#C8C8C8" mb={4}>
          @xxdragonxx
        </Text>
        <Text textAlign={"justify"} color="#C8C8C8" px={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam,
          ligula sit amet hendrerit auctor, augue ante consequat diam, vitae
          pretium urna ligula quis nunc. Nunc tincidunt consectetur mi, id
          tempus arcu sollicitudin a.
        </Text>
      </Box>
    </Center>
  );
}
