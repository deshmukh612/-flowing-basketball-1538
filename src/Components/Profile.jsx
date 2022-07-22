import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    Button,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"

const Profile = () => {

  return (
    <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
          {isOpen ? 'Close' : 'Open'}
        </MenuButton>
        <MenuList>
          <MenuItem>Account</MenuItem>
          <MenuItem>My Reward</MenuItem>
          <MenuItem>My Offer</MenuItem>
          <MenuItem>Refer a Friend</MenuItem>
          <MenuItem onClick={() => alert('Kagebunshin')}>Logout</MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
  )
}

export default Profile