'use client';
import List from "@/component/List/List";
import { Box } from "@mui/material";
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push('/item/new');
  }
  return (
    <>
      <Box sx={{ marginY: '70px' }}>
        <List></List>
      </Box>
      <AssignmentAddIcon
        sx={{
          fontSize: '40px',
          color: '#4d4d4dff',
          position: 'fixed',
          bottom: '15px',
          right: '15px'
        }}
        onClick={onClick}
      />
    </>
  );
}
