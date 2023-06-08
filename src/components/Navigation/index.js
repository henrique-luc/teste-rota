import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Center bg="#BC6C25" mb="50px">
      <Breadcrumb spacing="8px" m="20px" separator="">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" color="#000000" fontWeight="bold">
            Converter
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem ml="50px">
          <BreadcrumbLink
            href="/command-calculator"
            color="#000000"
            fontWeight="bold"
          >
            Calculadora
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Center>
  );
};
