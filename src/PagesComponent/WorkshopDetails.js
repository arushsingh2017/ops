import React from 'react'
import wsdata from '../JSONAPI/JSONworkshop.json'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';

export default function WorkshopDetails() {
    const pagedata = wsdata.workshop;
    const params = useParams();
    const cworkshopdata = pagedata.workshop_list[params.id - 1]

    return (
        <>
            <div className='banner1' style={{ backgroundImage: `url("${cworkshopdata.workshop_img}")`, backgroundSize: 'cover', height: '550px' }}>
            </div>

            <Container className='pt-5' style={{ maxWidth: '95%', margin: '0 auto' }}>
                <div className='workshop_info'>
                    <h3>Agenda</h3>
                    <p className='text-bold-6'>{cworkshopdata.workshop_agenda}</p>
                    <div className='what_learn_wrap'>
                        <h3>Highlights</h3>
                        {
                            cworkshopdata.workshop_highlights &&
                            <ul>
                                {
                                    cworkshopdata.workshop_highlights.map((workshop_highlights_item) => {
                                        return (
                                            <>
                                                <li>{workshop_highlights_item.highlights_key}</li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>


                    <h3>Meet the speakers</h3>
                    <div className='workshop_speakers'>
                        <ul>
                            {
                                cworkshopdata.speakers_list &&
                                cworkshopdata.speakers_list.map((speakerItem) => {
                                    return (
                                        <>
                                            <li>
                                                <div className='spk_pic'> <img src={speakerItem.speaker_pic} /></div>
                                                <div className='spk_name'>{speakerItem.speaker_name}</div>
                                                <div className='spk_profile'>{speakerItem.speaker_profile}</div>
                                                <div className='link_profile'>
                                                    <Link to={speakerItem.lnk_id} className='link_profile'><img src={speakerItem.lnk_icon}/></Link>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </Container>




        </>
    )
}
