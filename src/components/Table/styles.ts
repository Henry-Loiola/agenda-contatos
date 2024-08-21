import styled from 'styled-components';

export const ContainerTable = styled.div`
  width: 100%;
`;

export const HeaderTable = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  background: #F4F0F0;
  text-align: left;
  padding: 0 24px;
  
  strong {
    width: 25%;
  }
`;

export const BodyTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineTable = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  background: #FFFAFA;
  text-align: left;
  position: relative;
  margin-bottom: 8px;
  padding: 0 24px;

  &:first-child {
    margin-top: 24px;
  }

  span {
    width: 25%;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  position: absolute;
  right: 32px;

  img {
    width: 24px;
    cursor: pointer;
    
    &:first-child {
      margin-right: 8px;
    }
  }
`;
