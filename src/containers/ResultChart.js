import React from 'react'
import Chart from 'chart.js'
// import classes from '../LineGraph.module.css'
import * as data from '../FrontEndDemoData.json'
let myLineChart;

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
// Chart.defaults.global.legend.display = false;

// const jsonData = JSON.stringify(data)
// const objData = JSON.parse(jsonData)
// const resultData = objData.default['View1 - Result Chart']
// const modelOneData = resultData.filter(info => info.MODEL ===  "Demo - Model 01")
// const modeltwoData = resultData.filter(info => info.MODEL ===  "Demo - Model 02")
// const modelThreeData = resultData.filter(info => info.MODEL ===  "Demo - Model 03")

class ResultChart extends React.Component{
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, dataTwo, dataThree, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "scatter",

            data: {
                //Bring in data
                datasets: [
                    {
                        label: "MODEL 01",
                        data: data.map(data => Object.assign({}, {x: data.LSC, y: data.A})),
                        fill: false,
                        borderColor: "#6610f2",
                        showLine: true
                    },
                    {
                        label: "MODEL 02",
                        data: dataTwo.map(data => Object.assign({}, {x: data.LSC, y: data.A})),
                        fill: false,
                        borderColor: "#127782",
                        showLine: true
                    },
                    {
                        label: "MODEL 03",
                        data: dataThree.map(data => Object.assign({}, {x: data.LSC, y: data.A})),
                        fill: false,
                        borderColor: "#ee1289",
                        showLine: true
                    }
                ]
            },
            options: {
                //Customize chart options
                title: {
                   text: 'C/E Curve Diagram',
                   display: true,
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,

                            labelString: 'Availability - A',
                            stacked: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,

                            labelString: 'Costs - LSC',
                            stacked: true
                        }
                    }]
                }
            }
        });

    }

    render() {
        debugger
        return (
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}


export default ResultChart