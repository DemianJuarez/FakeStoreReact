import { useState } from "react"
import { getDataApi } from "../../api"
import { Card } from "./Card"

export const CardContainer = () => {

    const [ dataApi, setDataApi ] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    
    const dataFetch = async () => {
        const data = await getDataApi()
        setDataApi(data)
        setDataFetched(true)
        console.log(dataFetched)
    }

    if (!dataFetched) {
        dataFetch()

    }

    return (
        <div className="cardContainer"
        style={{
            backgroundColor: 'violet',
            display : 'flex',
            gap : '10px',
            flexWrap : 'wrap',
            width :'100%'
        }}
        >
            {   
                dataApi &&
                dataApi.map(card => (
                    <div 
                    className="card"
                    key={card.key} 
                    >
                    <Card card={card} />
                    </div>
                ))
            }
        </div>
    )
}
