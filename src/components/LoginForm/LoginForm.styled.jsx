import styled from '@emotion/styled';
import {  Form} from 'formik';

export const FormCard = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 4px solid #777;
    padding: 16px;

    >label {
        display: flex;
        flex-direction: column;

        >input {
            font-size: 14px;
            padding: 8px;
            outline: none;
           
        }
    }

    >button {
        font-size: 18px;
        font-weight: 700;
        padding: 8px 16px;
        max-width: 120px;
        border-radius: 10px;
        border: transparent;
        color: #333;
        background-color: #2196f3;
        cursor: pointer;
        transition: 400ms ease-in-out;

        :hover,
        :focus {
            background-color: #17a;
            color: #eee;

        }
    }
`