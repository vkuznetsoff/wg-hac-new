import { Layout, Space } from 'antd';
import "./Layout.css"
import Map from '../Maps/Map';
import MapContent from '../Maps/Map';
import SiderContent from '../SiderContent.jsx/SiderContent';
import { useEffect, useState } from 'react';
import { AllStations } from '../../data/stations';
import MainHeader from '../Header/Header';
import MainTable from '../Table/MainTable';

import Clock from 'react-simple-clock'





const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: 'grey',
  height: 82,
  width: "100%",
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#EFEFEF',
  borderBottom: '2px solid rgba(174, 182, 191 , 0.8)'
};
const contentStyle = {
  textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: '#108ee9',
};
const siderStyle = {

  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#EFEFEF',
  color: 'black',
  fontWeight: '800',
  overflow: 'scroll',
  lineHeight: 5,
 

};
const footerStyle = {
  textAlign: 'center',
  color: '#595959',
  backgroundColor: '#CACACA',
};



const initStations = [
  {
    id: 1,
    lat: '54.099300',
    lon: '34.364900'
  },
  {
    id: 2,
    lat: '54.133200',
    lon: '34.351500'
  },
  {
    id: 3,
    lat: '54.191300',
    lon: '34.346200'
  },
  {
    id: 4,
    lat: '54.080000',
    lon: '34.260800'
  },
  {
    id: 5,
    lat: '54.060800',
    lon: '34.144400'
  }
]

const responseStaitionTrains = {
  trains: [
    {
      index: '128-072-1736',
      num: '072',
      depature: 128,
      destination: 1736,
      dislocation: 2154,
      wagens: [{
        num: 9903,
        destination: 1771

      },
      {
        num: 5907,
        destination: 1771

      },
      {
        num: 2917,
        destination: 1771

      },
      
      ]
    }
  ],

}

let siderCliked = true




const AppLayout = () => {
  const [stations, setStations] = useState([])
  const [currentStation, setCurrentStation] = useState('1')
  const [stationClicked, setStationClicked] = useState(false)
  const [mode, setMode] = useState(true)
  const [trainsOnStation, setTrainsOnStation] = useState([])
  const [drawPath, setDrawPath] = useState(false)

  // console.log('currentStation',currentStation)
  const URL = 'https://a117-89-113-136-156.ngrok-free.app'
 
  useEffect(() => {

   
    //Запрос информации по ID станции
   
    
    
    //Поезда
    currentStation && fetch(`${URL}/api/trains?station=${currentStation}`)
    .then((response) => {
     // console.log('response', response)
      let resp = response.json()
      return resp
    
    })
    .then(data => {
      console.log('data', data)

      setTrainsOnStation(data)
    })



    // setTimeout(() => {
    //   setTrainsOnStation(responseStaitionTrains.trains)

    // }, 1000)


  }, [currentStation])

  useEffect(() => {
    //Запрос всех станций
      fetch(`${URL}/api/stations`)
        .then((data) => {
          const station = []
        for (let i=0;i<AllStations.slice(0,1500).length-1; i+=50) {
        
          station.push(AllStations[i])
        } 
        setStations(station) 
        })
  }, [])

  let siderActive = true

  const siderWidth = siderCliked ? '30vw' : '1vw'


  return (
    <>
      <Layout className='app-layout'>

        <Header style={headerStyle}>
          <MainHeader setMode={setMode} />
          {mode && <Clock live={true} hourMarkFormat="number" className="clock" />}
          
        </Header>

        <Layout hasSider>
          
          <Content style={contentStyle} >
      
          {/* <Clock live={true} hourMarkFormat="number" className="clock" /> */}

            {mode
              ? <MapContent
                setCurrentStation={setCurrentStation}
                setStationClicked={setStationClicked}
                stations={stations} 
                drawPath={drawPath}
                setDrawPath={setDrawPath}
                />
              : <MainTable />}
          </Content>

          <Sider style={siderStyle} width={siderWidth}  >
            <h3>Информация о вагонах ПГК на станциях</h3>
            <SiderContent
              currentStation={currentStation}
              stationClicked={stationClicked}
              trainsOnStation={trainsOnStation.filter((tr) => tr.dislocation === currentStation)}
              setDrawPath={setDrawPath}
            />
          </Sider>

        </Layout>
        <Footer style={footerStyle}>  ©️ DataWagon Hakaton, 2023 </Footer>
      </Layout>

    </>


  )
}
export default AppLayout