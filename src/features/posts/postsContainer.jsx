import React,{useEffect,useState} from "react";
import {postApi} from '../../entities/api'
import PostItem from '../../widgets/post/PostItem'
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {Button} from '../../shared/button/Button'
import Loader from "../../shared/loader/Loader";

const getRefForCard = (isFirst, isLast, firstCardRef, lastCardRef) => {
    if (isFirst) {
      return firstCardRef;
    } else if (isLast) {
      return lastCardRef;
    } else {
      return null;
    }
  };

const JSON_PLACEHOLDER_LIMIT = 80 // 80 + 20(изначально загруженные)

const PostContainer = () => {
    const [currentPostStart,setCurrentPostStart]=useState(0)
    const {data:posts, isLoading} = postApi.useFetchAllPostsQuery({limit:20,start:currentPostStart})

    const { ref: firstCard, inView: inViewFirstCard } = useInView({
      threshold: 0,
    });
    
    const { ref: lastCard, inView: inViewLastCard } = useInView({
      threshold: 1,
      });


      useEffect(() => {
        if (inViewFirstCard) {
                setCurrentPostStart((prev) =>{
                return prev > 0 ? prev - 10 : prev
                } 
                );
        }
    }, [inViewFirstCard]);
    
    useEffect(() => {
        if (inViewLastCard) {
            setCurrentPostStart((prev) =>{
                if (prev === JSON_PLACEHOLDER_LIMIT) {
                    return prev
                }
               return prev + 10 
            } 
            );
        }
      }, [inViewLastCard]);

      const navigate = useNavigate()
      const buttonHandler =(id)=>{
        navigate(`/posts/${id}`)
      }


    return (
        <main>
            <ul className='post__list'>
              
                {posts && posts.map((post,index,arr)=>{
                  const isFirstCard = index === 0;
                  const isLastCard = index === arr.length - 1;
                  const cardRef = getRefForCard(isFirstCard , isLastCard, firstCard, lastCard);
          
                  return (
                    <li key={post.id} ref={cardRef}>
                        <PostItem key={post.id} post={post} bodyCharsLimit={true}/>
                        <Button onClick={()=> buttonHandler(post.id)} children={'подробнее'}/>
                    </li>
                       ) 
                }
                )}
                {isLoading && <Loader/>}
            </ul>
        </main>
    );
};
export default PostContainer