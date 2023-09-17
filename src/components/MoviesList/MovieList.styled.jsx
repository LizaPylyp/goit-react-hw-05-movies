import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
`;

const MovieLink = styled(Link)`
    font-size: 18px;
    text-decoration: none;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: red;
    color: white;
    border-radius: 3px;
    margin-bottom: 18px;
`;

export { List, MovieLink, Button };