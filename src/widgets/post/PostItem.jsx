import React from 'react';
import './postItem.css'
const MAX_CHARS_LIMIT = 55

const truncateTextAtLastSpace =(content)=>{
  const slice = content.substring(0, MAX_CHARS_LIMIT)
  const lastSpaceIndex = slice.lastIndexOf(' ')
  return `${content.substring(0,lastSpaceIndex)} ...`
}
const contentLenghtEditor =(limit,content)=>{
  if (limit) {
    return truncateTextAtLastSpace(content)
  }
  return content
}

const PostItem = ({ post,bodyCharsLimit}) => {
  return (
    <article className='postItemContainer'>
      <section className='postItemContainer__wrapper'>
        <div>№{post.id}</div>
        <h2>Title: {post.title}</h2>
      </section>
      <section >
         Content: {contentLenghtEditor(bodyCharsLimit,post.body)}
      </section>
    </article>
  );
};

export default PostItem;
