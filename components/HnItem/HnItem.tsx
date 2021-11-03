import React from 'react';
import styles from '../../styles/HnItem.module.css';
import {NewWindowButton} from '../NewWindowButton/NewWindowButton';

export const HnItem = () => {
    return (<div className={styles.container}>
        <div className={styles.title}>Title</div>
        <div className={styles.authorWrapper}>
            <div className={styles.author}>Author</div>
            <NewWindowButton/>
        </div>

    </div>)
}