import React from 'react';
import PropTypes from 'prop-types';

function Button({
  text,
  clickEvent,
}) {
  return (
    <button onClick={clickEvent} type="submit" className="transition duration-300 ease-in-out bg-accent-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func,
};

Button.defaultProps = {
  clickEvent: null,
};

export default Button;
