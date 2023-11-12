import { Avatar, Badge, Button, Flex, Progress, Space } from "antd"
import { useState } from "react"
import Status from "./Status"
import Search from "antd/es/input/Search"
import { BellOutlined, FilterOutlined } from "@ant-design/icons"


const MainHeader = ({ setMode }) => {
    const [isMap, setIsMap] = useState(true)
    const [isTable, setIsTable] = useState(false)

    const mapBtnHandle = () => {
        if (!isMap) {
            setMode(true)
            setIsMap(true)
            setIsTable(false)
        }
    }

    const tableBtnHandle = () => {
        if (!isTable) {
            setMode(false)
            setIsMap(false)
            setIsTable(true)
        }
    }

    return (
        <div style={{
            padding: '10px 0',
        }}>
            <div  >
                <Space >
                    <Flex gap="small" wrap="wrap"
                        style={{
                            padding: '15px 0',
                            width: "65vw"

                        }}>

                        <Button
                            type={isMap ? 'primary' : 'default'}
                            onClick={mapBtnHandle}

                        >Карта</Button>

                        <Button
                            type={!isMap ? 'primary' : 'default'}
                            onClick={tableBtnHandle}
                        >Таблица</Button>



                        <Search placeholder="Введите номер вагона/поезда" style={{ width: '350px' }} />

                    </Flex>
                </Space>

                <Badge count={5} >
                    <Avatar size="large" icon={<BellOutlined />} />
                </Badge>

                <Button
                    type='default'
                    icon={<FilterOutlined color="grey" />}
                    style={{ width: 200,
                    marginLeft: 55 }}

                >Фильтры</Button>
                <Space style={{ padding: 0 }} >
                    {/* <div style={{
                        border: '1px solid grey',
                        borderRadius: 25,
                        padding: '0 15px'
                    }}>Фильтры <FilterOutlined width={50} size={10}/> </div> */}
                </Space>
            </div>




        </div>
    )
}

export default MainHeader