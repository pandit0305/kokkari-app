import React from "react";
import { Box,Toolbar, Typography } from "@mui/material";
import { styles } from "../style";

const Footer = () => {
  return (
    <Toolbar sx={styles.box}>
        <Box sx={styles.footer}>
            <Box>© 2023-2024 Kokkari</Box>
            <Box>
                Kokkari By Dev Team | Site by Dev Team
            </Box>
        </Box>
    </Toolbar>
  );
};

export default Footer;
