import React, { PropTypes } from 'react';

const EditableTodo = ({ text, parent }) => (
  <tr>
    <td>
      <input
        className="todoEditInput"
        defaultValue={text}
        onChange={(e) => {
          parent.setState({
            value: e.target.value,
          });
        }}
      />
    </td>
    <td>
      <button
        className="submitEdit"
        dangerouslySetInnerHTML={{
          __html: '&#x2713',
        }}
        onClick={(e) => {
          e.preventDefault();
          parent.props.renameTodo(parent.state.value);
          parent.setState({
            editable: false,
          });
        }}
      />
    </td>
  </tr>
);

EditableTodo.propTypes = {
  text: PropTypes.string,
  parent: PropTypes.object,
};

EditableTodo.defaultProps = {
  text: '',
  parent: {},
};

export default EditableTodo;
