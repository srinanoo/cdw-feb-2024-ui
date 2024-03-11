import styles from '../../styles.module.css';
import AboutStyles from './About.module.css';

export default function AboutComp() {
    return (
        <>
            <div className="row3">
                <h3>About Me</h3>
                <div className="row3section1">
                    <div className={styles.bgRedWhite}>
                        <h4>Personal Details</h4>
                        <ul>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                        </ul>
                    </div>
                    <div className={AboutStyles.bgRedWhite}>
                        <h4>Educational Details</h4>
                        <ul>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                            <li>ITEM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}