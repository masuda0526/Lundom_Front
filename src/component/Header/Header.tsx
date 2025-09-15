'use client';
// import { TOP_PAGE_URL } from "@/constants/constant";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import linkStyle from './linkBtn.module.css'

const Header: React.FC = () => {
  // const router = useRouter();
  const path = usePathname();
  const [isTop, setTopFlg] = useState<boolean>(path === '/')
  // const onClick = () => {
  //   if (isTop) {
  //     router.push('/roulette');
  //   } else {
  //     router.push(TOP_PAGE_URL)
  //   }
  // }
  useEffect(() => {
    setTopFlg(path === '/');
  }, [path])
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#f64728eb' }}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src="topIcon.png" alt="#" width={50} height={50} />
            <Typography
              variant={'h6'}
              noWrap
              component={'div'}
              sx={{ flexGrow: 1, display: { sm: 'block' }, color: '#fff', marginRight: 1 }}
            >
              LunDom
            </Typography>
          </Box>
        {/* <Box sx={{ position: 'relative' }}> */}
          {isTop ?
            (<Link className={linkStyle.linkToBtn} href={'/roulette'} >飲食店を決める</Link>) :
            (<Link className={linkStyle.linkToBtn} href={'/'} >TOPへ</Link>)
          }
        {/* </Box> */}
        </Toolbar>
        {/* <Button
          variant='contained'
          sx={{ position: 'absolute', right: '7px', top: '9px', backgroundColor: '#ff0000ff' }}
          onClick={onClick}>
          {isTop ? '飲食店を決める' : 'TOPへ'}
        </Button> */}
      </AppBar>
    </Box>
  )
}

export default Header;