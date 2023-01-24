import React  from 'react'
import { ArbitrumIcon, Avalance, BNBChain, Ethereum, Klaytn, Optimism, Polygon, Solana, StyledChainListGrid, StyledChainIconButton } from './style'
import Tooltip from '@mui/material/Tooltip';

export const ListOfChain = (props) => {
	const List = [
		{
			name: 'Arbitrum',
			icon: ArbitrumIcon,
			chainId: 42161,
		},
		{
			name: 'Avalance',
			icon: Avalance,
			chainId: 43114,
		},
		{
			name: 'BNBChain',
			icon: BNBChain,
			chainId: 56,
		},
		{
			name: 'Ethereum',
			icon: Ethereum,
			chainId: 1,
		},
		{
			name: 'Klaytn',
			icon: Klaytn,
			chainId: 8217,
		},
		{
			name: 'Optimism',
			icon: Optimism,
			chainId: 10,
		},
		{
			name: 'Polygon',
			icon: Polygon,
			chainId: 137,
		},
		{
			name: 'Fantom',
			icon: Solana,
			chainId: 250,
		},
	]
	const { onChange, selectedChain } = props
	return (
		<>
			<StyledChainListGrid xs="auto" container direction="row" spacing={0}>
				{
					List.map(val => (
						<Tooltip title={val.name} arrow key={val.name}>
							<StyledChainIconButton classes={{
								root: selectedChain === val.chainId ? 'active': ''
							}} onClick={() => onChange(val.chainId)}>
								{val.icon}
							</StyledChainIconButton>
						</Tooltip>
					))
				}
			</StyledChainListGrid>
		</>
	)
}
