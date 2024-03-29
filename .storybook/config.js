// .storybook/config.js

import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withKnobs);
addParameters({ viewport: { defaultViewport: "iphone6" } })

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
// const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

