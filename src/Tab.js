import React, { useState } from 'react';
import styles from './App.module.scss';

export default function Tab(props) {
  const { labelType, children, defaultActiveKey = 0 } = props;
  const [activeTab, setActiveTab] = useState(defaultActiveKey);
  const isArray = Array.isArray(children);

  const renderTabOption = (label, i) => {
    return (
      <div key={i} className={`${styles.tabOptionItem} ${activeTab === i && styles.active}`} onClick={() => setActiveTab(i)}>{label}</div>
    );
  };
  return (
    <div>
      <div className={styles.tabOption}>
        {isArray
          ? children?.map((child, i) => renderTabOption(child.props.tabLabel, i))
          : renderTabOption(children.props.tabLabel, 1)}
      </div>
      <div>
        {isArray ? children?.[activeTab] : children}
      </div>
    </div>
  );
}
