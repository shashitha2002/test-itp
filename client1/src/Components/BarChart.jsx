import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { defaults } from 'chart.js';
const BarChart = ({chartData}) => {

    defaults.font.size = 16

    return(
        <Bar data={chartData}/>
    )
}

export default BarChart;