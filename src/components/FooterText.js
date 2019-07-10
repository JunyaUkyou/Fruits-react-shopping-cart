
export const getText = (lang) => {
  switch (lang) {
    case '日本語':
      return {
        footer_title:'フッター'
      }
    case 'English':
      return {
        footer_title:'footer'
      }
    default:
      return {
        footer_title:'フッター'
      }
  }
}
