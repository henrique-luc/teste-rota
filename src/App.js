import { Navigation } from "./components/Navigation";
import { Routes } from "./routes";
import { Providers } from "./providers";

function App() {
  return (
    <>
      <Navigation />
      <Providers>
        <Routes />
      </Providers>
    </>
  );
}

export default App;
