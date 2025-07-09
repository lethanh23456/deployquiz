import { post } from "../utils/request";

export const createTopic = async (options) => {
    const result = await post(`topics`,options);
    return result;
};

export const createQuestionByTopicId = async (options) => {
    const result = await post(`questions`,options);
    return result;
};
