import React from 'react'
import { useSearchParams } from 'react-router-dom'

const AllBlogs = (props) => {
    let [searchParams,setSearchParams] = useSearchParams()
    const sortOrder = searchParams.get('sort-order') || 'asc'
    const sortField = searchParams.get('sort-field') || 'createdAt'
    const limit = Number(searchParams.get('limit')) || 4
    const page = Number(searchParams.get('page')) || 0
    // console.log(searchParams)
    //sort function asc/desc
    function compare (a,b) {
        const fieldA = a[sortField];
        const fieldB = b[sortField];

        if(sortOrder.toLowerCase() === 'asc') {
            if (fieldA > fieldB) {
                return 1
            }
            if (fieldA < fieldB) {
                return -1
            }
        }
        if(sortOrder.toLowerCase() === 'desc') {
            if (fieldA > fieldB) {
                return -1
            }
            if (fieldA < fieldB) {
                return 1
            }
        }
        return 0
    }
    // const posts = props.blogPosts.sort(compare).slice(page * limit, (page * limit) + limit)
    return (
    <>
    <h3>All Blogs</h3>
    <h4>Search Params</h4>
        <ul>
            {props.blogPosts.sort(compare).slice(page * limit, (page * limit) + limit).map((post,index) => {
                console.log(post)
                return (
                    <li key={`blog-${index + 1}`}>Id#({post.id})-   Author({post.author})-  Title({post.title})<br/>Created At({post.createdAt})</li>
                )
            })}
        </ul>
        
    </>
  )
}

export default AllBlogs