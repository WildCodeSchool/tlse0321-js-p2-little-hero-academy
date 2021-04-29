import './style/PenduImg.css';
import img7 from '../../img/7.png';
import img6 from '../../img/6.png';
import img5 from '../../img/5.png';
import img4 from '../../img/4.png';
import img3 from '../../img/3.png';
import img2 from '../../img/2.png';
import img1 from '../../img/1.png';

const PenduImg = ({ count }) => {
  const imgArray = [img7, img6, img5, img4, img3, img2, img1];
  const curentImg = imgArray[count - 1];
  return (
    <div className="sauvetage-img-container">
      <img src={curentImg} alt="hero tombe" />
    </div>
  );
};

export default PenduImg;
