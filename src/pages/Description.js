import { useParams } from "react-router-dom";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  margin: 5px;
  padding: 5px;
  min-height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bolder;
  font-size: large;
`;

const Description = () => {
  const { name } = useParams();
  return <DescriptionWrapper>{name}'s Description</DescriptionWrapper>;
};

export default Description;
