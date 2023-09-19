"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

import Logo from "../../../components/SVG/Logo";
import SearchBar from "@/components/SearchBar";
import SelectComponent from "@/components/Select";

export default function FirstNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const languages = [
    {
      name: "English",
      flagUrl: "/assets/images/Country.svg",
    },
    {
      name: "Arabic",
      flagUrl: "/assets/images/Country.svg",
    },
    {
      name: "German",
      flagUrl: "/assets/images/Country.svg",
    },
  ];
  const currencies = [
    {
      name: "USD $",
    },
    {
      name: "ILS ₪",
    },
    {
      name: "EUR €",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Logo />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              ml: 2,
              fontSize: "32px",
            }}
          >
            K STORE
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <SearchBar />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Divider orientation="vertical" variant="middle" flexItem sx={{}} />

            <SelectComponent initialSelectedValue={languages[0].name}>
              {languages.map((language) => (
                <SelectComponent.Item
                  key={language.name}
                  value={language.name}
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={language.flagUrl}
                    alt={language.name}
                    width="20px"
                    height="20px"
                  />
                  {language.name}
                </SelectComponent.Item>
              ))}
            </SelectComponent>

            <Divider orientation="vertical" variant="middle" flexItem />

            <SelectComponent initialSelectedValue={currencies[0].name}>
              {currencies.map((currency) => (
                <SelectComponent.Item
                  key={currency.name}
                  value={currency.name}
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {currency.name}
                </SelectComponent.Item>
              ))}
            </SelectComponent>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
