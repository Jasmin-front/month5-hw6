import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/PostsSlice";
import Post from "../../components/Post";
import PostSpinner from "../../components/PostSpinner";

const PostPage = () => {
    const {posts, preloader, error} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    const getPostsFunc = () => {
        dispatch(getPosts())
    }
    useEffect(() => {
        getPostsFunc()
    }, []);
    console.log(posts)
    return (
        <div>
            <button onClick={getPostsFunc}>get posts</button>
            <button>delete all</button>
            {preloader ? <PostSpinner/>:
                error? <h1>{error}</h1>:
                posts.slice(1,10).map(post => <Post postInfo={post}/>)
            }
        </div>
    );
};

export default PostPage;