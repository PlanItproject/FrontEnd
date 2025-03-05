import { ChipWrapper } from "./styles";

const Chip = ({ label, emoji, size, state, ...props }) => {
    return (
        <ChipWrapper size={size} state={state} {...props}>
            <span>{emoji}</span>
            <span>{label}</span>
        </ChipWrapper>
    )
};

export default Chip;