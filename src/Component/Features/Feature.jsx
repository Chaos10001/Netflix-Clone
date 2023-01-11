import React from 'react'
import { InfoCircle, PlayFill } from 'react-bootstrap-icons'
import './feature.scss'

const Feature = ( {type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img  
        src="https://media.istockphoto.com/photos/residential-district-of-bushwick-brooklyn-new-york-highresolution-picture-id1384672010?b=1&k=20&m=1384672010&s=170667a&w=0&h=nNPXYG3dsP9Q4wDNgyECfqPL85x3jpbCZWWzIn8PoJI=" alt=""  />

        <div className="info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy3w_CPmd5XzyarHXU2Id13OqWZAVJAeab5n4HvqLeyhYjevKC62Rb2-SDTvkLARnyg&usqp=CAU" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nam error 
                obcaecati doloribus maiores beatae quis rem impedit, vitae reiciendis
                voluptate debitis doloremque a eos quae voluptatibus suscipit facilis 
                aspernatur reprehenderit blanditiis! Perspiciatis, eum molestiae? Quis
                delectus quos praesentium! Eveniet.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayFill/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoCircle/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Feature