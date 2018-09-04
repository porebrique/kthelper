import Button from '@material-ui/core/Button';

const buttonVariants = {
  contained: 'contained',
  outlined: 'outlined',
  fab: 'fab',
};


export default class extends Button {

  static defaultProps = {
    ...Button.defaultProps,
    variant: 'outlined'
  }

  static variants = buttonVariants;

}
