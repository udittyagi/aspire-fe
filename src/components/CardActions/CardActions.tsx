import { useState } from "react";

import cardActions from './actionConfig';
import { FREEZE_CARD, UN_FREEZE_CARD } from "../../utils/constants";
import ConfirmBox from "../Common/ConfirmBox/ConfirmBox";

import { ActionsContainer, ActionItem } from "./CardActions.styled";

import type CardDetails from '../../types/cardsDetails.types';
import type CardAction from "../../types/cardAction.types";

interface PropType {
    onAction: (cardId: number | string, action: string) => void;
    cardData?: CardDetails;
}
const CardActions = ({onAction, cardData}: PropType) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currItem, setCurrItem] = useState<CardAction>();
    
    const confirmHandler = () => {
        if(currItem && cardData) {
            setIsDialogOpen(false);
            onAction(cardData.id, currItem.action);
        }
    }

    const rejectHandler = () => {
        setIsDialogOpen(false);
    }
    
    const handleClick = (item: CardAction) => () => {
        if(item.dialog) {
            setIsDialogOpen(true);
            setCurrItem(item);
        } else if(cardData) {
            onAction(cardData.id, item.action);
        }
    }
    const actions = cardData && cardData.isFrozen 
        ? cardActions.filter(item => item.action !== FREEZE_CARD)
        : cardActions.filter(item => item.action !== UN_FREEZE_CARD);

    return (
       <ActionsContainer className="action__container">
        {
            actions.map(item => (
                <ActionItem key={item.id} onClick={handleClick(item)}>
                    <img src={item.icon} alt={item.name}/>
                    <span>{item.name}</span>
                </ActionItem>
            ))
        }
        <ConfirmBox
            heading={`Are you sure you want to ${currItem?.name.toLowerCase()} ?`}
            dialogOpen={isDialogOpen}
            onConfirm={confirmHandler}
            onReject={rejectHandler}
        />
       </ActionsContainer> 
    )
}

export default CardActions
