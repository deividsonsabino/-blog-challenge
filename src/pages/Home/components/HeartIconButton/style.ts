import styled from "styled-components";
import { HeartIcon } from "../../../../assets/Icons";

export const Button = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: none;

`
const brandColor = '#e07b67';

export const StyledHeartIcon = styled(HeartIcon)<{ isLiked: boolean }>`
    fill : ${props => (props.isLiked ? brandColor : '')};
`