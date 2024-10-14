import React from 'react'
import data from '../JSONAPI/Test.json'
import { Link } from 'react-router-dom'

export default function UserListPages() {
    return (
        <>
            {
                data.faimly.map((Item, key) => {
                    return (
                        <>                          
                            <h6 > Name is: <b><Link to={`/user/${Item.id}`}>{Item.name}    </Link></b></h6>
                            <p>Ags is <b>{Item.age}</b> and Date of Brith <b>{Item.dob}</b></p>
                            
                            {/* {
                                Item.friendList.map((fItem) => {
                                    return (
                                        <>
                                            <p>{fItem}</p>
                                        </>)
                                })
                            } */}
                        </>
                    )
                })
            }
        </>
    )
}
