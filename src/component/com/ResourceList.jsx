import React from 'react';
import { Link } from 'react-router-dom'

export default function ResourceList({ list, list1 }) {
    return (
        <>
            {
                list.map((item, index) => {
                    return (
                        <>
                            {
                                item.solution.map((list) => {
                                    return (
                                        <>
                                            <li><Link to={list.pageurl} className='text-white'> {list.title}</Link></li>
                                        </>
                                    )
                                })
                            }


                        </>
                    )
                }
                )
            }
        </>
    );
}
