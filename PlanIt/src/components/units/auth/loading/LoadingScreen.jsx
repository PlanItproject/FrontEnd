import * as loading from './styles.js'

const LoadingScreen = () => {

    return (
        <div style={{ "backgroundColor": "black", "opacity" : "0.7"}}>
            <loading.LoadingBox>
                <loading.DotsContainer>
                    <loading.Dot delay={0} />
                    <loading.Dot delay={0.3} />
                    <loading.Dot delay={0.6} />
                </loading.DotsContainer>
                <div style={{ "color" : "white", "marginTop": "30px" }}>로그인 중</div>
            </loading.LoadingBox>
        </div>
    )
}

export default LoadingScreen;