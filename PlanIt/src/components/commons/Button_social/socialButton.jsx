import StyledSocialBtn from './styles';
import PropTypes from 'prop-types';

const SocialBtn = ({ children, variant, state, disabled, ...props }) => {
    return ( 
        <StyledSocialBtn
            variant={variant}
            state={state}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledSocialBtn>
    );
};

SocialBtn.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    state: PropTypes.oneOf(['pressed', 'disalbed', null]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
} 

export default SocialBtn;