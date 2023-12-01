import styled from "styled-components";

const Result = ({ result }) => {
    const getContent = () => {
        if (result.loading) {
            return "loading ...";
        }
        if (result.error) {
            return result.error.message;
        }
        if (result.data) {
            return result.data;
        }
        return null;
    };

    return (
        <StResultSection>
            {getContent() && <StBubble>{getContent()}</StBubble>}
        </StResultSection>
    );
};
const StResultSection = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StBubble = styled.div`
  background-color: #444;
  color: #fff;
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 100%;
  word-wrap: break-word;
  margin: 30px 0;
  font-family: "Comic Sans MS", "Comic Neue", cursive;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border-width: 10px;
    border-style: solid;
    border-color: #444 transparent transparent transparent;
    bottom: -20px;
    left: 20px;
  }
`;

export default Result;
