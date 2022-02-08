import styled from 'styled-components';

import { DARK_GRAY, TRANSPARENT } from '../../util/constants/colors';
import { convertToPixels } from '../../util/formatters/unitOfMeasurement';

const TileDiv = styled.div`
  width: ${(props) => convertToPixels(props.size)};
  height: ${(props) => convertToPixels(props.size)};
  background-color: ${(props) => props.color};
  border: 2px solid
    ${(props) => (props.color === TRANSPARENT ? DARK_GRAY : props.color)};
  display: grid;
  place-content: center;
  font-weight: 500;
  font-size: 2rem;
`;

export default TileDiv;
