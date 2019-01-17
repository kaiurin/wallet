import * as React from 'react';

import "../styles/style.scss";
import {AddWallet} from "./modal/modal";


interface IState {
    currentWallet: string;
    coin: string;
    wallets: Array<IWallet>;
}

interface IWallet {
    value: string;
    id: number;
    coin: string;
}

interface IProps {
    addWallet: void
}


export class CreateWallet extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentWallet: "",
            coin: "",
            wallets: []
        };
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.props.addWallet(this.state.currentWallet, this.state.coin);
        this.setState({
            currentWallet: "",
            wallets: [
                ...this.state.wallets,
                {
                    id: this._timeInMilliseconds(),
                    value: this.state.currentWallet,
                    coin: this.state.coin,
                }
            ]
        });
    }


    public renderWallets(): JSX.Element[] {
        return this.state.wallets.map((wallets: IWallet) => {
            return (
                <div key={wallets.id} className="wallet">
                    <span className={wallets.coin}>{wallets.value}</span>
                </div>
            );
        });
    }

    public render(): JSX.Element {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        className="tdl-input"
                        placeholder="Wallet name"
                        value={this.state.currentWallet}
                        onChange={e => this.setState({currentWallet: e.target.value})}
                    />
                    <input name="coin" type="radio" value="Ethereum"
                           onChange={e => this.setState({coin: e.target.value})}/>Ethereum
                    <input name="coin" type="radio" value="Byteball"
                           onChange={e => this.setState({coin: e.target.value})}/>Byteball
                    <button type="submit">Add wallet</button>
                </form>
                <section>{this.renderWallets()}</section>
            </div>
        );
    }

    private _timeInMilliseconds(): number {
        const date: Date = new Date();
        return date.getTime();
    }
}

export class Buttons extends React.Component {

    state = {show: false, wallets: []};

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    addWallet = (walletName, coin) => {
        this.render
    };

    render() {
        return <div>
            <a href="../../index.html" className={'transactions'}>
            </a>
            <a href="../../index.html" className={'sendMoney'}>
            </a>
            <a href="../../index.html" className={'wallets'}>
            </a>
            <a href="../../index.html" className={'receiveMoney'}>
            </a>
            <a href="../../index.html" className={'apps'}>
            </a>
            <div className={'yourWallets'}>
                <text className={'yourWalletsText'}>Your wallets</text>
                <a className={'addWallet'} onClick={this.showModal}>
                </a>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p><CreateWallet addWallet={this.addWallet}/></p>
                </Modal>
            </div>
        </div>

    }
}

const Modal = ({handleClose, show, children}) => {
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


export class Wallets extends React.Component {
    render() {
        return <div>
            <Buttons/>
        </div>
    }
}



