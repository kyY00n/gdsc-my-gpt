import { useState } from "react";

// useInput 훅 정의
function useInput(initialValue) {
    // 입력 값 상태 관리
    const [value, setValue] = useState(initialValue);

    // 입력 값 변경 이벤트 처리
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // 입력 필드 초기화
    const reset = () => {
        setValue(initialValue);
    };

    // 훅 사용 시 반환할 객체
    return {
        value,
        onChange: handleChange,
        reset,
    };
}

export default useInput;
