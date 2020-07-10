# docker (not work in colab)
# sudo apt update
# sudo apt install apt-transport-https ca-certificates curl software-properties-common
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
# sudo apt update
# apt-cache policy docker-ce
# sudo apt install docker-ce

# nvidia docker (depend on docker)
# distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
# curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
# curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
# sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
# sudo systemctl restart docker

# nvidia drive

PROJ_DIR=/content/satbldg
git clone --recursive https://github.com/motokimura/spacenet_building_detection.git $PROJ_DIR
cd satbldg/data
aws s3 cp s3://spacenet-dataset/AOIs/AOI_1_Rio/processedData/processedBuildingLabels.tar.gz .
aws s3 cp s3://spacenet-dataset/AOIs/AOI_1_Rio/srcData/mosaic_3band/ 3-Band --recursive
tar -xvf processedBuildingLabels.tar.gz
cd processedBuildingLabels
tar -xvf 3band.tar.gz
cd vectordata 
tar -xvf geojson.tar.gz

apt-get update && apt-get install -y --no-install-recommends         build-essential         cmake         git         curl         vim         wget         make         g++         unzip         ca-certificates         libsm6         libxext6         libxrender-dev &&    rm -rf /var/lib/apt/lists/*
curl -L http://download.osgeo.org/libspatialindex/spatialindex-src-1.8.5.tar.gz | tar xz &&     cd spatialindex-src-1.8.5 &&     ./configure && make && make install && ldconfig &&     cd .. && rm -r spatialindex-src-1.8.5
pip3 install numpy         pyyaml         scipy         ipython         mkl         matplotlib         scikit-learn         scikit-image         Pillow         jupyter         gdal
pip3 install google-auth-oauthlib==0.4.1 tensorflow tensorboard tensorboardX     geopandas==0.3.0 Rtree==0.8.3 centerline==0.3 osmnx==0.6     opencv-python tqdm
cd $PROJ_DIR/src/features/
python3 build_labels.py ../../data/processedBuildingLabels/3band ../../data/processedBuildingLabels/vectordata/geojson ../../data/buildingMaskImages

# pip3 install cupy==4.0.0b3 chainer==4.0.0b3
# git clone https://github.com/chainer/chainer.git /opt/chainer
# jupyter notebook --generate-config &&     ipython profile create
# echo "c.NotebookApp.ip = '0.0.0.0'" >> /root/.jupyter/jupyter_notebook_config.py &&     echo "c.NotebookApp.open_browser = False" >> /root/.jupyter/jupyter_notebook_config.py &&     echo "c.InteractiveShellApp.matplotlib = 'inline'" >> /root/.ipython/profile_default/ipython_config.py &&     HASH=$(python3 -c "from IPython.lib import passwd; print(passwd('hanfu4930j'))") &&     echo "c.NotebookApp.password = u'${HASH}'" >> /root/.jupyter/jupyter_notebook_config.py &&     echo "c.NotebookApp.allow_root = True" >> /root/.jupyter/jupyter_notebook_config.py
# echo "backend : Agg" >> /root/.config/matplotlib/matplotlibrc
# # cd $PROJ_DIR/src/models/
# # python3 train_model.py ../../data/dataSplit ../../data/processedBuildingLabels/3band ../../data/buildingMaskImages
# # run tensorboard by py3
# # python3 /usr/local/lib/python3.6/dist-packages/tensorboard/main.py --logdir satbldg/models/
