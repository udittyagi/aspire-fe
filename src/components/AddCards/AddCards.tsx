import { useState } from "react";

import Dialog from "../Common/Dialog/Dialog"
import {generateCardDetails} from '../../utils/index';

import { AddCardsContainer } from "./AddCards.styled";

import type CardsDetails from "../../types/cardsDetails.types";

interface PropTypes {
    isOpen: boolean;
    handleModalOpen?: () => void;
    onCardAdd: (cardData: CardsDetails) => void;
}

const AddCards = ({isOpen, handleModalOpen, onCardAdd}: PropTypes) => {
    const [userName, setUserName] = useState('');

    const handleCardAdd = () => {
        if(userName) {
            const cardDetails = {
                cardHolderName: userName,
                ...generateCardDetails()
            } as CardsDetails
    
            onCardAdd(cardDetails)
            setUserName('');
            handleModalOpen && handleModalOpen();
        }
    }
    return (
        <Dialog isOpen={isOpen} onClose={handleModalOpen}>
            <AddCardsContainer>
                <h2 className="heading__modal">Add Card</h2>
                <label htmlFor="userName">Card Holder Name</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} id="userName" />
                <div className="footer__modal">
                    <button onClick={handleCardAdd} disabled={!userName} className="btn--primary">Submit</button>
                </div>
            </AddCardsContainer>
        </Dialog>
    )
}

export default AddCards;
