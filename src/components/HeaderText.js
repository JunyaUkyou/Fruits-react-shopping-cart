
export const getText = (lang) => {
  switch (lang) {
    case '日本語':
      return {
        title:'フルーツショップ',
        your_cart:'現在のカート',
        quantity:'個',
        yen:'円',
        empty:'カートは空です'
      }
    case 'English':
      return {
        title:'Ffuit Shop',
        your_cart:'Your shopping cart',
        quantity:'quantity',
        yen:'yen',
        empty:'Your cart is empty'        
      }
    default:
      return {
        title:'Ffuit Shop',
        your_cart:'現在のカート',
        quantity:'個',
        yen:'円',
        empty:'カートは空です'
      }
  }
}
