'use client';
import Restaurant from "@/interface/Restaurant";
import { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from "@mui/material";
import axios from "axios";
import { API_URL } from "@/constants/constant";
import { restaurantStore } from "@/store/restraurantStore";

const List:React.FC = () => {
  const rests = restaurantStore((s) => s.restaurants);
  const setRests = restaurantStore((s) => s.setRestaurants);
  useEffect(() => {
    axios.get(`${API_URL}/restaurants`,)
    .then(res => {
      // console.log(res.data)
      setRests(res.data.data.restaurants);
    })
  },[]);


  return (
    <Box sx={{display:'grid', gap:2, }}>
      {rests.map(rest => (
        <Item key={rest.id} {...rest}></Item>
      ))}
    </Box>
  )
}

export default List;