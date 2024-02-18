import { useState } from 'react';

import CardNumber from "./CardNumber";
import { GREEN_COLOR } from '../../../utils/constants';

import { CardContainer, CardContent, CardLogoContainer, CardText, CardUserName, ShowSection } from "./Card.styled";

import logo from "../../../assets/images/mobile/Logo.svg";
import visaLogo from '../../../assets/images/mobile/VisaLogo.svg';
import greenEyeIcon from '../../../assets/images/mobile/ShowEyeGreen.svg';
import blueEyeIcon from '../../../assets/images/mobile/ShowEyeBlue.svg';

interface PropType {
    cardNumber: string;
    cvv: string;
    validUpto: string;
    cardHolderName: string;
    baseColor ?: string;
    isFrozen?: boolean
}

const Card = ({cardNumber, cvv, validUpto, cardHolderName, baseColor = GREEN_COLOR, isFrozen=false}: PropType) => {
    const [isHidden, setIsHidden] = useState(true);

    const detailsHidingHandler = () => {
        setIsHidden(!isHidden);
    }

    return (
        <CardContainer isFrozen={isFrozen}>
            <CardContent baseColor={baseColor}>
                <ShowSection
                    role="button"
                    onClick={detailsHidingHandler}
                    baseColor={baseColor}
                    isFrozen={isFrozen}
                >
                    <img src={baseColor === GREEN_COLOR ? greenEyeIcon : blueEyeIcon} alt="Eye Icon"/>
                    {isHidden ? 'Show' : 'Hide'} Card Number
                </ShowSection>
                <CardLogoContainer>
                    <img src={logo} alt="Aspire Logo"/>
                </CardLogoContainer>
                <CardUserName>
                    {cardHolderName}
                </CardUserName>
                <CardNumber cardNumber={cardNumber} isHidden={isHidden}/>
                <CardText margin="13px 30px 0px 0px">Thru: {validUpto}</CardText>
                <CardText margin="13px 0px 0px 0px">CVV: {isHidden ? '***' : cvv}</CardText>
                <CardLogoContainer>
                    <img src={visaLogo} alt="Visa Logo"/>
                </CardLogoContainer>
            </CardContent>
        </CardContainer>
    )
}

export default Card;
