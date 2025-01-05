# Utiliser une image Node.js officielle
FROM node:14 as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers build dans le dossier Nginx par défaut
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
