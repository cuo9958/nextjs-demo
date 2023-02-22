FROM node:16.16.0
LABEL MAINTAINER="guofangchao"

# 指定工作目录
WORKDIR /app

#RUN apt update

# 容器默认时区为UTC，如需使用上海时间请启用以下时区设置命令
ENV TZ=Asia/Shanghai \
    DEBIAN_FRONTEND=noninteractive
RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

# npm 源，选用国内镜像源以提高下载速度
#RUN npm config set registry https://mirrors.cloud.tencent.com/npm/

# 拷贝包管理文件
COPY . /app

RUN npm install --only=production


#CMD 运行以下命令
CMD ["npm", "run","server"]