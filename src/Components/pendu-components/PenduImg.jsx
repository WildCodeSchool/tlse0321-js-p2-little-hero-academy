import './style/PenduImg.css';
import img5 from '../../img/Pendu5.png';
import img4 from '../../img/Pendu4.png';
import img3 from '../../img/Pendu3.png';
import img2 from '../../img/Pendu2.png';
import img1 from '../../img/Pendu1.png';

const PenduImg = ({ count }) => {
  const imgArray = [img5, img4, img3, img3, img2, img1, img1];
  const curentImg = imgArray[count - 1];
  console.log(count);

  let oneMore = false;
  console.log(oneMore);
  if (count === 1) {
    oneMore = true;
  }
  return (
    <div className="sauvetage-img-container">
      <img src={curentImg} alt="hero tombe" />
      {oneMore && <h1>Vite sauve moi !!!</h1>}
    </div>
  );
};

export default PenduImg;
