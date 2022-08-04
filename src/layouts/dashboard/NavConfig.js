// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: 'app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: 'user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'product',
    path: 'product',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'category',
    path: 'category',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default navConfig;
