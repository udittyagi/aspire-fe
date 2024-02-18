import { HiddenNumber, NumberUnit, VisibleNumber } from './Card.styled';

interface PropTypes {
    cardNumber: string,
    isHidden: boolean
}
const CardNumber = ({cardNumber, isHidden = false}: PropTypes) => {
    const cardArr = cardNumber.split('').reduce((acc: Array<Array<string>>, curr, index) => {
        if(index % 4 === 0) {
            acc.push([curr])
        } else {
            acc[acc.length - 1].push(curr)
        }
        return acc;
    }, []);

    return (
        <div>
            <NumberUnit>
                {
                    cardArr[0].map((item, index) => (
                        isHidden ? <HiddenNumber key={index} isLast={index === 3} /> : <VisibleNumber key={index} isLast={index === 3}>{item}</VisibleNumber>
                    ))
                }
            </NumberUnit>
            <NumberUnit>
                {
                    cardArr[1].map((item, index) => (
                        isHidden ? <HiddenNumber key={index} isLast={index === 3}/> : <VisibleNumber key={index} isLast={index === 3}>{item}</VisibleNumber>
                    ))
                }
            </NumberUnit>
            <NumberUnit>
                {
                    cardArr[2].map((item, index) => (
                        isHidden ? <HiddenNumber key={index} isLast={index === 3}/> : <VisibleNumber key={index} isLast={index === 3}>{item}</VisibleNumber>
                    ))
                }
            </NumberUnit>
            <NumberUnit isLast>
                {
                    cardArr[3].map((item, index) => (
                        <VisibleNumber key={index} isLast={index === 3}>{item}</VisibleNumber>
                    ))
                }
            </NumberUnit>
        </div>
    )
}

export default CardNumber;
