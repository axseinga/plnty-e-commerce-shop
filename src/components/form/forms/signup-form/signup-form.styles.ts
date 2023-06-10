import styled from "styled-components";

export const SignupFormWrapper = styled.form`
width: 400px;

& > div {
    display: flex;
    gap: 5px;
    width: 100%;

    & input {
        width: min-content;
    }

    & label {
        font-size: 0.6rem;
    }
}`;