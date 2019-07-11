import React, { Component } from 'react';

class AppItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { value } = this.props;
        return (
            <div onClick={this.handleClick}>{value}</div>
        );
    }

    handleClick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

export default AppItem;