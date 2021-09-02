import {Button, Container,Row,Col} from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Register = () =>{
    const myFunction = () =>{
        var x = document.getElementById("pass")
        if(x.type==="password"){
            x.type="text"
        }
        else{
            x.type="password"
        }
    }
    const [username,setUsername] = useState('')
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [email,setEmail] = useState('')
    const [mobileNo,setMobile] = useState('')
    const [aadharCard,setAadhar] = useState('')
    const [panCard,setPan] = useState('')
    const [accBalance,setAccBal] = useState('')
    const [password,setPassword] = useState('')
    // const [accountTypes,setAccTypes] = useState('defaultVal')
    const history = useHistory()
    const accs = ['Premium Account','Salary Account','Demat Account','Crypto Account','Savings Account']
    var accountTypes = ''
    const [isChecked, setIsChecked] = useState(
        new Array(accs.length).fill(false)
    );

    const registerUser = (e) =>{
        e.preventDefault()
        appendAccount()
        const details = {username,name,address,email,mobileNo,aadharCard,panCard,accBalance,password,accountTypes}
        console.log(JSON.stringify(details))
        fetch('http://localhost:8090/register',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(details)
        })
        .then((res) =>{
            console.log(res.json())
        })
        .then(()=>{
            history.push('/Login')
        })
    }

    const appendAccount = () =>{
        isChecked.map((item, index) =>{
            if(item ===true){
                accountTypes = accountTypes +','+accs[index]
            }
        }      
    )
         accountTypes = accountTypes.slice(1,)
        //return acctype
    }
    
    const handleOnChange = (position) => {
        const updatedCheckedState = isChecked.map((item, index) =>
          index === position ? !item : item
        )
        setIsChecked(updatedCheckedState)
        console.log(isChecked)
    }

    return(
        <div className="registration">
            <h1>Registration Page</h1>
            <form action="" onSubmit={registerUser}>
                <div className="form-body">
                    <div className="form-content">
                    <Container>
                    <Row lg={12} className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Username</label></Col>
                        <Col s={12} md={7} className="col2" className="col2"><input type="text" required onChange={(e)=>setUsername(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                    <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Name</label></Col>
                    <Col s={12} md={7} className="col2"><input type="text" onChange={(e)=>setName(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Address</label></Col>
                        <Col s={12} md={7} className="col2"><textarea onChange={(e)=>setAddress(e.target.value)}></textarea></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Email</label></Col>
                        <Col s={12} md={7} className="col2"><input type="text" onChange={(e)=>setEmail(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Mobile Number</label></Col>
                        <Col s={12} md={7} className="col2"><input type="text" onChange={(e)=>setMobile(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Aadhar Number</label></Col>
                        <Col s={12} md={7} className="col2"><input type="text" onChange={(e)=>setAadhar(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Pan Card</label></Col>
                        <Col s={12} md={7} className="col2"><input type="text" onChange={(e)=>setPan(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Account Balance</label></Col>
                        <Col s={12} md={7} className="col2"><input type="text" onChange={(e)=>setAccBal(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-center"><label htmlFor="">Password</label></Col>
                        <Col s={12} md={7} className="col2"><input type="password" id="pass" onChange={(e)=>setPassword(e.target.value)}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                    <Col s={12} md={10} className="col1 text-md-end"><label htmlFor="showPass">Show Password</label></Col>
                    <Col s={12} md={1} className="col2"><input type="checkbox" onClick={myFunction} id="showPass" /></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-start"><label htmlFor="">Premium Account</label></Col>
                        <Col s={12} md={5}><input type="checkbox" name="acTypes" id="" value="Premium Account" onChange={()=>{handleOnChange(0)}}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-start"><label htmlFor="">Demat Account</label></Col>
                        <Col s={12} md={5}><input type="checkbox" name="acTypes" id="" value="Demat Account" onChange={()=>{handleOnChange(1)}}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-start"><label htmlFor="">Salary Account</label></Col>
                        <Col s={12} md={5}><input type="checkbox" name="acTypes" id="" value="Salary Account" onChange={()=>{handleOnChange(2)}}/></Col>
                        </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-start"><label htmlFor="">Crypto Account</label></Col>
                        <Col s={12} md={5}><input type="checkbox" name="acTypes" id="" value="Crypto Account" onChange={()=>{handleOnChange(3)}}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        <Col s={12} md={5} className="col1 text-md-start"><label htmlFor="">Savings Account</label></Col>
                        <Col s={12} md={5}><input type="checkbox" name="acTypes" id="" value="Savings Account" onChange={()=>{handleOnChange(4)}}/></Col>
                    </Row>
                    <Row className="first justify-content-center">
                        {/* <Col s={6}><button onClick={appendAccount}>Check </button></Col> */}
                        <Col s={12}><input type="submit" className = "btn-success" value="Submit"/></Col>
                    </Row>
                    </Container>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register