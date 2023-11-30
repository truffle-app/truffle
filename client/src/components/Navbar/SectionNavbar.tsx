import PlainText from '@components/Text/PlainText'
import styled, { css } from '@emotion/native'
import NavbarTab from './NavbarTab'
import React from 'react-native'
import theme from '@theme'

const SectionNavbarContainer = styled.View`
  display: flex;
  flex-direction: row;
`

const StyledNavbarTab = styled(NavbarTab)`
  flex: 1;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
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
        <StyledNavbarTab
          key={i}
          onPress={() => setActiveTab(tab)}
          isActive={activeTab === tab}
        >
          <PlainText color={theme.colors.darkExtra}>{tab}</PlainText>
        </StyledNavbarTab>
      ))}
    </SectionNavbarContainer>
  )
}

export default SectionNavbar
