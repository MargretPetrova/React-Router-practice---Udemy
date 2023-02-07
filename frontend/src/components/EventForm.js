import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const data = useActionData();
  

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting'
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form  method="POST" className={classes.form}>
      {data && data.errors && <ul>
        {Object.entries(data.errors).map(err=><li key={err}>{err[1]}</li>)}</ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event? event.title: ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required  defaultValue={event? event.image: ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event? event.date: ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event? event.description: ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSubmiting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmiting}>{isSubmiting? 'Submiting...' :'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
