import RouterConfig from "./router/RouterConfig";
import { AuthProvider } from "./context/AuthContext";
import { ItineraryProvider } from "./context/itineraryContext";

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
