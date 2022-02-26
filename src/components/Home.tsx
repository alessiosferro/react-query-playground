import { NavLink, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>React Query Playground</h1>
      <p id="nav-description">Playground sections:</p>
      <nav>
        <ul aria-labelledby="nav-description">
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="pokemons">Pokemons</NavLink>
          </li>
          <li>
            <NavLink to="search-pokemon">Search Pokemon</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
