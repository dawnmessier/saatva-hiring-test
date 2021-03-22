import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HotelIcon from '@material-ui/icons/Hotel';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';

//Theme
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.jsx';
import './App.scss';


const App = () => {
  const [current, setCurrent] = useState('');
  const [products, setProducts] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [productRating, setProductRating] = useState(0);

  useEffect(() => {
    const getData = () => {
      fetch('/data/mattresses.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          const products = data.mattresses;
          const current = Object.keys(products)[0];
          setProducts(products);
          setCurrent(current);
          setProductRating(products[current].reviewRating);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    getData();
  }, []);

  const handleOnChange = (e) => {
    let value = e.target.value;
    setCurrent(e.target.value);
    setProductRating(products[value].reviewRating);
  }

  const handleSubmit = e => {
    setCartCount(cartCount + 1);
    e.preventDefault();
  }

  const StyledRating = withStyles({
    icon: {
      marginRight: '10px'
    },
    iconFilled: {
      color: '#2f8aad',
    }
  })(Rating);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" className="main-container">
        <AppBar position="fixed" className="header">
          <Container maxWidth="lg">
            <div className="header-content">
              <div className="logo">
                <svg name="saatvaLogo" role="img" alt="Saatva Logo" description="Saatva Logo" viewBox="0 0 180 38.3" width="180" height="38.3" aria-labelledby="saatvaLogo"><title id="saatvaLogo">Saatva Logo</title><path d="M59.8,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3L59.8,37.5z M44.4,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C54.8,15.7,50,10.5,44.4,10.5z"></path><path d="M96.3,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3L96.3,37.5z M80.8,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C91.3,15.7,86.5,10.5,80.8,10.5z"></path><path d="M115,37.5c-7.2,0.8-12.2-3.4-12.2-11.3V0h5v6.6h7v4.9h-7v14.8c0,5.5,3.3,6.8,7.1,6.6V37.5z"></path><path d="M119.2,6.6h5.4l8.5,24.1h0.1l8.5-24.1h5.4l-11.2,30.9h-5.5L119.2,6.6z"></path><path d="M180,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3V37.5z M164.5,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C175,15.7,170.2,10.5,164.5,10.5z"></path><path d="M0,33.2c3.6,3.2,8.2,5,13,4.9c6.8,0,11.2-3.7,11.2-9.3v-0.1c0-4.8-2.8-7.4-10-9.1c-6-1.4-7.6-2.5-7.6-5.1v-0.1c0-2.3,2.2-3.9,5.3-3.9c3.1,0.1,6.1,1.2,8.5,3.2l2.8-4C20,7.2,16,5.8,11.9,5.9c-6.3,0-10.7,3.7-10.7,9V15c0,5.7,3.7,7.7,10.4,9.3c5.5,1.3,7.2,2.4,7.2,5v0.1c0,2.5-2.3,4.1-5.7,4.1c-3.6,0-6.7-1.3-10-4.1L0,33.2z"></path></svg>
              </div>
              <div className="cart"><span className="cart-icon"><ShoppingCartOutlinedIcon style={{ fontSize: 30 }} /></span><span data-testid="cartCount" className="cart-count">{cartCount}</span></div>
            </div>
          </Container>
        </AppBar>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            {products && current && products[current].imageFileName && <img src={`/images/${ products[current].imageFileName }`} alt={products[current].name} />}
          </Grid>
          <Grid item xs={12} md={5}>
            <h1>Choose Your Mattress</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl component="fieldset" className="form-product">
                <FormLabel component="legend">Select Mattress Type</FormLabel>
                <RadioGroup aria-label="product" name="product" value={current ? current : ''} onChange={(e) => handleOnChange(e)} className="radio-group">
                  {products && Object.keys(products).map(key => {
                    return <FormControlLabel className={`form-radio ${ key === current ? 'is-selected' : '' }`} key={key} value={key} control={<Radio className="radio-button" />} label={products[key].name} />
                  })}
                </RadioGroup>
              </FormControl>
              <div className="product-details">
                {products && current && products[current].name} Mattress
							<span className="price">${products && current && products[current].price}</span>
              </div>
              <div className="product-rating">
                <Typography component="legend">{products && current && products[current].name} Mattress Rating</Typography>
                <StyledRating
                  value={productRating}
                  precision={0.5}
                  readOnly={true}
                  icon={<HotelIcon fontSize="inherit" />}
                  emptyIcon={<HotelOutlinedIcon fontSize="inherit" />}
                  getLabelText={(productRating) => `${ productRating } Happy Sleeper${ productRating !== 1 ? 's' : '' }`}
                />
              </div>

              <Button
                data-testid="addToCart"
                variant="contained"
                type="submit"
                fullWidth>Add to Cart</Button>
            </form>
          </Grid>
        </Grid >
      </Container>
    </ThemeProvider>
  );
}

export default App;
