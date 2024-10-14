import React, { useState } from 'react'
import StaticPanel from '../component/com/StaticPanel'
import Login from '../component/com/Login'
import '../PagesComponent/login.css'
import Register from '../component/com/Register'
import { Link } from 'react-router-dom'



export default function Signup() {

    const [checkval, setCheckval] = useState('true')
    return (
        <>

            <div className='wrap'>
                <StaticPanel />
                <div style={{ paddingLeft: '10%' }}>
                    <input type='checkbox' onChange={(e) => setCheckval(e.target.checked)} /> Already have an account?
                    {checkval ? (
                        <div> <Login /> </div>
                    ) : (
                        <div> <Register /></div>
                    )}
                    
                </div>

            </div>
        </>
    )
}
