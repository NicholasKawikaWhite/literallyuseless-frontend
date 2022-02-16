import Link from "next/link";
import React from "react";

export default class UselessButton extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <a className="bg-highlight bodyFont paddingClass color-primary rounded-full font-bold px-10 py-4" href={this.props.to}>
                {this.props.children}
            </a>
        );
    }
}