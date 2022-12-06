import {
  Text,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import Profile from "../components/Profile";

import Sidebar from "../components/sidebar/Sidebar";
import TableBox from "../components/table/Table";

export default function Users() {
  const columnsUsers = [
    { Header: "usrID", accessor: "usr_id" },
    { Header: "nickname", accessor: "nickname" },
    { Header: "date", accessor: "sign_date" },
  ];

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
        <Flex flexDir="row">
          <Flex
            borderRadius={15}
            backgroundColor="#232429"
            p={4}
            w="50%"
            mr={4}
          >
            <TableBox
              columns={columnsUsers}
              data={[
                {
                  usr_id: "U998272",
                  nickname: "xxdragonxx",
                  sign_date: "2022-12-06 16:22:00",
                },
              ]}
            />
          </Flex>
          <Flex
            borderRadius={15}
            backgroundColor="#232429"
            p={4}
            w="25%"
            justifyContent="center"
          >
            <Profile />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
