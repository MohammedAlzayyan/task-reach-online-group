"use client";

import * as React from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Divider,
  Menu,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles"; // Import useTheme
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery
import Logo from "../../../components/SVG/Logo";
import SearchBar from "@/components/SearchBar";
import SelectComponent from "@/components/Select";
import Image from "next/image";

const pages = ["Home", "Products", "Categories", "Offers", "Contact Us"];

export default function FirstNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box
            sx={{
              // display: "flex",
              // justifyContent: "space-between",
              backgroundColor: "red",
              width: "100%",
            }}
          > */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              src="/assets/images/Logo2.png"
              alt="logo"
              width={48}
              height={48}
            />
          </Box>
          <Typography
            variant="h6"
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            K STORE
          </Typography>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, ml: 20, flexGrow: 1 }}
          >
            <SearchBar />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Divider orientation="vertical" variant="middle" flexItem />

            <SelectComponent initialSelectedValue={languages[0].name}>
              {languages.map((language) => (
                <SelectComponent.Item
                  key={language.name}
                  value={language.name}
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Image
                    src={language.flagUrl}
                    alt={language.name}
                    width={20}
                    height={20}
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
          {/* </Box> */}

          {/* Responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image
              src="/assets/images/Logo2.png"
              alt="logo"
              width={48}
              height={48}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            K STORE
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
