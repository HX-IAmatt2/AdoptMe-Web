import { useSelector } from 'react-redux';
import styles from './RenameView.module.css';

const RenameView = ({ pet, newName, error, handleChange, handleSubmit }) => {
  const layer1 = useSelector((state) => state.layer1);

  if (layer1 === 'Rename') {
    return (
      <div id={styles.box}>
        <div>
          <h3>Como quieres que se llame tu {pet.raza}?</h3>
        </div>

        <form
          id={styles.inputDiv}
          className="form-inline"
          onSubmit={handleSubmit}
        >
          <input
            id={styles.input}
            className="form-control mr-sm-2"
            type="text"
            name="name"
            key="name"
            value={newName}
            onChange={(event) => handleChange(event.target.value)}
          />

          <button
            id={styles.btn}
            className={
              error
                ? 'disabled btn btn-success my-2 my-sm-0'
                : 'btn btn-success my-2 my-sm-0'
            }
            type="submit"
          >
            OK
          </button>

          {error ? <h5>{error}</h5> : null}
        </form>
      </div>
    );
  } else return null;
};

export default RenameView;
