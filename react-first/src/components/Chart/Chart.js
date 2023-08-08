import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    const dataPointsValues=props.dataPoints.map(dp=>dp.value);
    const totalMax=Math.max(...dataPointsValues)
    return <div className="chart">
        {props.dataPoints.map(point => <ChartBar value={point.value} maxValue={totalMax} label={point.label}
                                                 key={point.label}/>)}
    </div>
};
export default Chart;