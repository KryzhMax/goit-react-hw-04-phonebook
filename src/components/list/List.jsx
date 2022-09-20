import React from "react";
import PropTypes from "prop-types";
import s from "./List.module.css";

export const Filter = ({ contacts, onHandleFilter, onDeleteHandler }) => {
  const onFinder = (e) => {
    onHandleFilter(e.target.value);
  };

  const deleteName = (id) => {
    onDeleteHandler(id);
  };

  return (
    <>
      <h3>Find contact by name</h3>
      <form className={s.finder}>
        <input type="text" onChange={onFinder} />
      </form>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.listItem}>
              {name}: {number}
              <button
                className={s.delBtn}
                type="button"
                onClick={() => {
                  deleteName(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
