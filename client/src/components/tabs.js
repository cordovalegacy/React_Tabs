const Tabs = (props) => {

    const { tab, setTab } = props

    const openTabOne = () => {
        setTab(tab[0].oneClicked = true)
        setTab(tab[1].twoClicked = false)
        setTab(tab[2].threeClicked = false)
    }

    const openTabTwo = () => {
        setTab(tab[0].oneClicked = false)
        setTab(tab[1].twoClicked = true)
        setTab(tab[2].threeClicked = false)
    }

    const openTabThree = () => {
        setTab(tab[0].oneClicked = false)
        setTab(tab[1].twoClicked = false)
        setTab(tab[2].threeClicked = true)
    }

    console.log(tab[0])
    console.log(tab[1])
    console.log(tab[2])

    console.log(tab[0].oneClicked)
    console.log(tab[1].twoClicked)
    console.log(tab[2].threeClicked)

    return (
        <div id="tabs-container">
            <div id="tab-buttons-wrapper">
                <button
                    onClick={() => openTabOne}
                    className="tabs"
                >
                    <h3>Tab 1</h3>
                </button>
                <button
                    onClick={() => openTabTwo}
                    className="tabs"
                >
                    <h3>Tab 2</h3>
                </button>
                <button
                    onClick={() => openTabThree}
                    className="tabs"
                >
                    <h3>Tab 3</h3>
                </button>
            </div>
            <div id="tab-content">
                {
                    tab[0].oneClicked == true
                        &&
                        tab[1].twoClicked == false
                        &&
                        tab[2].threeClicked == false
                        ?
                        <p>{tab[0].tabOne}</p>
                        : null}
                {
                    tab[0].oneClicked == false
                        &&
                        tab[1].twoClicked == true
                        &&
                        tab[2].threeClicked == false
                        ?
                        <p>{tab[1].tabTwo}</p>
                        : null}
                {
                    tab[0].oneClicked == false
                        &&
                        tab[1].twoClicked == false
                        &&
                        tab[2].threeClicked == true
                        ?
                        <p>{tab[2].tabThree}</p>
                        : null}
            </div>
        </div>
    )
}

export default Tabs;