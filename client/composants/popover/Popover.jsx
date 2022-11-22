import React, { useState } from "react";
import PopoverMui from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FlexContainer, Card, ContainerInformation } from "../../styles/global";

export default function Popover({ size, e }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { remarkPositive, remarkNegative } = e;

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
      </PopoverMui>
    </div>
  );
}
