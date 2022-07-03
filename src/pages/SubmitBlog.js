import {useState} from 'react'
import React from 'react'
import {useNavigate} from 'react-router-dom'



const SubmitBlog = (props) => {
  const [titleText,setTitleText] = useState('')
  const [descriptionText,setDescriptionText] = useState('')
  const [authorText,setAuthorText] = useState('')
  const navigate = useNavigate()
    return (
    <>
    <label>Title</label>
    <input type="text" onChange={(e) => {
        const val = e.target.value
        setTitleText(val)
    }}/>
    <label>Text</label>
    <input type="text" onChange={(e) => {
        const val = e.target.value
        setDescriptionText(val)
    }}/>
    <label>Author</label>
    <input type="text" onChange={(e) => {
        const val = e.target.value
        setAuthorText(val)
    }}/>
    
    <button onClick={(e)=> {
        //add to blogposts with id and created at
        console.log(props.blogPosts.length)
        const now = new(Date)
        const newPost = {
            createdAt:now.toISOString(),
            title:titleText,
            text:descriptionText,
            author:authorText,
            id:props.blogPosts.length + 1
        }
        console.log('newPost',newPost)
        // console.log('newPost type',typeof newPost)
        props.blogPosts.push(newPost)
        navigate('/blogs')
    }}>
        Submit
    </button>
    </>
  )
}

export default SubmitBlog