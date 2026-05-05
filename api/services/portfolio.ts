import { apiClient } from "../client/api-client";
import { API_ENDPOINTS } from "../client/api-endpoints";
import { CreatePortfolioPostDto } from "../dto/profile/create-profile-post.dto";
import { errorProcessing } from "../helpers/error-processing";

// api/portfolio-api.ts
class PortfolioApi {
  async addPortfolioProject(data: CreatePortfolioPostDto) {
    const formData = new FormData()
    formData.append("title", data.title)
    
    if (data.link) {
      formData.append("link", data.link)
    }
    
    formData.append("description", data.description)
    
    // Важно: сервер ожидает поле 'files' (множественное число)
    // и оно должно быть массивом файлов
    if (data.img) {
      // Если img - это один файл
      formData.append("files", data.img, data.img.name)
    }
    
    // Если поддерживается несколько файлов:
    if (data.images && data.images.length > 0) {
      data.images.forEach((file) => {
        formData.append("files", file, file.name)
      })
    }
    
    try {
      return await apiClient.postFormData(
        API_ENDPOINTS.PROFILE.CREATE_PORTFOLIO_POST,
        formData
      )
    } catch (err: any) {
      throw errorProcessing(err, "создании проекта портфолио :(")
    }
  }
}

export const portfolioApi = new PortfolioApi()