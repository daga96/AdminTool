import {
  Text,
  Box,
  Flex,
  Heading,
  Avatar,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";
import Profile from "../components/Profile";

import Sidebar from "../components/sidebar/Sidebar";
import TableBox from "../components/table/Table";

import { HiTrash } from "react-icons/hi";
import { AiFillEdit, AiOutlineUser } from "react-icons/ai";
import Navbar from "../components/navbar/Navbar";
export default function Users() {
  const columnsUsers = [
    { Header: "usrID", accessor: "usr_id" },
    {
      Header: "PF image",
      accessor: "pf_image",
      Cell: ({ cell }) => (
        <Avatar
          size={"sm"}
          alt={"Avatar Alt"}
          ml={2}
          backgroundColor="#C8C8C8"
        />
      ),
    },
    { Header: "nickname", accessor: "nickname" },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ cell }) => (
        <Button
          height="20px"
          backgroundColor="#68B76D"
          color="#151319"
          fontSize="14px"
        >
          {cell.value}
        </Button>
      ),
    },
    { Header: "date", accessor: "sign_date" },
    {
      width: 300,
      Header: "edit",
      accessor: "options",
      Cell: ({ cell }) => (
        <Flex flexDir="row" gap={2}>
          <Button
            size={"sm"}
            w="10px"
            borderRadius="50%"
            backgroundColor="#4bc0c0"
            color="#FFFFFF"
            _hover={{ bg: "#d7fcfc", color: "#4bc0c0" }}
          >
            <Icon as={AiFillEdit} />
          </Button>
          <Button
            size={"sm"}
            w="10px"
            borderRadius="50%"
            backgroundColor="#d9342b"
            color="#FFFFFF"
            _hover={{ bg: "#f2b4b1", color: "#d9342b" }}
          >
            <Icon as={HiTrash} />
          </Button>
        </Flex>
      ),
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
              as={AiOutlineUser}
              color="#4bc0c0"
              boxSize="50px"
              mt={4}
              ml={4}
            />

            <Box m={4}>
              <Text color="#C8C8C8">Pages / Users</Text>
              <Heading color="#FFFFFF" size="md" w="100%">
                Users
              </Heading>
            </Box>
          </Flex>
          <Divider ml={4} width="500px" borderColor="#C8C8C8" opacity="0.2" />

          <Flex flexDir="row" mt={4}>
            <Flex backgroundColor="#232429" p={4} w="50%" mr={4}>
              <Box m={4}>
                <Text as="b" color="#FFFFFF" size="sx">
                  Users
                </Text>
                <Text color="#C8C8C8" size="sx">
                  Users Overview
                </Text>

                <TableBox
                  columns={columnsUsers}
                  data={[
                    {
                      usr_id: "U998272",
                      nickname: "xxdragonxx",
                      status: "normal",
                      sign_date: "2022-12-06 16:22:00",
                    },
                  ]}
                />
              </Box>
            </Flex>
            <Flex
              backgroundColor="#232429"
              p={4}
              w="25%"
              justifyContent="center"
            >
              <Box m={4}>
                <Text as="b" color="#FFFFFF" size="sx">
                  Users
                </Text>
                <Text color="#C8C8C8" size="sx">
                  User Profile
                </Text>

                <Profile />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
