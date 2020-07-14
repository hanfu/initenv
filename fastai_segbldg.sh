mkdir /content/fastai
mkdir /content/fastai/segbldg
PROJDIR=/content/fastai/segbldg
mkdir $PROJDIR/data
git clone https://github.com/GeospatialGeeks/Satellite-Image-Building-Segmentation $PROJDIR/nbs
unzip /content/drive/My\ Drive/Fused\ Dataset.zip -d $PROJDIR/data
