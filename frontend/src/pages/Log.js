import Sidebar from "../components/sidebar/Sidebar";

import { Flex, Box, Text, Heading, Icon, Divider } from "@chakra-ui/react";
import TableBox from "../components/table/Table";
import Navbar from "../components/navbar/Navbar";
import { BsViewList } from "react-icons/bs";

export default function Logs() {
  const columnsLogs = [
    {
      Header: "Level",
      accessor: "level",
    },
    { Header: "Time", accessor: "time" },
    {
      Header: "Message",
      accessor: "error_msg",
    },
    {
      Header: "Actions",
      accessor: "actions",
    },
  ];

  return (
    <Box>
      <Navbar />
      <Flex
        flexDir="row"
        width="100vw"
        height="100vh"
        backgroundColor="#151319"
      >
        <Sidebar />
        <Flex flexDir="column" width="100%" m={4}>
          <Flex flexDir="row">
            <Icon
              as={BsViewList}
              color="#4bc0c0"
              boxSize="50px"
              mt={4}
              ml={4}
            />
            <Box m={4}>
              <Text color="#C8C8C8">Pages / Logs</Text>
              <Heading color="#FFFFFF" size="md" w="100%">
                Logs
              </Heading>
            </Box>{" "}
          </Flex>
          <Divider ml={4} width="500px" borderColor="#C8C8C8" opacity="0.2" />
          <Flex borderRadius={15} backgroundColor="#232429" w="80%" m={4} p={4}>
            <Box m={4}>
              <Text as="b" color="#FFFFFF" size="sx">
                Logs
              </Text>
              <Text color="#C8C8C8" size="sx">
                Error Logs
              </Text>
              <TableBox columns={columnsLogs} data={[]} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
