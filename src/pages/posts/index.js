import React from 'react';
import {connect} from 'dva';

const Posts = ({
  posts,
  loading
}) => {

  return (
    <h1>POSTS:  （Size: {posts.totalElements}）</h1>
  );
}

export default connect(({posts, loading}) => ({posts, loading}))(Posts);
