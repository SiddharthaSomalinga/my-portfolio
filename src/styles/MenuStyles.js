import styled, { keyframes, css } from 'styled-components';

// Slide down animation for nav links
export const slowSlideDown = keyframes`
  0% {
    transform: translateY(-30px); 
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Fade-in animation for social icons
export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledHamburgerButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  z-index: 10;
  padding: 0;
  border: 0;
  background-color: transparent;
  color: var(--white);
  transition: all 0.3s ease-in-out;

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    background-color: var(--white);
    transition: all 0.3s ease-in-out;
    transform: ${({ menuOpen }) =>
      menuOpen ? `rotate(225deg)` : `rotate(0deg)`};

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--white);
      transition: all 0.3s ease-in-out;
    }

    &:before {
      top: ${({ menuOpen }) => (menuOpen ? `0` : `-10px`)};
      opacity: ${({ menuOpen }) => (menuOpen ? `0` : `1`)};
    }

    &:after {
      bottom: ${({ menuOpen }) => (menuOpen ? `0` : `-10px`)};
      transform: ${({ menuOpen }) =>
        menuOpen ? `rotate(-90deg)` : `rotate(0)`};
    }
  }
`;

export const StyleDropbar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    overflow-y: auto; /* Allows the menu to scroll if it overflows */
    background-color: var(--white);
    visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
    opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
    transform: ${({ menuOpen }) =>
      menuOpen ? `translateY(0)` : `translateY(-20px)`};
    transition: all 0.4s ease;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      animation: ${({ menuOpen }) =>
        menuOpen
          ? css`
              ${fadeIn} 0.5s ease forwards
            `
          : 'none'};

      ol {
        list-style: none;
        padding: 0;
        margin: 20px 0;
        text-align: center;
        width: 100%; /* Full width for clickable nav links */

        li {
          cursor: pointer;
          width: 100%;
          animation: ${({ menuOpen }) =>
            menuOpen
              ? css`
                  ${slowSlideDown} 0.5s ease forwards;
                  animation-delay: calc(
                    0.1s * var(--i)
                  ); /* Staggered delay for each item */
                `
              : 'none'};

          button,
          a {
            display: block;
            font-size: 1.25rem;
            width: 100%;
            padding: 1.5rem 0;
            background-color: var(--white);
            border: none;
            color: var(--midnight);
            letter-spacing: 0.15em;
            text-align: center;
            transition:
              background-color 0.3s ease,
              color 0.3s ease;
            text-decoration: none;

            &:hover {
              color: var(--green);
              background-color: var(--midnight); /* Color change on hover */
            }
          }
        }
      }
    }

    .social-section {
      background-color: var(--midnight);
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      animation: ${fadeIn} 0.7s ease forwards;

      .social-icons {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        padding: 0 1rem;
        opacity: 0;
        animation: ${fadeInUp} 0.5s ease forwards 0.3s;

        a {
          svg {
            color: var(--white);
            width: 2rem;
            height: 2rem;
            transition: color 0.3s ease;

            &:hover {
              color: var(--green);
            }
          }
        }
      }

      .resume-button {
        ${({ theme }) => theme.mixins.bigButton};
        padding: 0.75rem 1.5rem;
        font-size: var(--fz-lg);
        letter-spacing: 0.05em;
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 375px) {
    nav {
      ol {
        li {
          button {
            font-size: 1.125rem;
          }
        }
      }
    }
  }
`;

const MenuStyles = {
  StyledMenu,
  StyledHamburgerButton,
  StyleDropbar,
};

export default MenuStyles;