#!/bin/bash

### no warantee - works on ubuntu 18.04 LTS
### @jaydestro

# install npm

### repositories 
add-apt-repository universe
apt-get update -y
apt-get install nodejs npm build-essential git -y 



### installation


echo "Downloading Repo"

  mkdir /react-clock-basic 
  git clone https://github.com/jaydestro/react-clock-basic.git /react-clock-basic 
  cd /react-clock-basic 
  npm install 



# Publish and start application
sudo apt-get install -y supervisor 
touch /etc/supervisor/conf.d/react-clock-basic.conf

cat >> /etc/supervisor/conf.d/react-clock-basic.conf << 'EOF'
[program:react-clock-basic]
command=npm run serve
directory=/react-clock-basic/
autostart=true
autorestart=true
stderr_logfile=/var/log/reach-clock-basic.err.log
stdout_logfile=/var/log/reach-clock-basic.out.log
environment=
stopsignal=INT
EOF

sudo service supervisor stop
sudo service supervisor start


#sysctl 

echo 1048576 > /proc/sys/fs/inotify/max_user_watches

apt-get install nginx -y
systemctl enable nginx
systemctl start nginx
rm /etc/nginx/sites-available/default
touch /etc/nginx/sites-available/default 

cat >> /etc/nginx/sites-available/default << 'EOF'
    server {
    listen 80;
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

    nginx -t
    nginx -s reload
