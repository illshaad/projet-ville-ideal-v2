import React, { useState } from "react";
import PopoverMui from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FlexContainer, Card, ContainerInformation } from "../../styles/global";

export default function Popover({ size, findUserNoteByCity }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    education,
    environement,
    health,
    trade,
    transports,
    culture,
    security,
    sportAndLeasur,
    qualityOfLife,
    remarkPositive,
    remarkNegative,
    totalRating,
  } = findUserNoteByCity[0];

  const educationParse = parseInt(education);
  const environementParse = parseInt(environement);
  const healthParse = parseInt(health);
  const tradeParse = parseInt(trade);
  const transportsParse = parseInt(transports);
  const securityParse = parseInt(security);
  const cultureParse = parseInt(culture);
  const sportAndLeasurParse = parseInt(sportAndLeasur);
  const qualityOfLifeParse = parseInt(qualityOfLife);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        aria-describedby={open && "simple-popover"}
        onClick={handleClick}
        color="inherit"
        size={size}
      >
        les avis
      </Button>
      <PopoverMui
        id={open && "simple-popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
        }}
      >
        <FlexContainer>
          <div>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Environement: {environementParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Transports: {transportsParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Securité: {securityParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Santé: {healthParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Sport et Loisir: {sportAndLeasurParse}/10
              </Typography>
            </ContainerInformation>
          </div>
          <div>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Culture: {cultureParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Enseignement: {educationParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Commerce: {tradeParse} /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Qualité de Vie: {qualityOfLifeParse}/10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Note Global: {totalRating}/10
              </Typography>
            </ContainerInformation>
          </div>
        </FlexContainer>

        <FlexContainer>
          <Card overflow="scroll">
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ p: 1 }}
              align="center"
              variant="h6"
            >
              Avis positifs
            </Typography>
            <Typography>{remarkPositive}</Typography>
          </Card>
          <Card overflow="scroll">
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ p: 1 }}
              align="center"
              variant="h6"
            >
              Avis negatif
            </Typography>
            <Typography>{remarkNegative}</Typography>
          </Card>
        </FlexContainer>
        {/* <Button size="small" color="success">
          Accepter
        </Button>
        <Button size="small" color="error">
          Refuser
        </Button> */}
      </PopoverMui>
    </div>
  );
}
