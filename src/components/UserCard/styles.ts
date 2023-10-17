import { lighten } from "polished";
import { styled, css } from "styled-components";
import media from "styled-media-query";

export const UserCard = styled.div`
    ${({ theme }) => css`
		background-color: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
		border-bottom: 1px solid ${theme.colors.secondaryText};
		transition: .4s;

		&:hover{

			background-color: ${lighten(0.1, theme.colors.mainBg)};

			${Name}{
				color: ${theme.colors.primary};
				transform: scale(1.01);
			}
		}

		${media.lessThan('medium')`
			padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
		`}
    `}
`

export const TextContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: ${theme.spacings.xxsmall};
		gap: ${theme.spacings.xxsmall};
	`}
`

export const Name = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		text-transform: capitalize;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		transition: .4s;

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.small};
		`}
	`}
`

export const Info = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.small};

		${media.lessThan('medium')`
			gap: 0;
			flex-direction: column;
		`}
	`}
`

export const InfoText = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.bold};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.xsmall};
		`}
	`}
`

export const IconContainer = styled.div`
	${({ theme }) => css`
		padding: ${theme.spacings.xxsmall};
		width: fit-content;
		height: fit-content;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	`}
`
