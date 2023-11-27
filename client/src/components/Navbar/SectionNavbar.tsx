import styled, { css } from '@emotion/native'
import PlainText from '../Text/PlainText'
import NavbarTab from './NavbarTab'
import React from 'react-native'
import theme from '../../theme'

const SectionNavbarContainer = styled.View`
  display: flex;
  flex-direction: row;
`

const SectionNavbar = ({
  tabs,
  activeTab,
  setActiveTab
}: {
  tabs: string[]
  activeTab: string
  setActiveTab: Function
}) => {
  return (
    <SectionNavbarContainer>
      {tabs.map((tab: string, i: number) => (
        <NavbarTab
          key={i}
          style={css`
            margin-top: 10px;
            padding-top: 10px;
            padding-bottom: 20px;
          `}
          onPress={() => setActiveTab(tab)}
          isActive={activeTab === tab}
        >
          <PlainText color={theme.colors.darkExtra}>{tab}</PlainText>
        </NavbarTab>
      ))}
    </SectionNavbarContainer>
  )
}

export default SectionNavbar
