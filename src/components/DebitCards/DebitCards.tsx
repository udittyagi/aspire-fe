import {useState} from 'react';
import Slider from "react-slick";

import Card from "../../components/Common/Card/Card";
import CardDetails from '../CardDetails/CardDetails';
import { CARD_BLUE_COLOR, GREEN_COLOR } from "../../utils/constants";
import CardActions from '../CardActions/CardActions';
import RecentTransactions from '../RecentTransactions/RecentTransactions';

import { DebitCardsContainer, InfoContainer } from "./DebitCards.styled";

import type CardsDetails from '../../types/cardsDetails.types';

interface PropTypes {
    cardsData: Array<CardsDetails>;
    handleCardAction: (cardId: number | string, action: string) => void;
    sliderKey?: number
}

const DebitCards = ({
    cardsData,
    handleCardAction,
    sliderKey
}: PropTypes) => {
    const [currSlide, setCurrSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.08,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (current: number) => {
            console.log(current);
            setCurrSlide(Math.ceil(current));
        }
      };
    
    const getCardsUI = () => {
        if(cardsData.length === 1) {
            return (
                <Card {...cardsData[0]}/>
            )
        } else if(cardsData.length > 1) {
            return (
                <div style={{marginRight: '-24px'}}>
                    <Slider {...settings} key={sliderKey}>
                        {
                            cardsData.map((data, index) => (
                                <Card key={data.id} {...data} baseColor={index % 2 === 0 ? GREEN_COLOR : CARD_BLUE_COLOR}/>
                            ))
                        }
                    </Slider>
                </div>
            )
        }

        return null;
    }

    return (
        <DebitCardsContainer>
            {
                getCardsUI()
            }
            <InfoContainer>
                <CardActions cardData={cardsData[currSlide]} onAction={handleCardAction} />
                <CardDetails />
                <RecentTransactions cardId={cardsData[currSlide]?.id} />
            </InfoContainer>
        </DebitCardsContainer>
    )
}

export default DebitCards;
