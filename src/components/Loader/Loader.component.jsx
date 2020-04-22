import React from 'react';
import { number } from 'prop-types';
import getTestIdLocator from '@utils/locator';
import { LoaderContainer } from './Loader.styled';

const getLoaderLocator = getTestIdLocator('loader');

/**
 * Loader component
 */
const LoaderComponent = ({ fs }) => (
  <LoaderContainer fs={fs} data-testid={getLoaderLocator('container')}>
    <div data-testid={getLoaderLocator('spinner')} className="loader" />
  </LoaderContainer>
);

LoaderComponent.propTypes = {
  fs: number,
};

LoaderComponent.defaultProps = {
  fs: 12,
};

export default LoaderComponent;
