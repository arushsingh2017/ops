import React, { Component } from 'react'


const uderlistwrap = {
    width: '300px', margin: '10px', padding: '10px 20px', borderRadius: ' 10px', boxShadow: '0 5px 10px #ddd'
}

export default class ClassData extends Component {

    state = { user: [] }
    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-27&sortBy=publishedAt&apiKey=4f6f0fb4e863483b8a6c2903acfaabef')
            .then(response => response.json())
            .then(data => {
                this.setState({ user: data.articles })
                console.log(data.articles)
            }
            )
    }
    render() {
       
        return (
            <>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                {
                    this.state.user.map((val, i)=>{
                        return(<p>{val.title.slice(0, 10)}</p>)
                    })
                }
               
                    {/* <ul>
                        {articles.map((article, index) => (
                            <li key={index}>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                            </li>
                        ))}
                    </ul> */}
                </div>

            </>
        )
    }
}
