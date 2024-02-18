export default interface Transaction {
    id: number;
    type: 'CREDIT' | 'DEBIT';
    note: string;
    date: string;
    vendor: string;
    amount: number;
    category?: 'SHOPPING' | 'TRAVEL' | 'ENTERTAINMENT';
} 