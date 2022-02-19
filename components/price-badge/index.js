import React from "react";
import Loader from "../loader";

export default class PriceBadge extends React.Component {

    LITTY_ADDRESS = '0x640fa02abe368f18f0456ac51c9f7737c2383f9e';
    USD_API = 'https://api.traderjoexyz.com/priceusd/0x640fa02abe368f18f0456ac51c9f7737c2383f9e';
    LITTY_AVAX_TRADE = 'https://traderjoexyz.com/trade?inputCurrency=&outputCurrency=0x640fa02abe368f18f0456ac51c9f7737c2383f9e';

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            loading: true,
        }
        setInterval(this.updatePrice.bind(this), 1000); 
    }

    async updatePrice() {
        let token_price;
        try {
            token_price = (parseFloat(await (await fetch(this.USD_API)).text()) / 1000000000000000000).toFixed(7);
        } catch (err) {
            console.error(err);
            return;
        }
        this.setState({price: token_price, loading: false})
    }

    render() {
        return (
            <div>
                { this.state.loading ? 
                    <Loader/>
                    : 
                    <a href={this.LITTY_AVAX_TRADE} title="Click to buy $KMJ" rel="noreferrer" className="pop-animation bodyFont2 font-bold hover-underline-animation rounded-full bg-highlight scarlet font-secondary py-3 px-6" target="_blank">
                        {`$${this.state.price}`}
                    </a>
                }
            </div>
        );
    }
}