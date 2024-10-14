import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
export default function Register() {

    // const [formData, setFormdata]= useState({username:'', userpassword:'', userphone:''})

    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [usercontact, setUsercontact] = useState('')


    // function registerHandler(event){
    //     const { name, value } = event.target;
    //     // setFormdata({ ...formData, [name]: value });
    // }



    // function saveData(){
    //    // alert("Save data")
    //    console.log("data is", formData)
    // }
    function handlsave() {
        let alldata = { username, useremail, usercontact }
        
        fetch('http://localhost:3000/register',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(alldata)
            }).then((resp) => {
                resp.json().then((result) => {
                    alert("One Record save successful")
                  //  console.warn(result)
                //   <p>Data saved</p>
                //   setUsername('')
                //   setUsercontact('')
                //   setUseremail('')
                })



            })




    }
    return (
        <>
            <div className='login-box'>
                <div className='login-box-inner'>
                    <div className='login-wrap'>
                        <div className='input-box'>
                            <label>Name</label>
                            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                            {/* <input type='text' value={formData.username} placeholder='Enter Name' name='username' onChange={registerHandler} /> */}
                        </div>
                        <div className='input-box'>
                            <label>Email</label>
                            <input type='text' value={useremail} onChange={(e) => setUseremail(e.target.value)} />
                            {/* <input type='mail' value={formData.userpassword} placeholder='Enter email' name='userpassword' onChange={registerHandler} /> */}
                        </div>

                        <div className='input-box'>
                            <label>Phone No.</label>
                            <input type='text' value={usercontact} onChange={(e) => setUsercontact(e.target.value)} />
                            {/* <input type='text' value={formData.userphone} placeholder='Contact No.' name='userphone' onChange={registerHandler} /> */}
                        </div>

                        <Button onClick={handlsave}> Register User</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
