import { ArabicProvider } from "./arabicNumbers";
import { ClientsProvider } from "./clients";
import { ProductsProvider } from "./products";
import { ResultProvider } from "./result";
import { RomanProvider } from "./romanNumbers";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <ClientsProvider>
        <ResultProvider>
          <RomanProvider>
            <ArabicProvider>{children}</ArabicProvider>
          </RomanProvider>
        </ResultProvider>
      </ClientsProvider>
    </ProductsProvider>
  );
};
