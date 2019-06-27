// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/shared/Button';
import { action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';
import { text, boolean, number } from '@storybook/addon-knobs/react';

const stories = storiesOf('Button', module);

stories
  .add('Primary', () => <Button type="primary" size="lg" onClick={action("clicked")} disabled={boolean('Disabled', false)}>Primary button</Button> )
  .add('Default',  () => <Button type="default" size="lg" onClick={action("clicked")} disabled={boolean('Disabled', false)}>Default</Button>)
  .add('Info', () => <Button type="info" size="lg" onClick={action("clicked")} disabled={boolean('Disabled', false)}>Info button</Button>)
  .add('Warning', () => <Button type="warning" size="sm" onClick={action("clicked")} disabled={boolean('Disabled', false)}>Warning</Button>)
  .add('Danger', () => <Button type="danger" size="xs" onClick={action("clicked")} disabled={boolean('Disabled', false)}>!</Button>)
  .add('Testing default props', () => <Button onClick={action("clicked")} disabled={boolean('Disabled', false)}>Default props</Button>)
