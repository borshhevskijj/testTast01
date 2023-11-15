import React from 'react';
import { postApi } from '../../entities/api';
import { useNavigate,useParams } from 'react-router-dom';
import PostItem from '../../widgets/post/PostItem';
import { Button } from '../../shared/button/Button';
import Loader from '../../shared/loader/Loader';

const PostsPage = () => {
    const { id } = useParams();
    const { data: post, isSuccess, isLoading } = postApi.useFetchPostByIdQuery(id)
    const navigate = useNavigate();
   
    if (isLoading) {
        return <Loader/>
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