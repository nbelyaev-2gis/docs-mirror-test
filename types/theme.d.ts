declare module '@theme/SearchBar' {
  interface SearchBarProps {
    variant: 'primary' | 'secondary';
    size?: 'compact' | 'default';
    showShortcut?: boolean;
    inputClassName?: string;
  }

  export default function SearchBar(props: SearchBarProps): JSX.Element;
}

declare module '@theme/NavbarItem/LocaleDropdownNavbarItem' {
  interface Props {
    dropdownItemsBefore?: LinkLikeNavbarItemProps[];
    dropdownItemsAfter?: LinkLikeNavbarItemProps[];
    items?: LinkLikeNavbarItemProps[];
  }
}
