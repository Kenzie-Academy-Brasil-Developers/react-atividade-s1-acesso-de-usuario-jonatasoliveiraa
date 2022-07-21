import "./style.css";

const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h1>Bem vindo, {user}!</h1>
          <button onClick={Logout}>Sair</button>
        </div>
      ) : (
        <div>
          <h2>Você não pode acessar esta página</h2>
          <button onClick={Login}>Entrar</button>
        </div>
      )}
    </div>
  );
};
export default RestrictedPage;
