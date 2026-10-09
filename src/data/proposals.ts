import type { Proposal } from '../types';

export const proposals: Proposal[] = [
  {
    id: 1,
    title: 'Mejorar los cursos de alto riesgo',
    category: 'Acompañamiento académico',
    problem: 'Cuando un curso empieza a concentrar dificultades, retiros o bajo rendimiento, el apoyo suele llegar tarde o depende de iniciativas aisladas.',
    solution: 'Impulsar apoyo temprano por curso: identificar dónde se concentra la dificultad, coordinar tutorías o reforzamientos y comunicar con tiempo los recursos disponibles.',
    implementation: [
      'Recoger alertas de delegados y estudiantes desde las primeras semanas.',
      'Priorizar cursos con mayores dificultades en Estadística y Economía.',
      'Coordinar con Escuela, docentes y tutoría acciones antes de evaluaciones clave.',
      'Publicar horarios, materiales y canales de apoyo en un solo punto.'
    ],
    scope: 'El Tercio puede llevar el problema al Consejo, solicitar acciones a las áreas responsables, articular con tutoría y hacer seguimiento de los acuerdos.',
    indicator: 'Cursos priorizados con plan de apoyo, actividades realizadas y reporte de seguimiento por ciclo.',
    impact: 'Alto',
    term: 'Desde el primer mes'
  },
  {
    id: 2,
    title: 'Matrícula con reglas claras y sin cambios sorpresivos',
    category: 'Matrícula',
    problem: 'La matrícula genera incertidumbre cuando no se conocen con claridad los criterios de asignación, las prioridades o las razones de determinados cambios.',
    solution: 'Promover criterios públicos, trazables y comunicados con anticipación para matrícula, cambios de sección y ajustes excepcionales, reduciendo decisiones discrecionales.',
    implementation: [
      'Solicitar que los criterios y etapas de matrícula se comuniquen antes de iniciar el proceso.',
      'Registrar incidencias de matrícula con fecha, curso y tipo de problema.',
      'Pedir que los cambios relevantes indiquen motivo y se comuniquen por un canal oficial.',
      'Presentar un balance de incidencias y mejoras al cierre de cada matrícula.'
    ],
    scope: 'El Tercio no ejecuta la matrícula, pero sí puede fiscalizar, solicitar información, elevar incidencias y proponer reglas más transparentes en Consejo.',
    indicator: 'Criterios publicados antes del proceso, registro de incidencias y reporte posterior de mejoras.',
    impact: 'Alto',
    term: 'Cada matrícula'
  },
  {
    id: 3,
    title: 'Acompañamiento en trámites, horas extracurriculares y egreso',
    category: 'Trámites estudiantiles',
    problem: 'Muchos estudiantes se enteran tarde de requisitos o pierden tiempo porque no existe una ruta clara para trámites como horas extracurriculares, constancias o gestiones de egreso.',
    solution: 'Organizar una guía clara y acompañamiento básico para que el estudiante sepa qué pedir, dónde, en qué formato y cómo hacer seguimiento.',
    implementation: [
      'Mapear los trámites que generan más dudas en la facultad.',
      'Validar la información con las oficinas responsables.',
      'Publicar rutas paso a paso y contactos útiles.',
      'Registrar cuellos de botella para llevar pedidos de mejora a la facultad.'
    ],
    scope: 'El Tercio puede orientar, documentar trabas y exigir mejor información; la aprobación del trámite sigue correspondiendo a la oficina competente.',
    indicator: 'Guías disponibles, dudas resueltas y problemas recurrentes documentados.',
    impact: 'Alto',
    term: 'Primer bimestre'
  },
  {
    id: 4,
    title: 'Seguimiento a prácticas preprofesionales y primeras oportunidades',
    category: 'Empleabilidad',
    problem: 'Las convocatorias de prácticas y oportunidades suelen llegar de forma dispersa o muy tarde, y no siempre existe acompañamiento para entender requisitos y plazos.',
    solution: 'Consolidar una cartelera útil de prácticas, voluntariados y primeras oportunidades para Ingeniería Estadística e Ingeniería Económica.',
    implementation: [
      'Centralizar convocatorias abiertas y relevantes para ambas carreras.',
      'Difundir oportunidades con tiempo y de manera ordenada.',
      'Promover charlas breves sobre CV, postulación y perfiles buscados.',
      'Llevar al Consejo propuestas para fortalecer el vínculo con instituciones y egresados.'
    ],
    scope: 'El Tercio puede difundir, articular y proponer mejoras institucionales para la empleabilidad estudiantil.',
    indicator: 'Número de oportunidades difundidas, charlas realizadas y seguimiento de participación.',
    impact: 'Medio',
    term: 'Actualización continua'
  },
  {
    id: 5,
    title: 'Orientación para estudiantes en tesis y trabajos finales',
    category: 'Trámites estudiantiles',
    problem: 'Quienes están en etapa de tesis o trabajo final muchas veces avanzan con incertidumbre sobre requisitos, cronogramas y responsables.',
    solution: 'Crear una ruta informativa de tesis y trabajos finales con hitos, documentos y preguntas frecuentes.',
    implementation: [
      'Levantar las dudas más frecuentes de estudiantes en tramo final.',
      'Ordenar información sobre procesos, pasos y responsables.',
      'Difundir una guía resumida y sesiones orientativas.',
      'Escalar demoras o vacíos de información cuando se identifiquen patrones repetidos.'
    ],
    scope: 'El Tercio puede ordenar información, orientar y pedir mejoras de proceso, sin sustituir la evaluación académica ni las funciones de la Escuela.',
    indicator: 'Guía publicada, sesiones informativas y problemas recurrentes reportados.',
    impact: 'Medio',
    term: 'Primer semestre'
  },
  {
    id: 6,
    title: 'Apoyo a estudiantes deportistas y reconocimiento de horas',
    category: 'Bienestar estudiantil',
    problem: 'Los estudiantes deportistas pueden enfrentar dificultades para compatibilizar representación, carga académica y reconocimiento de actividades u horas extracurriculares.',
    solution: 'Acompañar casos y promover criterios claros para que la información y los canales de reconocimiento sean accesibles y oportunos.',
    implementation: [
      'Identificar los principales puntos de fricción para deportistas de la facultad.',
      'Orientar sobre trámites, formatos y plazos disponibles.',
      'Elevar casos colectivos cuando existan vacíos o trabas repetidas.',
      'Promover una comunicación más clara sobre el reconocimiento de horas y actividades.'
    ],
    scope: 'El Tercio puede acompañar, orientar y representar pedidos colectivos vinculados al bienestar estudiantil.',
    indicator: 'Casos orientados, rutas difundidas y mejoras solicitadas formalmente.',
    impact: 'Medio',
    term: 'Desde el inicio'
  },
  {
    id: 7,
    title: 'Apoyo a la apertura y renovación de Piedritas',
    category: 'Vida estudiantil',
    problem: 'Piedritas es una iniciativa valiosa para la vida estudiantil, pero su apertura, renovación o uso sostenido requiere coordinación con distintas instancias.',
    solution: 'Respaldar la iniciativa del Centro para impulsar su apertura y renovación, coordinando con la facultad y buscando también contacto con TEUNI cuando corresponda.',
    implementation: [
      'Coordinar con el Centro de Estudiantes la necesidad concreta y su sustento.',
      'Llevar el pedido a la facultad desde la representación estudiantil.',
      'Acompañar gestiones y seguimiento con las instancias pertinentes.',
      'Informar avances, trabas y siguientes pasos con transparencia.'
    ],
    scope: 'Piedritas no depende del Tercio, pero el Tercio sí puede apoyar políticamente la gestión, presionar institucionalmente y acompañar el seguimiento.',
    indicator: 'Gestiones realizadas, reuniones sostenidas y estado público del pedido.',
    impact: 'Medio',
    term: 'Seguimiento permanente'
  },
  {
    id: 8,
    title: 'Seguimiento al cumplimiento de premios de la Feria de Proyectos',
    category: 'Gestión académica',
    problem: 'Cuando los reconocimientos o premios anunciados no se entregan oportunamente, se debilita la confianza en las actividades académicas de la facultad.',
    solution: 'Dar seguimiento institucional a la entrega de premios y reconocimientos comprometidos en la Feria de Proyectos.',
    implementation: [
      'Recoger información clara sobre compromisos pendientes.',
      'Solicitar cronograma y estado de cumplimiento a las instancias responsables.',
      'Mantener informados a los estudiantes y equipos afectados.',
      'Proponer que futuras convocatorias incluyan reglas y plazos más claros.'
    ],
    scope: 'El Tercio puede fiscalizar, insistir y transparentar el seguimiento, aunque la ejecución presupuestal corresponda a la facultad.',
    indicator: 'Estado público del seguimiento y compromisos cerrados o regularizados.',
    impact: 'Alto',
    term: 'Hasta cierre del caso'
  },
  {
    id: 9,
    title: 'Quejas, sugerencias y propuestas con seguimiento real',
    category: 'Transparencia',
    problem: 'Una queja o sugerencia puede perderse entre chats y mensajes sin que el estudiante sepa qué ocurrió después.',
    solution: 'Crear un registro único de asuntos recibidos con código, categoría, fecha, estado y siguiente paso, protegiendo la identidad cuando corresponda.',
    implementation: [
      'Habilitar un formulario único con opción anónima.',
      'Clasificar cada caso como recibido, derivado, en seguimiento o cerrado.',
      'Escalar los asuntos colectivos a las autoridades o comisiones correspondientes.',
      'Publicar un resumen periódico sin datos personales.'
    ],
    scope: 'El Tercio puede recibir, derivar, insistir y transparentar el seguimiento; no sustituye a las oficinas responsables de resolver cada caso.',
    indicator: 'Porcentaje de asuntos con estado actualizado y tiempo de seguimiento visible.',
    impact: 'Alto',
    term: 'Implementación inmediata'
  },
  {
    id: 10,
    title: 'Consejo de Facultad en lenguaje claro',
    category: 'Transparencia',
    problem: 'Las decisiones del Consejo pueden sentirse lejanas porque no siempre se conoce qué se discutió, qué se acordó o cuál fue la posición estudiantil.',
    solution: 'Publicar después de cada sesión un resumen breve: temas tratados, acuerdos, pendientes y posición del Tercio cuando corresponda.',
    implementation: [
      'Preparar una agenda previa con los temas públicos relevantes.',
      'Publicar un resumen posterior sin divulgar información reservada.',
      'Indicar qué pedidos estudiantiles quedaron pendientes y cuál es el siguiente paso.',
      'Mantener un histórico consultable por fecha y tema.'
    ],
    scope: 'Informar sobre la representación y rendir cuentas sí depende directamente del Tercio, respetando los límites de confidencialidad de cada sesión.',
    indicator: 'Resumen publicado después de cada sesión y archivo histórico disponible.',
    impact: 'Alto',
    term: 'Después de cada Consejo'
  },
  {
    id: 11,
    title: 'Mesa mensual por carrera',
    category: 'Representación',
    problem: 'Ingeniería Económica e Ingeniería Estadística pueden tener problemas distintos que se diluyen cuando todo se trata como una sola agenda.',
    solution: 'Realizar una mesa mensual breve por carrera con delegados y estudiantes para priorizar problemas y pedidos concretos.',
    implementation: [
      'Recoger temas antes de cada reunión.',
      'Priorizar pocos asuntos con evidencia y responsable definido.',
      'Derivar cada acuerdo a la instancia correspondiente.',
      'Publicar compromisos y fecha de siguiente revisión.'
    ],
    scope: 'Organizar espacios de escucha, consolidar demandas y representar acuerdos colectivos forma parte directa del trabajo del Tercio.',
    indicator: 'Reunión mensual, acuerdos publicados y porcentaje de compromisos con seguimiento.',
    impact: 'Medio',
    term: 'Mensual'
  },
  {
    id: 12,
    title: 'Pulso académico a mitad de ciclo',
    category: 'Acompañamiento académico',
    problem: 'Muchos problemas de ritmo, coordinación, evaluaciones o materiales recién se conversan cuando el curso ya terminó.',
    solution: 'Realizar un pulso breve y anónimo a mitad de ciclo para detectar problemas concretos y llevarlos a la instancia correspondiente mientras todavía pueden corregirse.',
    implementation: [
      'Aplicar un formulario corto centrado en hechos y no en ataques personales.',
      'Agrupar hallazgos por curso y tipo de incidencia.',
      'Escalar únicamente patrones consistentes y verificables.',
      'Comunicar a los estudiantes qué acciones se solicitaron y qué respuesta hubo.'
    ],
    scope: 'El Tercio puede canalizar problemas académicos y representar casos colectivos sin reemplazar los procedimientos formales de evaluación docente.',
    indicator: 'Incidencias detectadas a mitad de ciclo con respuesta o seguimiento documentado.',
    impact: 'Alto',
    term: 'Mitad de cada ciclo'
  },
  {
    id: 13,
    title: 'Calendario académico sin sorpresas',
    category: 'Gestión académica',
    problem: 'Los cambios tardíos de evaluaciones, aulas, recuperaciones o actividades académicas dificultan organizar estudio, trabajo y otras responsabilidades.',
    solution: 'Promover un calendario de hitos académicos más visible y un criterio de comunicación anticipada para cambios que afecten a los estudiantes.',
    implementation: [
      'Consolidar fechas académicas relevantes por periodo.',
      'Solicitar que reprogramaciones y cambios importantes se comuniquen por canales formales.',
      'Registrar cambios recurrentes que generen perjuicio para llevarlos a coordinación.',
      'Publicar alertas verificadas, evitando cadenas y mensajes contradictorios.'
    ],
    scope: 'El Tercio puede exigir mejor comunicación, documentar incidencias y pedir correcciones cuando los cambios afecten de manera recurrente a los estudiantes.',
    indicator: 'Calendario consolidado y reducción de incidencias por cambios no comunicados.',
    impact: 'Medio',
    term: 'Permanente'
  },
  {
    id: 14,
    title: 'Convocatorias abiertas y criterios públicos',
    category: 'Oportunidades',
    problem: 'Cuando una oportunidad tiene pocos cupos y la convocatoria circula de forma limitada, puede percibirse como poco transparente o inaccesible.',
    solution: 'Promover que oportunidades estudiantiles vinculadas a la facultad se difundan con criterios, plazos y forma de selección claramente establecidos.',
    implementation: [
      'Centralizar convocatorias académicas y de representación que sean públicas.',
      'Solicitar criterios de selección cuando existan cupos limitados.',
      'Difundir plazos con tiempo suficiente para postular.',
      'Pedir que las designaciones excepcionales tengan una justificación institucional.'
    ],
    scope: 'El Tercio puede exigir transparencia en los espacios donde participa o representa a estudiantes y proponer buenas prácticas para otras convocatorias de facultad.',
    indicator: 'Convocatorias difundidas con criterios, plazos y resultados o designación explicada.',
    impact: 'Medio',
    term: 'Permanente'
  }
];
