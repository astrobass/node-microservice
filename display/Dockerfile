FROM nginx

ADD . /usr/share/nginx/html

RUN cd /usr/share/nginx/html; \
    bower install --production

EXPOSE 80

CMD ["nginx"]
