import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const about = [
  {

    ab_heading: 'A learning culture for super enthusiastic people',
    ab_discription: 'OpsTree’s progressive, nurturing and open environment is a fun place to work and grow. We’re constantly in search of talented professionals who can proactively work in a dynamic work environment and help us craft the best solutions for our clients.'
  }
]

const ab_bg = './images/opstree-team.webp';

export default function AboutSection() {
  return (
    <>
      <section className='about-bg' style={{ background: { ab_bg } }}>
        <div className='container'>
          <div className='about-inner'>
            {
              about.map((abutItem) =>
                <>
                  <h1 className='text-white'>{abutItem.ab_heading}</h1>
                  <p className='text-white pt-4 pb-2' style={{fontSize:'18px'}}>{abutItem.ab_discription}</p>
                </>
              )
            }
            <div className='pt-5'>
              <Button className='rounded-5'> <Link to='/lifeatopstree' className='text-white text-decoration-none'> Life at OpsTree </Link> </Button> &nbsp;&nbsp;
              <Button className='rounded-5' > <Link to='/careers' className='text-white text-decoration-none'> Career Page </Link> </Button>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
