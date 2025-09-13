import { API_URL } from '@/constants/constant';
import Restaurant from '@/interface/Restaurant';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

interface Props {
  id: string | null,
  name: string,
  setRests: (rs: Restaurant[]) => void
}
const DeleteBtn: React.FC<Props> = (props) => {
  const ConfMsg = `「${props.name}」を削除してもよろしいですか？`
  const handleClick = () => {
    if (confirm(ConfMsg)) {
      doDeleteAPI();
    }
  }

  const doDeleteAPI = () => {
    axios.post(`${API_URL}/delete`, null, {
      params: { id: props.id }
    }).then(res => {
      props.setRests(res.data)
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