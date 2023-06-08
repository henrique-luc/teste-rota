import React, { createContext, useState, useContext, useEffect } from "react";
import { ProductsContext } from "./products";
import { ClientsContext } from "./clients";

export const ResultContext = createContext([]);

export const ResultProvider = ({ children }) => {
  const [groupProductAverages, setGroupProductAverages] = useState({});
  const { products } = useContext(ProductsContext);
  const { clients } = useContext(ClientsContext);
  const [results, setResults] = useState([]);

  const calculateGroupProductAverages = () => {
    const groupProductCounts = {};

    clients.forEach((client) => {
      const { group } = client;

      group.forEach((product) => {
        if (groupProductCounts[product] === undefined) {
          groupProductCounts[product] = 1;
        } else {
          groupProductCounts[product]++;
        }
      });
    });

    const groupProductAverages = {};

    for (const product in groupProductCounts) {
      const productData = products.find((p) => p.item === product);
      const price = productData ? parseFloat(productData.value) : 0;

      groupProductAverages[product] = price / groupProductCounts[product];
    }

    setGroupProductAverages(groupProductAverages);

    const updatedResults = clients.map((client) => {
      const { id, group, individual } = client;

      const consumedProducts = client.group.map((item) => ({
        item,
        quantity: 1,
      }));

      const consumedIndividual = individual.map((item) => {
        const productData = products.find((p) => p.item === item);
        const price = productData ? parseFloat(productData.value) : 0;
        return price;
      });

      return {
        clientId: id,
        consumedProducts,
        consumedIndividual,
      };
    });

    setResults(updatedResults);
  };

  useEffect(() => {
    calculateGroupProductAverages();
  }, []);

  return (
    <ResultContext.Provider
      value={{
        groupProductAverages,
        calculateGroupProductAverages,
        products,
        results,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

/*
import React, { createContext, useState, useContext } from "react";
import { ProductsContext } from "./products";
import { ClientsContext } from "./clients";

export const ResultContext = createContext([]);

export const ResultProvider = ({ children }) => {
  const [groupProductAverages, setGroupProductAverages] = useState({});
  const { products } = useContext(ProductsContext);
  const { clients } = useContext(ClientsContext);
  const [results, setResults] = useState([]); // Adicione o estado para os resultados

  const calculateGroupProductAverages = () => {
    const groupProductCounts = {};

    clients.forEach((client) => {
      const { group } = client;

      group.forEach((product) => {
        if (groupProductCounts[product] === undefined) {
          groupProductCounts[product] = 1;
        } else {
          groupProductCounts[product]++;
        }
      });
    });

    const groupProductAverages = {};

    for (const product in groupProductCounts) {
      const productData = products.find((p) => p.item === product);
      const price = productData ? parseFloat(productData.value) : 0;

      groupProductAverages[product] = price / groupProductCounts[product];
    }

    setGroupProductAverages(groupProductAverages);

    // Atualize os resultados
    const updatedResults = clients.map((client) => {
      const { id } = client;
      const consumedProducts = client.group.map((item) => ({ item, quantity: 1 }));

      return {
        clientId: id,
        consumedProducts,
      };
    });

    setResults(updatedResults);
  };

  return (
    <ResultContext.Provider
      value={{
        groupProductAverages,
        calculateGroupProductAverages,
        products,
        results, // Adicione os resultados ao contexto
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
*/
