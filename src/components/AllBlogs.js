import React from 'react'
import { useSearchParams } from 'react-router-dom'

const AllBlogs = (props) => {
    let [searchParams,setSearchParams] = useSearchParams()
    const sortOrder = searchParams.get('sort-order')
    console.log(searchParams)
    //sort function asc/desc
    function compare (a,b) {
        if(sortOrder.toLowerCase() === 'asc') {
            if (a.createdAt > b.createdAt) {
                return 1
            }
            if (a.createdAt < b.createdAt) {
                return -1
            }
        }
        if(sortOrder.toLowerCase() === 'desc') {
            if (a.createdAt > b.createdAt) {
                return -1
            }
            if (a.createdAt < b.createdAt) {
                return 1
            }
        }
        return 0
    }
    return (
    <>
    <h3>All Blgos</h3>
    <h4>Search Params</h4>
        <ul>
            {props.blogPosts.sort(compare).map((post,index) => {
                return (
                    <li key={`blog-${index + 1}`}>Id#({post.id})-   Author({post.author})-  Title({post.title})<br/>Created At({post.createdAt})</li>
                )
            })}
        </ul>
        
    </>
  )
}

export default AllBlogs