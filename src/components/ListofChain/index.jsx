import React from 'react'
import { ArbitrumIcon, Avalance, BNBChain, Ethereum, Klaytn, Optimism, Polygon, Solana, StyledChainListGrid, StyledChainIconButton } from './style'
import { Typography } from 'components'
import Tooltip from '@mui/material/Tooltip';

export const ListOfChain = () => {
	const List = [
		{
			name: 'Arbitrum',
			icon: ArbitrumIcon,
		},
		{
			name: 'Avalance',
			icon: Avalance,
		},
		{
			name: 'BNBChain',
			icon: BNBChain,
		},
		{
			name: 'Ethereum',
			icon: Ethereum,
		},
		{
			name: 'Klaytn',
			icon: Klaytn,
		},
		{
			name: 'Optimism',
			icon: Optimism,
		},
		{
			name: 'Polygon',
			icon: Polygon,
		},
		{
			name: 'Solana',
			icon: Solana,
		},
	]
	return (
		<>
			<StyledChainListGrid xs="auto" container direction="row" spacing={0}>
				<StyledChainIconButton>
					<Typography size="meidum" weight="medium" color="grey">All chains</Typography>
				</StyledChainIconButton>
				{
					List.map(val => (
						<Tooltip title={val.name} arrow key={val.name}>
							<StyledChainIconButton>
								{val.icon}
							</StyledChainIconButton>
						</Tooltip>
					))
				}
			</StyledChainListGrid>
		</>
	)
}
