// Handling errors in Fetch API

import { useState } from 'react';

const [posts, setPosts] = useState([]);

const fetchPost = () => {
  fetch('https://api.example.com')
    .then((response) => {
      // handling error
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      setPosts(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// And for async/await we can use the try and catch like this:

const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    setPosts(data);
  } catch (error) {
    console.log(error);
  }
};
