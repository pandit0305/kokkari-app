import React from 'react';
import banner from '../../assets/images/banner.png';
import { Box } from '@mui/material';
import { styles } from '../../styles/style';

const HomePage = () => {
  return (
    <Box sx={styles.banner}>
      <img src={banner} alt="" style={styles.image}/>
    </Box>
  )
}

export default HomePage
