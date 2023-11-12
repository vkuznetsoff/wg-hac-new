import { Avatar, Card, List, Tree } from 'antd';
import { BasicAccordion } from './SiderList';
import trainLogo from '../../img/train.png'
import unique from "unique"



const SiderContent = ({ currentStation, stationClicked, trainsOnStation, setDrawPath, setCurPath }) => {

    let data = []
    let wagenData = []

    const style = {
        padding: "5px 10px",
        margin: '5px 0',
        textAlign: 'center',
        borderRadius: '25px',
        background: '#0D60D3',
        color: 'white',
        fontWeight: '500',
        width: '50%',
        flex: 0.5,
        cursor: 'pointer',
    }

    const f = function getData() {
        trainsOnStation.map((tr) => {
            const { wagens } = tr
            wagens.map((w) => {
                wagenData = [
                    ...wagenData,
                    {
                        title: w.num,
                        destination: w.destination
                    }
                ]
            })
        })
    }

    trainsOnStation && f()

    const showPath = (from = currentStation, to) => {
        const URL = 'https://a117-89-113-136-156.ngrok-free.app'
        fetch(
            `${URL}/api/stations/path?start=${from}&end=${to}`)
            .then((response) => {

                let resp = response.json()
                // console.log('resp', resp)
                return resp

            })
            .then(data => {
                console.log('path', data)
                setCurPath(data)

            })


    }


    const title = !currentStation ? 'Title' : `Станция ${currentStation}`
    return (
        <div className="sider-content">
            {stationClicked && <Card
                title={title}
                bordered={false}
                bodyStyle={{
                    padding: '0 15px'
                }}
                style={{
                    width: 300,


                }}
            >

                {(trainsOnStation.length === 0)
                    ? <div style={{
                        padding: '20px 0',
                        color: 'grey',
                        fontWeight: 400
                    }}>На станции нет поездов</div>
                    : trainsOnStation.map((tr) => (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                                key={unique()}
                            >
                                <img src={trainLogo}
                                    alt="Вагон" height={25}
                                    style={{ marginRight: '10px' }} key={unique()} />
                                <p> Поезд: {tr.index} </p>
                            </div>

                            <BasicAccordion trainInfo={wagenData}
                                showPath={showPath}
                                setDrawPath={setDrawPath}
                                key={unique()} />
                        </>
                    ))
                }
            </Card>}
        </div >

    )
}

export default SiderContent