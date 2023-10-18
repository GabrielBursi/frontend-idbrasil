import { css, styled } from "styled-components";
import media from "styled-media-query";
import { darken } from "polished";

export const UsersList = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		margin: ${theme.spacings.small} 0;
	`}
`

export const Centralize = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`

export const EmptyText = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-size: ${theme.font.sizes.medium};
		border-bottom: 1px solid ${theme.colors.secondaryText};

		${media.lessThan("medium")`
			font-size: ${theme.font.sizes.small};
		`}
	`}
`

export const SeeMoreContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.xxsmall};
		justify-content: center;
		align-items: center;
		cursor: pointer;
		margin-top: ${theme.spacings.small};
	`}
`

export const SeeMoreText = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		transition: .4s;

		&:hover {
			color: ${darken(0.1, theme.colors.primary)};
		}
	`}
`
