

## Proyecto: VidextHub

### Descripción

VidextHub es una aplicación desarrollada con Next.js, tRPC y Tailwind CSS. El objetivo principal de este proyecto es crear un listado de videos obtenidos desde una base de datos, con APIs desarrolladas usando tRPC, y permitir la subida de nuevos videos a través de Amazon S3. La aplicación incorpora componentes de la biblioteca shadcn para ofrecer una experiencia de usuario moderna y elegante, y permite la gestión de archivos mediante subidas a Amazon S3.

### Tecnologías Utilizadas

#### Frontend

- Next.js: Framework de React para la creación de aplicaciones web modernas y eficientes.

- tRPC: Herramienta de tipado para crear APIs con TypeScript de manera segura y flexible.

- Tailwind CSS: Framework de utilidades CSS para estilizar componentes de manera rápida y coherente.

- shadcn: Componentes preconstruidos que simplifican el desarrollo de interfaces de usuario consistentes y accesibles.

#### Backend

- Drizzle ORM: ORM ligero para interactuar con la base de datos de manera eficiente y tipada.

- Next.js API Routes: Manejador para endpoints del backend.

- tRPC: Integración de tipado entre frontend y backend.

#### Gestión de Archivos

- AWS S3: Servicio de almacenamiento en la nube para la subida y gestión de archivos.

#### Instalación y Configuración

Requisitos Previos

- Node.js v16 o superior

- npm o yarn

- PostgreSQL

- Cuenta y credenciales de AWS para configurar S3

#### Pasos de Instalación

Clona este repositorio:

git clone https://github.com/joaquincaggiano/vidext-test.git

Instala las dependencias:

npm install
o
yarn install

### Crea la base de datos

ejecuta npx drizzle-kit push o npx drizzle-kit generate y npx drizzle-kit migrate

#### Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto con las siguientes variables:

DATABASE_URL=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_S3_BUCKET_NAME=
NEXT_PUBLIC_API_URL=http://localhost:3000

#### Inicia el servidor de desarrollo:

npm run dev
o
yarn dev

Accede a la aplicación en http://localhost:3000.

#### Uso

Al abrir la aplicación, verá un listado de videos. Puede hacer clic en un video para abrir el reproductor, donde tendrá la opción de darle like. Al terminar de reproducir el video, se sumará una vista al contador de ese video.

Al presionar el botón "Ver más", accederá al detalle del video, donde encontrará información adicional como la descripción, fecha de publicación y nombre.

Existe otra pantalla para subir un video. En esta, deberá introducir un nombre, una descripción y seleccionar el archivo de video a subir.

#### Estructura del Proyecto

/src
├── app
│   ├── api/            # Todas las rutas de tRPC
│   ├── upload/
│   │   └── page.tsx    # Pantalla para crear un video
│   └── video/
│       └── page.tsx    # Pantalla para el detalle del video
├── components/         # Componentes reutilizables de React
├── db/                 # Todo lo relacionado a Drizzle ORM
├── server/             # Configuración del backend de tRPC
├── client/             # Configuración del cliente de tRPC

#### Características Principales

Listado de videos: Muestra un catálogo de videos obtenidos desde la base de datos.

Reproducción y estadísticas: Permite reproducir videos, dar like y aumentar el contador de vistas automáticamente.

Detalle del video: Presenta información detallada sobre cada video, incluyendo descripción, fecha y nombre.

Subida de videos: Interfaz intuitiva para subir nuevos videos, introduciendo nombre, descripción y archivo correspondiente.

#### Autor

Desarrollado por Joaquín Serra Caggiano.


