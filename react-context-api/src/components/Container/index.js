import React from 'react';

import { useTheme, themes } from '../../context/Theme';

function Container({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ background: theme.colors.background, color: theme.colors.text, }}>
      {children}

      <hr />

      <button onClick={() => setTheme(theme.name === 'dark' ? themes[1] : themes[0] )}>
        Switch Theme
      </button>

    </div>
  );
}

export default Container;