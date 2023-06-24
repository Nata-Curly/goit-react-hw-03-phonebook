import { List, ListItem, DeleteBtn } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}> 
                <p>{name}: {number}</p>
            <DeleteBtn type="button" onClick={()=>onDeleteContact(id, name)}>Delete</DeleteBtn>
            </ListItem>
        ))}
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
export default ContactList;