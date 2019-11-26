import styled from 'styled-components';
import { device } from './screens';

export const Body = styled.div`

`;

export const SuccessMessage = styled.div`
  color: #4d9444;
  font-size: 24px;
`;

export const Error = styled.div`
  width: 100%
  background: #b05541;
  border-bottom: 1px solid #e6e6e7;
  box-sizing: border-box
  overflow: hidden;
  color: white;
  text-align: center;
  height: 40px;
  padding: 10px;
`;

export const MainContainer = styled.div`
  width: 100%;
  background: #f4f4f4;
  display: block;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Header = styled.div`
  width: 100%
  background: #ffffff;
  border-bottom: 1px solid #e6e6e7;
  box-sizing: border-box
  overflow: hidden;
  `;

export const Logo = styled.div`
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/60px-IBM_logo.svg.png") no-repeat left center;
  display: block;
  height: 51px;
  margin: 0 20px;
  cursor: pointer;
  text-indent: -999px;
 `;

export const FormWidth = styled.div`
  @media only screen and  ${device.minmobileS} {
    width: 100%;
  }

  @media only screen and  ${device.minmobileM} {
    width: 100%;
  }

  @media only screen and  ${device.minmobileL} {
    width: 100%;
  }

  @media only screen and  ${device.mintablet} {
    width: 100%;
  }

  @media only screen and  ${device.minlaptop} {
    width: 960px;
  }

  @media only screen and  ${device.minlaptopL} {
    width: 960px;
  }

  @media only screen and  ${device.mindesktop} {
    width: 960px;
  }
`;

export const Wrapper = styled(FormWidth)`
  display: block;
  margin: 0 auto;
  background: #fff;
  border-top: .5rem solid #4178be;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  font-family: IBM Plex Sans Text;
  color: #323232;
  margin-top: 30px;
`;

export const Footer = styled(FormWidth)`
  background: #d9d9d9;
  height: 40px;
  margin: 0 auto 40px;
  display: block;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
`;

export const Heading = styled.div`
  @font-face {font-family: "IBM Plex Sans Text"; 
  src: url("https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-medium.eot"); 
  src: url("https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-medium.eot?#iefix") format("embedded-opentype"), 
  url("https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-medium.woff2") format("woff2"), 
  url("https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-medium.woff") format("woff"), 
  url("https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-medium.ttf") format("truetype"), 
  url("https://1.www.s81c.com/common/fonts/plex/v1/ibmplexsans-medium.svg#IBM Plex Sans Text") format("svg"); }
  margin: 0 10px 5px 10px;
  color: #4178be;
  @media only screen and  ${device.minmobileS} {
    font-size: 28px;
  }

  @media only screen and  ${device.minmobileM} {
    font-size: 28px;
  }

  @media only screen and  ${device.minmobileL} {
    font-size: 28px;
  }

  @media only screen and  ${device.mintablet} {
    font-size: 28px;
  }

  @media only screen and  ${device.minlaptop} {
    font-size: 30px;
  }

  @media only screen and  ${device.minlaptopL} {
    font-size: 30px;
  }

  @media only screen and  ${device.mindesktop} {
    font-size: 30px;
  }
`;

export const Description = styled.div`
  font-family: IBM Plex Sans Text;
  padding: 10px;
  font-size: 16px;
  line-height: 18px;
  color: #323232;
`;

export const FlexContainer = styled.div`
  font-family: IBM Plex Sans Text;
  color: #323232;
  display: flex;
  @media only screen and  ${device.minmobileS} {
    flex-direction: column;
    align-items: left;
  }

  @media only screen and  ${device.minmobileM} {
    flex-direction: column;
    align-items: left;
  }

  @media only screen and  ${device.minmobileL} {
    flex-direction: column;
    align-items: left;
  }

  @media only screen and  ${device.mintablet} {
    flex-direction: column;
    align-items: left;
  }

  @media only screen and  ${device.minlaptop} {
    flex-direction: row;
    align-items: flex-start;
  }

  @media only screen and  ${device.minlaptopL} {
    flex-direction: row;
    align-items: flex-start;
  }

  @media only screen and  ${device.mindesktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FlexColOneTwo = styled.div`
  width: 99.8%;
  padding: 10px;
`;

export const DatePickerContainer = styled(FlexColOneTwo)`
  text-align: left;
`;

export const PlacePickerContainer = styled(FlexColOneTwo)`
  @media only screen and  ${device.minmobileS} {
    text-align: left;
    flex-grow: 0;
  }

  @media only screen and  ${device.minmobileM} {
    text-align: left;
    flex-grow: 0;
  }

  @media only screen and  ${device.minmobileL} {
    text-align: left;
    flex-grow: 0;
  }

  @media only screen and  ${device.mintablet} {
    text-align: left;
    flex-grow: 0;
  }

  @media only screen and  ${device.minlaptop} {
    text-align: right;
  }

  @media only screen and  ${device.minlaptopL} {
    text-align: right;
  }

  @media only screen and  ${device.mindesktop} {
    text-align: right;
  }
`;

export const SecondaryHeading = styled.div`
  font-family: IBM Plex Sans Text;
  color: #323232;
  font-weight; bold;
  padding: 10px 10px 15px;
  @media only screen and  ${device.minmobileS} {
    font-size: 20px;
  }

  @media only screen and  ${device.minmobileM} {
    font-size: 20px;
  }

  @media only screen and  ${device.minmobileL} {
    font-size: 20px;
  }

  @media only screen and  ${device.mintablet} {
    font-size: 20px;
  }

  @media only screen and  ${device.minlaptop} {
    font-size: 22px;
  }

  @media only screen and  ${device.minlaptopL} {
    font-size: 22px;
  }

  @media only screen and  ${device.mindesktop} {
    font-size: 22px;
  }
`;

export const CommonLabelStyles = styled.div`
  @media only screen and  ${device.minmobileS} {
    margin-top:0;
    padding-bottom:0;
  }

  @media only screen and  ${device.minmobileM} {
    margin-top:0;
    padding-bottom:0;
  }

  @media only screen and  ${device.minmobileL} {
    margin-top:0;
    padding-bottom:0;
  }

  @media only screen and  ${device.mintablet} {
    margin-top:0;
    padding-bottom:0;
  }

  @media only screen and  ${device.minlaptop} {
    margin-top:9px;
  }

  @media only screen and  ${device.minlaptopL} {
    margin-top:9px;
  }

  @media only screen and  ${device.mindesktop} {
    margin-top:9px;
  }
`;

export const FirstNameContainer = styled(CommonLabelStyles)`
  text-align: left;
  width: auto;
  flex-grow: 0;
  padding: 10px;
  
`;

export const LastnameContainer = styled(CommonLabelStyles)`
  text-align: left;
  width: auto;
  flex-grow: 0;
  padding: 10px;
`;

export const ContactNumberContainer = styled(CommonLabelStyles)`
  text-align: left;
  width: auto;
  flex-grow: 0;
  padding: 10px;
`;

export const OccupationContainer = styled(CommonLabelStyles)`
  text-align: left;
  width: auto;
  flex-grow: 0;
  padding: 10px;
`;

export const EmailIdContainer = styled(CommonLabelStyles)`
  text-align: left;
  width: auto;
  flex-grow: 0;
  padding: 10px;
`;

export const QuestionsHeaderContainer = styled.div`
  padding: 10px 10px 20px;
  font-family: IBM Plex Sans Text;
  color: #323232;
  font-size: 18px;
  @media only screen and  ${device.minmobileS} {
    display: none;
  }

  @media only screen and  ${device.minmobileM} {
    display: none;
  }

  @media only screen and  ${device.minmobileL} {
    display: none;
  }

  @media only screen and  ${device.mintablet} {
    display: none;
  }

  @media only screen and  ${device.minlaptop} {
    display: flex;
  }

  @media only screen and  ${device.minlaptopL} {
    display: flex;
  }

  @media only screen and  ${device.mindesktop} {
    display: flex;
  }
`;

export const QnsHeaderLeftContainer = styled.div`
  width: 50%
`;

export const QnsLabelContainer = styled.div`
  width: 10%;
  text-align: center;
`;

export const QnsSectionHeading = styled.div`
  font-family: IBM Plex Sans Text;
  font-weight; bold;
  padding: 15px 10px;
  color: #323232;
  @media only screen and  ${device.minmobileS} {
    font-size: 18px;
  }

  @media only screen and  ${device.minmobileM} {
    font-size: 18px;
  }

  @media only screen and  ${device.minmobileL} {
    font-size: 18px;
  }

  @media only screen and  ${device.mintablet} {
    font-size: 18px;
  }

  @media only screen and  ${device.minlaptop} {
    font-size: 20px;
  }

  @media only screen and  ${device.minlaptopL} {
    font-size: 20px;
  }

  @media only screen and  ${device.mindesktop} {
    font-size: 20px;
  }
`;

export const QnsContainer = styled.div`
  display: flex;
  font-family: IBM Plex Sans Text;
  color: #323232;
  line-height: 28px;
  @media only screen and  ${device.minmobileS} {
    padding: 10px 10px;
    flex-direction: column;
    &:hover {
      background: transparent;
      opacity: 1;
      transition: 0.3s;
    }
  }

  @media only screen and  ${device.minmobileM} {
    padding: 0 10px;
    flex-direction: column;
    &:hover {
      background: transparent;
      opacity: 1;
      transition: 0.3s;
    }
  }

  @media only screen and  ${device.minmobileL} {
    padding: 0 10px;
    flex-direction: column;
    &:hover {
      background: transparent;
      opacity: 1;
      transition: 0.3s;
    }
  }

  @media only screen and  ${device.mintablet} {
    padding: 0 10px;
    flex-direction: column;
    &:hover {
      background: transparent;
      opacity: 1;
      transition: 0.3s;
    }
  }

  @media only screen and  ${device.minlaptop} {
    padding: 10px 10px;
    flex-direction: row;
    &:hover {
      background: #f5f5f7;
      opacity: 1;
      transition: 0.3s;
    }
  }

  @media only screen and  ${device.minlaptopL} {
    padding: 10px 10px;
    flex-direction: row;
    &:hover {
      background: #f5f5f7;
      opacity: 1;
      transition: 0.3s;
    }
  }

  @media only screen and  ${device.mindesktop} {
    padding: 10px 10px;
    flex-direction: row;
    &:hover {
      background: #f5f5f7;
      opacity: 1;
      transition: 0.3s;
    }
  }
`;

export const QuestionDesktopView = styled.div`
  @media only screen and  ${device.minmobileS} {
    width: 100%;
    padding-bottom: 10px;
    display: none;
  }

  @media only screen and  ${device.minmobileM} {
    width: 100%;
    padding-bottom: 10px;
    display: none;
  }

  @media only screen and  ${device.minmobileL} {
    width: 100%;
    padding-bottom: 10px;
    display: none;
  }

  @media only screen and  ${device.mintablet} {
    width: 100%;
    padding-bottom: 10px;
    display: none;
  }

  @media only screen and  ${device.minlaptop} {
    width: 50%;
    padding-bottom: 0;
    display: flex;
  }

  @media only screen and  ${device.minlaptopL} {
    width: 50%;
    padding-bottom: 0;
    display: flex;
  }

  @media only screen and  ${device.mindesktop} {
    width: 50%;
    padding-bottom: 0;
    display: flex;
  }
`;

export const AnswersWrapper = styled.div`
  transition: all 0.5s ease;
  @media only screen and  ${device.minmobileS} {
    display: flex;
    width: 100%;
    height: 160px;
    overflow: hidden;
    margin-left: 10px;
  }

  @media only screen and  ${device.minmobileM} {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    margin-left: 10px;
  }

  @media only screen and  ${device.minmobileL} {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    margin-left: 10px;
  }

  @media only screen and  ${device.mintablet} {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    margin-left: 10px;
  }

  @media only screen and  ${device.minlaptop} {
    display: flex;
    width: 50%;
    flex-direction: row;
    height: auto;
    margin-left: 0;
  }

  @media only screen and  ${device.minlaptopL} {
    display: flex;
    width: 50%;
    flex-direction: row;
    height: auto;
    margin-left: 0;
  }

  @media only screen and  ${device.mindesktop} {
    display: flex;
    width: 50%;
    flex-direction: row;
    height: auto;
    margin-left: 0;
  }
`;

export const QnsInput = styled.input`
  display: none;
  @media only screen and  ${device.minmobileS} {
    &:checked + ${AnswersWrapper} {
      height: 160px;
      opacity: 1;
      display: flex;
    }
  }

  @media only screen and  ${device.minmobileM} {
    &:checked + ${AnswersWrapper} {
      height: 160px;
      opacity: 1;
      display: flex;
    }
  }

  @media only screen and  ${device.minmobileL} {
    &:checked + ${AnswersWrapper} {
      height: 160px;
      opacity: 1;
      display: flex;
    }
  }

  @media only screen and  ${device.mintablet} {
    &:checked + ${AnswersWrapper} {
      height: 160px;
      opacity: 1;
      display: flex;
    }
  }

  @media only screen and  ${device.minlaptop} {
    &:checked + ${AnswersWrapper} {
      height: auto;
      opacity: 1;
      display: flex;
    }
  }

  @media only screen and  ${device.minlaptopL} {
    &:checked + ${AnswersWrapper} {
      height: auto;
      opacity: 1;
      display: flex;
    }
  }

  @media only screen and  ${device.mindesktop} {
    &:checked + ${AnswersWrapper} {
      height: auto;
      opacity: 1;
      display: flex;
    }
  }
`;

export const QnsInputLabel = styled.label`
  @media only screen and  ${device.minmobileS} {
    display: flex;
    background: #f5f5f7;
    padding: 10px;
    margin-bottom: 2px;
  }

  @media only screen and  ${device.minmobileM} {
    display: flex;
    background: #f5f5f7;
    padding: 10px;
    margin-bottom: 2px;
  }

  @media only screen and  ${device.minmobileL} {
    display; flex;
    background: #f5f5f7;
    padding: 10px;
    margin-bottom: 2px;
  }

  @media only screen and  ${device.mintablet} {
    display: flex;
    background: #f5f5f7;
    padding: 10px;
    margin-bottom: 2px;
  }

  @media only screen and  ${device.minlaptop} {
    display: none;
    background: transparent;
    padding: 0;
    margin-bottom: 0;
  }

  @media only screen and  ${device.minlaptopL} {
    display: none;
    background: transparent;
    padding: 0;
    margin-bottom: 0;
  }

  @media only screen and  ${device.mindesktop} {
    display:none;
    background: transparent;
    padding: 0;
    margin-bottom: 0;
  }
`;


export const Answer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  align-items: baseline;
  @media only screen and  ${device.minmobileS} {
    width: 100%;
    text-align: left;
    padding-bottom: 5px;
  }

  @media only screen and  ${device.minmobileM} {
    width: 100%;
    text-align: left;
    padding-bottom: 5px;
  }

  @media only screen and  ${device.minmobileL} {
    width: 100%;
    text-align: left;
    padding-bottom: 5px;
  }

  @media only screen and  ${device.mintablet} {
    width: 100%;
    text-align: left;
    padding-bottom: 5px;
  }

  @media only screen and  ${device.minlaptop} {
    width: 20%;
    text-align: center;
  }

  @media only screen and  ${device.minlaptopL} {
    width: 20%;
    text-align: center;
  }

  @media only screen and  ${device.mindesktop} {
    width: 20%;
    text-align: center;
  }
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  margin: 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  border: 2px solid #bebebe;
  @media only screen and  ${device.minmobileS} {
    top: 25%;
    left: 4px;
  }
  
  @media only screen and  ${device.minmobileM} {
    top: 25%;
    left: 4px;
  }
  
  @media only screen and  ${device.minmobileL} {
    top: 25%;
    left: 4px;
  }
  
  @media only screen and  ${device.mintablet} {
    top: 25%;
    left: 4px;
  }
  
  @media only screen and  ${device.minlaptop} {
    top: 0;
    left: 34px;
  }
  
  @media only screen and  ${device.minlaptopL} {
    top: 0;
    left: 34px;
  }
  
  @media only screen and  ${device.mindesktop} {
    top: 0;
    left: 34px;
  }
`;

export const RadioButton = styled.input`
  @media only screen and  ${device.minmobileS} {
    position: relative;
    width: 114px;
    height: 22px;
    top: 8px;
  }

  @media only screen and  ${device.minmobileM} {
    position: relative;
    width: 114px;
    height: 22px;
    top: 8px;
  }

  @media only screen and  ${device.minmobileL} {
    position: relative;
    width: 114px;
    height: 22px;
    top: 8px;
  }

  @media only screen and  ${device.mintablet} {
    position: relative;
    width: 114px;
    height: 22px;
    top: 8px;
  }

  @media only screen and  ${device.minlaptop} {
    position: relative;
    left: 0;
    margin-right: 0;
    top: 0;
  }

  @media only screen and  ${device.minlaptopL} {
    position: relative;
    left: 0;
    margin-right: 0;
    top: 0;
  }

  @media only screen and  ${device.mindesktop} {
    position: relative;
    left: 0;
    margin-right: 0;
    top: 0;
  }
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  &:hover ~ ${RadioButtonLabel} {
    background: #4178be;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 6px;
      background: white;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #4178be;
    border: 1px solid #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 6px;
      background: #4178be;
    }
  }
  &:focus ~ ${RadioButtonLabel} {
    background: #4178be;
    border: 2px solid #3a6599;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 6px;
      background: #4178be;
    }
  }
`;

export const DisplayLabel = styled.div`
@media only screen and  ${device.minmobileS} {
  display: block;
  position: absolute;
  top: 7px;
  left: 40px;
}

@media only screen and  ${device.minmobileM} {
  display: block;
  position: absolute;
  top: 7px;
  left: 40px;
}

@media only screen and  ${device.minmobileL} {
  display: block;
  position: absolute;
  top: 7px;
  left: 40px;
}

@media only screen and  ${device.mintablet} {
  display: block;
  position: absolute;
  top: 7px;
  left: 40px;
}

@media only screen and  ${device.minlaptop} {
  display: none;
}

@media only screen and  ${device.minlaptopL} {
  display: none;
}

@media only screen and  ${device.mindesktop} {
  display: none;
}
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#4178be" : "#231f20"};
  color: ${props => props.primary ? "#fff" : "#fff"};
  font-family: IBM Plex Sans Text;
  font-size: 16px;
  margin: 1em;
  padding:0 24px;
  border: 2px solid #4178be;
  width: 180px;
  height: 48px;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    border: 2px solid #fff;
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #cccccc;
    background: ${props => props.primary ? "#cccccc" : "#cccccc"};
    color: ${props => props.primary ? "#666666" : "#666666"};
    pointer-events: none;
  }
}
`;

export const FieldWrapper = styled.div`
  flex-grow: 1;  
  display:flex;
  flex-direction: column
`;

export const Input = styled.input`
  padding: 10px;
  color: #414a57;
  background: white;
  border: 1px solid #bebebe;
  font-size: 14px;
  @media only screen and  ${device.minmobileS} {
    margin: 5px 10px;
  }

  @media only screen and  ${device.minmobileM} {
    margin: 5px 10px;
  }

  @media only screen and  ${device.minmobileL} {
    margin: 5px 10px;
  }

  @media only screen and  ${device.mintablet} {
    margin: 5px 10px;
  }

  @media only screen and  ${device.minlaptop} {
    margin: 10px 10px 10px 0;
  }

  @media only screen and  ${device.minlaptopL} {
    margin: 10px 10px 10px 0;
  }

  @media only screen and  ${device.mindesktop} {
    margin: 10px 10px 10px 0;
  }
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  position: relative;
`;

export const Loader = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const Select = styled.select`
  width: 200px;
  padding: 10px;
  color: #414a57;
  margin-left: 10px;
  background: white;
    border: 1px solid #bebebe;
  font-size: 14px;
  flex-grow: 1;
  height:40px;
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pro;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Span = styled.span`
  display: block;
  color: red;
  font-size: 11px;
  @media only screen and  ${device.minmobileS} {
    padding-left:10px;
  }

  @media only screen and  ${device.minmobileM} {
    padding-left:10px;
  }

  @media only screen and  ${device.minmobileL} {
    padding-left:10px;
  }

  @media only screen and  ${device.mintablet} {
    padding-left:10px;
  }

  @media only screen and  ${device.minlaptop} {
    padding-left:0;
  }

  @media only screen and  ${device.minlaptopL} {
    padding-left:0;
  }

  @media only screen and  ${device.mindesktop} {
    padding-left:0;
  }
`;
