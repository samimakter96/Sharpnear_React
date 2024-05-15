import React, { useState } from 'react';
import { useBookMark } from '../context/BookmarkStore';

const BookMarkForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const { handleSubmitForm } = useBookMark();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitForm(title, link);
    setTitle('');
    setLink('');
    setShowForm(false);
  };

  return (
    <>
      <div>
        <h1>Bookmark Website</h1>
        {!showForm && (
          <button onClick={() => setShowForm(true)}>Add new</button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h3>Add Website</h3>
          <label>Website Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Website Link</label>
          <input
            type="text"
            placeholder="Enter Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type="submit">Add</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default BookMarkForm;
