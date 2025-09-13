'use client';

import { getDays } from "@/component/utils/dayUtil";
import Restaurant from "@/interface/Restaurant";
import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider, TextField } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/constants/constant";
import Link from "next/link";
import styles from './button.module.css'

interface Props{
  isEdit:boolean,
  registFunc:() => void,

}

export const EditForm: React.FC<Props> = (props) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  
  // 飲食店を状態管理
  const [rest, setRestaurant] = useState<Restaurant>(defaultRestaurant());

  useEffect(() => {
    if(props.isEdit){
      axios.get(`${API_URL}/restaurant/${params.id}`)
      .then(res => {
        setRestaurant(res.data);
      })
    }else{
      setRestaurant(defaultRestaurant());
    }
  }, [])
  // レート
  const handleChangeRate = (event: Event, newVal: number) => {
    setRestaurant({ ...rest, rate: newVal })
  }
  // 飲食店名
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setRestaurant({ ...rest, name: name });
  }
  // 休業日
  const handleClickDay = (val: number) => {
    const isContain = rest.closeDays.includes(val);
    if (isContain) {
      setRestaurant({ ...rest, closeDays: [...rest.closeDays.filter(n => n != val)] })
    } else {
      setRestaurant({ ...rest, closeDays: [...rest.closeDays, val] })
    }
  }
  // シャッフル対象にするか
  const handleClickRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const flg = event.target.value === '1';
    setRestaurant({ ...rest, showFlg: flg });
  }
  // 提出処理
  const handleSubmit = () => {
    if(props.isEdit){
      update();
    }else{
      create();
    }
    props.registFunc();
    router.push('/')
  }
  // create
  const create = () => {
    axios.post(`${API_URL}/create`, rest);
  }
  // update
  const update = () => {
    axios.post(`${API_URL}/update`, rest)
  }
  return (
    <Box sx={{ display: 'grid', gap: 2 , marginTop:'70px'}}>
      <Card sx={{ padding: 3 }}>
        <Box sx={{ marginBottom: 2, width: '100%' }}>
          <FormControl sx={{ width: '100%' }}>
            <FormLabel>飲食店名</FormLabel>
            <TextField variant="outlined" value={rest.name} fullWidth onChange={handleChangeName} />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>定休日を選択</FormLabel>
          <Box sx={{ display: 'flex', gap: 6 }}>
            <FormGroup sx={{ paddingLeft: 3 }}>
              {getDays().slice(0, 4).map((d) => (
                <FormControlLabel
                  key={d.key}
                  control={
                    <Checkbox sx={{ marginBottom: 1 }} checked={rest.closeDays.includes(d.value)} onClick={() => handleClickDay(d.value)} />
                  }
                  label={d.ja}
                ></FormControlLabel>
              ))}
            </FormGroup>
            <FormGroup sx={{ paddingLeft: 3 }}>
              {getDays().slice(4).map((d) => (
                <FormControlLabel
                  key={d.key}
                  control={
                    <Checkbox sx={{ marginBottom: 1 }} checked={rest.closeDays.includes(d.value)} onClick={() => handleClickDay(d.value)} />
                  }
                  label={d.ja}
                ></FormControlLabel>
              ))}
            </FormGroup>
          </Box>
        </FormControl>
        <Box sx={{ marginBottom: 3 }}>
          <FormControl sx={{ width: '100%' }}>
            <FormLabel>レート</FormLabel>
            <Slider
              value={rest.rate}
              valueLabelDisplay="auto"
              step={1} marks
              min={1} max={10}
              onChange={handleChangeRate}
            ></Slider>
          </FormControl>
        </Box>
        <Box sx={{marginBottom:2}}>
          <FormControl >
            <FormLabel>シャッフル対象に入れるか</FormLabel>
            <RadioGroup value={rest.showFlg ? '1' : '0'} onChange={handleClickRadio} row>
              <FormControlLabel control={<Radio />} value={'1'} label='入れる' sx={{ marginRight: 5 }} />
              <FormControlLabel control={<Radio />} value={'0'} label='入れない' />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          {/* <Button variant='contained' onClick={handleSubmit}></Button> */}
          <Link className={styles.EditBtn} href={'/'} onClick={handleSubmit}>{props.isEdit?'修正する':'登録する'}</Link>
        </Box>
      </Card>
    </Box>
  )
}
export default EditForm;

const defaultRestaurant = (): Restaurant => {
  return {
    id : null,
    name : '',
    closeDays : [],
    rate : 5,
    showFlg : true
  }
}