import React from 'react'
import userdata from '../JSONAPI/Test.json'
import { useParams } from 'react-router-dom'

export default function UserLanding() {
  const pagedata = userdata.faimly;
  const para = useParams()
  const currentdata= pagedata[para.id-1]
  return (
    
     <>
      <p>My name is {currentdata.name}</p>
      <p>My age is:{currentdata.age}</p>
      <p>Date of brith us {currentdata.dob}</p>
      <p>{currentdata.friendList}</p>
     </>
      
  )
}
