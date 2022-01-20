import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
    height: 25%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;

const Indicators = styled(Text)`
    font-size: 25px;
    font-weight: 500;
`;

const ResetButton = styled(TouchableOpacity)`
    display: ${props => props.hidden ? 'none' : 'flex'};
    background-color: #519EF1;
    padding: 8px 10px;
    border: 1px solid #0C061C;
    border-radius: 20px;
`;

const ButtonText = styled(Text)`
    color: #0C061C;
    font-size: 20px;
    font-weight: 700;
`;

export {
    Container,
    Indicators,
    ResetButton,
    ButtonText,
};
