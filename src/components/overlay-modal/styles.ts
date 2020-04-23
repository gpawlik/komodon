import styled, { css } from 'styled-components';

const absolutePosition = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ModalContainer = styled.View`
    background-color: rgba(0, 0, 0, 0.4);
    flex: 1;
`;

export const WebModalContainer = styled(ModalContainer)`
    ${absolutePosition};
    display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
    z-index: ${({ zIndex }) => zIndex || 'auto'};
`;

export const WebModalContent = styled.View`
    ${absolutePosition};
    align-items: center;
    justify-content: center;
`;
