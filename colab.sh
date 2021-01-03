echo 'subl'
curl -o /usr/local/bin/subl https://raw.githubusercontent.com/aurora/rmate/master/rmate
sudo chmod +x /usr/local/bin/subl
echo 'nano'
apt install nano
echo 'ranger'
apt install ranger
echo 'screen'
apt install screen
echo 'jupyterlab'
pip3 install jupyterlab
echo ''

echo 'edit ~/.bashrc'
echo "PS1='\u:\W\$ '" >> ~/.bashrc
echo "export INITENV=/content/initenv" >> ~/.bashrc
echo "export gitc='git -C /content/initenv'" >> ~/.bashrc
echo "export bucket='s3://colab-freetier210722'" >> ~/.bashrc
echo "run jupyterlab at port 8888"
echo "git clone https://github.com/deep-learning-with-pytorch/dlwpt-code.git /content/dlwpt"
nohup jupyter lab --allow-root --no-browser --ip 0.0.0.0 --port 8888 &
# use jupyter notebook list, jobs, bg, fg to control
