import styled from 'styled-components';

import MediaBlock from 'react-placeholder/lib/placeholders/MediaBlock';

export const StyledMediaBlock = styled(MediaBlock)`
  padding: ${props => props.theme.sizes.padding1};
  border: 1px solid ${props => props.color};
  margin-top: ${props => props.theme.sizes.padding1};

  :first-child {
    margin-top: 0;
  }
`;

export const StyledMainSection = styled.section`
  padding: ${props => props.theme.sizes.padding1};
`;
