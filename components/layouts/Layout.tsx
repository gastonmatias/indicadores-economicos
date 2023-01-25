import { FC, ReactNode } from "react"

import { Box, Toolbar } from "@mui/material"
import Head from "next/head"

import { ClippedDrawer } from "../ui";

interface Props {
    title?:   string;
    children: ReactNode
}

export const Layout: FC<Props> = ({title = 'OpenJira' , children}) => {
  return (
    <>
    {/* <Box sx={{flexFlow: 1}} > */}
    <Box sx={{display: "flex"}} >
        <Head>
            <title>{title}</title>
        </Head>
        
        {/* <Navbar/> */}
        <ClippedDrawer/>
        
        {/* <Box sx={{padding: '10px 20px'}}> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar/> {/* para espaciado entre navbar y children! */}
            {children}
        </Box>

    </Box>

    </>
  )
}