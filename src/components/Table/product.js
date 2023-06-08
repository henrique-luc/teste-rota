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
import { ProductsContext } from "../../providers/products";

export const ProductTable = () => {
  const { products } = useContext(ProductsContext);

  if (products.length > 0) {
    return (
      <TableContainer bg="#FEFAE0" border="1px solid" h="fit-content" p="20px">
        <Table variant="simple" colorScheme="black">
          <Thead>
            <Tr>
              <Th>NOME ITEM</Th>
              <Th isNumeric>VALOR (R$)</Th>
              <Th isNumeric>QUANTIDADE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, key) => {
              return (
                <Tr key={key}>
                  <Td>{product.item}</Td>
                  <Td isNumeric>{product.value}</Td>
                  <Td isNumeric>{product.amount}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
};
