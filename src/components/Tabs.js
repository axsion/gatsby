import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Alien } from "mdi-material-ui";
import { Robot } from "mdi-material-ui";
import { ChessQueen } from "mdi-material-ui";

const Component = ({ active, body }) => {
  const items = [
    {
      icon: <Robot />,
      text: "Our Products",
      link: "/",
    },
    {
      icon: <Alien />,
      link: "/skills/",
      text: "Our Skills",
    },
    {
      icon: <ChessQueen />,
      link: "/principles-and-tactics/",
      text: "Our Principles & Tactics",
    },
  ];

  return (
    <AppBar color="primary" position="sticky" sx={{ marginBottom: "40px" }}>
      <Tabs
        centered
        indicatorColor="secondary"
        textColor="inherit"
        value={active}
        variant="fullWidth"
      >
        {items.map(({ text, icon, link }, index) => (
          <Tab component="a" href={link} icon={icon} key={text} label={text} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default Component;
