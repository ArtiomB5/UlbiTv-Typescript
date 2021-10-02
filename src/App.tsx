import "./styles.css";
import { HashRouter, Route, NavLink } from "react-router-dom";
import { UsersPage } from "./components/UsersPage";
import { TodosPage } from "./components/TodosPage";
import { CardAndEE } from "./components/CardAndEE";
import { UserItemPage } from "./components/UserItemPage";

export default function App() {
  return (
    <HashRouter>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "50%",
          margin: "0 auto"
        }}
      >
        <NavLink to={"/users"}>
          <h2>Users</h2>
        </NavLink>
        <NavLink to={"/todos"}>
          <h2>Todos</h2>
        </NavLink>
        <NavLink to={"/other"}>
          <h2>Other</h2>
        </NavLink>
      </div>
      <div className="App">
        <Route path={"/users"} exact>
          <UsersPage />
        </Route>
        <Route path={"/users/:id"} exact>
          <UserItemPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>
        <Route path={"/other"} exact>
          <CardAndEE />
        </Route>
      </div>
    </HashRouter>
  );
}
