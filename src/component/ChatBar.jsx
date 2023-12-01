import styled from "styled-components";
import useInput from "../hooks/useInput";
import { FaArrowUp } from "react-icons/fa";

// 이 컴포넌트는 최종적으로 입력된 값을 send해야 하므로 부모로부터 onSend 함수를 받게될 것
function ChatingBar({ onSend }) {
    // input으로 들어오는 값과, 값을 추적하는 onChage 프로퍼티와, 값을 초기화하는 reset 함수를 useInput 훅으로부터 받음
    const { value, onChange, reset } = useInput("");

    // 전송 버튼을 눌렀을 때, onSend 함수를 실행하고, reset 함수를 실행하여 인풋창을 초기화함
    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(value);
        reset();
    };

    return (
        <StChatingBar onSubmit={handleSubmit}>
            {/* 채팅을 입력받을 창, useInput에서 받은 프로퍼티를 이용해 인풋값을 관리함 */}
            <StTextArea
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Type a message..."
            />
            {/* 채팅 전송 버튼 */}
            <StButton type="submit">
                <FaArrowUp />
            </StButton>
        </StChatingBar>
    );
}

const StChatingBar = styled.form`
  width: 80%;
  height: 69px;
  border: 8px solid rgba(105, 105, 105, 0.5);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  background: #414141;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StTextArea = styled.textarea`
  margin-left: 24px;
  width: 90%;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 132.5%;

  display: flex;
  align-items: center;
  color: #f9f9f9;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  resize: none;

  &::placeholder {
    color: #f9f9f9;
  }
  :focus {
    outline: none;
  }
`;

const StButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #555;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #222;
  }
`;

export default ChatingBar;
