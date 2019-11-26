import React, {Component} from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {
  LoadingContainer,
  Loader
} from '../../styles/styles';

class Loading extends Component {
  render() {
    return (
      <LoadingContainer>
        <Loader>
          <ScaleLoader
            color={'#4178be'}
            height={30}
            width={5}
            radius={0}
            margin={'1px'}
          />
        </Loader>
      </LoadingContainer>
    )
  }
}

export default Loading;