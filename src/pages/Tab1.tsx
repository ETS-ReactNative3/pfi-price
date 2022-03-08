import React, { useState,useRef,useEffect } from 'react';
import { IonContent, IonPage, IonImg, IonText, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import './Tab1.css';
import path from 'path-browserify';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Canvas from './canvas'



const Tab1: React.FC = () => {
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState('');

  const setFullData = async (type,value) => {

    var dataobj = {};
    if(type === "price1"){
      setPrice1(value)
    }
    else if(type === "price2"){
      setPrice2(value)
    }
    else if(type === "price3"){
      setPrice3(value)
    }
    else if(type === "price4"){
      setPrice4(value)
    }
    else if(type === "place"){
      setPlace(value)
    }
    else if(type === "date"){
      setDate(value)
    }
    setData(price1  + ","+price2 + ","+price3 + ","+price4 + ","+place + ","+date)


  }
  // const submit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //
  //   if(price1 && price2 && price3 && price4 && place && date) {
  //     console.log(price1)
  //     console.log(price2)
  //     console.log(price3)
  //     console.log(price4)
  //     console.log(place)
  //     console.log(date)
  //
  //   }
  //   else{
  //     alert("Please update all the prices, place and date")
  //   }
  // };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PFI - Price Update</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className = "centerdiv">
          <table className = "pricetable">
            <thead>
            <tr>
              <td align = "center">
              Grades
              </td>
              <td align = "center">
              Size
              </td>
              <td align = "center">
              Price
              </td>
            </tr>

            </thead>
            <tbody>
            <tr>
              <td align = "center">
                FE 550
              </td>
              <td align = "center">
                12 - 25 MM
              </td>
              <td align = "center">
              <IonInput className = "textbox" name="username" type="text" value={price1} autocapitalize="off" onIonChange={e => setFullData("price1", e.detail.value!)} required>
              </IonInput>
              </td>
            </tr>
            <tr>
              <td align = "center">
                FE 550
              </td>
              <td align = "center">
                10 MM
              </td>
              <td align = "center">
                <IonInput className = "textbox" name="username" type="text" value={price2} autocapitalize="off" onIonChange={e => setFullData("price2",e.detail.value!)} required>
                </IonInput>
              </td>
            </tr>
            <tr>
              <td align = "center">
                FE 550
              </td>
              <td align = "center">
                08 & 32 MM
              </td>
              <td align = "center">
                <IonInput className = "textbox" name="username" type="text" value={price3} autocapitalize="off" onIonChange={e => setFullData("price3",e.detail.value!)} required>
                </IonInput>
              </td>
            </tr>
            <tr>
              <td align = "center">
                FE 550D
              </td>
              <td align = "center">
                12 - 25 MM
              </td>
              <td align = "center">
                <IonInput className = "textbox" name="username" type="text" value={price4} autocapitalize="off" onIonChange={e => setFullData("price4",e.detail.value!)} required>
                </IonInput>
              </td>
            </tr>
            <tr>
              <td align = "center">
                <IonInput className = "textbox" placeholder="Location" type="text" value={place} autocapitalize="off" onIonChange={e => setFullData("place",e.detail.value!)} required>
                </IonInput>
              </td>
              <td>
                <IonInput className = "textbox" placeholder="Date" type="text" value={date} autocapitalize="off" onIonChange={e => setFullData("date",e.detail.value!)} required>
                </IonInput>
              </td>
              <td align = "center">
                <Popup trigger={<IonButton type="submit" expand="block">Generate Image</IonButton>} modal>
                  <Canvas  data = {data} />
                </Popup>
              </td>
            </tr>
            </tbody>
          </table>
        </div>



      </IonContent>
    </IonPage>
  );
};

export default Tab1;
