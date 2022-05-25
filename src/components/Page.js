import React from "react";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import "./root.css";

const Component = ({ children, tabs }) => (
  <>
    {tabs}
    <Grid alignItems="stretch" container justifyContent="center" spacing={0}>
      <Grid style={{ marginTop: "24px", maxWidth: "1168px" }} item xs={12}>
        <div style={{ padding: "16px" }}>
          {children}
          <Footer />
        </div>
      </Grid>
    </Grid>
  </>
);

export default Component;
