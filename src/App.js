
import { Container, Grid } from '@mui/material';
import React,{useState} from 'react';


import './App.css';
import Navbar from './components/Navbar';
import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import Tenure from './components/Tenure';

function App() {


  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  });


  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{marginTop: 5}}>
        <Grid container spacing={5} alignItems="center">

          {/* left */}
          <Grid item md={6} xs={12} >

            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData}/>

          </Grid>

          {/* right */}
          <Grid item md={6} xs={12}>
            <Result data={data} />
          </Grid>
        </Grid>



      </Container>
    </div>
  );
}

export default App;
