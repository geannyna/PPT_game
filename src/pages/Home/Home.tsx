import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRippleEffect  } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import '/src/Home.css';




const Home: React.FC = () => {

// creamos evento onClick
const history = useHistory();

const handleClick = () => {
  history.push('./game');
}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Piedra papel tijera
            </IonTitle>
        </IonToolbar>
      </IonHeader>
    
    <IonContent fullscreen className='home_background'>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
        <h1>Rock Paper Scissors</h1>
        </IonCardTitle>
        <IonCardSubtitle> <p className='rules' id='rules'>
          El primero en llegar a 10 puntos gana
        </p>
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonRouterLink onClick={handleClick}>
          <div className="ion-activatable ripple-parent circle">
            Start
            <IonRippleEffect type="unbounded"></IonRippleEffect>
          </div>
        </IonRouterLink>
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
