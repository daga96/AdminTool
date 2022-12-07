import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Text,
  Tooltip,
  Select,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import {
  HiChevronRight,
  HiChevronLeft,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";

export default function TableBox({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPrevious,
    canNext,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, usePagination);

  return (
    <>
      <Flex flexDir="column">
        <Table {...getTableProps()} size="sm" mt={4}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps()}
                    color="#FFFFFF"
                    borderColor="#42444d"
                  >
                    <Flex alignItems="center">{column.render("Header")}</Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        color="#C8C8C8"
                        borderColor="#42444d"
                      >
                        {cell.render("Cell")}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex
          justifyContent="space-between"
          mt={4}
          ml="-65px"
          alignItems="center"
          transform="scale(0.8)"
        >
          <Flex>
            <Tooltip label="First Page">
              <IconButton
                onClick={() => gotoPage(0)}
                isDisabled={!canPrevious}
                icon={<HiChevronDoubleLeft h={3} w={3} />}
                mr={4}
                backgroundColor="#42444d"
                color="#FFFFFF"
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                onClick={previousPage}
                isDisabled={!canPrevious}
                icon={<HiChevronLeft h={6} w={6} />}
                mr={4}
                backgroundColor="#42444d"
                color="#FFFFFF"
              />
            </Tooltip>
          </Flex>

          <Flex alignItems="center">
            <Text flexShrink="0" mr={8} color="#C8C8C8">
              Page{" "}
              <Text fontWeight="bold" as="span" color="#C8C8C8">
                {pageIndex + 1}
              </Text>{" "}
              of{" "}
              <Text fontWeight="bold" as="span" color="#C8C8C8">
                {pageOptions.length}
              </Text>
            </Text>
            <Text flexShrink="0" color="#C8C8C8">
              Go to page:
            </Text>
            <NumberInput
              ml={2}
              mr={8}
              w="150px"
              min={1}
              color="#C8C8C8"
              max={pageOptions.length}
              onChange={(value) => {
                const page = value ? value - 1 : 0;
                gotoPage(page);
              }}
              defaultValue={pageIndex + 1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper color="#C8C8C8" />
                <NumberDecrementStepper color="#C8C8C8" />
              </NumberInputStepper>
            </NumberInput>
            <Select
              w="150px"
              mr={4}
              color="#C8C8C8"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                onClick={nextPage}
                isDisabled={!canNext}
                icon={<HiChevronRight h={6} w={6} />}
                backgroundColor="#42444d"
                color="#FFFFFF"
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                onClick={() => gotoPage(pageCount - 1)}
                isDisabled={!canNext}
                icon={<HiChevronDoubleRight h={3} w={3} />}
                ml={4}
                backgroundColor="#42444d"
                color="#FFFFFF"
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
