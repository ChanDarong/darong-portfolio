import cigjfImage from '@/assets/images/projects/cigjf.png';
import dynashopImage from '@/assets/images/projects/dynashop-kh.png';

export const projects = [
    {
        id: 1,
        title: 'CIGJF',
        description: 'Website for showcasing annual exhibition events',
        image: cigjfImage,
        link: 'https://cigjf.org/',
        technologies: ['Bootstrap', 'jQuery', 'Laravel'],
        is_featured: true
    },
    {
        id: 2,
        title: 'Dynashop KH',
        description: 'Game top-up platform with user-friendly interface and secure payment gateway integration with ABA.',
        image: dynashopImage,
        link: 'https://dynashopkh.com/',
        technologies: ['Bootstrap', 'jQuery', 'Laravel'],
        is_featured: true
    },
    {
        id: 3,
        title: 'Direct Sport News',
        description: 'Internal system for managing invoices in a sportswear printing business.',
        image: dynashopImage, // Reusing image as placeholder if specific one doesn't exist
        link: '#',
        technologies: ['Bootstrap', 'jQuery', 'Laravel'],
        is_featured: true
    }
]