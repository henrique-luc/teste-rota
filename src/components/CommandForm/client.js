import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ClientsContext } from "../../providers/clients";
import { ProductsContext } from "../../providers/products";
import Multiselect from "multiselect-react-dropdown";

export const ClientForm = () => {
  const { addClients } = useContext(ClientsContext);
  const { decreaseProductQuantity, stock } = useContext(ProductsContext);

  const [selectedIndividualProducts, setSelectedIndividualProducts] =
    useState();
  const [selectedGroupProducts, setSelectedGroupProducts] = useState();

  const [value, setValue] = useState("sim");

  const schema = yup.object().shape({
    name: yup.string().required("É obrigatório colocar um nome"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    if (selectedIndividualProducts) {
      selectedIndividualProducts.forEach((product) => {
        decreaseProductQuantity(product);
      });
    }

    const client = {
      name: data.name,
      rate: value,
      individual:
        selectedIndividualProducts !== undefined
          ? selectedIndividualProducts.slice()
          : [],
      group:
        selectedGroupProducts !== undefined
          ? selectedGroupProducts.slice()
          : [],
    };

    addClients(client);

    setSelectedIndividualProducts([]);
    setSelectedGroupProducts([]);
    setValue("sim");
  };

  const productsOptions = stock
    .filter((product) => product.amount > 0)
    .map((product) => product.item);

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl w="100%">
        <FormLabel>Nome do cliente:</FormLabel>
        <Input
          id="name"
          type="text"
          placeholder="Adicione o nome"
          bg="#fff"
          focusBorderColor="black"
          borderColor="black"
          {...register("name")}
        />
        <FormLabel mt="35px">Produtos consumidos em grupo:</FormLabel>
        <Multiselect
          isObject={false}
          placeholder="Selecione itens"
          style={{
            searchBox: {
              backgroundColor: "white",
              border: "1px solid black",
            },
          }}
          onSelect={(e) => setSelectedGroupProducts(e)}
          options={productsOptions}
        />

        <FormLabel mt="35px">Produtos consumidos individualmente:</FormLabel>
        <Multiselect
          isObject={false}
          placeholder="Selecione itens"
          style={{
            searchBox: {
              backgroundColor: "white",
              border: "1px solid black",
            },
          }}
          onSelect={(e) => setSelectedIndividualProducts(e)}
          options={productsOptions}
        />

        <FormLabel mt="35px">Incluir taxa de serviço:</FormLabel>
        <RadioGroup name="rate" onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="sim" borderColor="black">
              Sim
            </Radio>
            <Radio value="nao" borderColor="black" pl="20px">
              Não
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.rate && <FormHelperText>{errors.rate.message}</FormHelperText>}

        <Flex justifyContent="center">
          <Button
            mt="45px"
            type="submit"
            bg="#606C38"
            color="#fff"
            _hover={{ backgroundColor: "#95AC4A" }}
          >
            + Adicionar cliente
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};
