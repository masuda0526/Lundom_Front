'use client';
import { API_URL } from "@/constants/constant";
import testRestaurantData from "@/testdata/testRestaurants";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function RoulettePage() {
  const [rests, setRestaurant] = useState<string[]>([])
  // const nowDay: number = new Date().getDay();
  // testRestaurantData.forEach(r => {
  //   const isTarget: boolean = r.showFlg && !r.closeDays.includes(nowDay);
  //   if (isTarget) {
  //     for (let i = 0; i < r.rate; i++) {
  //       rests.push(r.name);
  //     }
  //   }
  // });
  const [restNum, setRestNum] = useState<number>(0);
  const [isStart, setStartFlg] = useState<boolean>(false);
  const changeRest = () => {
    const nextNum = Math.floor(Math.random()*rests.length);
    setRestNum(nextNum);
  }
  const clickStart = () => {
    setStartFlg(!isStart);
  }

  useEffect(() => {
    if(isStart){
      const interval = setInterval(() => {changeRest()}, 30);
      return () => clearInterval(interval)
    }else if(!isStart){
      return () => clearInterval(undefined);
    }
  }, [isStart]);

  // 初回にルーレットリストを取得
  useEffect(() => {
    axios.get(`${API_URL}/roulette`)
    .then(res => {
      setRestaurant(res.data.data.roulette);
    })
  }, [])

  return (
    <Box sx={{ marginTop: '150px', paddingX:'50px'}}>
      <Box>今日の昼ごはんは...</Box>
      <Box sx={{
        marginTop:'20px', 
        marginBottom:'100px',
        textAlign: 'center',
        backgroundColor:'#ffffffff',
        padding:'20px',
        borderRadius:'3px',
        boxShadow:'inset 2px 2px 2px #886666ff, inset -2px -2px 2px #f0c6c6ff'
      }}>
        {rests[restNum]}
      </Box>
      {/* <ul>
        {rests.map((r, idx) => (<li key={idx}>{r}</li>))}
      </ul> */}
      <Box sx={{textAlign:'center'}}>
        <Button variant='contained' onClick={clickStart}>{isStart?'STOP':'START'}</Button>
      </Box>
    </Box>
  )
}