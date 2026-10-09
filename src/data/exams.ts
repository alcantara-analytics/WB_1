import type { UtilityFeature } from '../types';

export const exams: UtilityFeature[] = [
  {
    title: 'Banco de exámenes pasados',
    track: 'Académico',
    phase: 'Prioridad alta',
    summary: 'Un repositorio ordenado por curso, docente, ciclo y tipo de evaluación para que la búsqueda deje de depender de grupos dispersos o drives perdidos.',
    benefit: 'Ahorra tiempo, mejora la preparación y ordena el material histórico de la facultad.',
    when: 'Implementación base desde el inicio de gestión'
  },
  {
    title: 'Generador de horarios y choques',
    track: 'Académico',
    phase: 'Diseño',
    summary: 'Herramienta para simular combinaciones de secciones, detectar cruces y comparar opciones antes del proceso de matrícula.',
    benefit: 'Ayuda a planificar mejor y evita armar horarios a ciegas o demasiado tarde.',
    when: 'Prototipo funcional en la primera etapa'
  },
  {
    title: 'Radar de matrícula y alertas oficiales',
    track: 'Trámites',
    phase: 'Prioridad alta',
    summary: 'Canal único con etapas, ampliaciones, incidencias, cambios y recordatorios de matrícula explicados de forma clara.',
    benefit: 'Reduce la desinformación y permite reaccionar a tiempo cuando aparece un problema.',
    when: 'Desde el siguiente proceso de matrícula'
  },
  {
    title: 'Ruta de trámites estudiantiles',
    track: 'Trámites',
    phase: 'Construcción',
    summary: 'Guías paso a paso para horas extracurriculares, prácticas preprofesionales, constancias, egreso, tesis y otros trámites frecuentes.',
    benefit: 'Menos rebotes entre oficinas y más claridad sobre requisitos, formatos y responsables.',
    when: 'Versión inicial validada con oficinas y estudiantes'
  },
  {
    title: 'Radar de prácticas y oportunidades',
    track: 'Empleabilidad',
    phase: 'Construcción',
    summary: 'Cartelera curada con prácticas, voluntariados, concursos, datathones, eventos y primeras oportunidades útiles para Estadística y Economía.',
    benefit: 'Acerca oportunidades reales sin depender solo de cadenas informales o contactos aislados.',
    when: 'Actualización continua durante el ciclo'
  },
  {
    title: 'Guía de tesis y cierre de carrera',
    track: 'Vida estudiantil',
    phase: 'En planificación',
    summary: 'Ruta clara con hitos, formatos y preguntas frecuentes para estudiantes que están en tesis, trabajo final o tramo de egreso.',
    benefit: 'Disminuye la incertidumbre y ordena una etapa donde hoy mucha información llega tarde.',
    when: 'Publicación por bloques y mejora continua'
  }
];
