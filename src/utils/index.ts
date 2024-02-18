
import { TXN_CACHE_KEY } from './constants';

import type Transaction from '../types/transactions.types';

export const cacheTxnData = (cardId: number | string, data: Array<Transaction>) => {
    const txnCacheData = sessionStorage.getItem(TXN_CACHE_KEY);
    let txnData = {}
    if (txnCacheData) {
        txnData = JSON.parse(txnCacheData);

    }
    txnData = { ...txnData, [cardId]: data };
    sessionStorage.setItem(TXN_CACHE_KEY, JSON.stringify(txnData))
}

export const getTxnData = (cardId: number | string) => {
    const txnCacheData = sessionStorage.getItem(TXN_CACHE_KEY);
    if (txnCacheData) {
        const txnData = JSON.parse(txnCacheData);
        return txnData[cardId] || null
    }
    return null;
}

export const generateCardDetails = () => {
    let cardStr = '';
    for (let i = 0; i < 4; i++) {
        cardStr += Math.floor(1000 + Math.random() * 9000);
    }

    const date = new Date();
    date.setFullYear(date.getFullYear() + 5);

    return {
        cardNumber: cardStr,
        cvv: String(Math.floor(100 + Math.random() * 900)),
        validUpto: `${date.getMonth()}/${date.getFullYear() % 100}`,
        id: crypto.randomUUID() as string
    }
}