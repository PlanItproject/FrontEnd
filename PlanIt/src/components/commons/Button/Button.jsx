import { StyledButton } from './styles';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', size = 'medium', fullWidth, disabled, ...props }) => {
    return (
        <StyledButton
            $variant={variant}
            size={size}
            $fullWidth={fullWidth}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

export default Button;