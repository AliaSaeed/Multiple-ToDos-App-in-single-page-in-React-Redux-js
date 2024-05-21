// MyComponent.js

import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    console.log({
      host: 'localhost',
      id: '',
      name: '',
      tagName: 'input',
      className: '',
      isWebsiteDisabled: false,
      isWebsiteBlacklisted: false,
      appToolbarShown: false
    });
  }, []); // empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
