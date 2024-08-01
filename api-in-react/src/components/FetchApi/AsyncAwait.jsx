import React, { useEffect, useState } from 'react';

const AsyncAwait = () => {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // GET with fetch API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  // DELETE with fetch API
  const deletePost = async (id) => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.status === 200) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  // POST with fetch API
  const addPost = async (e) => {
    e.preventDefault();

    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    let data = await response.json()
    setPosts((prevPosts) => [data, ...prevPosts])
    setTitle('')
    setBody('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, body)
  }

  return (
    <>
      <form>
        <label htmlFor="">Post Title:</label>
        <input
          type="text"
          placeholder="Enter your post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="">Post Body:</label>
        <textarea
          cols="20"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />

        <button type="submit" onClick={addPost}>Add Post</button>
      </form>

      <h1>Here is our all posts</h1>
      <div>
        {posts.map((post) => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AsyncAwait;
