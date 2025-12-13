import RouterConfig from "./router/RouterConfig";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <RouterConfig />
      </div>
    </AuthProvider>
  );
};

export default App;
