import styled from "styled-components";

export const ContainerMenu = styled.header`
  background-color: white;
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  box-shadow: 0px 0px white;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  align-items: center;
  gap: 10px;
  padding-top: ${({ paddingTop }) => paddingTop || null};
  color: white;
`;

export const Button = styled.button`
  border: 2px solid #c17cef;
  font-size: 15px;
  line-height: 1rem;
  border-radius: 5px;
  color: #c17cef;
  width: 165px;
  height: 35px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5px auto;
  cursor: ${({ cursor }) => cursor || null};
`;

export const Input = styled.input`
  width: 230px;
  height: 50px;
  margin-bottom: 15px;
`;

export const P = styled.p`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  color: ${({ color }) => color || "#95A5BA"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "null"};
`;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  justify-content: ${({ justifyContent }) => justifyContent || "space-around"};
  align-items: center;
  margin: ${({ margin }) => margin || "20px"};
  gap: 10px;
`;

export const Card = styled.div`
  padding: ${({ padding }) => padding || "5px 5px"};
  width: ${({ width }) => width || "330px"};
  height: ${({ height }) => height || "220px"};
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px #3197d4;
  overflow-y: ${({ overflow }) => overflow || null};
`;

export const Perror = styled.span`
  color: red;
  font-size: 10px;
  text-align: center;
  font-weight: 500;
`;

export const Form = styled.form`
  gap: 5px;
`;

export const Textarea = styled.textarea`
  width: 320px;
  height: 113px;
  border: none;
  background: #e8e7e8;
  padding: 25px;
  font-size: 15px;
`;

export const Select = styled.select`
  width: 320px;
  height: 30px;
  color: grey;
  font-size: 15px;
  display: flex;
`;

export const PinkArrowRight = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: #6347d1;
`;

export const PinkArrowLeft = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: #6347d1;
`;

export const GreyArrowRight = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: grey;
`;
export const GreyArrowLeft = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: grey;
`;

export const Header = styled.header`
  /* width: auto; */
  /* height: 80px; */
  background: #758ecd;
  /* margin-top: -22px; */
`;

export const CardHome = styled.div`
  background: #fff;
  border-radius: 5px;
`;

export const Menu = styled.div`
  width: 50%;
  height: 100vh;
`;

export const H1 = styled.h1`
  padding-top: 15px;
  padding-left: 10px;
  color: ${({ color }) => color || "whith"};
  text-align: center;
`;

export const FlexContainerHome = styled.div`
  display: flex;
`;

export const Remark = styled.p`
  font-size: 15px;
  margin: 0 auto;
  padding: 30px;
  color: #fff;
`;

export const RatingGlobal = styled.div`
  border: 1px solid red;
  font-size: 15px;
  width: 40px;
  margin: 20px auto;
  border-radius: 4px;
  text-align: center;
`;

export const CardRating = styled.div`
  background: #f1f5f9;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-top: 10px;
  gap: 10px;
  border-radius: 10px;
`;

export const FormAuthentification = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerInformation = styled.p`
  background: cornflowerblue;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  width: 300px;
`;

export const FlexElementCard = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin-bottom: 0.5rem;
  gap: 5px;
`;
