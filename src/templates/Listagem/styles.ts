import { styled, css } from "styled-components";
import media from "styled-media-query";
import { Container } from "@/components";

export const Listagem = styled.main`
    ${({ theme }) => css`
		padding-bottom: ${theme.spacings.xsmall};
		background-color: ${theme.colors.mainBg};
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.small};
		height: 100%;
		overflow-x: hidden;

		${Container}{
			display: flex;
			flex-direction: column;
			gap: ${theme.spacings.small};
		}
    `}
`

export const Centralize = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`

export const Banner = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: ${theme.spacings.small} 0;
		margin-bottom: ${theme.spacings.medium};

		${media.lessThan('medium')`
			padding: ${theme.spacings.xsmall} 0;
		`}
	`}
`

export const Title = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.secondary};
		font-size: ${theme.font.sizes.xxlarge};
		font-weight: ${theme.font.bold};
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.large};
		`}
	`}
`

export const TotalText = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-size: ${theme.font.sizes.medium};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small}
		`}
	`}
`

export const TotalUsers = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small}
		`}
	`}
`

export const FooterText = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-size: ${theme.font.sizes.small};
	`}
`
