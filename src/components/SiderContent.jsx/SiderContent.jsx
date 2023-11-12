import { Avatar, Card, List, Tree } from 'antd';
import { BasicAccordion } from './SiderList';
import trainLogo from '../../img/train.png'



const SiderContent = ({ currentStation, stationClicked, trainsOnStation, setDrawPath }) => {

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

    const showPath = (from=currentStation, to) => {
        setDrawPath(true)
        console.log('from:', from, 'to:', to)
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
                
                { (trainsOnStation.length === 0) 
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


                        }}>
                            <img src={trainLogo}
                                alt="Вагон" height={25}
                                style={{ marginRight: '10px' }} />

                            
                                <p> Поезд: {tr.index} </p>
                                


                        </div>

                        <BasicAccordion trainInfo={wagenData} showPath={showPath}/>

                        {/* <List
                            itemLayout="horizontal"
                            dataSource={wagenData}
                            renderItem={(item, index) => (
                                <List.Item >
                                    <div>
                                        <List.Item.Meta
                                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                            title={<a href="#">{`Номер вагона: ${item.title}`}</a>}
                                            description={`До станции: ${item.destination}`}
                                            style={{ textAlign: 'left', width: '200px'
                                             }}
                                        />
                                        <div style={style}
                                        onClick={() => showPath(tr.dislocation,item.destination)}
                                        >Маршрут</div>
                                    </div>

                                </List.Item>
                            )}
                        /> */}
                    </>

                ))
                }

                <li>
                    {/* <ul>v  Поезд 111-001-222</ul>
                    <ul>v  Поезд 111-001-222</ul>
                    <ul>v  Поезд 111-001-222</ul> */}
                </li>
            </Card>}
        </div >

    )
}

export default SiderContent