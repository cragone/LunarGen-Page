FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y \
        python3.8 \
        python3.8-distutils \
        python3.8-dev \
        python3-pip


RUN apt-get update \
    && apt-get install -y libpq-dev

WORKDIR /server

COPY requirements.txt requirements.txt

RUN python3.8 -m pip install --upgrade pip && \
    python3.8 -m pip install --no-cache-dir -r /server/requirements.txt && \
    rm -rf /root/.cache

COPY . .

EXPOSE 80

CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]