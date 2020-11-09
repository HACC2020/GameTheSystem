import React from 'react';
import PropTypes from 'prop-types';

function Button({
  text,
}) {
  return (
    <button type="submit" className="transition duration-300 ease-in-out bg-accent-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
