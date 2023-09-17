import styled from "@emotion/styled";

const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    padding: 10px;
`;

const CastItem = styled.li`
    display: flex;
    width: calc((100% - 60px) / 5);
    min-width: 170px;
    font-size: 16px;
    background-color: grey;
`;

const CastText = styled.div`
    padding: 10px;
`;

const Name = styled.p`
    font-weight: bold;
`;

export { CastList, CastItem, CastText, Name };