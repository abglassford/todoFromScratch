import React, { PropTypes } from 'react';

const EditableTodo = ({ text, onChange, onClick }) => (
  <tr>
    <td>
      <input
        className="todoEditInput"
        defaultValue={text}
        onChange={onChange}
      />
    </td>
    <td>
      <button
        className="submitEdit"
        dangerouslySetInnerHTML={{
          __html: '&#x2713',
        }}
        onClick={onClick}
      />
    </td>
  </tr>
);

EditableTodo.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

EditableTodo.defaultProps = {
  text: '',
  onChange: () => {},
  onClick: () => {},
};

export default EditableTodo;
