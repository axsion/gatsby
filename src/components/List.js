import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Link = props =>
  props.siteLink ? (
    <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <>{props.children}</>
  );

const List = props => {
  return (
    <Grid alignItems="stretch" container justifyContent="center" spacing={2}>
      {props.items.map(edge => {
        const {
          node: {
            html,
            frontmatter: {
              title,
              siteLink,
              imageLink,
              customWidth,
              customTopPadding,
            },
          },
        } = edge;
        return (
          <Grid item key={title} md={props.md || 4} xs={12}>
            <Card
              sx={{
                height: "100%",
              }}
            >
              {siteLink ? undefined : (
                <CardMedia
                  image={imageLink}
                  sx={{
                    height: "150px",
                  }}
                />
              )}
              <CardContent>
                {siteLink ? (
                  <div style={{ minHeight: "150px" }}>
                    <center>
                      <Link siteLink={siteLink}>
                        <img
                          alt={title}
                          src={imageLink}
                          style={{
                            paddingTop: customTopPadding,
                            width: customWidth,
                          }}
                        />
                      </Link>
                    </center>
                  </div>
                ) : (
                  <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                    }}
                    variant="h4"
                  >
                    <Link siteLink={siteLink}>{title}</Link>
                  </Typography>
                )}
                <Typography
                  component="div"
                  dangerouslySetInnerHTML={{ __html: html }}
                  variant="body1"
                />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
