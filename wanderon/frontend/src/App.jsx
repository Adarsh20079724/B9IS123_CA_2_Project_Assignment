import RouterConfig from "./router/RouterConfig";
import { AuthProvider } from "./context/AuthContext";
import { ItineraryProvider } from "./context/ItineraryContext";

const App = () => {
  return (
    <AuthProvider>
      <ItineraryProvider>
        <RouterConfig />
      </ItineraryProvider> 
    </AuthProvider>
  );
};

export default App;
