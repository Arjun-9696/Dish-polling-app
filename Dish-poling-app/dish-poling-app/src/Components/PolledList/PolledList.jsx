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
const PolledList = () => {
  const { votes } = useContext(Context);
  const reverse_data =votes.reverse()
  return (
    <>
      <TableContainer>
        <Table margin="auto" w="40%">
          <Thead>
            <Tr>
              <Th>Select Dish</Th>
              <Th>Dish Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reverse_data.map((item, index) => {
              return (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td>{item}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PolledList;
