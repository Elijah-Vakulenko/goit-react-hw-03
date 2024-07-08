import s from './App.module.css'
 
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Contacts from '../contacts.json';

const App = () => {
  return (
      <div>
        <div className='container'>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    </div>
  )
}

export default App