import { Box } from '@mui/system'
import React from 'react'
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
const FooterTop = () => {
  return (
    <Box sx={{
      display: {xs:'block', sm:'flex'}
    }}>
      <FooterLeft />
      <FooterRight />
    </Box>
  )
}
export default FooterTop