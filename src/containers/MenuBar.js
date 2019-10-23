import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class MenuBar extends React.Component {

    render(){
        return(
           <div>
               <Navbar>
                   <Nav>
                       <Nav.Item>
                           <Nav.Link href='/'>Home Chart</Nav.Link>
                       </Nav.Item>

                       <Nav.Item>
                           <Nav.Link href='/table'>Result Table</Nav.Link>
                       </Nav.Item>

                       <Nav.Item>
                           <Nav.Link href='/editor'>Model View Editor</Nav.Link>
                       </Nav.Item>     
                   </Nav>
               </Navbar>
            
           </div>
        )
    }
}

export default MenuBar;