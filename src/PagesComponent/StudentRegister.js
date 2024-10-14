import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
// import Login from '../component/com/Login'
// import Register from '../component/com/Register'


export default function StudentRegister() {

    const countrydata = ["India", "USA", "Dubai", "Singapure", "UAE",]

    const [chk, setChk] = useState(false)
    const [country_list, setCountry_List] = useState('')
    const [studentregister, setStudentregister] = useState({
        fname: '',
        lname: '',
        dob: '',
        emailid: '',
        father_fname: '',
        father_lname: '',
        mother_fname: '',
        mother_lname: '',
        citizion: '',
        street: '',
        city: '',
        country: '',
        telephone: '',
        mobileno: '',
        gender: ''

    })

    // function checkHandler(event) {
    //     setChk(event.target.value)
    // }

    function studentHandler(event) {
        const { name, value } = event.target;
        setStudentregister({ ...studentregister, [name]: value });
    }
    function registerUser() {
        console.log(studentregister)
    }
    const selectHandler = (e) => {
        const s = e.target.value;
        setCountry_List(s)

    }
    return (
        <>
            <Container className='pt-2'>
                <h1>College Registration Form</h1>
                <Row>
                    <h5 class="text-bold-7">Name*</h5>
                    <Col sm={6}>
                        <input type='text' value={studentregister.fname} onChange={studentHandler} placeholder='First Name' name='fname' />
                    </Col>
                    <Col sm={6}><input type='text' value={studentregister.lname} onChange={studentHandler} placeholder='Last Name' name='lname' /></Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Date of Birth*</h5>
                    <Col sm={12}><input type='date' value={studentregister.dob} onChange={studentHandler} placeholder='DD/MM/YYYY' name="dob" /></Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Email*</h5>
                    <Col sm={12}><input type='email' value={studentregister.emailid} onChange={studentHandler} placeholder='Enter Email' name='emailid' /></Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Father Name*</h5>
                    <Col sm={6}>
                        <input type='text' value={studentregister.father_fname} onChange={studentHandler} placeholder='First Name' name='father_fname' />
                    </Col>
                    <Col sm={6}><input type='text' value={studentregister.father_lname} onChange={studentHandler} placeholder='Last Name' name='father_lname' /></Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Mother Name*</h5>
                    <Col sm={6}>
                        <input type='text' value={studentregister.mother_fname} onChange={studentHandler} placeholder='First Name' name='mother_fname' />
                    </Col>
                    <Col sm={6}><input type='text' value={studentregister.mother_lname} onChange={studentHandler} placeholder='Last Name' name='mother_lname' /></Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Gender*</h5>
                    <Col>
                        <input type='Radio' name="gender" value="male" onChange={studentHandler} checked={studentregister.gender === 'male'} /> Male &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='Radio' name="gender" value="female" onChange={studentHandler} checked={studentregister.gender === 'female'} /> Female
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Nationality*</h5>
                    <Col>
                        <input type='text' value={studentregister.citizion} onChange={studentHandler} name='citizion' />
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Home Address*</h5>
                    <Col>
                        <input type='text' placeholder='Street Address' value={studentregister.street} onChange={studentHandler} name='street' />
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <Col sm={6}>
                        <input type='text' placeholder='City' value={studentregister.city} onChange={studentHandler} name='city' />
                    </Col>
                    <Col sm={6}>
                        <select onChange={studentHandler} name='country' value={studentregister.country}>

                            {
                                countrydata.map((Citem, index) => {
                                    return (
                                        <option value={Citem}>{Citem}</option>
                                    )
                                })
                            }
                        </select>
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <h5 class="text-bold-7">Contact Details*</h5>
                    <Col sm={6}>
                        <input type='text' placeholder='Telephone' value={studentregister.telephone} onChange={studentHandler} name='telephone' />
                    </Col>
                    <Col sm={6}><input type='text' placeholder='Mobile No.' value={studentregister.mobileno} onChange={studentHandler} name='mobileno' /></Col>
                </Row>

                <Row className='pt-4'>
                    <h4>Cheched Data</h4>
                    <Col sm={3}>
                        <input type='checkbox' onChange={(e) => setChk(e.target.checked)} /> Already have an account?

                        {/* <input type='checkbox' onChange={checkHandler} /> <span>You want to add Commenet here </span> */}
                    </Col>
                    <Col sm={9}>
                        {/* {chk ? (
                            <div> <Login /> </div>
                        ) : (
                            <div> <Register /></div>
                        )} */}
                        {
                        chk? (<h1>yes i am checked</h1>) : (<h1>Sorry i am not checked</h1>)
                    }
                    </Col>
                </Row>

                <button className='btn btn-primary mt-5 mb-5' onClick={registerUser}>Register</button>
            </Container>


        </>
    )
}
