import { useState } from "react";

import RestrictedPage from "./components/RestrictedPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Jonatas";

  function Login() {
    setIsLoggedIn(!isLoggedIn);
  }
  function Logout() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        />
      </header>
    </div>
  );
}

export default App;
