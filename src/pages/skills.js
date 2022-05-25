import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import List from "../components/List";
import Tabs from "../components/Tabs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Home = props => {
  const {
    data: {
      Services: { edges: services },
      Basic: {
        siteMetadata: { domain },
      },
    },
  } = props;
  const title = "We Monitor Web Changes";
  return (
    <Page tabs={<Tabs active={1} />}>
      <SEO title={title}>
        <meta
          content={
            "Web change detection is our origin story, but that's where our tale just begins."
          }
          name="description"
        />
      </SEO>
      <div style={{ textAlign: "center" }}>
        <Typography paragraph variant="h1">
          {title}.
        </Typography>
        <Typography paragraph variant="h2">
          But That’s Just the Start of Our Tale.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={8} sx={{ textAlign: "left" }} xs={12}>
            <Divider sx={{ m: "16px 0" }} />
            <Typography paragraph variant="subtitle1">
              Our origin story is web change detection.
            </Typography>
            <Typography paragraph variant="subtitle1">
              Depuis des années nous nous sommes formés et avons travaillés pour les plus grandes firmes infonuagiques (Cloud) au monde.
              . Nos compétences incluent une expertise parmi{" "}
              <a target="_blank" href="https://azure.microsoft.com/">
                Microsoft - Azure
              </a>
              <a target="_blank" href="https://aws.amazon.com/">
                Amazon - AWS
              </a>
              , tant pour la formation que pour les technologies d'infrastructure en tant que code (IaC).
            </Typography>
            <Typography paragraph variant="subtitle1">
              But there's a bigger theme in our story: text intelligence.
            </Typography>
            <Typography paragraph variant="subtitle1">
              Simply, we derive insights from text. We summarize complex
              regulatory documents. We use AI/ML to distill topics from surveys.
              We use named entity recognition to surface and link attributes
              from social media. And, yes, we track changes across versions.
            </Typography>
            <Typography paragraph variant="subtitle1">
              While working for Fortune 500 companies across the world –
              including in home base Portland, Oregon and Seattle, Washington –
              our founder, Peter Bray, recognized the appeal of document
              intelligence for the enterprise. Fox and Geese's products
              accelerate insights through change detection, automation, and
              artificial intelligence.
            </Typography>
            <Typography paragraph variant="subtitle1">
              At the same time, we recognize that even the best products
              sometimes have a hard time integrating into complex enterprise
              environments. For this reason, much of our time is spent
              integrating our products into existing processes and corporate
              environments.
            </Typography>
            <Divider sx={{ m: "16px 0" }} />
          </Grid>
        </Grid>
      </div>
      <List items={services} />
    </Page>
  );
};

export const query = graphql`
  query Skills {
    Basic: site {
      siteMetadata {
        domain
      }
    }
    Services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
  }
`;

export default Home;
