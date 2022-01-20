import styled from 'styled-components/native';

const Container = styled.SafeAreaView``;

const InfoBar = styled.StatusBar.attrs(props => ({hidden: true}))``;

const Header = styled.View`
    width: 100%;
    height: 10%;
`;

const Body = styled.View`
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    width: 80%;
    height: 90%;
`;

const Footer = styled.View`
    width: 100%;
    height: 10%;
`;

export {
    Container,
    InfoBar,
    Header,
    Body,
    Content,
    Footer,
};
