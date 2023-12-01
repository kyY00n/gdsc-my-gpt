import { useReducer } from "react";
import { getGptResponse } from "../lib/gpt";

// 상태를 업데이트하는 리듀서 함수
const gptReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_START":
      return { ...state, loading: true, error: null, data: null };
    case "REQUEST_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "REQUEST_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const useGptResponse = () => {
  const [state, dispatch] = useReducer(gptReducer, initialState);

  const getResponse = async (text) => {
    dispatch({ type: "REQUEST_START" });

    try {
      // API 요청
      const response = await getGptResponse(text);
      dispatch({ type: "REQUEST_SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "REQUEST_FAILURE", payload: error });
    }
  };

  return { ...state, getResponse };
};

export default useGptResponse;
