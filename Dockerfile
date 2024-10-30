FROM python:3.11.3  

LABEL maintainer="joaogood@outlook.com"

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get install -y \
    gcc \
    libffi-dev \
    libssl-dev \
    bash && \
    rm -rf /var/lib/apt/lists/*

RUN addgroup --system appusers && adduser --system --ingroup appusers joao

COPY api /api

WORKDIR /api

EXPOSE 8000

# Instala dependências e configura o ambiente
RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    chown -R joao:appusers /api && \
    chmod -R 755 /api 

USER joao

ENTRYPOINT ["sh", "-c", "python manage.py makemigrations --noinput && python manage.py migrate --noinput && python manage.py runserver 0.0.0.0:8000"]
