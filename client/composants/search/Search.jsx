import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDataCity } from "../../context/context";
import { Container } from "@mui/material";
export default function Search({ dataIleDeFrance }) {
  const { setDinamiqueMarker } = useDataCity();

  const nameCity = dataIleDeFrance?.dataAll.map((e) => {
    if (e.centre) {
      return {
        label: e.nom,
        value: e.nom,
        lat: e.centre.coordinates[1],
        long: e.centre.coordinates[0],
      };
    }
  });

  const defaultProps = {
    options: nameCity,
    getOptionLabel: (option) => option.label,
  };

  return (
    <Container>
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        onChange={(e, option) => setDinamiqueMarker(option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Rechercher votre ville"
            variant="outlined"
          />
        )}
      />
    </Container>
  );
}
