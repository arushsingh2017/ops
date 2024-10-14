import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'

const initialUsers = [
    { id: 1, name: "Alice", age: 30, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 25, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
    { id: 4, name: "David", age: 28, email: "david@example.com" }
];

const TestMap = () => {
    const [users, setUsers] = useState(initialUsers)
    




    const handler_sort_by_id = () => {
        alert("sort by id")
    }

    const handler_sort_by_name = () => {
        alert("sort name")

    }

    const handler_sort_by_age = () => {
        alert("by age")

    }

    // const data= [10, 30, 20, 5, 40];
    // // console.log(data)
    // data.sort(function(a,b){
    //     if(a>b) return 1;
    //     if(a<b) return -1;
    // })
    // console.log(data)

    return (
        <>

            {/* <select>
        <option>--- Select Sort---</option>
        <option>--- A to Z ---</option>
        <option>--- Z to A ---</option>
    </select> */}

            <Row>
                <Col>
                    <Button onClick={handler_sort_by_id}>Sort By ID</Button> &nbsp;
                    <Button onClick={handler_sort_by_name}>Sort By Name</Button> &nbsp;
                    <Button onClick={handler_sort_by_age}>Sort By Age</Button> &nbsp;

                </Col>
                
            </Row>

            

            {
                users && users.sort((a, b) => a.name > b.name ? 1 : -1).map((list, index) =>
                    <p key={index}> {list.id} || {list.name} || {list.age} || {list.email}</p>
                )
            }



            {/* {
           user && user.sort(function(a,b){}).map((list, index)=>
                <p key={index}> {list.id} || {list.name} || {list.address} || {list.age}</p>
            )
        } */}
        </>
    );
}

export default TestMap;
