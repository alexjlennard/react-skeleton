import styles from './LoadingIndicator.module.scss';

import React from 'react';
import classNames from 'classnames';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class LoadingIndicator extends React.PureComponent {
    static defaultProps = {
        className: undefined,
        isActive: false,
    };

    render() {
        const { children, isActive, className } = this.props;
        const cssClasses = classNames(className, {
            [styles.wrapper]: isActive,
        });

        return (
            <div className={cssClasses}>
                {isActive && (
                    <div className={styles.loaderContainer}>
                        <Loader content="Loading" active={true} inverted={true} size="huge" />
                    </div>
                )}
                {children}
            </div>
        );
    }
}

LoadingIndicator.propTypes = {
    children: PropTypes.any.isRequired,
    isActive: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
};

export default LoadingIndicator;
