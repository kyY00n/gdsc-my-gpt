import ChatBar from "./component/ChatBar.jsx";
import Result from "./component/Result";
import useGptResponse from "./hooks/useGptResponse";
import styled from "styled-components";
function App() {
    const { getResponse, ...result } = useGptResponse();
    const onSend = async (message) => {
        // getResponse를 통해 함수를 트리거
        getResponse(message);
    };

    return (
        <StMain>
            {/* 데이터 처리 상태를 담고 있는 result를 Result 컴포넌트에 넘길 것임 */}
            <Result result={result} />
            <ChatBar onSend={onSend} />
        </StMain>
    );
}

export default App;

const StMain = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
