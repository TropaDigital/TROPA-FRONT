import { NextApiRequest, NextApiResponse } from 'next';
import casesData from '../../../data/cases.json';

export interface ICase {
    inactive?: boolean;
    id: number;
    slug: string;
    name: string;
    title: string;
    year: string;
    platform: string;
    text: string;
    front: string;
    backend: string;
    titleExtra: string;
    images: {
        preview?: string | null;
        principal: string;
        mobile1: string | null;
        mobile2: string | null;
        mobile3: string | null;
        extra1: string | null;
        extra2: string | null;
    };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (slug) {
        // Retorna um caso específico pelo ID
        const caseItem = casesData.cases.find(
            (item: ICase) => item.slug === slug && !item.inactive
        );

        if (caseItem) {
            res.status(200).json(caseItem);
        } else {
            res.status(404).json({
                message: 'Case não encontrado',
                error: true,
            });
        }
    } else {
        // Retorna todos os casos
        res.status(200).json(
            casesData.cases.filter((obj: any) => !obj.inactive)
        );
    }
}
