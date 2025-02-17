# Prueba Técnica

## Requisitos Previos

- Node.js instalado
- Expo CLI instalado
- Reactotron (para desarrollo)

## Configuración Inicial

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Iniciar la aplicación:

   ```bash
   npx expo start
   ```

## Estructura de Carpetas

```
├── app/                 # Directorio principal de la aplicación
│   ├── (tabs)/          # Pantallas de la aplicación
│   ├── details/         # Pantalla de detalles
│   
│ 
├── assets/              # Imágenes, fuentes y otros recursos
├── components/          # Componentes reutilizables
├── handles/             # Manejadores de datos
├── styles/              # Estilos
└── app.json             # Configuración de Expo
```

## Herramientas de Desarrollo

### Reactotron

Para una mejor experiencia de desarrollo, este proyecto utiliza Reactotron para debugging.

1. Descarga Reactotron desde [https://github.com/infinitered/reactotron/releases](https://github.com/infinitered/reactotron/releases)
2. Instala la aplicación en tu computadora
3. Abre Reactotron antes de iniciar la aplicación

## Opciones de Desarrollo

Puedes ejecutar la aplicación en:
- Emulador de Android
- Simulador de iOS
- Dispositivo físico usando Expo Go
- Navegador web (algunas características pueden no estar disponibles)

## Comandos Útiles

```bash
# Iniciar la aplicación
npx expo start

# Iniciar en modo web
npx expo start --web

# Iniciar en dispositivo Android
npx expo start --android

# Iniciar en dispositivo iOS
npx expo start --ios
```

## Soporte

Para cualquier duda o problema, por favor crear un issue en el repositorio.
