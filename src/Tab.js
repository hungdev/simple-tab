import React, { useState } from 'react';
import styles from './App.module.scss';

export default function Tab(props) {
  const { children, defaultActiveKey = 0, renderTabBar, tabContentClass, onChangeTab, tabType } = props;
  const [activeTab, setActiveTab] = useState(defaultActiveKey);
  const isArray = Array.isArray(children);
  const vertical = tabType === 'vertical';

  const onHandleChangeTab = (ind) => () => {
    setActiveTab(ind);
    onChangeTab(ind);
  };

  const renderTabOption = (label, i) => {
    return (
      <div
        key={i}
        className={`${styles.tabOptionItem} ${activeTab === i && styles.active}`}
        onClick={onHandleChangeTab(i)}>
        <div className={styles.txtLabel}>{label}</div>
      </div>
    );
  };

  return (
    <div className={`${styles.tabWrapper} ${vertical && styles.vertical}`}>
      <div className={styles.tabOption}>
        {isArray
          ? children?.map((child, ind) => renderTabBar?.({
            label: child.props.tabLabel, index: ind, setActiveTab, activeTab
          }) || renderTabOption(child.props.tabLabel, ind))
          : renderTabOption(children.props.tabLabel, 1)}
      </div>
      <div className={`${styles.tabContent} ${tabContentClass}`}>
        {isArray ? children?.[activeTab] : children}
      </div>
    </div>
  );
}
