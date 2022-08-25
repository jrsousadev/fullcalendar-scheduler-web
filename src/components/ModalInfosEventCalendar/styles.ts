import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 24;
  padding: 1rem;
  &:focus {
    outline: none;
  }
`;

export const SelectColors = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 40px);
  justify-content: center;
  place-items: center;
  padding-top: 10px;
`;

type BackgroundColorRoundedProps = {
  color: string;
  selected: boolean;
};

export const BackgroundColorRounded = styled('div')<BackgroundColorRoundedProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  input[type='radio'] {
    position: relative;
    width: 20px;
    height: 20px;
    outline: none;
    -webkit-appearance: none;
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked[type='radio'] {
    outline: 1px solid #000;
    cursor: pointer;
  }
`;