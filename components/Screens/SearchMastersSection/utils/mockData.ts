// components/Screens/SearchMastersSection/utils/mockData.ts
import { Freelancer } from '../types/freelancer.types';

export const generateMockFreelancers = (page: number, limit: number): Freelancer[] => {
    const startId = (page - 1) * limit;
    const mockSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'Figma', 'Vue', 'Angular'];
    
    return Array.from({ length: limit }, (_, index) => ({
        id: startId + index + 1,
        name: `Фрилансер ${startId + index + 1}`,
        rating: 3 + Math.random() * 2,
        price: 500 + Math.random() * 5000,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
        skills: mockSkills.sort(() => 0.5 - Math.random()).slice(0, 3),
    }));
};