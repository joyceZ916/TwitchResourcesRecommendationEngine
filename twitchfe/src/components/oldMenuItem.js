import { Menu } from 'antd'
import React from 'react'
import { deleteFavoriteItem } from '../utils';
 
function MenuItem({ items }) {
  // <a style="display:" onClick={ () => { deleteFavoriteItem(item) } }>[X]</a>
  return items.map((item) => (
    <Menu.Item key={item.id}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {`${item.broadcaster_name} - ${item.title}`}
      </a>
    </Menu.Item>
  )
  )
}
 
export default MenuItem