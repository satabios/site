#! /bin/bash

echo "make complete backup-yes or no?"
read answer

if [[ $answer == "yes" ]]
then
	cd ../
	7z a -t7z portfolio/complete_backup/portfolio.7z portfolio/ -xr!complete_backup
	cd portfolio/
fi