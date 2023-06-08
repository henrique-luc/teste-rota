import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/react";

import { ProductTable } from "../../components/Table/product";
import { ProductForm } from "../../components/CommandForm/product";
import { ClientForm } from "../../components/CommandForm/client";
import { ClientTable } from "../../components/Table/client";
import { PaymentPage } from "../../components/CalculatorResult";

export const CommandCalculator = () => {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" w="80%" m="0 auto">
        <Box>
          <Heading size="lg">Produtos Consumidos</Heading>
        </Box>
        <Flex mt="30px">
          <Center w="40%" bg="#FEFAE0" p="40px" borderRadius="8px" mr="50px">
            <ProductForm />
          </Center>
          <ProductTable />
        </Flex>
      </Flex>

      <Box h="1px" bg="#DDA15E" m="50px auto" w="80%"></Box>
      <Flex flexDirection="column" w="80%" m="0 auto">
        <Box>
          <Heading size="lg">Clientes</Heading>
        </Box>
        <Flex mt="30px">
          <Center w="40%" bg="#FEFAE0" p="40px" borderRadius="8px" mr="50px">
            <ClientForm />
          </Center>
          <ClientTable />
        </Flex>
      </Flex>

      <Box h="1px" bg="#DDA15E" m="50px auto" w="80%"></Box>
      <Flex flexDirection="column" w="80%" m="0 auto">
        <Box mb="100px">
          <Heading size="lg">Resultado</Heading>
          <Box mt="20px" w="100%">
            <PaymentPage />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
