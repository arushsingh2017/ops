import React from 'react'

export default function ThreeColCard({icon, title,short_dis, btn}) {
  const defaultImg= 'https://opstree.com/wp-content/uploads//2022/09/microservices_containerisation_kubernetes.svg';
  const imgs= icon.trim()? icon: defaultImg;
 
  return (
    <>
    <div className='Item-box'>
      <img src= {imgs}/>
      <h4>{title}</h4>
      <p>{short_dis}</p>
      <a href={btn}>Know more</a>
      </div>
    </>
  )
}
