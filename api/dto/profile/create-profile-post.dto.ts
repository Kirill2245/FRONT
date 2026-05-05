// types/portfolio.ts
export interface CreatePortfolioPostDto {
  title: string
  link?: string
  description: string
  img?: File  // для одного файла
  images?: File[]  // для нескольких файлов
}