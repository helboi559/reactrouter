import React from 'react'
import {blogPosts} from "../utils/sampleBlogs"
import { useParams } from 'react-router-dom'
// console.log(blogPosts)

const BlogPost = () => {
    let {blogId} = useParams()
       
    const findPost = blogPosts.filter((ele) => parseInt(blogId) === ele.id)
    console.log(findPost[0].author)
    return (
    <p>{findPost[0].author}</p>
    // <p>BlogPost</p>

  )
}

export default BlogPost