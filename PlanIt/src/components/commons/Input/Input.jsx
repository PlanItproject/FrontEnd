// import { inputStyles } from "./styles";
import { Container, Label, StyledInput, ErrorMessage } from './styles'

// undefined 방지를 위해 id와 placeholder의 기본 값을 빈 문자열로 설정
const Input = ({ 
    label, 
    id = "", 
    type = 'text', 
    name,
    value, 
    onChange, 
    placeholder = "", 
    error,
    required=false,
    ...props
}) => {
    return (
        <Container>
            {label && (
                <Label htmlFor={id}>
                    {label}
                </Label>
            )}
            <StyledInput
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                $hasError={!!error}
                required={required}
                {...props}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

export default Input;