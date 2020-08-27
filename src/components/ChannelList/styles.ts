import styled from "styled-components/native";
import colors from "../../styles/colors";

export const List = styled.View`
  padding: 8px 0 0;
`;

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-right: 14px;
  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  background: ${colors.tag};
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Username = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 16px;
`;

export const Info = styled.Text`
  margin-top: 2px;
  color: ${colors.gray};
  font-size: 13px;
`;

export const RightSide = styled.View`

`;

export const WhiteCircle = styled.View`
  background: ${colors.black};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  opacity: 0.8;

`;
