import React, {useState} from 'react';

const Post = ({postInfo}) => {
    const [bodyInfo, setBodyinfo] =useState()

    const moreInfo = ()=> {
        setBodyinfo(postInfo.body)
    }

    return (
        <div>
            <p>{bodyInfo}</p>
            <h1>{postInfo.title}</h1>
            <button onClick={moreInfo}>more info</button>
            <p>-----------------------</p>
        </div>
    );
};

export default Post;