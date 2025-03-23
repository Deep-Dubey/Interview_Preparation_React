import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PageComments = () => {
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
      ]);

      setPost(postResponse.data);
      setComment(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {post && (
            <div className="post-card">
              <h2
                style={{
                  background: "Black",
                  color: "white",
                }}
              >
                {post.title}
              </h2>
              <p>{post.body}</p>
            </div>
          )}
          <h2
            style={{
              background: "Black",
              color: "white",
            }}
          >
            Comments
          </h2>
          <ul>
            {comment.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        style={{
          background: "blue",
          color: "white",
          border: "1px solid red",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageComments;
