import React from "react";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Typography from "@mui/material/Typography";

export default function Component() {
  return (
    <Page>
      <SEO title="Page Not Found">
        <link href="https://foxandgeese.com" rel="canonical" />
      </SEO>
      <center>
        <Typography
          color="primary"
          component="span"
          gutterBottom
          paragraph
          variant="h3"
        >
          Hey! You just hit a page that doesn't exist.
        </Typography>
      </center>
    </Page>
  );
}
