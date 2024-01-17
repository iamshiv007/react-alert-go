import Alert from '../component';

export default {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export const SimpleAlert = {
  args: {
    message: 'Success alert'
  }
};
