import { IndicatorCard, IndicatorDetails } from "@/components";
import { Layout } from "@/components/layouts/Layout"
import { FullIndicator, IndicatorListResponse, SmallIndicator, UnidadMedida } from "@/interfaces";
import { addSymbolToValue, dateFunctions, unidadesDeMedida } from "@/utils";
import { Card, CardContent, CardHeader, Divider, Grid, Toolbar, Typography } from "@mui/material"
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import mindicadorApi from '../../api/mindicadorApi';

interface Props  {
  indicator: FullIndicator
}

const IndicatorName: NextPage<Props> = ({indicator}) => {
  
  const {version,autor,codigo,nombre,unidad_medida,serie} = indicator

  return (
    <>
    <Layout title={indicator.nombre}>
      <Grid 
        container 
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
        <Grid item xs={12}>
          <Divider/>
          <Typography variant="h4" my={1} >{indicator.nombre}</Typography>
          <Divider/>
        </Grid>
        
        <Grid item xs={12} sm={4} justifyContent='center'>
                {/* <Typography variant="h4">Hoy</Typography> */}
                <Card sx={{mx:0, my:4,maxWidth: 280}}  >
                {/* <Card sx={{mx:0, py:0, minWidth:'300px'}}  > */}
                    <CardHeader 
                      title='Actual' 
                      // title='Last Update' 
                      subheader={dateFunctions.getFormatDateForCard(new Date(indicator.serie[0].fecha))}/>
                    <CardContent>
                        <Typography align='center' variant="h4">{addSymbolToValue(unidad_medida, indicator.serie[0].valor)}</Typography>
                        {/* <Typography variant="body2">{dateFunctions.getFormatDateForCard(new Date(indicator.serie[0].fecha))}</Typography> */}
                    </CardContent>
                </Card>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Typography variant="h5">Historial</Typography>
          <IndicatorDetails indicator={indicator}/>
        </Grid>

        {/* {serie.map((e,index) => (
            <Grid item key={e.fecha.toString()} xs={3}>
                <Card sx={{mx:1, py:1}} >
                    <CardContent>
                        <Typography variant="h5">{addSymbolToValue(unidad_medida, e.valor)}</Typography>
                        <Typography variant="body2">{dateFunctions.getFormatDateForCard(new Date(e.fecha))}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))} */}

      </Grid>

    </Layout>
    </>
  )
}
export default IndicatorName

// region[green2]
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const {data} = await mindicadorApi.get<IndicatorListResponse>('')
  
  const {version,autor,fecha,...indicators} = data

  const indicatorsNames = Object.entries(indicators).map( ([key, value]) => key)

  return {
      paths: indicatorsNames.map( e => (
          {params: {name: e}}
      ))
      ,
      // fallback: false
      fallback: 'blocking'
  }
}
// endregion

// region[blue]
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const {name} = params as {name: string}

  const {data} = await mindicadorApi.get<FullIndicator>(`/${name}`)

  return {
    props: {
      indicator: data
    },
    //ISR: Incremental Static Regeneration 
    revalidate: 86400 //60(seg) * 60(horas) * 24(horas)
  }
}
// endregion

