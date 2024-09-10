scp -o ConnectTimeout=30 -P 8022  -r * root@192.168.3.200:/opt/test/
ssh -p 8022 root@192.168.3.200 "cd /opt/test/ && sed -i 's/\r//g' *.sh && sh install.sh"
