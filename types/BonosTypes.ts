export interface WebBonoType {
  contenido: {
    [key: string]: {
      final: string;
      condiciones: string;
      info: string;
    };
  };
  formulario: FormularioField[];
  bonoId: string;
  nombre: string;
  imagenes: ImagenField[];
  banner: string;
  literales: {
    [key: string]: {
      [key: string]: string;
    };
  };
  iframeAdmin: string;
  camposExtra: CampoExtra[];
  bono: string;
  color: string;
  patrocinadores: string;
  paginas: string[];
  idiomas: string[];
  url: string;
  logo: string;
  iframeBaseUrlJSON: string;
}

interface FormularioField {
  campo: string;
  max?: string;
  min: string;
  obligatorio: boolean;
  texto: string;
  tipo: string;
  visible: boolean;
}

interface ImagenField {
  campo: string;
  min: string;
  obligatorio: boolean;
  texto: string;
  tipo: string;
  visible: boolean;
}

interface CampoExtra {
  campo: string;
  max: string;
  min: string;
  obligatorio: boolean;
  texto: string;
  tipo: string;
  visible: boolean;
}