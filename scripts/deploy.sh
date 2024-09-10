scp -o ConnectTimeout=30 -P 8022  -r * root@hr-dev:/opt/test/
ssh -p 8022 root@hr-dev "cd /opt/test/ && sed -i 's/\r//g' *.sh && sh install.sh"
