import {
  Text,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Icon,
  Divider,
} from "@chakra-ui/react";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { RiArrowUpSFill } from "react-icons/ri";
import { Line, Doughnut } from "react-chartjs-2";

import Sidebar from "../components/sidebar/Sidebar";
import TableBox from "../components/table/Table";
import { RxDashboard } from "react-icons/rx";
import Navbar from "../components/navbar/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const labelsLine = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const labelsDough = [
    "USA",
    "South Korea",
    "Philippines",
    "Indonesia",
    "Others",
  ];

  const dataLine = {
    labels: labelsLine,
    datasets: [
      {
        label: "Registered Users",
        data: [65, 59, 80, 81, 56, 55, 40, 88, 93, 67, 92, 51],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Guests",
        data: [65, 56, 55, 40, 88, 93, 67, 92, 51, 59, 80, 81],
        fill: false,
        borderColor: "rgb(128, 57, 198)",
        tension: 0.1,
      },
    ],
  };

  const dataDough = {
    labels: labelsDough,
    datasets: [
      {
        label: "Doughnut Chart",
        data: [60, 45, 30, 22, 12],
        backgroundColor: [
          "rgb(75, 192, 192)",
          "rgb(128, 57, 198)",
          "rgb(198,128,57)",
          "rgb(57,127,198)",
          "rgb(57,198,128)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    tension: 0.5,
    pointRadius: 3,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          precision: 0,
          stepSize: 10,
        },
      },
    },
  };

  const optionsDough = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left",
        labels: {
          color: "#C8C8C8",
        },
      },
    },
  };
  const columnsLogin = [
    { Header: "usrID", accessor: "usr_id" },
    { Header: "nickname", accessor: "nickname" },
    { Header: "date", accessor: "sign_date" },
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
              as={RxDashboard}
              color="#4bc0c0"
              boxSize="50px"
              mt={4}
              ml={4}
            />
            <Box m={4}>
              <Text color="#C8C8C8">Pages / Dashboard</Text>
              <Heading color="#FFFFFF" size="md" w="100%">
                Dashboard
              </Heading>
            </Box>
          </Flex>
          <Divider ml={4} width="500px" borderColor="#C8C8C8" opacity="0.2" />
          <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(3, 1f)"
            gap={4}
            h="800px"
            w="90%"
            m={4}
          >
            <GridItem
              display="flex"
              flexDir="row"
              colSpan={3}
              rowSpan={1}
              h="340px"
              backgroundColor="#232429"
              p={4}
            >
              <Box m={4}>
                <Text as="b" color="#FFFFFF" size="sx">
                  Dashboard
                </Text>
                <Text color="#C8C8C8" size="sx">
                  Users Overview
                </Text>
                <Text color="#C8C8C8" size="sx" mt={8}>
                  Registered Users
                </Text>
                <Heading color="#FFFFFF">1596</Heading>
                <Text color="#C8C8C8" size="sx" mt={4}>
                  Guests
                </Text>
                <Heading color="#FFFFFF">1102</Heading>
              </Box>
              <Line options={optionsLine} data={dataLine} />
            </GridItem>
            <GridItem
              position="relative"
              colSpan={2}
              rowSpan={1}
              h="340px"
              backgroundColor="#232429"
              p={4}
              display="flex"
              flexDir="column"
            >
              <Box m={4}>
                <Text as="b" color="#FFFFFF" size="sx">
                  Dashboard
                </Text>
                <Text color="#C8C8C8" size="sx">
                  Users Precentage By Country
                </Text>
              </Box>
              <Box
                w="380px"
                h="380px"
                position="absolute"
                right="30px"
                bottom="30px"
                top="5px"
              >
                <Doughnut options={optionsDough} data={dataDough} />
              </Box>
            </GridItem>

            <GridItem
              display="flex"
              flexDir="column"
              textAlign="center"
              colSpan={1}
              rowSpan={1}
              w="100%"
              h="130px"
              backgroundColor="#232429"
            >
              <Text color="#C8C8C8" size="sx" mt={4}>
                CCU
              </Text>
              <Heading color="#FFFFFF">1596</Heading>
              <Text
                color="#C8C8C8"
                size="sx"
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Icon as={RiArrowUpSFill} color="#8039c6" boxSize="25px" />
                2.5%
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              textAlign="center"
              colSpan={1}
              rowSpan={1}
              w="100%"
              h="130px"
              backgroundColor="#232429"
            >
              <Text color="#C8C8C8" size="sx" mt={4}>
                PCCU
              </Text>
              <Heading color="#FFFFFF">599</Heading>
              <Text
                color="#C8C8C8"
                size="sx"
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Icon as={RiArrowUpSFill} color="#8039c6" boxSize="25px" />
                4.5%
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              textAlign="center"
              colSpan={1}
              rowSpan={1}
              w="100%"
              h="130px"
              backgroundColor="#232429"
            >
              <Text color="#C8C8C8" size="sx" mt={4}>
                DAU
              </Text>
              <Heading color="#FFFFFF">123</Heading>
              <Text
                color="#C8C8C8"
                size="sx"
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Icon as={RiArrowUpSFill} color="#8039c6" boxSize="25px" />
                3.5%
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              textAlign="center"
              colSpan={1}
              rowSpan={1}
              w="100%"
              h="130px"
              backgroundColor="#232429"
            >
              <Text color="#C8C8C8" size="sx" mt={4}>
                NUV
              </Text>
              <Heading color="#FFFFFF">1596</Heading>
              <Text
                color="#C8C8C8"
                size="sx"
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Icon as={RiArrowUpSFill} color="#8039c6" boxSize="25px" />
                2.5%
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              textAlign="center"
              colSpan={1}
              rowSpan={1}
              w="100%"
              h="130px"
              backgroundColor="#232429"
            >
              <Text color="#C8C8C8" size="sx" mt={4}>
                Recent Users (7 days)
              </Text>
              <Heading color="#FFFFFF">262</Heading>
              <Text
                color="#C8C8C8"
                size="sx"
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Icon as={RiArrowUpSFill} color="#8039c6" boxSize="25px" />
                0.5%
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              colSpan={2}
              rowSpan={1}
              h="300px"
              backgroundColor="#232429"
            >
              <Box m={8}>
                <Text as="b" color="#FFFFFF" size="sx">
                  Dashboard
                </Text>
                <Text color="#C8C8C8" size="sx">
                  Recent Logins
                </Text>
                <TableBox columns={columnsLogin} data={[]} />
              </Box>
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              colSpan={3}
              rowSpan={1}
              h="300px"
              backgroundColor="#232429"
            >
              <Box m={8}>
                <Text as="b" color="#FFFFFF" size="sx">
                  Dashboard
                </Text>
                <Text color="#C8C8C8" size="sx">
                  Top Characters
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
}
