import { apiClient } from "../client/api-client";
import { API_ENDPOINTS } from "../client/api-endpoints";
import { CategoryWithLectures, Lecture, Test, TestFullData, TestResultResponse } from "../dto/course/course.dto";
import { errorProcessing } from "../helpers/error-processing";


class CourseApi{
    async getCategorys() {
        try {
            const response = await apiClient.get<{ id: string; name: string ; _count:{lectios:number}; slug:string}[]>(API_ENDPOINTS.COURSE.GET_CATEGORYS);
            return response;
        } catch (err) {
            throw errorProcessing(err, "получении категорий");
        }
    }

    async getLections(slug:string){
        try {
            const response = await apiClient.get<CategoryWithLectures>(`${API_ENDPOINTS.COURSE.GET_LECTIONS_CATEGORY}/${slug}`);
            return response;
        } catch (err) {
            throw errorProcessing(err, "получении лекций");
        }
    }

    async getLecture(slug:string){
        try {
            const response = await apiClient.get<Lecture>(`${API_ENDPOINTS.COURSE.GET_LECTION}/${slug}`);
            return response;
        } catch (err) {
            throw errorProcessing(err, "получении лекции");
        }
    }

    async getTest(id:string){
        try{
            const response = await apiClient.get<TestFullData>(`${API_ENDPOINTS.COURSE.GET_TEST}/${id}`)
            return response;
        }
        catch (err) {
            throw errorProcessing(err, "получении теста");
        }
    }

    async cheakAnswers(id: string, data: {answers: string[]}){
        try{
            const response = await apiClient.post<TestResultResponse>(`${API_ENDPOINTS.COURSE.CHECK_ANSWERS}/${id}`, data)
            return response
        }
        catch (err) {
            throw errorProcessing(err, "получении теста");
        }
    }

    async getResultTest(testId: string){
        try{
            const response = await apiClient.get<TestResultResponse>(`${API_ENDPOINTS.COURSE.GET_RESULT_TEST}/${testId}`)
            console.log('Response',response)
            return response
        }
        catch (err) {
            throw errorProcessing(err, "получении теста");
        }
    }
}

export const courseApi = new CourseApi()