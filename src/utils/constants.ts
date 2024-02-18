import fileStorage from '../assets/images/mobile/file-storage.svg';
import flights from '../assets/images/mobile/flights.svg';
import megaPhone from '../assets/images/mobile/megaphone.svg';

export const GREEN_COLOR = '#01D167';
export const CARD_BLUE_COLOR = '#536DFF';
export const FREEZE_CARD = 'FREEZE_CARD';
export const UN_FREEZE_CARD = 'UN_FREEZE_CARD';
export const SET_SPEND_LIMIT = 'SET_SPEND_LIMIT';
export const ADD_TO_GPAY = 'ADD_TO_GPAY';
export const REPLACE_CARD = 'REPLACE_CARD';
export const CANCEL_CARD = 'CANCEL_CARD';

export const CATEGORIES = {
    SHOPPING: { label: 'SHOPPING', icon: fileStorage, bgColor: '#009DFF1A' },
    TRAVEL: { label: 'TRAVEL', icon: flights, bgColor: '#00D6B51A' },
    ENTERTAINMENT: { label: 'ENTERTAINEMENT', icon: megaPhone, bgColor: '#F251951A' }
}

export const TXN_CACHE_KEY = 'txnData';

export const API_LOADING = 'API_LOADING';
export const API_ERROR = 'API_ERROR';
export const API_SUCCESS = 'API_SUCCESS';
export const API_STALE = 'API_STALE';
