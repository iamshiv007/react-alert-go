import { Alert } from '../component';

export default {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
};

export const SimpleAlert = {
  args: {
    message: 'Success message',
    position: 'bottom',
    type: 'warning'
  }
};
