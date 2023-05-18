import React from 'react'



import Slider from '@mui/material/Slider'
import { Stack, Typography } from '@mui/material'


const SliderComponent = ({ defaultValue, min, max, amount, label, unit ,step,value, onChange }) => {
  return (


    <Stack my={1.4}>

      <Stack gap={2}>
        <Typography variant='subtitle2'> {label} </Typography>
        <Typography variant='h5'> {unit} {amount} </Typography>
      </Stack>

      <Slider min={min}
      max={max}
      defaultValue={defaultValue} 
      value = {value}
      onChange= {onChange}
      aria-label="Default"
      valueLabelDisplay="auto"
      marks step={step} />

      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption' color='text.disabled' > {unit} {min} </Typography>
        <Typography variant='caption' color='text.disabled'> {unit} {max} </Typography>
      </Stack>

    </Stack>
  )
}

export default SliderComponent