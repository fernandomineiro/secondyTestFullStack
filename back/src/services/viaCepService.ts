// src/services/viaCepService.ts

import axios from 'axios';

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const getAddressByCep = async (cep: string): Promise<ViaCepResponse | null> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (response.data.erro) {
      return null;
    }
    
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar CEP: ${error}`);
    return null;
  }
};