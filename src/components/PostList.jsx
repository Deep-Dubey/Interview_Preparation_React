import React from "react";
import useFetch from "../hooks/useFetch";

const PostList = () => {
  const { data, loading, error } = useFetch(
    "http://jsonplaceholder.typicode.com/posts"
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <>
      <h1>Posts</h1>
      {data && (
        <ul>
          {/* Slicing the data */}
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}

          {/* {data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))} */}
        </ul>
      )}
    </>
  );
};

export default PostList;
