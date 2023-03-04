import './styles.css'

const clickTip = ({ text, center = false, whiteTheme = false }) => {
    return (
        <div className={`clicktip-wrapper ${ center ? 'center' : '' } ${ whiteTheme ? 'white' : '' }`}>
            <span>{ text }</span>
        </div>
    )
}

export default clickTip