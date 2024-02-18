import * as constants from '../../utils/constants';

import freezeCardIcon from '../../assets/images/mobile/Freeze_Card.svg';
import setSpendLimitIcon from '../../assets/images/mobile/Set_Spend_Limit.svg';
import gPayIcon from '../../assets/images/mobile/GPay.svg';
import replaceCardIcon from '../../assets/images/mobile/Replace_Card.svg';
import cancelCardIcon from '../../assets/images/mobile/Deactivate_Card.svg';

const actionConfig = [
    {
        id: 1,
        name: 'Freeze Card',
        action: constants.FREEZE_CARD,
        icon: freezeCardIcon,
        dialog: false,
    },
    {
        id: 1,
        name: 'Unfreeze Card',
        action: constants.UN_FREEZE_CARD,
        icon: freezeCardIcon,
        dialog: false,
    },
    {
        id: 2,
        name: 'Set spend limit',
        action: constants.SET_SPEND_LIMIT,
        icon: setSpendLimitIcon,
        dialog: false,
    },
    {
        id: 3,
        name: 'Add to GPay',
        action: constants.ADD_TO_GPAY,
        icon: gPayIcon,
        dialog: false,
    },
    {
        id: 4,
        name: 'Replace Card',
        action: constants.REPLACE_CARD,
        icon: replaceCardIcon,
        dialog: false,
    },
    {
        id: 5,
        name: 'Cancel Card',
        action: constants.CANCEL_CARD,
        icon: cancelCardIcon,
        dialog: true,
    }
];

export default actionConfig;
