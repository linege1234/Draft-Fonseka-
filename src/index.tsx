import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./table/grid";
import Field from "./field/filed";
import Divider from "@mui/material/Divider";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <div style={{ width: 800 }}>
        <Demo />
      </div>
      <Divider />
      <>
        <h1>Soccer Team</h1>
        <Field />
      </>
    </StyledEngineProvider>
  </React.StrictMode>
);
