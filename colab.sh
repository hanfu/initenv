echo 'subl'
curl -o /usr/local/bin/subl https://raw.githubusercontent.com/aurora/rmate/master/rmate
sudo chmod +x /usr/local/bin/subl
echo 'ranger'
apt install ranger
echo 'screen'
apt install screen
echo 'jupyterlab'
pip3 install jupyterlab
echo 'edit ~/.bashrc'
echo "PS1='\u:\W\$ '" >> ~/.bashrc
echo "export INITENV=/content/initenv" >> ~/.bashrc
echo "export gitc='git -C /content/initenv'" >> ~/.bashrc
echo "run jupyterlab at port 8888"
nohup jupyter lab --no-browser --ip 0.0.0.0 --port 8888 &
# use jupyter notebook list, jobs, bg, fg to control
