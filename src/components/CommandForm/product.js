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
} from "@chakra-ui/react";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

export const ProductForm = () => {
  const { addProduct } = useContext(ProductsContext);

  const schema = yup.object().shape({
    item: yup.string(),
    value: yup.string().required("É obrigatório adicionar um valor ao item"),
    amount: yup
      .string()
      .required("É obrigatório adicionar uma quantidade de itens"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    addProduct(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl w="300px">
        <FormLabel>Nome do item:</FormLabel>
        <Input
          id="item"
          type="text"
          placeholder="Adicione o nome do item"
          bg="#fff"
          focusBorderColor="black"
          borderColor="black"
          {...register("item")}
        />
        <FormLabel mt="35px">Valor:</FormLabel>
        <Input
          id="value"
          type="number"
          placeholder="99.99"
          bg="#fff"
          focusBorderColor="black"
          borderColor="black"
          {...register("value")}
        />
        <FormLabel mt="35px">Quantidade:</FormLabel>
        <Input
          id="amount"
          type="number"
          placeholder="1"
          bg="#fff"
          focusBorderColor="black"
          borderColor="black"
          {...register("amount")}
        />
        {errors.amount && (
          <FormHelperText>{errors.amount.message}</FormHelperText>
        )}

        <Flex justifyContent="center">
          <Button
            mt="45px"
            type="submit"
            bg="#606C38"
            color="#fff"
            _hover={{ backgroundColor: "#95AC4A" }}
          >
            + Adicionar item
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};
