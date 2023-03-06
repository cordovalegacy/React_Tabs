import { useState } from "react"

const Tabs = (props) => {

    const [tabOne, setTabOne] = useState(true)
    const [tabTwo, setTabTwo] = useState(false)
    const [tabThree, setTabThree] = useState(false)

    const openTabOne = () => {
        setTabOne(true)
        setTabTwo(null)
        setTabThree(null)
    }

    const openTabTwo = () => {
        setTabOne(null)
        setTabTwo(true)
        setTabThree(null)
    }

    const openTabThree = () => {
        setTabOne(null)
        setTabTwo(null)
        setTabThree(true)
    }

    const tabMessage = {
        messageOne : "This is tab one",
        messageTwo : "This is tab two",
        messageThree : "This is tab three",
    }


    return (
        <div id="tabs-container">
            <div id="tab-buttons-wrapper">
                <button
                    onClick={openTabOne}
                    className="tabs"
                >
                    <h3>Tab 1</h3>
                </button>
                <button
                    onClick={openTabTwo}
                    className="tabs"
                >
                    <h3>Tab 2</h3>
                </button>
                <button
                    onClick={openTabThree}
                    className="tabs"
                >
                    <h3>Tab 3</h3>
                </button>
            </div>
            <div id="tab-content">
                { tabOne ? <p>{tabMessage.messageOne}</p> : null}
                { tabTwo ? <p>{tabMessage.messageTwo}</p> : null}
                { tabThree ? <p>{tabMessage.messageThree}</p> : null}
            </div>
        </div>
    )
}

export default Tabs;