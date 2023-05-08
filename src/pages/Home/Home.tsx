import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonRouterLink } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {

// creamos evento onClick
const history = useHistory();

const handleClick = () => {
  history.push('./game');
}
  return (
    <IonPage class='content'>
      <IonHeader>
        <IonToolbar color="header">
          <IonTitle>
            Piedra papel tijera
            </IonTitle>
        </IonToolbar>
      </IonHeader>
    
    <IonContent className='home_body'>

    <IonCard className='card_body'>
      <IonCardHeader color="mycolor">
        <IonCardTitle>
        <h1>Rock Paper Scissors</h1>
        </IonCardTitle>
        <IonCardSubtitle>
           <p className='rules' id='rules'>
            <h3>El primero en llegar a 10 puntos gana</h3>
           </p>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonRouterLink onClick={handleClick}>
          <div>
            <IonButton class='row' className="start" fill="outline">Start</IonButton>
          </div>
        </IonRouterLink>
       
        
      </IonCardContent>
    </IonCard>
     <div className='card_img'>
            
          <IonImg src='img/fondo_1.png' className='fondo'></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
