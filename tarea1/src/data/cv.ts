export type Experiencia = {
  puesto: string
  empresa: string
  ubicacion: string
  periodo: string
  logros: string[]
}

export type Proyecto = {
  nombre: string
  contexto: string
  descripcion: string
  stack: string[]
}

export type Estudio = {
  institucion: string
  titulo: string
  periodo: string
  detalle: string
}

export const perfil = {
  nombre: 'Yair Emmanuel Arias Madera',
  rol: 'Desarrollador de software full stack',
  ubicacion: 'Guadalajara, Jalisco',
  resumen:
    'Llevo cerca de cinco años construyendo producto en web y móvil. Me muevo cómodo en el frontend con React, pero también he cargado backend con NestJS y coordinado equipos cuando hizo falta.',
  email: 'yairarias180700@gmail.com',
  telefono: '(+52) 33-44-777-909',
  linkedin: 'https://www.linkedin.com/in/emmanuel-arias-b54735228',
}

export const sobreMi = [
  'Empecé en desarrollo desde la prepa técnica y desde entonces no me he salido. La mayor parte de mi experiencia ha sido en equipos chicos, donde te toca tomar decisiones de arquitectura, hablar con producto y sacar el código el mismo día.',
  'En YAPSI acabé entrando como Project Manager cuando dos proyectos venían retrasados: reorganicé la planeación con Scrum, estimé de nuevo los tiempos y ambos salieron en fecha. Esa parte de ordenar el caos me gusta tanto como programar.',
  'Hoy estoy en Neostella en un módulo de reportes para una plataforma legal, y en paralelo sigo estudiando en el ITESO.',
]

export const experiencia: Experiencia[] = [
  {
    puesto: 'Frontend Developer',
    empresa: 'Neostella',
    ubicacion: 'Guadalajara, Jalisco · Híbrido',
    periodo: '2024 – actualidad',
    logros: [
      'Construcción desde cero de un módulo de reportes para una plataforma de despachos legales: exploración de reportes con consultas asistidas por IA, generación, plantillas, compartición entre colaboradores y permisos por usuario.',
      'Frontend con React, TanStack Query y Material UI, apoyado en vistas declarativas para que el módulo siguiera siendo mantenible conforme creció.',
      'El equipo entregó los objetivos del módulo en menos de seis meses trabajando de cerca con backend y producto.',
    ],
  },
  {
    puesto: 'Full Stack Software Engineer',
    empresa: 'YAPSI',
    ubicacion: 'Guadalajara, Jalisco · Remoto',
    periodo: '4 años',
    logros: [
      'Entré como Project Manager en un contexto de mala organización y tiempos vencidos. Llevé dos equipos con Scrum, reestructuré la planeación y asigné recursos; ambos proyectos salieron en tiempo.',
      'Por falta de personal di soporte a varios proyectos web y móvil hechos con React, Flutter y NestJS, entrando donde hiciera falta sin frenar el avance de los equipos.',
      'Desarrollé un módulo de transacciones masivas para RR. HH. de una farmacéutica (dispersión de nómina y finiquitos vía STP). Subió la productividad 70% y bajó el proceso manual 90%. React y NestJS.',
      'Implementé una herramienta de Enterprise Service Management para dar trazabilidad a las solicitudes de clientes; soporte pudo procesar tickets y producto y QA medir errores.',
      'Rediseño completo de UI de un sistema de nómina con Angular y Figma para cumplir con los lineamientos de marca del cliente.',
    ],
  },
  {
    puesto: 'Full Stack Software Engineer',
    empresa: 'Eversoft',
    ubicacion: 'Guadalajara, Jalisco · Remoto',
    periodo: '4 meses',
    logros: [
      'Migración de un despacho contable que llevaba a sus clientes en Excel hacia una aplicación web con Angular, NestJS y MongoDB.',
      'Diseño de la arquitectura y de los módulos de frontend para el ciclo de vida del cliente.',
      'Módulo de importación masiva para dar de alta clientes en bloque, lo que acortó el onboarding y permitió limpiar registros viejos.',
    ],
  },
]

export const proyectos: Proyecto[] = [
  {
    nombre: 'Módulo de reportes para plataforma legal',
    contexto: 'Neostella',
    descripcion:
      'Exploración y generación de reportes con consultas asistidas por IA, plantillas reutilizables, compartición entre colaboradores y permisos por usuario.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'Material UI'],
  },
  {
    nombre: 'Dispersión masiva de nómina vía STP',
    contexto: 'YAPSI',
    descripcion:
      'Módulo de transacciones en bloque para RR. HH. de una farmacéutica. Automatizó pagos y finiquitos que antes se hacían uno por uno: 70% más productividad y 90% menos proceso manual.',
    stack: ['React', 'NestJS', 'STP'],
  },
  {
    nombre: 'Herramienta ESM de tickets',
    contexto: 'YAPSI',
    descripcion:
      'Sistema de Enterprise Service Management para registrar y seguir solicitudes de clientes con trazabilidad completa, con métricas para producto y QA.',
    stack: ['React', 'NestJS'],
  },
  {
    nombre: 'Del Excel a la web para un despacho contable',
    contexto: 'Eversoft',
    descripcion:
      'Aplicación para el ciclo de vida del cliente, incluyendo un importador masivo que migró los registros históricos y limpió los que ya no servían.',
    stack: ['Angular', 'NestJS', 'MongoDB'],
  },
]

export const tecnologias = [
  { grupo: 'Frontend', items: ['React', 'TypeScript', 'Angular', 'Flutter', 'Material UI', 'Tailwind CSS'] },
  { grupo: 'Backend', items: ['NestJS', 'Node.js', 'MongoDB', 'APIs REST'] },
  { grupo: 'Datos y estado', items: ['TanStack Query', 'Manejo de estado en React'] },
  { grupo: 'Proceso', items: ['Scrum', 'Estimación y planeación', 'Git', 'Figma'] },
]

export const educacion: Estudio[] = [
  {
    institucion: 'ITESO',
    titulo: 'Estudios universitarios en curso',
    periodo: '2023 – actualidad',
    detalle: 'Estudiando mientras trabajo tiempo completo como desarrollador.',
  },
  {
    institucion: 'CETI',
    titulo: 'Tecnólogo en Desarrollo de Software',
    periodo: '2016 – 2019',
    detalle: 'Formación técnica en preparatoria, donde escribí mis primeras líneas en serio.',
  },
]

export const hobbies = [
  {
    nombre: 'Gimnasio',
    descripcion: 'Entreno casi diario. Es lo que me despeja la cabeza entre sprints.',
  },
  {
    nombre: 'Golf',
    descripcion: 'Juego cuando puedo. Me gusta que castiga la prisa y premia la constancia.',
  },
]
