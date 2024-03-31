import { useState } from 'react'
import {Box , Typography, TextField, Button} from '@mui/material';


function MessageBox() {

  return (
    <>
      <div>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <Typography variant="body1" mb={2} fontWeight="bold">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
            </Typography>
            <Button variant="contained">
                Button
            </Button>
        </Box>
      </div>
    </>
  )
}

export default MessageBox