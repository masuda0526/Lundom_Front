'use client';
import { convertDayView } from "@/component/utils/dayUtil";
import Restaurant from "@/interface/Restaurant";
import { Card, CardActions, CardContent, Link, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteBtn from "../DelBtn/DeleteBtn";

const Item: React.FC<Restaurant> = (props) => {
  const router = useRouter();
  const star = (): string => {
    let str = '';
    for (let i = 0; i < props.rate; i++) {
      str += '★';
    }
    return str
  }

  const handleClick = () => {
    router.push(`/item/${props.id}`)
  }
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontWeight: 700 }}>{props.name}</Typography>
        <Typography>定休日：{convertDayView(props.closeDays)}</Typography>
        <Typography>レート：{star()}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', paddingRight: 2 , display:'flex'}}>
        <DeleteBtn 
          id={props.id}
          name = {props.name}
        ></DeleteBtn>
        <Link onClick={() => handleClick()}>
          編集する
        </Link>
      </CardActions>
    </Card>
  )
}
export default Item;