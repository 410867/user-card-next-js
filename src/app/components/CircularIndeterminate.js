import styles from "../page.module.css";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function CircularIndeterminate() {
    return (
        <section className={styles.loading_section}><CircularProgress size={80} /></section>
    );
}

export default CircularIndeterminate;
