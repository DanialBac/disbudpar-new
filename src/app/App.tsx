import { HashRouter } from "react-router-dom";
import AppRoutes from "./router";
import "./../styles/animations.css";

// App shell only (AGENTS.md section 14): routing definitions live in app/router.tsx.
function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
