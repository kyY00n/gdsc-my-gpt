
import OpenAI from "openai";

export const configuration = {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    organization: import.meta.env.VITE_OPENAI_ORGANIZATION,
    dangerouslyAllowBrowser: true, // Browser에서 호출하기 위해선 이 옵션이 필요함
};

export const getGptResponse = async (text) => {
    const openai = new OpenAI(configuration);

    // 요청을 비동기적으로 받아오므로 async/await 문법을 사용
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: text }],
        model: "gpt-3.5-turbo",
    });
    console.log(completion); // ompletion.choices[0]?.message.content 내부에 답변이 들어있음

    return completion.choices[0]?.message.content;
};
