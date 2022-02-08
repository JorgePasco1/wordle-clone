import PropTypes from 'prop-types';

import { TRANSPARENT, VALID_COLORS } from 'util/constants/colors';
import { DEFAULT_TILE_SIZE } from 'util/constants/sizes';
import TileDiv from './styled';

const Tile = ({ color, size, value }) => (
  <TileDiv color={color} size={size}>
    {value?.toUpperCase()}
  </TileDiv>
);

Tile.propTypes = {
  color: PropTypes.oneOf(VALID_COLORS),
  size: PropTypes.number,
};

Tile.defaultProps = {
  color: TRANSPARENT,
  size: DEFAULT_TILE_SIZE,
};

export default Tile;
