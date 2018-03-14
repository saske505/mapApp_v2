#!/bin/sh
#
# Init file for starting and stopping MongoDB Database.
#
# chkconfig: 345 80 20
# description: MongoDB Database startup script

# Source function library.
#. /etc/rc.d/init.d/functions

MONGO_HOME=/Development/Projects/NoSQL/MongoDB
LOG_FILE=$MONGO_HOME/log/mongo.log

case "$1" in
start)
	echo "Starting MongoDB Database "
	echo "----------------------------------------------------" >> $LOG_FILE
	date +"! %T %a %D : Starting MongoDB Database as part of system up." >> $LOG_FILE
	echo "----------------------------------------------------" >> $LOG_FILE
	$MONGO_HOME/mongodb/bin/mongod --dbpath $MONGO_HOME/data --rest --smallfiles --directoryperdb --fork --logpath $MONGO_HOME/log/server.log
	echo "----------------------------------------------------" >> $LOG_FILE
	date +"! %T %a %D : Finished." >> $LOG_FILE
	echo "----------------------------------------------------" >> $LOG_FILE
	;;
stop)
	echo "Shutting Down MongoDB Database "
	echo "----------------------------------------------------" >> $LOG_FILE
	date +"! %T %a %D : Shutting Down MongoDB Database as part of system down." >> $LOG_FILE
	echo "----------------------------------------------------" >> $LOG_FILE
	$MONGO_HOME/mongodb/bin//mongo --nodb --eval "connect('localhost:27017/admin').shutdownServer()"
	echo "----------------------------------------------------" >> $LOG_FILE
	date +"! %T %a %D : Finished." >> $LOG_FILE
	echo "----------------------------------------------------" >> $LOG_FILE
	;;
restart)
	echo "Restarting MongoDB Database "
	echo "----------------------------------------------------" >> $LOG_FILE
	date +"! %T %a %D : Restarting MongoDB Database as part of system up." >> $LOG_FILE
	echo "----------------------------------------------------" >> $LOG_FILE
	$MONGO_HOME/mongodb/bin/mongo --nodb --eval "connect('localhost:27017/admin').shutdownServer()"
	$MONGO_HOME/mongodb/bin/mongod --dbpath $MONGO_HOME/data --rest --smallfiles --directoryperdb --fork --logpath $MONGO_HOME/log/server.log
	echo "----------------------------------------------------" >> $LOG_FILE
	date +"! %T %a %D : Finished." >> $LOG_FILE
	echo "----------------------------------------------------" >> $LOG_FILE
	;;
*)
        echo "Usage: $0 {start|stop|restart}"
esac