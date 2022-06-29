import React from 'react'
import { useParams } from 'react-router-dom'


const BlogPost = (props) => {
    let {blogId} = useParams()
       
    const findPost = props.blogPosts.filter((ele) => parseInt(blogId) === ele.id)
    // console.log(findPost)
    return (
    <>
      <p>ID:{findPost[0].id}</p>
      <p>Author:{findPost[0].author}</p>
      <p>Title:{findPost[0].title}</p>
      <p>Created at:{findPost[0].createdAt}</p>
      <p>Text:{findPost[0].text}</p>
    </>
   

  )
}

export default BlogPost