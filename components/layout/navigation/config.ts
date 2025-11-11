export interface INavigationItem {
  id: string;
  title: string;
  href: string;
  isExternal?: boolean;
  hidden?: boolean;
}

export const navigationItems: INavigationItem[] = [
  { id: 'home', title: 'Главная', href: '/' },
  { id: 'about', title: 'О нас', href: '#about' },
  { id: 'categories', title: 'Категории', href: '#categories' },
  { id: 'services', title: 'Услуги', href: '/services' },
  { id: 'blog', title: 'Блог', href: '/blog' },
  { id: 'contacts', title: 'Контакты', href: '#contacts' },
];
