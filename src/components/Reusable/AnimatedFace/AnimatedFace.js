import './AnimatedFace.css';

const AnimatedFace = ({ success }) => (
  <div className="center column face-animation-container">
    <div className={`animated-face-container center ${success ? 'jump-animation' : 'rotate-animation'}`}>
      <div className={!success ? 'face-rotate-animation' : undefined}>
        <h3>{success ? '◕‿◕' : ' ಠ_ಠ'}</h3>
      </div>
    </div>
    <div className={`shadow ${success ? 'shadow-jump-animation' : 'rotate-animation'}`}></div>
  </div>
)

export default AnimatedFace;