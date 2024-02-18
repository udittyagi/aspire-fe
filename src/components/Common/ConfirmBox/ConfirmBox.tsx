import Dialog from "../Dialog/Dialog";

import { ConfirmBoxContainer } from "./ConfirmBox.styled";

interface PropTypes {
    heading: string;
    subHeading?: string ;
    dialogOpen: boolean;
    onConfirm: () => void;
    onReject: () => void;
}
const ConfirmBox = ({ heading, subHeading, dialogOpen, onConfirm, onReject}: PropTypes) => {
    return (
        <Dialog isOpen={dialogOpen} hasCloseBtn={false}>
            <ConfirmBoxContainer>
                <h2 className="heading">{heading}</h2>
                {
                    subHeading && (
                    <p className="subheading">{subHeading}</p>                
                    )
                }
                <div className="btn__section">
                    <button className="btn--primary" onClick={onConfirm}>Confirm</button>
                    <button className="btn--secondary" onClick={onReject}>Reject</button>
                </div>
            </ConfirmBoxContainer>
        </Dialog>
    )
}

export default ConfirmBox;
