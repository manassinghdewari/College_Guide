import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useDispatch } from "react-redux";
import { sortCollege } from "../../redux/searchSlice";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiButtonBase-root-MuiButton-root:hover": {
    backgroundcolor: "#ffffff",
  },
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light" ? "rgb(0, 0, 0)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "black",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundcolor: "#ffffff",
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (e) => {
    setSortBy({ [e.target.name]: e.target.value });
    dispatch(sortCollege(sortBy));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleOpen}
        endIcon={<KeyboardArrowDownIcon />}
        className="text-black border sorbtn"
      >
        Sort-By
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onChange={handleClick}
          onClick={handleClose}
          name="Rank"
          value={sortBy}
          disableRipple
        >
          <TrendingUpIcon />
          Rank
        </MenuItem>
        <MenuItem
          onChange={handleClick}
          onClick={handleClose}
          name="Fees"
          value={sortBy}
          disableRipple
        >
          <CurrencyRupeeIcon />
          Fees
        </MenuItem>
        <MenuItem
          onChange={handleClick}
          onClick={handleClose}
          name="Rating"
          value={sortBy}
          disableRipple
        >
          <ThumbUpIcon />
          Rating
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
