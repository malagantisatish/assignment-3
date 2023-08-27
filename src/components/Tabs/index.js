import './index.css'

const Tabs = props => {
  const {tabDetails, changeTheTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const className = isActive ? 'selected-tab' : 'tabs-names'

  const clickedTheTab = () => {
    changeTheTab(tabId)
  }
  return (
    <li>
      <button type="button" className="btn">
        <h1 className={className} onClick={clickedTheTab}>
          {displayText}
        </h1>
      </button>
    </li>
  )
}

export default Tabs
