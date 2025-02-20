import { Request, Response } from 'express';
import Property from '../models/Property';

export const createProperty = async (req: Request, res: Response) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar imóvel', error });
    }
};

export const getProperties = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, city, minPrice, maxPrice } = req.query;
        const filters: any = {};

        if (city) filters['address.city'] = city;
        if (minPrice) filters.price = { $gte: Number(minPrice) };
        if (maxPrice) filters.price = { ...filters.price, $lte: Number(maxPrice) };

        const properties = await Property.find(filters)
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));

        const total = await Property.countDocuments(filters);

        res.json({ properties, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar imóveis', error });
    }
};

export const getPropertyById = async (req: Request, res: Response): Promise<any> => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: 'Imóvel não encontrado' });

        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar imóvel', error });
    }
};

export const updateProperty = async (req: Request, res: Response): Promise<any> => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!property) return res.status(404).json({ message: 'Imóvel não encontrado' });

        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar imóvel', error });
    }
};

export const deleteProperty = async (req: Request, res: Response): Promise<any> => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) return res.status(404).json({ message: 'Imóvel não encontrado' });

        res.json({ message: 'Imóvel excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir imóvel', error });
    }
};
