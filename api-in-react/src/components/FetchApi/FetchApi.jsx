import React, { useEffect, useState } from 'react';

const FetchApi = () => {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // ADD: POST method
  const addPosts = async (title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [data, ...prevPosts]);
        setTitle('');
        setBody('');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // DELETE: DELETE method
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setPosts(posts.filter((post) => post.id !== id))
      } else {
        return;
      }
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addPosts(title, body);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="">Post Title:</label>
          <input
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br />
          <br />

          <label htmlFor="">Post Body:</label>
          <textarea
            cols="20"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <br />
          <br />

          <button type="submit">Add Post</button>
        </form>
      </div>

      <h1>Here is All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
