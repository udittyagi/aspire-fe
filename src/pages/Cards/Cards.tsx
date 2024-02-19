/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

import Tabs from "../../components/Common/Tabs/Tabs";
import TabPanel from "../../components/Common/Tabs/TabPanel";
import DebitCards from '../../components/DebitCards/DebitCards';
import { API_ERROR, API_LOADING, API_STALE, API_SUCCESS, CANCEL_CARD, FREEZE_CARD, UN_FREEZE_CARD } from '../../utils/constants';
import AddCards from '../../components/AddCards/AddCards';

import { CardsContainer } from './Cards.styled';

import addIcon from '../../assets/images/mobile/plus_blue.svg';
import Logo from '../../assets/images/mobile/LogoIconGreen.svg';

import type CardsDetails from '../../types/cardsDetails.types';


const Cards = () => {
    const [debitCardsData, setDebitCardsData] = useState<Array<CardsDetails>>([]);
    const [currTab, setCurrTab] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [apiStatus, setApiStatus] = useState(API_STALE);
    const [sliderKey, setSliderKey] = useState(0);

    useEffect(() => {
        (async function() {
            try {
                //fetch all cards whether debit or credit
                setApiStatus(API_LOADING);
                const res = await fetch('/getCards');
                const data = await res.json();
                setDebitCardsData(data);
                setApiStatus(API_SUCCESS)
            } catch(err) {
                setApiStatus(API_ERROR)
            }
        })();
    }, []);

    const handleTabChange = (idx: number) => {
      setCurrTab(idx);
    }

    const handleModalOpen = () => {
        setIsModalOpen(prev => !prev);
    }

    const freezeCard = (cardId: string | number, status: boolean) => {
        const idx = debitCardsData.findIndex(item => item.id === cardId);
        const newCardsData = [...debitCardsData];
        newCardsData[idx] = {...newCardsData[idx], isFrozen: status};
        setDebitCardsData(newCardsData);
    }

    const cancelCard = (cardId: string | number) => {
        const newCardsData = debitCardsData.filter(data => data.id !== cardId);
        setDebitCardsData(newCardsData);
        setSliderKey(prev => prev + 1);
    }

    const handleCardAction = (cardId: number | string, action: string) => {
        switch(action) {
            case FREEZE_CARD: {
                freezeCard(cardId, true);
                break;
            }
            case UN_FREEZE_CARD: {
                freezeCard(cardId, false);
                break;
            }
            case CANCEL_CARD: {
                cancelCard(cardId);
                break;
            }
        }
    }

    const handleAddCards = (cardData: CardsDetails) => {
        setDebitCardsData(prevData => [...prevData, cardData]);
        setSliderKey(prev => prev + 1);
    }

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
        <CardsContainer>
            <img src={Logo} alt="Aspire Logo" className='aspirelogo'/>
            <div className="acnt__head">
                <h2 className='page__heading'>Account Balance</h2>
                <div className="acnt__heading">
                    <div className='acnt__amount'>
                        <span className='acnt__currency'>S$</span>
                        <span className='acnt__balance'>3,000</span>
                    </div>
                    <div role="button" className='btn__newCard' onClick={handleModalOpen}>
                        <img src={addIcon} alt=""/>
                        New Card
                    </div>
                </div>  

            </div>
            <Tabs
                className="cardsTab"
                tabs={["My Debit Cards", "All Company Cards"]}
                onChange={handleTabChange}
                value={currTab}
            />
            <TabPanel value={currTab} index={0}>
                <DebitCards
                    handleCardAction={handleCardAction}
                    cardsData={debitCardsData}
                    sliderKey={sliderKey}
                />
            </TabPanel>
            <TabPanel value={currTab} index={1}>
                <div>All Company Cards</div>
            </TabPanel>
            <AddCards
                isOpen={isModalOpen}
                handleModalOpen={handleModalOpen}
                onCardAdd={handleAddCards}
            />
        </CardsContainer>
    )
}

export default Cards;
