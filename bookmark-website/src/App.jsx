import BookMarkForm from './components/BookMarkForm';
import DisplayBookmarks from './components/DisplayBookmarks';
import { BookMarkProvider } from './context/BookmarkStore';

function App() {
  return (
    <>
      <BookMarkProvider>
        <BookMarkForm />
        <DisplayBookmarks />
      </BookMarkProvider>
    </>
  );
}

export default App;
