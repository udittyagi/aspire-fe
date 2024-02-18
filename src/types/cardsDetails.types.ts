export default interface CardsDetails {
    id: number | string;
    cardNumber: string;
    cardHolderName: string;
    cvv: string;
    validUpto: string;
    isFrozen?: boolean
}