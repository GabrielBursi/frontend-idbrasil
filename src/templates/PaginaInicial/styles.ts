'use client'

import { styled, css } from "styled-components";
import media from "styled-media-query";
import { lighten } from "polished";

export const PaginaInicial = styled.section`
    ${({ theme }) => css`
		background-color: ${theme.colors.primary};
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
    `}
`

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.small};
		align-items: center;
		justify-content: center;
	`}
`

export const IconContainer = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.secondary};
		padding: ${theme.spacings.xxsmall};
		width: fit-content;
		height: fit-content;
		border-radius: ${theme.border.radius.small};
	`}
`

export const TextContent = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xxsmall};
		align-items: center;
		justify-content: center;
	`}
`

export const Title = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.secondary};
		font-size: ${theme.font.sizes.huge};
		font-weight: ${theme.font.bold};
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.large};
		`}
	`}
`

export const SubTitle = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.secondary};
		font-size: ${theme.font.sizes.large};
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.medium};
		`}
	`}
`

export const Button = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.secondary};
		color: ${theme.colors.primaryText};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		border-radius: ${theme.border.radius.big};
		font-size: ${theme.font.sizes.large};
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		transition: .4s;

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.medium};
		`}

		&:hover {
			transform: scale(1.05);
			background-color: ${lighten(0.1, theme.colors.secondary)};
		}

		&:active {
			transform: scale(0.90);
		}
	`}
`
