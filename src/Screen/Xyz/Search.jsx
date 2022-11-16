import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {

    const { search, searchPost } = useGlobalContext();
    return (<div>
        <div className='search'>
            <h2>This is SEARCH Website </h2>

            <input type="text" placeholder="Search"
                value={search}
                onChange={(e) => searchPost(e.target.value)}
            />
        </div>



    </div>
    )
}

export default Search
