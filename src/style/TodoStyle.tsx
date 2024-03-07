import styled from "styled-components";

export interface TodoCardItemProps{
    $isDone : boolean;
}
export const TodoCardItem = styled.li<TodoCardItemProps>`
padding:1rem;
border:1px solid #000;
text-decoration: ${({$isDone}) => ($isDone ? "line-through" : "none")};
`