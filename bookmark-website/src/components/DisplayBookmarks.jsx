import React, { useState } from 'react';
import { useBookMark } from '../context/BookmarkStore';

const DisplayBookmarks = () => {
  const { bookMarks, deleteBookmark, editBookmark } = useBookMark();
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newLink, setNewLink] = useState('');

  const startEditing = (index, bookmark) => {
    setEditingIndex(index);
    setNewTitle(bookmark.name);
    setNewLink(bookmark.url);
  };

  const handleEditSubmit = (id) => {
    editBookmark(id, newTitle, newLink);
    setEditingIndex(null);
  };

  return (
    <div>
      <h1>All Bookmarks</h1>
      {bookMarks.map((bookmark, index) => (
        <div key={bookmark._id} style={{ marginBottom: '10px' }}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                type="text"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
              />
              <button onClick={() => handleEditSubmit(bookmark._id)}>
                Save
              </button>
              <button onClick={() => setEditingIndex(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{bookmark.name}: </span>
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                {bookmark.url}
              </a>
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => startEditing(index, bookmark)}
              >
                Edit
              </button>
              <button
                style={{ marginLeft: '5px' }}
                onClick={() => deleteBookmark(bookmark._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayBookmarks;
