import logoIconLight from '../../assets/images/mobile/LogoIconLight.svg';
import logoIconGreen from '../../assets/images/mobile/LogoIconGreen.svg';
import cardGreen from '../../assets/images/mobile/cardGreen.svg';
import paymentsLight from '../../assets/images/mobile/PaymentsLight.svg';
import creditLight from '../../assets/images/mobile/CreditLight.svg';
import accountLight from '../../assets/images/mobile/AccountLight.svg';

//Some Icons are not preset for active or inactive state
const navConfig = [
    {
        name: 'Home',
        inActiveIcon: logoIconLight,
        activeIcon: logoIconGreen
    },
    {
        name: 'Cards',
        inActiveIcon: cardGreen,
        activeIcon: cardGreen
    },
    {
        name: 'Payments',
        inActiveIcon: paymentsLight,
        activeIcon: paymentsLight
    },
    {
        name: 'Credit',
        inActiveIcon: creditLight,
        activeIcon: creditLight
    },
    {
        name: 'Profile',
        inActiveIcon: accountLight,
        activeIcon: accountLight
    }
]

export default navConfig;
