import React from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {

    const { hits } = useGlobalContext();
    return (



        < div >
            {
                hits.map((currPost) => {
                    // console.log(currPost)
                    const { id, attributes } = currPost



                    return (
                        <div className='container' key={id}>

                            <div className='box'>
                                <h3>{attributes.title}</h3>
                                <br />

                                {attributes.excerpt}




                            </div>
                        </div>

                    )
                })
            }
        </div >
    )

}







export default Stories
