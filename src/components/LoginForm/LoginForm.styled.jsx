import styled from '@emotion/styled';
import { Formik, Form, Field} from 'formik';

export const FormCard = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    >label {
        display: flex;
        flex-direction: column;

        >input {
            font-size: 22px;
            padding: 8px;
        }
    }

    >button {
        font-size: 22px;
        padding: 8px 16px;
        max-width: 160px;
        border-radius: 12px;
        border: transparent;
        background-color: #2196f3;
        cursor: pointer;
    }
`