import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import pokemonAPI from "../../api/pokemonApi";
import { useTranslation } from "react-i18next";
import "./PokemonCard.css";

interface IProps {
  pokemonUrl: string;
}
const PokemonCard: FC<IProps> = ({ pokemonUrl }) => {
  const { t } = useTranslation();
  const { isLoading, data } = useQuery(["fetchPokemon", pokemonUrl], () =>
    pokemonAPI.fetchPokemon(pokemonUrl)
  );

  return data ? (
    <Card className="pokemon-card" sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="200"
        image={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          data.id +
          ".png"
        }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("components.pokemonCard.weightText") +
            " " +
            data.height +
            t("components.pokemonCard.weightUnit")}
        </Typography>
      </CardContent>
    </Card>
  ) : isLoading ? (
    <CircularProgress color="secondary" />
  ) : null;
};

export default PokemonCard;
