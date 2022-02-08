import { TileStatuses } from 'services/wordleService/constants';
import { DARK_GRAY, GREEN, YELLOW, TRANSPARENT } from 'util/constants/colors';

const useColorMapping = () => {
  const COLOR_MAP = {
    [TileStatuses.UNVISITED]: TRANSPARENT,
    [TileStatuses.FAILED]: DARK_GRAY,
    [TileStatuses.PARTIAL_SUCCESS]: YELLOW,
    [TileStatuses.SUCCESS]: GREEN,
  };

  const getColorByStatus = (status) => COLOR_MAP[status];

  return { getColorByStatus };
};

export default useColorMapping;
