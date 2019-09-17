From node:12

RUN groupadd -g 1001 -o currentuser
RUN useradd -m -u 1001 -g currentuser -o -s /bin/bash currentuser

WORKDIR /home/currentuser/app

COPY package*.json ./

RUN chown -R 1001:1001 /home/currentuser/app

USER currentuser

# RUN npm install

COPY . .

EXPOSE 3001
