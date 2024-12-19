<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const bono = ref(null);
const loading = ref(true);


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


// Cuando la funcion este montada la ejecutas 
onMounted(async () => {
  // de la url que te voy a dar coge el id
  const bonoId = route.params.id;
  //intenta hacer esto
  try {
    //hasta q no tengas la informacion espera y dame los datos de esta url
    const response = await fetch("https://main.d 3200t5poujf7w.amplifyapp.com/bono/locale/3k9mpk");
    //si no hay respuesta muestrame el error.
    if (response?.ok) throw new Error('Error de cargg');
    //await hasta que tengas la infrmacion que la coges y la transofrmas en objeto
    bono.value = await response.json();
    // si no, error
  } catch (error) {
    console.error(error);
  }



});


</script>
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
      <div v-if="loading" class="text-center">
        <p class="text-gray-600">Cargando bono...</p>
      </div>
      <div v-else>
        <h1 class="text-2xl font-bold mb-4">bono nombre</h1>
        <p class="text-gray-700">Datos</p>
        <div class="mt-4">
          <p class="font-medium">Valor del bono:</p>
          <p class="text-xl font-semibold text-green-600"></p>
        </div>
      </div>
    </div>
  </div>
</template>


<style></style>