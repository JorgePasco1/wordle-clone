import styled from 'styled-components';
import { GAP_SIZE } from 'util/constants/sizes';
import { convertToPixels } from 'util/formatters/unitOfMeasurement';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${convertToPixels(GAP_SIZE)};
`;

const Board = ({ children }) => <Div>{children}</Div>;

export default Board;
