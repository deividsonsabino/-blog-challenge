import styled from "styled-components";
import { HeartIcon } from "../../../../assets/Icons";
import { device } from "../../../../utils";

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
    @media ${device.sm} {
        width: 20px;
    }

    @media ${device.md} {
        width: 24px; 
    }

    @media ${device.lg} {
        width: 32px;
    }
    
    fill : ${props => (props.isLiked ? brandColor : '')};
`