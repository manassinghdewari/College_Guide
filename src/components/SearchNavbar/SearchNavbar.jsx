import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SortBtn from "./SortBtn";

const SearchNavbar = () => {
  return (
    <div className="align-items: center; justify-center flex mt-1.5">
      <AppBar className="bg-white w-9/12 shadow-none" position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 0.3 }} />
          <Typography
            className="text-black"
            variant="h6"
            noWrap
            component="div"
          >
            "Bengaluru"
          </Typography>
          <Box sx={{ flexGrow: 0.9 }} />
          <SortBtn />
          <Box sx={{ flexGrow: 0.05 }} />
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default SearchNavbar;
