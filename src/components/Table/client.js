import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ClientsContext } from "../../providers/clients";

export const ClientTable = () => {
  const { clients } = useContext(ClientsContext);

  if (clients.length > 0) {
    return (
      <TableContainer bg="#FEFAE0" border="1px solid" h="fit-content" p="20px">
        <Table variant="simple" colorScheme="black">
          <Thead>
            <Tr>
              <Th>NOME</Th>
              <Th isNumeric>PRODUTOS IND.</Th>
              <Th isNumeric>PRODUTOS GRU.</Th>
              <Th isNumeric>TAXA</Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.map((client, key) => {
              const individualProducts =
                client.individual && client.individual.join(", ");
              const groupProducts = client.group && client.group.join(", ");

              return (
                <Tr key={key}>
                  <Td>{client.name}</Td>
                  <Td isNumeric>{individualProducts}</Td>
                  <Td isNumeric>{groupProducts}</Td>
                  <Td isNumeric>{client.rate}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
};
