import { configure } from '@storybook/react';

configure(require.context('./', true, /\.stories\.jsx$/), module);
