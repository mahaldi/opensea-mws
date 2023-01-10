import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Unstable_Grid2';

/*
const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));
*/
export const StyledListItem = styled(ListItem)(({ theme }) => ({

}))

export const ContainerNoPadding = styled(Grid)`
	padding: 0;
`
