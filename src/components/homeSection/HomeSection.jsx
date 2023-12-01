import React from "react";
import { styles } from "../../styles/style";
import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const HomeSection = () => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <Box sx={styles.container}>
      <Box sx={styles.menu}>
        <Box sx={!matches ? styles.menu : styles.font}>
          <Typography variant="h5" sx={styles.btn1}>
            PRESS ROOM
          </Typography>
          <Typography variant="h5" sx={styles.btn1}>
            GIFT CERTIFICATES & COOKBOOK
          </Typography>
          <Typography variant="h5" sx={styles.btn1}>
            CONTACT
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.menu}>
        <Typography variant="h5" sx={styles.mr}>
          KOKKARI
        </Typography>
        <Typography variant="h5" sx={styles.mr}>
          |
        </Typography>
        <Typography variant="h5" sx={styles.mr}>
          EVVIA
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={styles.text}>
          KOKKARI ESTIATORIO
        </Typography>
        <Typography variant="h5" sx={styles.text}>
          200 JACKSON STREET (AT FRONT ST.)
        </Typography>
        <Typography variant="h5" sx={styles.text}>
          SAN FRANCISCO, CA 94111
        </Typography>
        <Typography variant="h5" sx={styles.phone}>
          P: <span style={styles.pColor}>415.981.0983</span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={styles.text1}>
          RESERVATIONS & HOURS DIRECTIONS
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeSection;
