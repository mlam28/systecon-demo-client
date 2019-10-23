import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter'

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

const columns = [{
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
      text: 'STID - Station Identifier'
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
  

class ResultTable extends React.Component{
    render(){

        return(
            <div>
                  <BootstrapTable keyField='id' striped hovered condensed data={ this.props.data } columns={ columns } filter={filterFactory()} />
            </div>
        )
    }
    
}


export default ResultTable