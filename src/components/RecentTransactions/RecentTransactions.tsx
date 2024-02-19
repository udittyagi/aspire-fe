import React, {useEffect, useState} from 'react';

import Accordion from '../Common/Accordion/Accordion';
import { API_ERROR, API_LOADING, API_STALE, API_SUCCESS, CATEGORIES } from '../../utils/constants';
import { cacheTxnData, getTxnData } from '../../utils';

import { DetailItem, DetailsList } from './RecentTransactions.styled';

import transactionIcon from '../../assets/images/mobile/transactions.svg';
import nextIcon from '../../assets/images/mobile/next.svg';
import smallCardIcon from '../../assets/images/mobile/small-card-light.svg';

import type Transaction from '../../types/transactions.types';

interface PropTypes {
    cardId: number | string
}

const RecentTransactions = ({cardId}: PropTypes) => {
    const [transactions, setTransactions] = useState<Array<Transaction>>([])
    const [apiStatus, setApiStatus] = useState(API_STALE)

    useEffect(() => {
        (async function() {
            const cachedData = getTxnData(cardId)
            if(cachedData) {
                setTransactions(cachedData);
                setApiStatus(API_SUCCESS);
            } else {
                try {
                    setApiStatus(API_LOADING)
                    const res = await fetch(`/cardDetails?${cardId}`);
                    const data = await res.json();
                    setTransactions(data);
                    setApiStatus(API_SUCCESS);
                    cacheTxnData(cardId, data);
                }catch(err) {
                    setApiStatus(API_ERROR)
                }
            }
        })();
    }, [cardId]);

    const getDetailsList = () => {
        if(apiStatus !== API_SUCCESS) {
            switch(apiStatus) {
                case API_ERROR: {
                    return <div>Error</div>
                }
                default: {
                    return <div>Loading....</div>
                }
            }
        }

        return (
            <DetailsList>
                {
                    transactions.map((transaction) => (
                        <React.Fragment key={transaction.id}>
                            <DetailItem className='txn' bgColor={CATEGORIES[transaction.category || 'SHOPPING']?.bgColor}>
                                <div className="txn__main">
                                    <div className='txn__icon'>
                                        <img src={CATEGORIES[transaction.category || 'SHOPPING']?.icon} alt={transaction.category || 'SHOPPING'}/>
                                    </div>
                                    <div className='txn__details'>
                                        <span className='txn__vendor'>{transaction.vendor}</span>
                                        <span className='txn__date'>{transaction.date}</span>
                                        <div className='txn__note'>
                                            <div className='txn__noteIcon'>
                                                <img src={smallCardIcon} alt=""/>
                                            </div>
                                            {transaction.note}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className={`txn__amount txn__amount--${transaction.type.toLowerCase()}`}>{transaction.type === 'CREDIT' ? '+' : '-'} $ {transaction.amount}</span>
                                    <img src={nextIcon} alt="next" />
                                </div>
                            </DetailItem>
                        </React.Fragment>

                    ))
                }
            </DetailsList>
        )
    }

    return (
        <Accordion icon={transactionIcon} heading="Recent Transaction">
            {getDetailsList()}
        </Accordion>

    )
}

export default RecentTransactions;
