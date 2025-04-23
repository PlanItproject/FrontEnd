import Select from 'react-select';
import { ChevronDown } from 'lucide-react';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        padding: '18px 20px',
        border: '1px solid var(--color-border-neutral-secondary)',
        borderRadius: '28px',
        background: 'var(--color-background-default-default)',
        boxShadow: 'none',
        cursor: 'pointer',
        minHiehgt: 'unset',
        '&:focus': {
            borderColor: 'var(--color-border-neural-secondary'
        }
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0',
    }),
    input: (provided) => ({
        ...provided,
        margin: '0',
        padding: '0',
        fontSize: '14px'
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--color-text-default)',
        fontSize: '14px',
        margin: '0'
    }),
    menu: (provided) => ({
        ...provided,
        position: 'absolute',
        marginTop: '8px',
        borderRadius: '10px',
        overflow: 'hidden',
        zIndex: 10,
        width: '100%'
    }),
    menuList: (provided) => ({
        ...provided,
        maxHeight: '200px',
        padding: '0',
        backgroundColor: 'var(--color-background-default-default)'
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '8px 12px',
      fontSize: '14px',
      lineHeight: 1.5,
      cursor: 'pointer',
      background: state.isSelected 
        ? 'rgba(41, 136, 255, 0.1)' 
        : state.isFocused 
          ? 'rgba(41, 136, 255, 0.05)' 
          : null,
      color: state.isSelected ? '#2988ff' : 'var(--color-text-default)',
      '&:active': {
        background: 'rgba(41, 136, 255, 0.1)'
      }
    }),
    indicatorsContainer: () => ({
      display: 'none' // 기본 드롭다운 아이콘 숨기기
    }),
    dropdownIndicator: () => ({
      display: 'none'
    })
};

const DropDownIndicator = () => {
    return(
        <div style={{
            position: "absolute",
            right: "20px",
            top: "18px",
            pointerEvents: 'none'
        }}>
            <ChevronDown size={20} color="#2988ff" />
        </div>
    )
};

function SelectBox({ value, onChange, options, name }) {
    const selectOptions = options.map(option => 
        typeof option === 'object' ? option : { value: option, label: option }
    );

    const selectedOption = selectOptions.find(option => option.value === value) || null;

    return (
        <div style={{ position: 'relative' }}>
            <Select 
                value={selectedOption}
                onChange={(option) => {
                    onChange({ target: { name, value: option.value }});
                }}
                options={selectOptions}
                styles={customStyles}
                isSearchable={false}
                components={{
                    IndicatorSeparator: null
                }}
            />
            <DropDownIndicator />
        </div>
    )
};

export default SelectBox;