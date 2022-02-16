import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
        list-style: none;
    }

    li a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;

        &:hover {
        opacity: 0.9;
        transform: scale(0.98);
        color: hsl(300, 69%, 71%);
        border-color: hsl(300, 69%, 71%);
    }}

    @media (max-width: 768px) {
        justify-content: center;

    }

`