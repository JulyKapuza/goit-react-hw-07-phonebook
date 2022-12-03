import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import MyLoader from './Loader/Loader';

function App() {
  const { isLoading, error } = useSelector(state => state.contacts);
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <Filter />
      {isLoading && <MyLoader/>}
      {error && <h2>An error: {error}</h2>}
      <ContactList />
    </div>
  );
}

export default App;
