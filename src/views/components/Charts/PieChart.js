import React from 'react'
import Chart from 'react-apexcharts'
import './Chart.css'

function PieChart() {
  return (
    <div className='chart'>
        <Chart
        type='pie'
        width={350}
        height={350}
        series={[10,90,20,30]}
        options={
            {
                nodata:{text:"Data cannot find"},
                labels:['Maaş','Gəlir','Xərc','Komunal']
            }
        }/>
    </div>
  )
}

export default PieChart