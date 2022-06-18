import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import contacts from "./data/contacts.json";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.phone}>
              <Contact data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
