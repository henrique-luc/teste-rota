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
import { RomanContext } from "../../providers/romanNumbers";

export const RomanForm = () => {
  const { romanToArabic } = useContext(RomanContext);

  const schema = yup.object().shape({
    value: yup.string().required("É obrigatório adicionar um valor"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    const valueToUppercase = data.value.toUpperCase();

    romanToArabic(valueToUppercase);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl>
        <FormLabel fontSize="xs">Adicione um número romano:</FormLabel>
        <Input
          id="value"
          type="text"
          placeholder="DCCC"
          bg="#fff"
          {...register("value")}
        />
        {errors.value && (
          <FormHelperText>{errors.value.message}</FormHelperText>
        )}
        <Flex justifyContent="center">
          <Button mt="25px" type="submit" bg="#606C38" color="#fff">
            Converter
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};
