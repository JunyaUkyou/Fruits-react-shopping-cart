
export const getText = (lang) => {
  switch (lang) {
    case '日本語':
      return {
        page_title:'トップページ',
        welcome:'ようこそ!',
        notice_title:'お知らせ',
        notice: ['2019年1月 あいうえお','2019年2月 あいうえお','2019年3月 あいうえお']
      }
    case 'English':
      return {
        page_title:'top page',
        welcome:'welcome!',
        notice_title:'Notice',
        notice: ['2019/1 aiueo','2019/2月 aiueo','2019/3 aiueo']
      }
    default:
      return {
        page_title:'トップページ',
        welcome:'ようこそ!',
        notice_title:'お知らせ',
        notice: ['2019年1月 あいうえお','2019年2月 あいうえお','2019年3月 あいうえお']
      }
  }
}
