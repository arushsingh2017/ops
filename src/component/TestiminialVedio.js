import { useState } from "react"
import React from 'react'
import { Container } from "react-bootstrap"

const Testiminial_heading = 'TESTIMONIALS';
const Testiminial_dis = 'What they have to say'
export default function TestiminialVedio() {
    const toptab = { color: 'red', listStyleType: 'none', display: 'flex', maxWidth:'500px', margin:'0 auto', marginTop:'25px' }
    const listdata = { padding: '4px', border:'3px solid #ddd', margin:'4px' }
    const [toggle, setToggle] = useState(1)

    const thum1 = './images/kevin.jpg'
    const thum2 = './images/utsav.jpg'
    const thum3 = './images/anshu-sharma.jpg'

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <>

            <Container style={{paddingTop:'60px', paddingBottom:'60px'}}>
                <h5 className='text-bold-7 text-center ' >{Testiminial_heading}</h5>
                <h2 className='text-center pb-5'>{Testiminial_dis}</h2>
                <div className='tab-content'>
                    <div className={toggle === 1 ? "show-content activedata" : "content"}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NeNy6DwJhDU?si=IfpZCTk-q55-wiTF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className={toggle === 2 ? "show-content activedata" : "content"}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XiAlmZ-JNM4?si=i279YLOYlJ3ME4OU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className={toggle === 3 ? "show-content activedata" : "content"}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BVejJQCCJuc?si=EKm-dARhlKRnN8ZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
                <ul className='tab ' style={toptab}>
                    <li style={listdata} className={toggle === 1 ? 'active-tab' : 'tab'} onClick={() => updateToggle(1)} ><img src={thum1} /></li>
                    <li style={listdata} className={toggle === 2 ? 'active-tab' : 'tab'} onClick={() => updateToggle(2)}> <img src={thum2} /> </li>
                    <li style={listdata} className={toggle === 3 ? 'active-tab' : 'tab'} onClick={() => updateToggle(3)}> <img src={thum3} /></li>

                </ul>
            </Container>
        </>
    )
}
