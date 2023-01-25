//*https://react-chartjs-2.js.org/examples/line-chart

import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FullIndicator } from '../../interfaces/indicator';
import { dateFunctions } from '@/utils';

interface Props  {
    indicator: FullIndicator
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart: FC<Props> = ({indicator}) => {
  
    const {codigo,nombre,unidad_medida,serie} = indicator

    const options = {
        // responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: `${nombre} v/s Tiempo`,
          },
        },
      };
    
    const labels = serie.map(e => dateFunctions.getFormatDateForChart(new Date(e.fecha))).reverse()

    const datasets =  [
        {
            label: codigo,
            data: serie.map((e,index) => e.valor ).reverse(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
    ]

    const data = {labels, datasets}

  
    return <Line options={options} data={data} />;
}
