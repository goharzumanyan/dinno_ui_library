import React, { useId, useRef } from 'react'
import type { TProfileDropdownProps } from '../types'
import './styles.scss'
import { Text } from '../../Text'
import { useOnOutsideClick } from '../../../hooks'
import { Link } from '../../Link'

export const ProfileDropdown = (props: TProfileDropdownProps): JSX.Element => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { avatar, name, email, bodyItems, footerItems, className } = props
  const [isOpen, setIsOpen] = React.useState(false)

  const closeDropdown = () => setIsOpen(false)
  useOnOutsideClick(menuRef.current, closeDropdown, isOpen, useId())

  return (
    <div ref={menuRef} className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{avatar}</div>
      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-dropdown__top">
            {avatar}
            <div className={'pl-12'}>
              <Text size={'medium'} weight={'bold'} lineHeight={'large'}>
                {name}
              </Text>
              <Text type={'tertiary'}>{email}</Text>
            </div>
          </div>
          <div className="profile-dropdown__menu">
            <ul className={'profile-dropdown__nav'}>
              {bodyItems?.map((item, index) => (
                <li key={index}>
                  {item.text ? (
                    <Link
                      url={item.url}
                      onclick={item.onclick}
                      className={'profile-dropdown__nav__link'}
                    >
                      <>
                        <span className={'flexbox align-items--center'}>
                          <>
                            {item.icon}
                            {item.text}
                          </>
                        </span>
                        {item.rightInfoProps}
                      </>
                    </Link>
                  ) : (
                    <div onClick={closeDropdown}>{item.children}</div>
                  )}
                </li>
              ))}
            </ul>
            {footerItems?.length ? (
              <div className={'profile-dropdown__bottom'}>
                <ul className={'profile-dropdown__nav'}>
                  {footerItems?.map((item, index) => (
                    <li key={index}>
                      {item.text ? (
                        <Link
                          url={item.url}
                          onclick={item.onclick}
                          className={'profile-dropdown__nav__link'}
                        >
                          <>
                            <span className={'flexbox align-items--center'}>
                              <>
                                {item.icon}
                                {item.text}
                              </>
                            </span>
                            {item.rightInfoProps}
                          </>
                        </Link>
                      ) : (
                        item.children
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
