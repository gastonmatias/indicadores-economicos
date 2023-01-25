// /api
export interface IndicatorListResponse {
    version:           string;
    autor:             string;
    fecha:             Date;
    uf:                SmallIndicator;
    ivp:               SmallIndicator;
    dolar:             SmallIndicator;
    dolar_intercambio: SmallIndicator;
    euro:              SmallIndicator;
    ipc:               SmallIndicator;
    utm:               SmallIndicator;
    imacec:            SmallIndicator;
    tpm:               SmallIndicator;
    libra_cobre:       SmallIndicator;
    tasa_desempleo:    SmallIndicator;
    bitcoin:           SmallIndicator;
}

export interface SmallIndicator {
    codigo:        string;
    nombre:        string;
    unidad_medida: UnidadMedida;
    fecha:         Date;
    valor:         number;
}

export enum UnidadMedida {
    Dolar = "Dólar",
    Pesos = "Pesos",
    Porcentaje = "Porcentaje",
}

// /api/{nombre_indicador}
export interface FullIndicator {
    version:       string;
    autor:         string;
    codigo:        string;
    nombre:        string;
    unidad_medida: string;
    serie:         Serie[];
}

export interface Serie {
    fecha: Date;
    valor: number;
}
