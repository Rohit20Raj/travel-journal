import Journal from "./Journal"
import data from "../data"

export default function Main(){
    const dataElem = data.map(item => {
        return <Journal
        key = {item.id}
        item = {item}
        />
    })
    return (
        <div className="main">
                {dataElem}
        </div>
    )
}