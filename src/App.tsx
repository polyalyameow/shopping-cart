// import {useState} from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/Drawer';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/ui/core/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/ui/core/Badge';

import { Wrapper } from "./App.styles";

import Item from './Item/Item';

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async(): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data)

  // const getTotalItems = () => null;

  // const handleAddToCart = (clickedItem: CartItemType) => null;

  // const removeFromCart = () => null;

  if (isLoading) return  <div>Loading...</div>;
  if (error) return <div>Something went wrong.</div>
  

  return (
    <>
      <Wrapper>
        <Grid container spacing={3}>
          {data?.map((item) => )}
        </Grid>
      </Wrapper>
    </>
  )
}

export default App
