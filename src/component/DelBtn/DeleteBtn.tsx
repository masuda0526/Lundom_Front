import { API_URL } from '@/constants/constant';
import Restaurant from '@/interface/Restaurant';
import { restaurantStore } from '@/store/restraurantStore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

interface Props {
  id: string | null,
  name: string,
}
const DeleteBtn: React.FC<Props> = (props) => {
  const ConfMsg = `「${props.name}」を削除してもよろしいですか？`
  const setRests = restaurantStore(s => s.setRestaurants);
  const handleClick = () => {
    if (confirm(ConfMsg)) {
      doDeleteAPI();
    }
  }

  const doDeleteAPI = () => {
    axios.post(`${API_URL}/delete`, {
      id:props.id
    }).then(res => {
      setRests(res.data.data.rests);
    })
  }
  return (
    <DeleteForeverIcon
      sx={{ color: '#8c8c8cff' }}
      onClick={() => handleClick()}
    ></DeleteForeverIcon>
  )
}
export default DeleteBtn;