import { Cat, House, LucideProps } from 'lucide-react'
import { FC, useMemo } from 'react'

import LayoutComponent from '#components/common/LayoutComponent'
import LinkComponent from '#components/common/LinkComponent'

interface MenuListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href: string
  label: string
  icon?: FC<LucideProps>
}

const MenuListItem = ({ label, icon, href, ...props }: MenuListItemProps) => {
  const IconComponent = useMemo(() => icon, [icon])

  return (
    <li {...props}>
      <LinkComponent className="flex gap-1 items-center text-sm lg:text-base" href={href}>
        {IconComponent && <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />}
        <span>{label}</span>
      </LinkComponent>
    </li>
  )
}

const MenuList = () => (
  <ul className="flex gap-2 lg:gap-4">
    <MenuListItem href="/" label="Start page" icon={House} />
    <MenuListItem href="/second-page/" label="Second Page" icon={Cat} />
  </ul>
)

interface MenuProps {
  isHeader?: boolean
}

const Menu = ({ isHeader }: MenuProps) => {
  if (isHeader) {
    return (
      <div className="fixed w-full z-10 bg-light @dark:bg-black py-4 border-b-graySuperLight @dark:border-b-grayDark border-b-1">
        <LayoutComponent>
          <MenuList />
        </LayoutComponent>
      </div>
    )
  }

  return (
    <div className="p-4 @dark:bg-grayDark">
      <MenuList />
    </div>
  )
}

export default Menu
