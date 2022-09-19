import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import TableWrapper from "./style";
import { TableProp } from "./type";

function DataTable({ people }: TableProp) {
  const [pageNumber, setPageNumber] = useState(0);

  const PersonPerPage = 15;
  const pagesVisited = pageNumber * PersonPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(people?.length / PersonPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  // the table body?
  const displayPerson = people
    ?.slice(pagesVisited, pagesVisited + PersonPerPage)
    .map(person => (
      <Tr key={person.id}>
        <Td className="right">{person?.firstName}</Td>
        <Td className="right">{person?.lastName}</Td>
        <Td className="right">5556561</Td>
        <Td className="right-gender">{person?.gender}</Td>
        <Td className="right-hidden">{person?.age}</Td>
        <Td className="right-hidden">{person?.address.city}</Td>
        <Td className="right-status">Pending</Td>
      </Tr>
    ));
  return (
    <TableWrapper>
      <TableContainer>
        <Table
          size="sm"
          colorScheme="cyan"
          border="1px solid"
          variant="striped"
        >
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Data Nos</Th>
              <Th className="right-gender">Gender</Th>
              <Th className="right-hidden">Age</Th>
              <Th className="right-hidden">State</Th>
              <Th className="right-status">Status</Th>
            </Tr>
          </Thead>
          <Tbody>{displayPerson}</Tbody>
        </Table>
      </TableContainer>
      <div className="select-btn">
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    </TableWrapper>
  );
}

export default DataTable;
