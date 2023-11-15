import React from 'react';
import { postApi } from '../../API/api';
import { useNavigate,useParams } from 'react-router-dom';
import PostItem from '../../features/post/PostItem';
import {Button} from '../../components/Button';

const PostsPage = () => {
    const { id } = useParams();
    const { data: post, isSuccess, isLoading } = postApi.useFetchPostByIdQuery(id)
    const navigate = useNavigate();
   
    if (isLoading) {
        return <p>loading...</p>
    }
    if(!isSuccess){
        return <p>Какая-то ошибка</p>
    }

    return (
        <>
        <PostItem post={post} bodyCharsLimit={false} />
        <Button onClick={()=>navigate(-1)} children={'назад'} />
        </>
    );
};

export default PostsPage;