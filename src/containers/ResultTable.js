import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {tableData} from '../App'


  

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

const modelSelectOptions = {
    "Demo - Model 01": "Demo - Model 01",
    "Demo - Model 02": "Demo - Model 02",
    "Demo - Model 03": "Demo - Model 03"
  };
  
  const pointSelectOptions = {
      '43':'43',
      '42':'42',
      '66':'66'
  }

  const stidSelectOptions = {
    "HOME BASE": "HOME BASE",
    "MAIN DEPOT": "MAIN DEPOT",
    "S_CARRIER": "S_CARRIER",
    "S_CRUISER": "S_CRUISER",
    "S_DESTROYER_01": "S_DESTROYER_01",
    "S_DESTROYER_02": "S_DESTROYER_02",
    "S_FRIGATE_01": "S_FRIGATE_01",
    "S_FRIGATE_02": "S_FRIGATE_02",
    "S_SUPPLY_SHIP_01": "S_SUPPLY_SHIP_01",
    "S_SUPPLY_SHIP_02": "S_SUPPLY_SHIP_02",
    "WORKSHOP": "WORKSHOP"
  }

class ResultTable extends React.Component{
     stidOptions = () => {
      const stids = this.props.data.map(info => info.STID)
      
      return stids.filter(onlyUnique)
    }
    
      
    //  stidSelectOptions = () => {
    //    const obj = {}
    //   this.stidOptions().forEach(stid => Object.assign(obj, {stid: stid}))
    //   debugger
    //   return obj
    // }

    
    
     columns = [{
      dataField: 'MODEL',
      text: 'MODEL',
      formatter: cell => modelSelectOptions[cell],
      filter: selectFilter({
          options: modelSelectOptions
      })
    }, {
      dataField: 'POINT',
      text: 'POINT',
      formatter: cell => pointSelectOptions[cell],
      filter: selectFilter({
          options: pointSelectOptions
      })
    }, {
      dataField: 'IID',
      text: 'IID - Item Identifier',
      filter: textFilter()
    }, {
        dataField: 'STID',
        text: 'STID - Station Identifier',
        formatter: cell => stidSelectOptions[cell],
        filter: selectFilter({
            options: stidSelectOptions
        })
    }, {
        dataField: 'STSIZ',
        text: 'STSIZ - Stock Size'
    }, {
        dataField: 'ROSIZ',
        text: 'ROSIZ - Reorder Size'
    }, {
        dataField: 'NBO',
        text: 'NBO - Expected # of Backorders'
    }, {
        dataField: 'DPY',
        text: 'DPY - Demands/Year'
    }
    
    ];
    
    render(){

        return(
            <div>
                  <BootstrapTable keyField='id' striped hovered condensed data={ this.props.data } columns={ this.columns } filter={filterFactory()} pagination={paginationFactory()} />
            </div>
        )
    }
    
}


export default ResultTable