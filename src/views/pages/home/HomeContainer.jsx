import React, { Component } from 'react';
import HomeView from './HomeView.jsx';
import PageWrapper from '../../components/page-wrapper';
import { connect } from 'react-redux';

class HomeContainer extends Component {
    render() {
        return (
            <PageWrapper>
                <HomeView />
            </PageWrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

export { HomeContainer as Unconnected };
export default connect(mapStateToProps)(HomeContainer);
