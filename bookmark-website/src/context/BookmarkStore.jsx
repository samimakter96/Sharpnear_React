import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const API_URL =
  'https://crudcrud.com/api/75e9dff50e774291b1f9427b59d8d9b9/bookmarks';

export const BookMarkStore = createContext(null);

export const BookMarkProvider = ({ children }) => {
  const [bookMarks, setBookMarks] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(API_URL);
        setBookMarks(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    fetchBookmarks();
  }, []);

  const handleSubmitForm = async (title, link) => {
    const newBookMark = { name: title, url: link };
    try {
      const response = await axios.post(API_URL, newBookMark);
      setBookMarks((prevBookMarks) => [...prevBookMarks, response.data]);
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  };

  const deleteBookmark = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBookMarks((prevBookMarks) =>
        prevBookMarks.filter((bookmark) => bookmark._id !== id)
      );
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };

  const editBookmark = async (id, newTitle, newLink) => {
    const updatedBookmark = { name: newTitle, url: newLink };
    try {
      await axios.put(`${API_URL}/${id}`, updatedBookmark);
      setBookMarks((prevBookMarks) =>
        prevBookMarks.map((bookmark) =>
          bookmark._id === id ? { ...bookmark, ...updatedBookmark } : bookmark
        )
      );
    } catch (error) {
      console.error('Error editing bookmark:', error);
    }
  };

  const contextValue = {
    bookMarks,
    handleSubmitForm,
    deleteBookmark,
    editBookmark,
  };

  return (
    <BookMarkStore.Provider value={contextValue}>
      {children}
    </BookMarkStore.Provider>
  );
};

// Custom hooks
export const useBookMark = () => {
  return useContext(BookMarkStore);
};
