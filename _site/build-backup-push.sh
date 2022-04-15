#/! bin/bash

git_push(){
	git add .
	git commit -m "$1"
	git push -u origin master
	}



npm run build

echo "make complete backup-yes or no?"
read answer

if [[ $answer == "yes" ]]
then
	cd ../
	7z a -t7z portfolio/complete_backup/portfolio.7z portfolio/ -xr!complete_backup
	cd portfolio/
fi

echo "Message to commit the changes made?"
read message

git_push "$message"
cd public
git_push "$message"

