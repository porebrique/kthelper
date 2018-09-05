import { BasePage } from 'src/decorators';
import TeamEditView from './TeamEditView';

@BasePage({ title: 'Edit team' })
class DecoratedEditView extends TeamEditView {}

export default DecoratedEditView;
