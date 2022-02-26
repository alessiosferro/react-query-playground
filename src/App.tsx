import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Pokemons } from "./components/Pokemons";
import { ReactQueryDevtools } from "react-query/devtools";
import Posts from "./components/Posts";
import "./App.css";
import SearchPokemon from "./components/SearchPokemon";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="posts" element={<Posts />} />
            <Route path="pokemons" element={<Pokemons />} />
            <Route path="search-pokemon" element={<SearchPokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
