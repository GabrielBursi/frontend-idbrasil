import { css, styled } from "styled-components";
import media from "styled-media-query";

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
