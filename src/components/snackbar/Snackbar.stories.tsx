// Snackbar.stories.tsx
import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CustomSnackbar, { SnackbarProps } from './Snackbar';

export default {
  title: 'Components/Snackbar',
  component: CustomSnackbar,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => <CustomSnackbar {...args} />;

export const Base: StoryFn<SnackbarProps> = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Snackbar with different anchor origins */}
      <CustomSnackbar variant buttonTitle="Top Center" anchorOrigin={{ vertical: 'top', horizontal: 'center' }} />
      <CustomSnackbar buttonTitle="Top Right" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} />
      <CustomSnackbar buttonTitle="Bottom Left" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CustomSnackbar buttonTitle="Top Left" anchorOrigin={{ vertical: 'top', horizontal: 'left' }} />
      <CustomSnackbar buttonTitle="Bottom Right" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} />
      <CustomSnackbar buttonTitle="Bottom Center" anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />

    </div>
  </div>
);

export const TopLeft = Template.bind({});
TopLeft.args = {
  buttonTitle: 'I love snacks',
  anchorOrigin: { vertical: 'top', horizontal: 'left' },
};



