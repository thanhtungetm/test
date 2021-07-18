import './App.css';
import ContactsManager from './components/ContactsApp/ContactsManager';


const contacts = ['tung', 'thanh', 'ha'];

function App() {
  return (
  <div>
      <h1>Contact app</h1>
      <ContactsManager contacts={contacts} />
  </div>
  );

}

export default App;
