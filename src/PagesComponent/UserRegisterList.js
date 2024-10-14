import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

const UserRegisterList = () => {
    const [registeruser, setRegisteruser] = useState([])
    {
        useEffect(() => {
            fetch('http://localhost:3000/register')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // Update state with data received from API
                    setRegisteruser(data);
                })
        }, [])
    }
    return (
        <>

            <Container className='pt-5'>
            <h1 className='pb-3'>This pages as user Register List </h1>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Contact No.</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            registeruser.map((Itemuserlist) => {
                                return (
                                    <> <tr>
                                        <td>{Itemuserlist.id}</td>
                                        <td>{Itemuserlist.username}</td>
                                        <td>{Itemuserlist.useremail}</td>
                                        <td>{Itemuserlist.usercontact}</td>
                                    </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>
                </Table>
            </Container>
          


        </>
    )
}

export default UserRegisterList
