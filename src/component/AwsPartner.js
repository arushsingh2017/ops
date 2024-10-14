import React, { useEffect, useState } from 'react'
import awsdata from '../JSONAPI/JSONAWSConslting.json'
import { Container } from 'react-bootstrap'
import ThreeColCard from './com/ThreeColCard'
import { json } from 'react-router-dom';

const newswrap={ maxWidth:'90%', border:'1px solid #ddd'}
const link_btn={ padding: '10px',
  borderRadius: '10px',
  color: '#000',
  boxShadow:'0px 0px 10px',textDecoration:'none', fontWeight:'700', background:'#db469f'}
  const cardtext ={textOverflow:'ellipsis', overflow:'hidden', whiteSpace: 'nowrap'}
export default function AwsPartner() {
  const pagesdata = awsdata.awsconsltingdata;

  const defaultImageUrl = 'https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2022/01/smart-form-builder.jpg';
  


  const [articles, setArticles] = useState([]);
  
  // const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-27&sortBy=publishedAt&apiKey=4f6f0fb4e863483b8a6c2903acfaabef')
      .then(response => response.json())
      .then(data => {
        // Process the articles to set default images for articles with blank image URLs
        const processedArticles = data.articles.map(article => ({
          ...article,
          urlToImage: article.urlToImage || 'https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2022/01/smart-form-builder.jpg' // Replace 'default-image.jpg' with the path to your default image
        }));
        setArticles(processedArticles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-27&sortBy=publishedAt&apiKey=4f6f0fb4e863483b8a6c2903acfaabef')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Update state with data received from API
  //       setArticles(data.articles);
  //     })
  // }, [])

  
  

  return (
    <>
      <div style={newswrap}></div>

      {/* {articles.map(article => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt="Article" />
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))} */}

      {
        articles ? (
          <ul style={{display:'flex', flexWrap:'wrap', listStyleType:'none'}}>
         
          {articles.map((article, index) => (
            <>            
             { console.log(article)}
             
             
             
              <li key={index} style={{width:'32%', margin:'0.5%', border:'1px solid #ddd', padding:'10px'}}>
                 <img src={article.urlToImage} alt='' style={{width:'100%', height:'300px'}}/>
                
                
                <p>{article.author} | {article.publishedAt}</p>
                <h5 className='pt-3 text-bold-7'>{article.title}</h5>
                <p> {`${article.content.slice(0, 100)} ...`}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" style={link_btn}>Know More</a>
                
              </li>
            </>

          ))}
        </ul>)
          : (<p>Loading...</p>)
      }

      {/* {
      articles.map((article, index)=>
        <p>{article}</p>
      )
    } */}

      {/* <div>
      <h1>Latest News about Tesla:</h1>
      {articles ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
               <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}


      <div className='banner' style={{ backgroundImage: `url("${pagesdata.banner_img}")`, backgroundSize: 'cover' }}>
        <div className='slider-inner-wrap' style={{ padding: '100px 0 100px 6%' }}>
          <h1 style={{ color: '#fff' }}>{pagesdata.banner_title}</h1>
          <h6 style={{ color: '#fff' }}>{pagesdata.banner_dis}</h6>
        </div>
      </div>

      <Container className='pt-5 aws-top-wrap text-center' style={{ maxWidth: '95%' }}>
        <div style={{ maxWidth: '990px', margin: '0 auto' }}>
          <h4 className='text-bold-8'>{pagesdata.aws_heading}</h4>
          <h5 className='pt-3 text-bold-6 pb-5'>{pagesdata.aws_dis}</h5>
        </div>
        {
          pagesdata.aws_certification.map((Itemawscertificate) => {
            return (
              <>
                <img src={Itemawscertificate.aws_bedge} className='aws-bedge' />
              </>
            )
          })
        }

        <img className='mt-5' src={pagesdata.aws_ads_banner} style={{ width: '100%', borderRadius: '10px' }} />
        <div className='cardwrap' style={{ display: 'flex' }}>
          <ThreeColCard icon={"images/aws-consulting/1-icon.svg"} title={"1 Education Outcomes with AWS"} short_dis={"Augment learning experience with the scale, flexibility, and power …"} />
          <ThreeColCard icon={"images/aws-consulting/1-icon.svg"} title={"Education Outcomes with AWS"} short_dis={"Augment learning experience with the scale, flexibility, and power …"} />
          <ThreeColCard icon={"images/aws-consulting/1-icon.svg"} title={"Education Outcomes with AWS"} short_dis={"Augment learning experience with the scale, flexibility, and power …"} />
        </div>
      </Container>
    </>
  )
}
