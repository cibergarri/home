/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styled from 'styled-components';
import {
  Switch, SwipeableDrawer, IconButton, ListItem,
} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Sun, Moon, Es, Uk,
} from '../../../icons';

export const NightModeContainer = styled.div`
  transition: all 2s;
  padding-bottom: 10px;
  min-width: 110px;
  margin: 0px 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  transition: all 2s;
  padding-bottom: 10px;
  min-width: 60px;
  margin: 0px 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenuTitleListItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  width: 140px;
  font-weight: 800;
`;

export const LanguageButtonListItem = styled(ListItem)`
  display: flex;
  justify-content: space-around;
  width: 140px;
  padding: 0px 30px;
`;

export const NightModeListItem = styled(ListItem)`
  display: flex;
  justify-content: space-around;
  white-space: nowrap;
`;

export const CustomSwitch = styled(Switch).attrs(() => ({
  color: 'primary',
}))`
  flex-grow: 1;
`;

export const StyledSunIcon = styled(Sun).attrs(props => ({
  fill: props.theme.main.primary,
  height: '20px',
  width: '20px',
}))`
  transition: fill 2s;
  padding: 0px 0.5vw 0vh 0.5vw;
  vertical-align: middle;
`;

export const StyledMoonIcon = styled(Moon).attrs(props => ({
  fill: props.theme.main.primary,
  height: '20px',
  width: '18px',
}))`
  transition: fill 2s;
  padding: 0px 0.5vw 0vh 0.5vw;
  vertical-align: middle;
`;

export const StyledESFlagIcon = styled(Es).attrs(() => ({
  height: '13px',
  width: '19.5px',
}))`
  transition: fill 2s;
  padding: 0px 0px;
  vertical-align: middle;
`;

export const StyledUKFlagIcon = styled(Uk).attrs(() => ({
  height: '13px',
  width: '19.5px',
}))`
  transition: fill 2s;
  padding: 0px 0px;
  vertical-align: middle;
`;

export const StyledMoreVertIcon = styled(MoreVertIcon)`
  color: ${props => props.theme.main.primary};
`;

export const LanguageButton = styled.button`
  filter: ${props => (props.selected ? '' : 'brightness(40%)')};
  border: none;
  padding: 0px 0px;
  height: fit-content;
  width: fit-content;
  background-color: Transparent;
  background-repeat:no-repeat;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  margin: 5px 5px;
  white-space: nowrap;
`;

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  background: ${props => `linear-gradient(${props.theme.main.background}DD 80%, ${props.theme.main.background}00 100%)`};
  color: ${props => props.theme.main.primary};
  `;

export const StyledRightMenuContainer = styled.div`
  color: ${props => props.theme.main.primary};
  background: #ffffff22;
`;
