import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import statecountry from '../API/States.json'
import TestMap from './TestMap';

const Login = () => {

  const [count, setcount] = useState('1');
  const [state, setstate] = useState('');
  const [cstate, setcstate] = useState(statecountry[0].states);


  const handlerCountry = (e) => {
    const cc = e.target.value;
        setcount(cc)
        const st=  statecountry.filter((item)=>item.country_id===cc)[0].states
    // console.log(st)
    setcstate(st)    
  }
  
// console.log(cstate)

  const handlerstate = (e) => {
    setstate (e.target.value)
  }

  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate();

  // const [userdata, setUserdata] = useState(null)

  function userHandler() {
    fetch('http://localhost:3000/register')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const udata = data.filter((val) =>
          val.username === user
        )


        console.log(udata, password, udata.usercontact)

        if (udata && udata[0].usercontact === password) {
          const tokan = "23fsdfsdfewrsdfdsfsdgdgfdgd"
          localStorage.setItem('auth', tokan)

          alert("thank")
        }

        else (
          alert("sorry")
        )



      })

    // if (userdata != null) {

    // }



    // if (user === "man" && password === "123") {
    //   navigate('/workshop')
    // }
    // else {
    //   navigate('/')
    // }
  }

  const textInput = useRef()

  return (
    <>
     <TestMap/>
      {/* <div>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={passwords}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div> */}

      <div className='login-box'>
        <div className='login-box-inner'>
          <div className='login-wrap'>
            <div className='input-box'>
              <label>User Name</label>
              <input type='text' placeholder='User Name' onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className='input-box'>
              <label>Password</label>
              <input type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>


            <Button onClick={userHandler}> Login User</Button>
            <hr></hr> <br />
            <select onChange={handlerCountry}>
              {
                statecountry.map((countdata, index) => (
                  <option key={index} value={countdata.country_id}>{countdata.country_name}</option>
                )
                )}
            </select>

            <br />
               
            <select onChange={handlerstate}>
              {              
              cstate && cstate.map((sdata, index)=>{
                return(
                  <>                 
                  <option key={index} value={sdata.state_id}> {sdata.state_name}</option>
                  <span>Welcome</span>
                  </>
                )
                
              })
               }

              {/* {
                statecountry.map((countdata, index) => (
                  <option key={index} value={countdata.country_id}>{countdata.country_name}</option>
                )
                )} */}
            </select>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login
