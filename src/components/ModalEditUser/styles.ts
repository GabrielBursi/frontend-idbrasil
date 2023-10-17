import { styled, css } from "styled-components";

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
		font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.bold};
		text-align: center;
    `}
`

export const Form = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxsmall};
	`}
`
