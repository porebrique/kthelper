import { BasePage } from 'src/decorators';
import Dashboard from './Dashboard';

@BasePage({ title: 'Dashboard' })
class DecoratedDashboard extends Dashboard {}

export default DecoratedDashboard;
