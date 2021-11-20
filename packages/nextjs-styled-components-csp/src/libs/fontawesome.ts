import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Make sure this is before any other `fontawesome` API calls
config.autoAddCss = false;

library.add(faSun, faMoon);
