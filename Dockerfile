FROM nikolaik/python-nodejs:python3.8-nodejs14-alpine

LABEL MAINTAINER "Raman Pandey <raman.pndy@gmail.com>"

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# install mysql dependencies
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add --no-cache mariadb-dev

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

#Install frontend dependencies
RUN npm install

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

#start frontend application
CMD npm run build &

#start backend application
CMD python manage.py migrate --noinput && python manage.py initadmin && python manage.py runserver 0.0.0.0:8086

#expose port
EXPOSE 8086