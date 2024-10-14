import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default function CountryandCity() {
    // const [countrylist, setCountrylist] = useState([])
    // useEffect(() => {
    //     fetch('https://countriesnow.space/api/v0.1/countries')
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result)
    //             setCountrylist(result.data)
    //         })
    // }, [])



    const [populationData, setPopulationData] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setPopulationData(result)
            })
    }, [])


    return (
        <>

<div>
      <h2>Country-wise Population Data</h2>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Area</th>
            <th>Capital</th>
            <th>Border</th>
          </tr>
        </thead>
        <tbody>
          {populationData.map(country => (
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>{country.capital}</td>
              <td>{country.borders}</td>
              
              <td> <img src={country.coatOfArms.png} style={{width:'50px'}} /> </td>
              <td>{country.maps.googleMaps}</td>
              <td><img src={country.flags.png} style={{width:'50px'}}/></td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>


            {/* <Container>
                <h1>This pages is Country List Pages</h1>
                {
                    countrylist.map((v, i) => {
                        return (
                            <>
                                <p>Country Name: <span style={{ color: 'red' }}> {v.country}</span> Country Code: <span style={{ color: 'red' }}>{v.iso3} </span></p>

                                <div className='' style={{ flexWrap: 'wrap', display: 'flex' }}>

                                    {
                                        v.cities.map((citylist, cityindex) => {
                                            return (<span style={{ border: '1px solid #ddd', padding: '5px 10px', margin: '5px', borderRadius: '10px', }}>{citylist} </span>)

                                        })
                                    }
                                </div>

                                <hr />
                            </>
                        )

                    })
                }
            </Container> */}
        </>
    )
}
