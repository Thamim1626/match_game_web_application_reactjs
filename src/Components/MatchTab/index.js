import './index.css'

const MatchTab = props => {
  const {eachItem, activeTab, onclickTab} = props
  const {tabId, displayText} = eachItem

  const onClickTabId = () => onclickTab(tabId)

  const listStyle =
    activeTab === tabId ? `tab-container activeTab` : `tab-container`

  return (
    <li className={listStyle} onClick={onClickTabId}>
      {displayText}
    </li>
  )
}

export default MatchTab
