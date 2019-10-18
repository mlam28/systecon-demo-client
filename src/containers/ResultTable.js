import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

const products = [
    {id: 2, name: 'toothbrush', price: 5.50},
    {id: 3, name: 'soap', price: 6}
]

const columns = [{
    dataField: 'MODEL',
    text: 'MODEL'
  }, {
    dataField: 'POINT',
    text: 'POINT'
  }, {
    dataField: 'IID',
    text: 'IID - Item Identifier'
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
                  <BootstrapTable keyField='id' data={ this.props.data } columns={ columns } />
            </div>
        )
    }
    
}


export default ResultTable