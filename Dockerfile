FROM microsoft/windowsservercore
LABEL Description="IIS" Vendor="Microsoft" Version="10"
RUN powershell -Command Add-WindowsFeature Web-Server
CMD [ "ping", "localhost", "-t" ]
# CMD ["C:/Program Files (x86)/IIS/Microsoft Web Deploy V3/msdeploy.exe"]