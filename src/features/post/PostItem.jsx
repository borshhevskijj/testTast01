import React from 'react';
const MAX_CHARS_LIMIT = 35

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
    <div className='postItemContainer'>
      <div>№{post.id}</div>
      <div className='postItemContainer_title'>Title: {post.title}</div>
      <div className='postItemContainer_body'>
        Content: {contentLenghtEditor(bodyCharsLimit,post.body)}
      </div>
    </div>
  );
};

export default PostItem;
