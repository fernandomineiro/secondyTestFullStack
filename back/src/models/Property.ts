import mongoose, { Schema, Document } from 'mongoose';

interface IAddress {
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zip_code: string;
}

export interface IProperty extends Document {
    title: string;
    description: string;
    price: number;
    area: number;
    address: IAddress;
    published_at: Date;
}

const AddressSchema = new Schema<IAddress>({
    street: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
});

const PropertySchema = new Schema<IProperty>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    area: { type: Number, required: true },
    address: { type: AddressSchema, required: true },
    published_at: { type: Date, default: Date.now },
});

export default mongoose.model<IProperty>('Property', PropertySchema);