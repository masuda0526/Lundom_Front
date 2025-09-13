'use client';
import Restaurant from "@/interface/Restaurant";
import { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from "@mui/material";
import axios from "axios";
import { API_URL } from "@/constants/constant";

const List:React.FC = () => {
  const [items , setItems] = useState<Restaurant[]>([]);
  useEffect(() => {
    axios.get(`${API_URL}/restaurants`,)
    .then(res => {
      setItems(res.data);
    })
    // setItems(testRestaurantData);
  },[]);


  return (
    <Box sx={{display:'grid', gap:2, }}>
      {items.map(item => (
        <Item key={item.id} {...item} setList={setItems}></Item>
      ))}
    </Box>
  )
}

export default List;