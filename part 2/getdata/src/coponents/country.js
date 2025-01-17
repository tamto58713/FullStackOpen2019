import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Country = (props) => {
    const [currentWeather, setCurrentWeather] = useState({})
    let url = "http://api.apixu.com/v1/current.json?key=75b461cbc3f34e64a5a85137190109&q=" + props.country.capital
    useEffect(() => {
        axios.get(url)
            .then(res => {
                 setCurrentWeather(res.data)
             })
    }, [])
    
    const formatNumber = (number) => {
        let str = number.toString()
        console.log(number)
        let newStr = ""
        let len = str.toString().length
        let index = len - 2
        for (let i = len; i > 0; i--) {
            if (i === index) {
                newStr = " " + str[i - 1] + newStr
                index -= 3
            }
            else
                newStr = str[i - 1] + newStr

        }
        return newStr
    }
    return (
        <div>
           {console.log(props.country)}
           <h3 className="mt-3">{ props.country.name }</h3>
           <p className="ml-4"><strong>Capital: </strong>{ props.country.capital }</p>
           <p className="ml-4"><strong>Population: </strong> { formatNumber(props.country.population) }</p>
           <div>
                <h2 className="mb-3 mt-3">Languages</h2>
                <ul>
                    {    
                        props.country.languages.map((language, index) => {
                            return (
                                <li key={index}>
                                    { language.name }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="mt-3">
              
                <img src={props.country.flag} width="200px" alt=""/>
            </div>
            <h3 className="mt-4">Weather in {props.country.capital}</h3>     
            {
                currentWeather.current && 
                    <div>
                        {console.log(currentWeather)}
                        <div>
                            <strong>Temperature: </strong>{ currentWeather.current.temp_c }  
                            &nbsp;
                            Celsius
                        </div>
                        <div>
                            <img src={currentWeather.current ? currentWeather.current.condition.icon:""} alt=""/>
                        </div>
                        <div>
                            <strong>Wind: </strong> {currentWeather.current && currentWeather.current.wind_kph}
                            &nbsp; kph direction SSW
                        </div>
                    </div>
            }
        </div>
    )
}
export default Country