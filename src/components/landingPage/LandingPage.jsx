import React from 'react';
import banner from '../../assets/images/banner.png';
import { Box } from '@mui/material';
import { styles } from '../style';
import HomeSection from '../homeSection/HomeSection';

const LandingPage = () => {
  return (
    <Box sx={styles.banner}>
      <img src={banner} alt="" style={styles.image}/>
      <HomeSection/>
    </Box>
  )
}

export default LandingPage
