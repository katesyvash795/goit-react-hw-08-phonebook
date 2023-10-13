import { fetchContacts } from 'redux/contact-filter/operation';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/contact-filter/selectors';
import RoundSpinner from '../components/Loading/Loading';
import Error from '../components/Error/Error';

function Contacts() {
  // const token = useSelector(state => state.auth.token);
  const isLoading = useSelector(getIsLoading);
  const isError=useSelector(getError)
  // console.log('Token:', token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <center>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !isError &&<RoundSpinner/>}
        {isError && !isLoading && <Error/>}
        {!isLoading && !isError &&  <ContactList />}
      </center>
    </div>
  );
}

export default Contacts;
