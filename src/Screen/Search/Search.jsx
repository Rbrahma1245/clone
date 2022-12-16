import React, { useState, useEffect, useContext, useRef } from 'react'
import './index.css';
// import Card from '../../Components/Card.jsx';
import axios from 'axios'
import qs from 'qs';
import Loader from '../../Components/Loader';

const Search = () => {


    const API = "https://mamakoo-api.mithyalabs.com/api/users/autocomplete"

    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [APIData, setAPIData] = useState([]);




    useEffect(() => {
        let timer = setTimeout(() => {
            fetchApiData(searchInput)
        }, 1000)
        return () => clearTimeout(timer)
    }, [searchInput])



    const fetchApiData = async () => {
        setLoading(true);

        const query = qs.stringify({
            term: searchInput,
            filter: ""
        })
        try {
            const { data } = await axios.get(API + `?${query}`);
            setAPIData(data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
        setLoading(false);
    }


    if (loading) return <Loader />



    return (
        <div className='search-container'>
            This is Search Bar
            <br />
            <input type="text" placeholder='Search Here' value={searchInput} onChange={(e) => setSearchInput(e.target.value.toLowerCase())} />
            <button onClick={() => setSearchInput('')}>clear</button>

            {
                APIData.map((currElem) => {
                    // console.log(currElem._pictures[0].url)
                    let image = currElem._pictures?.[0]?.url

                    return (
                        <div className="box" key={currElem.id}>

                            <div className='card-box'>
                                <img className='search-image' src={image} alt="logo" />
                                <div className='search-text'>
                                    <h5>{currElem.name}</h5>

                                    <p className='kkkk'>{currElem.types || currElem.doc_type}  {currElem.destination?.name}</p>
                                </div>

                            </div>



                        </div>
                    )
                })
            }
        </div >
    )
}

export default Search
