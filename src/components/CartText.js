import React from 'react';


export const getText = (lang) => {
  switch (lang) {
    case '日本語':
      return {
        isEmpty:'現在カートは空です',
        deletebutton:'削除',
        total:'合計金額',
        th_name:'名前',
        th_price:'価格',
        th_quantity:'数量',
        th_total:'合計',
        bbb:'bbb'
      }
      break;
      case 'English':
        return {
          isEmpty:'Your shopping cart is empty',
          deletebutton:'delete',
          total:'total',
          th_name:'name',
          th_price:'price',
          th_quantity:'quantity',
          th_total:'total',
          bbb:'bbb'
        }
        break;
    default:
    return {
      isEmpty:'現在カートは空です',
      bbb:'bbb'
    }
  }
}
