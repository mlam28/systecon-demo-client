import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import {TableHeaderColumn} from 'react-bootstrap-table-next'
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter'
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator'

const columns = [{
    dataField: 'index',
    text: 'index',
    hidden: true,
    formatter: rowIndex => `${rowIndex}`
},{
    dataField: 'IID',
    text: 'IID'
}, {
    dataField: 'DESCR',
    text: 'DESCR'
}, {
    dataField: 'PRICE',
    text: 'PRICE'
}, {
    dataField: 'FRT',
    text: 'FRT'
}, {
    dataField: 'OPID',
    text: 'OPID'
}, {
    dataField: 'TYPE',
    text: 'TYPE'
}, {
    dataField: 'GIID',
    text: 'GIID'
}, {
    dataField: 'NOTE',
    text: 'NOTE'
}]


class ModelViewEditor extends React.Component{
    
    onAfterSaveCell = (value, name, row, column) => {
       const columnName = column.dataField;
       row[columnName] = name
       debugger
    }
        
    
    indexNumber(cell, row, enumObject, index) {
        return (<div>{index+1}</div>) 
        }

    render(){
        return(
            <div>
                <BootstrapTable keyField='id'
                striped hovered condensed columns = {columns}
                data={this.props.data} cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true, afterSaveCell: this.onAfterSaveCell }) } pagination={ paginationFactory() }>

<TableHeaderColumn ref='id' dataField="id" width='70px' dataSort expandable={false} dataFormat={this.indexNumber} > ID </TableHeaderColumn>
                   
                </BootstrapTable>
            </div>
        )
    }
}

export default ModelViewEditor