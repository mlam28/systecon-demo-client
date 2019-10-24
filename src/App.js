import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResultChart from './containers/ResultChart'
import ResultTable from './containers/ResultTable'
import ModelViewEditor from './containers/ModelViewEditor'
import * as data from './FrontEndDemoData.json'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import MenuBar from './containers/MenuBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'


const jsonData = JSON.stringify(data)
const objData = JSON.parse(jsonData)
const chartData = objData.default['View1 - Result Chart']
const modelOneData = chartData.filter(info => info.MODEL ===  "Demo - Model 01")
const modelTwoData = chartData.filter(info => info.MODEL ===  "Demo - Model 02")
const modelThreeData = chartData.filter(info => info.MODEL ===  "Demo - Model 03")

const tableData = objData.default["View2 - Result Table"]

const editorData = objData.default['View3 - Model Table']



class App extends React.Component{

  state={
    open: false
  }

  componentDidMount(){
    console.log(tableData)
    debugger
  }


  render(){

    return (
      <React.Fragment>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

        </head>
      <div className="App">
        <MenuBar></MenuBar>
        <Router>
        <Route exact path='/'>
          <ResultChart data={modelOneData}  dataTwo={modelTwoData} dataThree={modelThreeData}/>
        </Route>

        <Route exact path='/table'>
          <div id='table-wrapper'>
            <ResultTable data={tableData} />
          </div>
        </Route>

        <Route  exact path='/editor'>
        <ModelViewEditor data={editorData}/>
        </Route>
        </Router>
      </div>
      </React.Fragment>
    );
  }
}

export default App;

export {tableData}