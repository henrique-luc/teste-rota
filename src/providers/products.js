import { createContext, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState([]);

  const addProduct = (values) => {
    setProducts([...products, values]);
    setStock([...stock, values]);
  };

  const decreaseProductQuantity = (productId) => {
    const updatedStock = stock.map((product) => {
      if (product.item === productId && product.amount > 0) {
        return {
          ...product,
          amount: product.amount - 1,
        };
      }
      return product;
    });

    setStock(updatedStock);
  };

  return (
    <ProductsContext.Provider
      value={{ products, stock, addProduct, decreaseProductQuantity }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
