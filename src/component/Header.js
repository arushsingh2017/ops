import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';



export default function Header() {
  return (
    <>

{/* <ul className='navbar1'>
    {
      localStorage.getItem('userde') ?
      <>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </>
      :
      <>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      </>
    }

</ul>  81818-98901 */}
      
    <Navbar expand="lg" className='reddata'>
        <Container>
          <Navbar.Brand> <NavLink to="/home">  <img src="/images/logo.webp" alt="Opstree Solution" srcset="" /></NavLink> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown className='mlink' title="Our Company">
                <NavDropdown.Item > <NavLink to='/home'>Home</NavLink> </NavDropdown.Item>
                <NavDropdown.Item > <NavLink to='/customerstories'>Customer Stories</NavLink> </NavDropdown.Item>
                <NavDropdown.Item > <NavLink to='/careers'>Careers</NavLink></NavDropdown.Item>
                <NavDropdown.Item > <NavLink to='/lifeatopstree'>Life at Opstree</NavLink></NavDropdown.Item>
                <NavDropdown.Item > <NavLink to='/contact'>Contact Us</NavLink></NavDropdown.Item>                
              </NavDropdown>

             <NavDropdown title = "Solution">
              <NavDropdown.Item> <NavLink to='/devops-solution'>DevOps Solution</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to='/cloud-devsecops-advisory'>Cloud & DevSecOps Advisory</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to='/continuous-delivery-automation'>Continuous Delivery & Automation</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to='/cloud-platform-engineering'>Cloud Platform Engineering</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to='/kubernetes-containerization'>Kubernetes Containerization</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to='/security-as-a-service'>Security as a Service</NavLink> </NavDropdown.Item>
              <NavDropdown.Item> <NavLink to='/monitoring-platform-reliability'>Monitoring & Platform Reliability ( DevOps & SRE)</NavLink> </NavDropdown.Item>
             </NavDropdown>

              
              <Nav.Link className='mlink'> <NavLink to='/case-study'> Case Study</NavLink></Nav.Link>
              <NavDropdown title="Product">
                <NavDropdown.Item> <NavLink to='https://www.buildpiper.io/' >BuildPiper</NavLink> </NavDropdown.Item>
                <NavDropdown.Item> <NavLink to='https://www.buildpiper.io/studies/' >BuildPiper Customer Stories</NavLink> </NavDropdown.Item>
                <NavDropdown.Item> <NavLink to='https://www.buildpiper.io/usecase/' >BuildPiper Use Case</NavLink> </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Community">
                <NavDropdown.Item> <NavLink to='/opensource'>Opensource</NavLink> </NavDropdown.Item>
                <NavDropdown.Item> <NavLink to='/workshop'>Workshop</NavLink> </NavDropdown.Item>
                <NavDropdown.Item> <NavLink to=''>Blogs</NavLink> </NavDropdown.Item>
              </NavDropdown>
              

             
              <Nav.Link className='mlink'> <NavLink to='/aws-consulting-partner'>AWS Consulting Partner</NavLink> </Nav.Link>            
            </Nav>
            <Nav.Link> <NavLink to='/login'> User Login</NavLink></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </>
  )
}
