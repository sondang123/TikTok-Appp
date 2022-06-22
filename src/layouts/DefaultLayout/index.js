import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../Components/Header';
import Sidebar from './Sidebar/index.js';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // console.log('con', children);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
