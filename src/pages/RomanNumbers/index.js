import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { RomanForm } from "../../components/RomanForm/roman";
import { RomanContext } from "../../providers/romanNumbers";
import { useContext } from "react";
import { ArabicForm } from "../../components/RomanForm/arabic";
import { ArabicContext } from "../../providers/arabicNumbers";

export const RomanNumbers = () => {
  const { convertedValue } = useContext(RomanContext);
  const { convertedArabic } = useContext(ArabicContext);

  return (
    <Flex justifyContent="center" m="40px">
      <Box>
        <Heading size="md" textAlign="center">
          Romanos para Arábicos
        </Heading>
        <Flex
          flexDir="column"
          mt="30px"
          bg="#FEFAE0"
          p="40px"
          borderRadius="8px"
          w="100%"
        >
          <RomanForm />
          <Box h="1px" bg="#DDA15E" mt="50px"></Box>
          <Box
            bg="#DDA15E"
            w="fit-content"
            p="10px 45px"
            borderRadius="66px"
            mt="50px"
            alignSelf="center"
          >
            <Text>RESULTADO: {convertedValue}</Text>
          </Box>
        </Flex>
      </Box>

      <Box ml="150px">
        <Heading size="md" textAlign="center">
          Arábicos para Romanos
        </Heading>
        <Flex
          flexDir="column"
          mt="30px"
          bg="#FEFAE0"
          p="40px"
          borderRadius="8px"
          w="100%"
        >
          <ArabicForm />
          <Box h="1px" bg="#DDA15E" mt="50px"></Box>
          <Box
            bg="#DDA15E"
            w="fit-content"
            p="10px 45px"
            borderRadius="66px"
            mt="50px"
            alignSelf="center"
          >
            <Text>RESULTADO: {convertedArabic}</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
