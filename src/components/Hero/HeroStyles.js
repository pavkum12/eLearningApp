import styled from "styled-components";
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  background: rgb(178, 126, 213);
  background: linear-gradient(
    41deg,
    rgba(178, 126, 213, 0.5) 0%,
    rgba(142, 156, 204, 0.5) 22%,
    rgba(50, 223, 186, 0.5) 77%,
    rgba(121, 191, 255, 0.5) 100%
  );
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: black;

  &:before {
    background: #fff;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
