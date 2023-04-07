import { IonContent, IonHeader, IonPage, IonTitle } from '@ionic/react';


const Game: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
       
          <IonTitle>
            Rock Paper Scissors play
            </IonTitle>
        
      </IonHeader>
      <IonContent fullscreen>
        <p className='rules' id='rules'>
          El primero en llegar a 10 puntos gana
        </p>
       <div className="score">
          <p className='name_player'>You</p>
          <p className='name_bot'>Bot</p>
          <p className='points'>
            <span className='points_player'>0</span>
            <span>-</span>
            <span className='points_bot'>0</span>
          </p>
       </div>
       <div className="choose" id='choose'>
        <h2>Choose an item</h2>
        <div className="items">
          <button className='item' id='rock'>🪨</button>
          <button className='item' id='paper'>📝</button>
          <button className='item' id='scissors'>✂️</button>
        </div>
       </div>
       <div className='message' id='message'>
        <p>
          Your choise: <span className='choise' id='choise_player'>📝</span><br />
          Bot choise: <span className='choise' id='choise_bot'>🪨</span>
        </p>
        <p id='win'> You win 🏆</p>
       </div>
       <button className='reboot'>Try again</button>
      </IonContent>
    </IonPage>
  );
};

export default Game;
