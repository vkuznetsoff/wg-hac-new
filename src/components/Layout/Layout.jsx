import { Layout, Space } from 'antd';
import MapContent from '../Maps/Map';
import SiderContent from '../SiderContent.jsx/SiderContent';
import { useEffect, useState } from 'react';
import MainHeader from '../Header/Header';
import MainTable from '../Table/MainTable';
import Clock from 'react-simple-clock'
import "./Layout.css"





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


let siderCliked = true

const AppLayout = () => {

  const [stations, setStations] = useState([])
  const [currentStation, setCurrentStation] = useState()
  const [stationClicked, setStationClicked] = useState(true)
  const [mode, setMode] = useState(true)
  const [trainsOnStation, setTrainsOnStation] = useState([])
  const [drawPath, setDrawPath] = useState(false)
  const [curPath, setCurPath] = useState([])

  const URL = 'https://a117-89-113-136-156.ngrok-free.app'

  useEffect(() => {

    //Запрос информации по ID станции
    //Запрос информации о поездах на станйии
    currentStation && fetch(`${URL}/api/trains?station=${currentStation}&candidates_constraint=1`)
      .then((response) => {
        let resp = response.json()
        return resp
      })
      .then(data => {
        setTrainsOnStation(data)
      })
  }, [currentStation])

  useEffect(() => {
    //Запрос всех станций при инициализации Приложения 
    //Для оптимизации отрисовки сейчас выводятся не все станции
    fetch(`${URL}/api/stations`)
      .then((response) => response.json())
      .then(data => {
        const station = []
        for (let i = 0; i < data.slice(0, 1500).length - 1; i += 50) {

          station.push(data[i])
        }
        setStations(data)
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

        {/* Секция с картой */}
        <Layout hasSider>
          <Content style={contentStyle} >
            {mode
              ? <MapContent
                setCurrentStation={setCurrentStation}
                setStationClicked={setStationClicked}
                stations={stations}
                drawPath={drawPath}
                setDrawPath={setDrawPath}
                curPath={curPath}
              />
              : <MainTable />}
          </Content>

          {/* Сайдер */}
          <Sider style={siderStyle} width={siderWidth}  >
            <h3>Информация о вагонах ПГК на станциях</h3>

            {!currentStation ? <h2>Выберите станцию</h2> : <SiderContent
              currentStation={currentStation}
              stationClicked={stationClicked}
              trainsOnStation={trainsOnStation.filter((tr) => tr.dislocation === currentStation)}
              setDrawPath={setDrawPath}
              setCurPath={setCurPath}
              drawPath={drawPath}
            />}
          </Sider>
        </Layout>

        <Footer style={footerStyle}>  ©️ DataWagon Hakaton, 2023 </Footer>
      </Layout>

    </>


  )
}
export default AppLayout