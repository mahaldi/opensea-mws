import React, { useState } from 'react';
import { connect } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, NftRow, Card, Button, ListOfChain } from 'components';
import { actions } from 'actions'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { StyledTabpanel, ContainerTwin, SliderWrapper, NavigationSwiper, StyledIconButton, ContainerHome, BannerHome, GridSection, GridTitle, SwiperBreakpoints, StyledSelectRange, } from './style'
import Link from '@mui/material/Link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper'
import "swiper/css";
import 'swiper/css/navigation';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuItem from '@mui/material/MenuItem';
import { rangeUpdate } from 'services/utils/Constants'
import ApiCollection from 'api'
import { get } from 'lodash'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = (props) => {
	const [tab, setTab] = useState("0")
	const [range, setRange] = useState('24h')
	const [chain, setChain] = useState(1)
	const { general } = props
	const trendingCollection = get(general, 'trendingCollection', { data: {}, loading: true })

	const handleTab = (_, newValue) => {
		setTab(newValue)
	}
	const onChangeChain = (chainId) => {
		const api = new ApiCollection(props)
		api.getTrendingCollection(chainId, range)
		setChain(chainId)
	}
	const onChangeRange = range => {
		const api = new ApiCollection(props)
		api.getTrendingCollection(chain, range)
		setRange(range)
	}
	return (
		<>
			<ContainerHome xs={12} container direction="column" spacing={0}>
				<BannerHome xs={12} container direction="column" spacing={0}>
					<GridTitle xs={12}>
						<Typography align="center" variant="h1" weight="bold">Explore, collect, and sell NFTs</Typography>
					</GridTitle>
					<Grid xs={12}>
						<SliderWrapper>
							<Swiper
								slidesPerView={4}
								spaceBetween={16}
								modules={[Navigation, Autoplay]}
								navigation={{
									prevEl: '.prevBanner',
									nextEl: '.nextBanner',
								}}
								autoplay={{
									delay: 3000,
								}}
								loop
							>
								{[1, 2, 3, 4, 5, 6, 7].map(val => (
									<SwiperSlide key={val}>
										<Card type={3} data={{ src: 'https://i.seadn.io/s/production/3cd2b0b2-a110-4924-b91e-1f6618dc1e21.png?auto=format&w=828' }} />
									</SwiperSlide>
								))}
							</Swiper>
							<NavigationSwiper>
								<StyledIconButton className="prevBanner" disableRipple>
									<ChevronLeftIcon />
								</StyledIconButton>
								<StyledIconButton className="nextBanner" disableRipple>
									<ChevronRightIcon />
								</StyledIconButton>
							</NavigationSwiper>
						</SliderWrapper>
					</Grid>
				</BannerHome>
				<GridSection xs={12}>
					<TabContext value={tab}>
						<ContainerTwin container direction="row" justifyContent="space-between" alignItems="flex-end">
							<Grid xs="auto">
								<TabList onChange={handleTab} textColor="inherit">
									<Tab label={<Typography variant="h6">Trending</Typography>} value="0" />
									<Tab label={<Typography variant="h6">Top</Typography>} value="1" />
								</TabList>
							</Grid>
							<Grid xs="auto" container>
								{
									trendingCollection.loading ? <Skeleton baseColor='#2E3137' borderRadius="20px" width="250px" height="45px" /> : (
										<>
											<StyledSelectRange
												select
												defaultValue={range}
												value={range}
												onChange={(event) => onChangeRange(event.target.value)}
											>
												{rangeUpdate.map((option) => (
													<MenuItem key={option.value} value={option.value}>
														{option.label}
													</MenuItem>
												))}
											</StyledSelectRange>
											<ListOfChain onChange={onChangeChain} selectedChain={chain} />
										</>
									)
								}
							</Grid>
						</ContainerTwin>
						<StyledTabpanel value="0">
							<ContainerTwin container direction="row" spacing={0}>
								<Grid xs={6}>
									<NftRow index={1} loading={trendingCollection.loading} data={get(trendingCollection, 'data.data', []).slice(0, 5)} />
								</Grid>
								<Grid xs={6}>
									<NftRow index={5} loading={trendingCollection.loading} data={get(trendingCollection, 'data.data', []).slice(5, 10)} />
								</Grid>
							</ContainerTwin>
						</StyledTabpanel>
						<StyledTabpanel value="1">
							<ContainerTwin container direction="row" spacing={0}>
								<Grid xs={6}>
									<NftRow loading />
								</Grid>
								<Grid xs={6}>
									<NftRow loading />
								</Grid>
							</ContainerTwin>
						</StyledTabpanel>
					</TabContext>
				</GridSection>
				<GridSection xs={12}>
					<Typography align="left" variant="h3">Notable Collections</Typography>
				</GridSection>
				<GridSection xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={6}
							spaceBetween={16}
							modules={[Navigation]}
							navigation={{
								prevEl: '.prev',
								nextEl: '.next',

							}}
							breakpoints={SwiperBreakpoints}
							loop
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
						<NavigationSwiper>
							<StyledIconButton className="prev" disableRipple>
								<ChevronLeftIcon />
							</StyledIconButton>
							<StyledIconButton className="next" disableRipple>
								<ChevronRightIcon />
							</StyledIconButton>
						</NavigationSwiper>
					</SliderWrapper>
				</GridSection>
				<GridSection xs={12}>
					<Typography align="left" variant="h3">Top Collector buys today</Typography>
				</GridSection>
				<GridSection xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={6}
							spaceBetween={16}
							modules={[Navigation]}
							navigation={{
								prevEl: '.prevTopCollector',
								nextEl: '.nextTopCollector',

							}}
							breakpoints={SwiperBreakpoints}
							loop
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
						<NavigationSwiper>
							<StyledIconButton className="prevTopCollector" disableRipple>
								<ChevronLeftIcon />
							</StyledIconButton>
							<StyledIconButton className="nextTopCollector" disableRipple>
								<ChevronRightIcon />
							</StyledIconButton>
						</NavigationSwiper>
					</SliderWrapper>
				</GridSection>
				<GridSection xs={12}>
					<Typography align="left" variant="h3">Photography NFT spotlight</Typography>
				</GridSection>
				<GridSection xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={6}
							spaceBetween={16}
							modules={[Navigation]}
							navigation={{
								prevEl: '.prevPhotography',
								nextEl: '.nextPhotography',

							}}
							breakpoints={SwiperBreakpoints}
							loop
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
						<NavigationSwiper>
							<StyledIconButton className="prevPhotography" disableRipple>
								<ChevronLeftIcon />
							</StyledIconButton>
							<StyledIconButton className="nextPhotography" disableRipple>
								<ChevronRightIcon />
							</StyledIconButton>
						</NavigationSwiper>
					</SliderWrapper>
				</GridSection>
				<GridSection xs={12} container direction="row" justifyContent="space-between">
					<Grid xs>
						<Typography align="left" variant="h3">NFT 101</Typography>
						<Typography variant="caption">Get comfortable with the basics.</Typography>
					</Grid>
					<Grid xs="auto">
						<Button variant="outlined">Learn more</Button>
					</Grid>
				</GridSection>
				<GridSection xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={6}
							spaceBetween={16}
							breakpoints={SwiperBreakpoints}
							loop
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card type={2} />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</SliderWrapper>
				</GridSection>
				<GridSection xs={12}>
					<Typography align="left" variant="h3">Browse by Category</Typography>
				</GridSection>
				<GridSection xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={6}
							spaceBetween={16}
							breakpoints={SwiperBreakpoints}
							loop
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card type={2} />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</SliderWrapper>
				</GridSection>
			</ContainerHome>
		</>
	)
}
function mapState(state) {
	return {
		general: state.general
	}
}
export default connect(mapState, actions)(Home)
