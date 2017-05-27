import SocialStrip from '../components/socialStrip'

export default ({ page='index', header='bill hefty', subHeader='Developing engaging and productive web solutions.' }) => (
    <div className={`${page}-splash-container`}>
        <div className={`${page}-splash-background`}></div>
        <div className={`${page}-splash-text`}>
            <h1 className={`${page}-splash-head`}>{ header }</h1>
            <p className={`${page}-splash-subhead`}>{ subHeader }</p>
        </div>
        <div className={`${page}-splash-social-strip`}>
            <SocialStrip />
        </div>
    </div>
)