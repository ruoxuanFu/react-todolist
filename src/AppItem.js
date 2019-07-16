import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AppItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value !== this.props.value) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { size, value } = this.props;
        return (
            <div onClick={this.handleClick}>[{size}]-->>{value}</div>
        );
    }

    handleClick = () => {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

AppItem.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
    defFunc: PropTypes.func.isRequired,
}

AppItem.defaultProps = {
    size: 123,
    defFunc() {
        return '123123123';
    },
}

export default AppItem;