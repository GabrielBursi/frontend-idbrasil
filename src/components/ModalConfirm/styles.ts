import { styled, css } from "styled-components";

export const Message = styled.p`
    ${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		text-align: center;
    `}
`
