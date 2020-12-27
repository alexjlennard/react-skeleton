import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartupAction from '../../../stores/startup/StartupAction';

class Startup extends Component {
    constructor(props) {
        super(props);
        this.updateWindowSize = this.updateWindowSize.bind(this);
        this.updateDeviceType = this.updateDeviceType.bind(this);
    }

    componentDidMount() {
        this.updateWindowSize();
        this.updateDeviceType();
        window.addEventListener('resize', this.updateWindowSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowSize);
    }

    updateWindowSize() {
        const dimensions = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        this.props.dispatch(StartupAction.updateWindowSize(dimensions));
    }

    updateDeviceType() {
        const deviceType = this.getMobileOperatingSystem();

        this.props.dispatch(StartupAction.updateDeviceType(deviceType));
    }

    getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return 'Windows Phone';
        }

        if (/android/i.test(userAgent)) {
            return 'Android';
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return 'iOS';
        }

        return 'unknown';
    }

    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

export default connect(null)(Startup);
