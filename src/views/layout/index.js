/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoadingAction } from '../../actions/config';

import {
  Main, Body,
} from './style';

import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';

function Layout({ content }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingAction(false));
  }, [dispatch]);
  return (
    <Main>
      <CustomHeader />
      <Body>
        {content}
      </Body>
      <CustomFooter />
    </Main>
  );
}


Layout.propTypes = {
  content: PropTypes.object.isRequired,
};

Layout.defaultProps = {};

export default Layout;
