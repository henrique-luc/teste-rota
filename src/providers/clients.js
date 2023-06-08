import { createContext, useState } from "react";

export const ClientsContext = createContext([]);

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState(1);

  const addClients = (values) => {
    const client = { ...values, id: clientId };
    setClients([...clients, client]);
    setClientId(clientId + 1);
  };

  return (
    <ClientsContext.Provider value={{ clients, addClients }}>
      {children}
    </ClientsContext.Provider>
  );
};
