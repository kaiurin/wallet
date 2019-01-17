import * as React from 'react';

import '../../styles/style.scss';

export class AddWallet extends React.Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <h1>React Modal</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>
                <a className={'addWallet'} onClick={this.showModal}>
                                    </a>
            </main>
        )
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
                </button>
            </section>
        </div>
    );
};
