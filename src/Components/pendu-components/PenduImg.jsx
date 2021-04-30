import './style/PenduImg.css';
import img5 from '../../img/Pendu5.png';
import img4 from '../../img/Pendu4.png';
import img3 from '../../img/Pendu3.png';
import img2 from '../../img/Pendu2.png';
import img1 from '../../img/Pendu1.png';

const PenduImg = ({ count }) => {
  const imgArray = [img5, img4, img3, img3, img2, img1, img1];
  const curentImg = imgArray[count - 1];
  return (
    <div className="sauvetage-img-container">
      <img src={curentImg} alt="hero tombe" />
    </div>
  );
};

export default PenduImg;
