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
      Products: { edges: products },
      Basic: {
        siteMetadata: { domain, defaultTitle, defaultDescription },
      },
    },
  } = props;
  return (
    <Page tabs={<Tabs active={0} />}>
      <SEO title={defaultTitle}>
        <meta content={defaultDescription} name="description" />
        <link href={domain} rel="canonical" />
      </SEO>
      <div style={{ textAlign: "center" }}>
        <Typography paragraph variant="h1">
          Agnostique TI inc.
        </Typography>
        <Typography paragraph variant="h2">
          Au coeur des solutions Infonuagiques.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={8} sx={{ textAlign: "left" }} xs={12}>
            <Divider sx={{ m: "16px 0" }} />
            <Typography paragraph variant="subtitle1">
              Agnostiques TI est une firme Canadienne fondée par un <a href="https://www.linkedin.com/in/fredericbergeron/">expert Cloud (AWS et Azure) Ex-AWS et Architecte de Solutions sénior Azure chez Microsoft</a>.
              Nous offrons des services de formation à la carte adaptés aux besoins des compagnies et individus avec les 
              technologies infonuagiques (Cloud) d'Amazon (AWS) et de Microsoft (Azure).
            </Typography>
            <Typography paragraph variant="subtitle1">
              Nous nous positionnons afin d'offrir des services d'accompagnement aux firmes qui désirent changer leurs facons de faire
              et instaurer une méthode d'infrastructure en tant que code (Infranstructure as code - IaC) dans leurs pratiques DevOps et DevSecOps).
            </Typography>
            <Typography paragraph variant="subtitle1">
              Nous aidons les plus grandes compagnies, comme les plus petites a faire le saut et évoluer
              dans leurs pratiques et migrations vers les technologies infonuagiques (Cloud).
            </Typography>
            <Typography paragraph variant="subtitle1">
              Nous sommes Agnostique TI, une firme concue pour répondre aux besoins des compagnies d'adaptation des technologies vers
              le monde, en constante évolution, de l'infonuagique.
            </Typography>
            <Divider sx={{ m: "16px 0" }} />
          </Grid>
        </Grid>
      </div>
      <List items={products} md={2} />
    </Page>
  );
};

export const query = graphql`
  query Home {
    Basic: site {
      siteMetadata {
        domain
        defaultTitle
        defaultDescription
      }
    }
    Products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            siteLink
            imageLink
            customWidth
            customTopPadding
          }
        }
      }
    }
  }
`;

export default Home;
