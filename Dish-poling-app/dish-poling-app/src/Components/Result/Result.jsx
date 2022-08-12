import React, { useContext } from 'react';
import { Context } from '../../Context/ConextAPI/action';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const Result = () => {
  const { votes } = useContext(Context);
  return (
    <>
      <TableContainer>
        <Table margin="auto"  w="60%" variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Dish Name</Th>
              <Th isNumeric>Points</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>{votes[0]}</Td>
              <Td isNumeric>{30}</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>{votes[1]}</Td>
              <Td isNumeric>{20}</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>{votes[2]}</Td>
              <Td isNumeric>{10}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Result;
