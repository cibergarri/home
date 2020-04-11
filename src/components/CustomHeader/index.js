import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';

import { setThemeAction } from '../../actions/setThemeAction';
import { THEMES } from '../../constants/config';

import {
  Header, CustomSwitch, CustomAppBar, CustomToolbar, Title, NightModeContainer, Blank, SVG, LinksContainer, Link
} from './style';

function CustomHeader() {
  const theme = useSelector(state => state.config.theme);
  const dispatch = useDispatch();

  const toggleTheme = (event) => {
    const theme = event.target.checked ? THEMES.NIGHT : THEMES.NORMAL;
    dispatch(setThemeAction(theme));
  }

  return (
    <Header>
      <CustomAppBar>
        <CustomToolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Title>
            Lorem Ipsum
          </Title>
          <Blank/>
          <LinksContainer>
            <Link href='https://www.github.com/cibergarri'>
              <SVG>
                <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </SVG>
            </Link>
            <Link href='https://www.linkedin.com/in/javiergarridoiglesias/'>
              <SVG>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </SVG>
            </Link>            
            <Link href='https://twitter.com/cibergarri81'>
              <SVG>
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </SVG>
            </Link>
          </LinksContainer>
          <NightModeContainer>
            Night Mode<CustomSwitch checked={ theme === THEMES.NIGHT } onChange={toggleTheme}/>
          </NightModeContainer>
        </CustomToolbar>
      </CustomAppBar>
    </Header>
  );
}

export default CustomHeader;