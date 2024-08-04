import styled from "@emotion/styled";
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledTypeMap,
} from "@mui/base/ButtonUnstyled";
import { OverridableComponent } from "@mui/types";

import config from "../config/config";

export default styled.button`
  display: flex;
  justify-content: center;
  width: 130px;
  height: 50px;
  border: solid 3px ${config.style.colors.secondary};
  color: ${config.style.colors.secondary};
  background-image: linear-gradient(
    112deg,
    ${config.style.colors.primary} 23%,
    #b2b2b2 200%
  );
  box-shadow: -21px -15px 54px -26px #b2b2b2, 15px 21px 42px -8px #1f1f1f;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 89px;
  align-items: center;
  text-shadow: 0 0 7px ${config.style.colors.secondary};
  letter-spacing: normal;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      112deg,
      ${config.style.colors.secondary} 23%,
      #b2b2b2 200%
    );
    color: ${config.style.colors.primary};
    border: solid 3px ${config.style.colors.primary};
  }

  &:focus {
    outline: none;
  }
`;

/**
 * # Custom Button
 *
 * @Mui Material Custom Button
 */
export const CustomButton = styled(ButtonUnstyled)`
  width: 50px;
  height: 47px;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${config.style.colors.brown[500]};
  padding: 10px 12px;
  border-radius: 2px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #464640;

  &:hover {
    background-color: ${config.style.colors.brown[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${config.style.colors.brown[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
` as OverridableComponent<ButtonUnstyledTypeMap>;
