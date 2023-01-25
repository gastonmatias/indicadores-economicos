import { GetStaticProps, NextPage } from 'next'

import { Grid, useMediaQuery, useTheme } from '@mui/material';

import mindicadorApi from '../api/mindicadorApi';
import { IndicatorCard, Layout } from '@/components';
import { IndicatorListResponse, SmallIndicator } from '../interfaces';
import Typography from '@mui/material/Typography';
import { dateFunctions } from '@/utils';

// const inter = Inter({ subsets: ['latin'] })
interface Props {
  indicators : SmallIndicator,
  fecha: Date
}

const HomePage: NextPage<Props> = ({indicators, fecha}) => {

  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.up('xs'))

  const fecha_parseada = dateFunctions.getFormatDate(new Date(fecha))
  
  return (
    <>
    <Layout title='Home'>

      <Grid
        container 
        p={isXs? 1:3}
        spacing={isXs? 2:3}
        direction="row"
        justifyContent="center"
        // justifyContent="space-around"
        // justifyContent="space-evenly"
        alignItems="stretch"
        >
        
        <Grid item xs={12}>
          <Typography variant='body2' textTransform='capitalize'>
          {fecha_parseada}
          </Typography>
        </Grid>

      {
        Object.entries(indicators).map(([key, value]) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <IndicatorCard indicator={value}/> 
          </Grid>
          ))
        }

      </Grid>
    </Layout>
    </>
  )
}

// region[blue]
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await mindicadorApi.get<IndicatorListResponse>('')
  
  const {
    version,
    autor,
    fecha,
    ...indicators
  } = data

  return {
    props: {
      indicators,
      fecha
    },
    //ISR: Incremental Static Regeneration 
    revalidate: 86400 //60(seg) * 60(horas) * 24(horas)
  }
}
// endregion

export default HomePage
