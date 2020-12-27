import React, { Component } from 'react';
import './PageWrapper.scss';

class PageWrapperContainer extends Component {
    render() {
        return <div className={'page-wrapper'}>{this.props.children}</div>;
    }
}

export default PageWrapperContainer;
