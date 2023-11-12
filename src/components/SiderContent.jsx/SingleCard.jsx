import { BranchesOutlined, HistoryOutlined, StarOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd"
import { Badge, Space } from 'antd';
import wagonLogo from '../../img/wagon.png'
import CardButton from "./CardButton";
import { useState } from "react";

const SingleCard = ({ wagon, showPath, setDrawPath }) => {

  const { title, destination } = wagon

  const [isFav, setIsFav] = useState(false)

  // const color = isFav ? 'yellow'none'

  const starClick = () => {
    setIsFav(!isFav)
  }

  return (
    <Card 
      bodyStyle={{
        padding: '5px 15px'
      }}

      bordered={true}
      style={{
        width: '100%',
        height: '125px',
        marginBottom: '10px',
        textAlign: 'left',
        lineHeight: 0.5,
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '-15px'

      }}>

        <div style={{
          display: 'inherit',
          alignItems: 'center'
        }}
          onClick={() => starClick}
        >
          <p><b>{title}</b>  </p>
          <img src={wagonLogo} alt="Вагон" height={25} style={{ marginLeft: '10px' }} /></div>

        <StarOutlined color={'#FFFF00'} style={{ background: isFav ? 'yellow' : 'none' }} />

        <Badge count={'В пути'} style={{
          borderColor: '#56B7A1',
          background: 'none',
          color: '#56B7A1'
        }} />
      </div>
      <p><b>Тип: </b>порожний</p>
      <p><b>Назначение: </b>{destination} <i>(Станция)</i></p>

      <Flex gap={55}   >
        <CardButton text={'Маршрут'} textColor={"#0D60D3"}
          width={"40%"}
          icon={<BranchesOutlined color="#0D60D3" />}
          showPath={showPath} destination={destination}
          setDrawPath={setDrawPath}

        />

        <CardButton text={'Пройдено'} textColor={'#595959'}
          width={"40%"}
          icon={<HistoryOutlined color="#595959" />}
          showPath={showPath} destination={destination} 
         />
      </Flex>


    </Card>

  )
}

export default SingleCard
