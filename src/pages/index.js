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
          Change.
        </Typography>
        <Typography paragraph variant="h2">
          It’s at the Heart of Every Story.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={8} sx={{ textAlign: "left" }} xs={12}>
            <Divider sx={{ m: "16px 0" }} />
            <Typography paragraph variant="subtitle1">
              But instead of fairy tales, today's stories are told through
              surveys, regulatory documents, social media, and web data. It's no
              surprise that you might lose the plot as these vast sources shift
              and change.
            </Typography>
            <Typography paragraph variant="subtitle1">
              Our products illuminate the stories that are important to our
              customers. We use machine learning, artificial intelligence, and
              change detection to find the trail of breadcrumbs through the
              forest. We distill complex text into crisp summaries.
            </Typography>
            <Typography paragraph variant="subtitle1">
              We help the US military and the biggest companies in the world
              understand the stories in their data... from their customers, from
              competitors, regulators, partners, and staff.
            </Typography>
            <Typography paragraph variant="subtitle1">
              We're Fox and Geese, an Oregon-based team of data scientists,
              software engineers, and – yes – storytellers. Can we help tell
              your data story?
            </Typography>
            <Divider sx={{ m: "16px 0" }} />
          </Grid>
        </Grid>
      </div>
      <List items={products} md={6} />
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
