import React, { useState } from 'react';
import { connect } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, NftRow, Card, Button } from 'components';
import { actions } from 'actions'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { StyledTabpanel, ContainerTwin, SliderWrapper, NavigationSwiper, StyledIconButton } from './style'
import Link from '@mui/material/Link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper'
import "swiper/css";
import 'swiper/css/navigation';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
	const [tab, setTab] = useState("0")
	const handleTab = (_, newValue) => {
		setTab(newValue)
	}

	return (
		<>
			<Grid xs={12} container direction="column" spacing={0}>
				<Grid xs={12}>
					<Typography align="center" variant="h1" weight="bold">Explore, collect, and sell NFTs</Typography>
				</Grid>
				<Grid xs={12}>
					<TabContext value={tab}>
						<TabList onChange={handleTab} textColor="inherit">
							<Tab label={<Typography variant="h6">Trending</Typography>} value="0" />
							<Tab label={<Typography variant="h6">Top</Typography>} value="1" />
						</TabList>
						<StyledTabpanel value="0">
							<ContainerTwin container direction="row" spacing={0}>
								<Grid xs={6}>
									<NftRow />
								</Grid>
								<Grid xs={6}>
									<NftRow />
								</Grid>
							</ContainerTwin>
						</StyledTabpanel>
						<StyledTabpanel value="1">Value Item Two</StyledTabpanel>
					</TabContext>
				</Grid>
				<Grid xs={12}>
					<Typography align="left" variant="h3">Notable Collections</Typography>
				</Grid>
				<Grid xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={6}
							spaceBetween={16}
							modules={[Navigation]}
							navigation={{
								prevEl: '.prev',
								nextEl: '.next',

							}}
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
				</Grid>
				<Grid xs={12}>
					<Typography align="left" variant="h3">Top Collector buys today</Typography>
				</Grid>
				<Grid xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={5}
							spaceBetween={16}
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</SliderWrapper>
				</Grid>
				<Grid xs={12}>
					<Typography align="left" variant="h3">Photography NFT spotlight</Typography>
				</Grid>
				<Grid xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={5}
							spaceBetween={16}
						>
							{[1, 2, 3, 4, 5, 6, 7].map(val => (
								<SwiperSlide key={val}>
									<Link href="/profile">
										<Card />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</SliderWrapper>
				</Grid>
				<Grid xs={12} container direction="row" justifyContent="space-between">
					<Grid xs>
						<Typography align="left" variant="h3">NFT 101</Typography>
						<Typography variant="caption">Get comfortable with the basics.</Typography>
					</Grid>
					<Grid xs="auto">
						<Button variant="outlined">Learn more</Button>
					</Grid>
				</Grid>
				<Grid xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={5}
							spaceBetween={16}
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
				</Grid>
				<Grid xs={12}>
					<Typography align="left" variant="h3">Browse by Category</Typography>
				</Grid>
				<Grid xs={12}>
					<SliderWrapper>
						<Swiper
							slidesPerView={5}
							spaceBetween={16}
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
				</Grid>
			</Grid>
		</>
	)
}
function mapState(state) {
	return {
		general: state.general
	}
}
export default connect(mapState, actions)(Home)
