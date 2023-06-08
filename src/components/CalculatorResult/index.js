import { useContext } from "react";
import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { ResultContext } from "../../providers/result";
import { ClientsContext } from "../../providers/clients";

export const PaymentPage = () => {
  const { results, groupProductAverages, calculateGroupProductAverages } =
    useContext(ResultContext);
  const { clients } = useContext(ClientsContext);

  return (
    <Box>
      <Button
        onClick={() => calculateGroupProductAverages()}
        bg="#DDA15E"
        color="black"
        borderRadius="66px"
        p="0 35px"
        _hover={{ backgroundColor: "#95AC4A" }}
      >
        Calcular
      </Button>
      {results &&
        results.map((result, index) => {
          const { clientId, consumedProducts, consumedIndividual } = result;

          const client = clients.find((c) => c.id === clientId);
          const { name, rate } = client;

          let totalPayment = 0;

          consumedProducts.forEach((product) => {
            const { item, quantity } = product;
            const averagePrice = groupProductAverages[item] || 0;
            totalPayment += averagePrice * quantity;
          });

          consumedIndividual.forEach((price) => {
            totalPayment += price;
          });

          if (rate === "sim") {
            totalPayment = totalPayment - (totalPayment * 10) / 100;
          }

          return (
            <Box key={index} mt="20px">
              <Flex
                bg="#FEFAE0"
                w="30%"
                p="10px 30px"
                justifyContent="space-between"
              >
                <Text>{name}</Text>
                <Text>R${totalPayment.toFixed(2)}</Text>
              </Flex>
            </Box>
          );
        })}
    </Box>
  );
};
