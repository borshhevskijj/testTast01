import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

const PostItem = ({ post }) => {
//   const navigate = useNavigate();
  const navigateTo =()=>{
    console.log('navigating...');
  }
  return (
    <div className='postItemContainer'>
      <div>№{post.id}</div>
      <div className='postItemContainer_title'>Title: {post.title}</div>
      <div className='postItemContainer_body'>
        Content: {post.body.length > 35 ? post.body.substring(0, 35) + '...' : post.body}
      </div>
      <Button onClick={navigateTo} children={'к посту'}/>
    </div>
  );
};

export default PostItem;
