import { useState } from 'react'
import {Box , Typography,} from '@mui/material';

function ChatBox() {

  return (
    <>
      <div>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          <Typography variant="body1" mb={2} fontWeight="bold">
              ChatBox
          </Typography>
        </Box>
      </div>
    </>
  )
}

export default ChatBox
