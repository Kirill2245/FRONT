export interface Freelancer {
    id: number;
    name: string;
    rating: number;
    price: number;
    avatar: string;
    skills: string[];
    description: string
    status?: string;
    specialization:string
}