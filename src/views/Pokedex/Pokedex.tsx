import { Button } from "@mui/material";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import pokemonAPI from "../../api/pokemonApi";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useTranslation } from "react-i18next";
import "./Pokedex.css";

const Pokedex: FC = () => {
  const [pokemonCount, setPokemonCount] = useState(8);
  const { data, isLoading } = useQuery(["fetchPokemons", pokemonCount], () =>
    pokemonAPI.fetchPokemons(pokemonCount)
  );
  const { t, i18n } = useTranslation();

  return (
    <div className="pokedex">
      <div className="header">
        <div className="pokemon-count">
          {t("views.pokedex.countText") + " " + pokemonCount}
        </div>
        <div className="count-button-container">
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setPokemonCount(pokemonCount - 1)}
          >
            {t("views.pokedex.buttonLeft")}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setPokemonCount(pokemonCount + 1)}
          >
            {t("views.pokedex.buttonRight")}
          </Button>
        </div>
        <div className="locale-button-container">
          <Button variant="outlined" onClick={() => i18n.changeLanguage("fi")}>
            Fi
          </Button>
          <Button variant="outlined" onClick={() => i18n.changeLanguage("en")}>
            En
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div>{t("views.pokedex.loading")}</div>
      ) : (
        <div className="content">
          {data &&
            data.results.map((item) => (
              <div className="pokemon-card-container" key={item.name}>
                <PokemonCard pokemonUrl={item.url}></PokemonCard>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
