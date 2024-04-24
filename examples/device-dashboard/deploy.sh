#!/bin/bash
port=22
host=192.168.8.20
path=/home/zlg/ctn
target=ctn2
chmod a+x *.sh
chmod a+x $target
chmod a+x *.ko
make
echo "Stop $target"
ssh -p $port zlg@$host "mkdir -p $path; cd $path; echo zlg | sudo -S ./stop_$target.sh; sudo ./start_can.sh rm ./$target;"
echo "Copy $target"
rsync -av --update --progress -e "ssh -p $port" $target *.sh *.ko zlg@$host:$path
echo "Start $target"
ssh -p $port zlg@$host "cd $path; echo zlg | sudo -S ./prepare.sh; sudo ./start_$target.sh; sudo tail -f /var/log/syslog;"
