import * as splash from './splash.js'
import Button from "../../../components/commons/Button/index.js";
import korea from '../../../assets/country/southKorea.png'
import china from '../../../assets/country/china.png'
import united from '../../../assets/country/unitedStates.png'
import japan from '../../../assets/country/japan.png'

const Splash = ({ selectedLanguage, onLanguageSelect, onStart }) => {
    const languages = [
        { code: 'ko', name: '한국어', flag: korea },
        { code: 'en', name: 'English', flag: united },
        { code: 'zh', name: '中文', flag: china },
        { code: 'ja', name: '日本語', flag: japan },
    ];



    return (
        <splash.ModalContent>
            <splash.ModalTitle>선호하는 언어가 있으신가요?</splash.ModalTitle>
            <splash.ModalSubTitle>Choose your preferred language</splash.ModalSubTitle>

            {languages.map((language) => (
                <splash.LanguageOption
                    key={language.code}
                    onClick={() => onLanguageSelect(language.code)}
                    selected={selectedLanguage === language.code}
                >
                    <splash.FlagOption>
                        <splash.Flag>
                            <img style={{width: "40px", height: "40px"}}
                                 src={language.flag} alt={language.code} />
                        </splash.Flag>
                        {language.name}
                    </splash.FlagOption>
                    <splash.RadioButton selected={selectedLanguage === language.code} />
                </splash.LanguageOption>
            ))}

            <Button
                style={{
                    marginTop: '80px'
                }}
                variant="primary"
                size="large"
                fullWidth
                onClick={onStart}>
                시작하기
            </Button>
        </splash.ModalContent>
    );
};

export default Splash;
