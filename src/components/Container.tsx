/**
 * # Containers
 *
 * All type of Containers is:
 *
 * 1. Default `Container` that used in 100% views
 * 2. `CenterContainer`
 * 3. `CenterContainerColumn`
 *
 * @module
 */

import styled from "@emotion/styled";

import config from "../config/config";

export default styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${config.style.backgroundColor};
  border: 2px solid #8f8f8f;
  max-width: 1600px;
  margin: 5px auto;
  border-radius: 50px;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 98%;
  };
  height:90vh;
`;

export const CenterContainer = styled.div`
  background-color: ${config.style.backgroundColor};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
  justify-content: center;
`;

export const CenterContainerColumn = styled(CenterContainer)`
  align-items: center;
  position: absolute;
  margin: 0px auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
