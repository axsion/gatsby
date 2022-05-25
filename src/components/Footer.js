import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Github } from "mdi-material-ui";
import Divider from "@mui/material/Divider";

const Footer = props => {
  const {
    company,
    contact: { email },
  } = props.data.site.siteMetadata;
  return (
    <footer id="footer" style={{ marginBottom: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <Divider sx={{ m: "16px 0" }} />
        <Typography component="span" variant="h6">
          Fox and Geese
        </Typography>
        <br />
        <Typography component="span" variant="caption">
          Programmed in Portland, Oregon – ©{new Date().getFullYear()} {company}{" "}
          – <a href="https://policies.foxandgeese.com">Corporate Policies</a> –{" "}
          {email}
        </Typography>
        <br />
        <a
          href="https://github.com/foxandgeese/tiny-agency"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton size="large">
            <Github />
          </IconButton>
        </a>
      </div>
    </footer>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
