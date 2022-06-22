import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('Wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Wrapper;