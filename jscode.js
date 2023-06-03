import { decodeImage, resizeBilinear, expandDims, scalar } from '@tensorflow/tfjs-react-native';

const predict = async (image) => {
  const imageTensor = await decodeImage(image, 3);
  const imageResized = resizeBilinear(imageTensor, [28, 28]);
  const imageFloat = imageResized.toFloat().div(scalar(255));
  const imageExpanded = expandDims(imageFloat);

  const prediction = await model.predict(imageExpanded);
  const predictedDigit = prediction.indexOf(Math.max(...predictions));
  return predictedDigit;
};
useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  const loadModel = async () => {
    const model = await tf.loadLayersModel('path/to/model.json');
    setModel(model);
  };
