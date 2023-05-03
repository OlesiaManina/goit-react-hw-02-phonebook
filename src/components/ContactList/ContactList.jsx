import css from './ContactList.module.css';

const ContactList = ({visibleContacts, deleteContact}) => (
    <ul className={css.list}>
      {visibleContacts.map(({name, number, id}) => {
        return (
          <li key={id} className={css.listItem}>
            <p className={css.text}>
            {name}: {number}
            </p>
            <button onClick={() => deleteContact(id)} className={css.btn}>Delete</button>
          </li>
        )
      } )}
  </ul>
)

export default ContactList;