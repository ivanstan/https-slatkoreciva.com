import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  background-color: ${props => props.theme.defaultBrand};
  height: 128px;
`;

export class Footer extends React.Component<any, any> {

  public render() {
    return <FooterWrapper>

    </FooterWrapper>;
  }
}
