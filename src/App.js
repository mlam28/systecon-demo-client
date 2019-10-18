import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResultChart from './containers/ResultChart'
import ResultTable from './containers/ResultTable'
import * as data from './FrontEndDemoData.json'

const jsonData = JSON.stringify(data)
const objData = JSON.parse(jsonData)
const chartData = objData.default['View1 - Result Chart']
const modelOneData = chartData.filter(info => info.MODEL ===  "Demo - Model 01")
const modelTwoData = chartData.filter(info => info.MODEL ===  "Demo - Model 02")
const modelThreeData = chartData.filter(info => info.MODEL ===  "Demo - Model 03")

const tableData = objData.default["View2 - Result Table"]
const modelOneTable = tableData.filter(info => info.MODEL === "Demo - Model 01")
const modelTwoTable = tableData.filter(info => info.MODEL === "Demo - Model 02")
const modelThreeTable = tableData.filter(info => info.MODEL === "Demo - Model 03")



class App extends React.Component{

  state={
    open: false
  }

  render(){
    return (
      <div className="App">
        <script src='./FrontEndDemoData.json'></script>
        <ResultChart data={modelOneData} dataTwo={modelTwoData} dataThree={modelThreeData}/>
        <ResultTable />
      </div>
    );
  }
}

export default App;
