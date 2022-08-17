import * as React from "react";
import Grid from "@mui/material/Grid";
import Grouped from "./filter";

export default function TransferList() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grouped />
    </Grid>
  );
}
