import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Reviews</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}


export default App;
