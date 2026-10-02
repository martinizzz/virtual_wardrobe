export type CategoriaPrenda = 'tops' | 'bottoms' | 'calzado' | 'abrigos' | 'accesorios';

export interface Prenda {
    id: string;
    imageUrl: string; // URL de la imagen ya sin fondo en Firebase Storage
    categoria: CategoriaPrenda;
    colorPrincipal: string;
    fechaAgregado: number;
}