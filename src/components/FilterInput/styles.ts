import { styled, css } from "styled-components";

export const FilterInput = styled.div`
    ${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxsmall};
    `}
`

export const Title = styled.h1`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.large};
		color: ${theme.colors.secondaryText};
		font-weight: ${theme.font.bold};
		text-align: center;
		text-transform: capitalize;
	`}
`

export const ButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.xxsmall};
		align-items: center;
	`}
`
