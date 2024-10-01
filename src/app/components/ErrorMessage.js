import styles from "../page.module.css";
import * as React from 'react';
import {Alert} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

function ErrorMessage(props) {
    const errorMessage = props.error;
    return (
        <section className={styles.error_section}>
            <Alert
                severity="error"
                sx={{fontSize: '20px'}}
                icon={<ErrorIcon style={{ fontSize: '30px' }} />}>
                Error: {errorMessage}
            </Alert>
        </section>
    );
}

export default ErrorMessage;
