import {Button, Container,Row,Col} from 'react-bootstrap'
import { useState } from 'react'
import Register from '../RegistrationPage/Register'
import { Link, useHistory } from 'react-router-dom'
const Login= () =>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory()
    const verifyLogin = (e) =>{
        e.preventDefault()
        const credentials = {username,password}
        fetch('http://localhost:8090/login',{
            method:'POST',
            headers:{
            'Content-type':'application/json',
            'Accept': 'application/json'
            },
            body:JSON.stringify(credentials)
        })
        .then((res)=>{
            return res.text()
        })
        .then(data =>{
            // setTimeout(() => {
            //     alert(data)
            // },200);
            alert(data)
            if(data!='Login Successfull!'){
                history.push('/Registration')
            }
        })
    }
    return(
        <Container className="main-container d-flex justify-content-center align-items-center" fluid>
        <div className="main">
            <Row className="main-header">
            <Col><h1>Royal Internet Bank of India</h1></Col>
            </Row>
            <Row className="main-content d-flex justify-content-between align-items-center">
                <Row className="user align-items-center">
                <Col sm={7}><label htmlFor="username">Username</label></Col>
                <Col sm={3}><input type="text" required id="username" name="username" onChange={(e)=>setUsername(e.target.value)}/></Col>
                <Col sm={7}><label htmlFor="password">Password</label></Col>
                <Col sm={3}><input type="text" required id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/></Col>
                </Row>
                <Row className="user-login justify-content-center">
                <Col id="login-btn" lg={4}><Button variant="success" onClick={verifyLogin}>Login</Button>{' '}</Col>
                <Col id="new-user" lg={5}><a href="http://localhost:3000/Registration">New User? Create Account</a></Col>
                </Row>
            </Row>
        </div>
        </Container>
    )
}
export default Login