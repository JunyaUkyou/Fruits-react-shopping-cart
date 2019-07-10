
export const getText = (lang) => {
  switch (lang) {
    case '日本語':
      return {
        with_tax:'税込',
        yen:'円',
        page_title:'商品ページ',
        add_button:'カートに入れる'
      }
    case 'English':
      return {
        with_tax:'with tax',
        yen:'Yen',
        page_title:'Products page',
        add_button:'Add to cart'
      }
    default:
      return {
        with_tax:'税込',
        yen:'円',
        page_title:'商品ページ',
        add_button:'カートに入れる'
      }
  }
}
