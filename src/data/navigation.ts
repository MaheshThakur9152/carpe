export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Atelier', href: '/atelier' },
  { label: 'The Edit', href: '/the-edit' },
  { label: 'Contact', href: '/contact' }
];
