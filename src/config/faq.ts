export interface FAQItem {
  question: string
  answer: string
}

const FAQ_ZH: FAQItem[] = [
  {
    question: '什么是JustColorPicker？',
    answer: 'JustColorPicker 是一个简单的在线颜色选择工具。'
  },
  {
    question: '为什么要做JustColorPicker？',
    answer:
      '创建JustColorPicker是因为我们发现市面上的颜色选择器要么功能过于复杂，要么不够直观。我们希望提供一个简单易用的工具，满足各种颜色选择需求。（主要是配合 shadcn/ui 使用）'
  },
  {
    question: 'JustColorPicker有什么用？',
    answer:
      'JustColorPicker可以帮助您快速选择颜色，支持多种颜色格式（如HEX、RGB、HSL等），便于在不同项目中使用。'
  },
  {
    question: '如何使用JustColorPicker？',
    answer:
      '使用JustColorPicker非常简单：1. 打开网站 2. 使用颜色选择器选择您喜欢的颜色 3. 查看并复制不同格式的颜色代码。（最佳实践是搭配Raycast使用）'
  },
  {
    question: 'JustColorPicker支持哪些颜色格式？',
    answer:
      'JustColorPicker支持多种常用的颜色格式，包括HEX、RGB、RGBA、HSL、HSLA、HWB、CMYK、LAB和LCH。无论您使用哪种格式，都可以轻松获取和转换。'
  },
  {
    question: 'JustColorPicker是否免费使用？',
    answer: '是的，JustColorPicker完全免费使用且代码开源。'
  },
  {
    question: '我可以在移动设备上使用JustColorPicker吗？',
    answer:
      '当然可以！JustColorPicker采用响应式设计，可以在各种设备上使用，包括智能手机和平板电脑。无论您在哪里，都可以方便地进行颜色选择。'
  },
  {
    question: 'JustColorPicker有浏览器插件版本吗？',
    answer:
      '目前JustColorPicker主要以网页版形式提供服务。我们正在考虑开发浏览器插件版本，以提供更便捷的使用体验。请关注我们的更新通知。'
  }
]

const FAQ_EN: FAQItem[] = [
  {
    question: 'What is JustColorPicker?',
    answer: 'JustColorPicker is a simple online color picker tool.'
  },
  {
    question: 'Why was JustColorPicker created?',
    answer:
      'JustColorPicker was created because we found that existing color pickers were either too complex or not intuitive enough. We wanted to provide a simple and easy-to-use tool that meets various color selection needs. (Mainly for use with shadcn/ui)'
  },
  {
    question: 'What is JustColorPicker used for?',
    answer:
      'JustColorPicker helps you quickly select colors, supporting multiple color formats (such as HEX, RGB, HSL, etc.), making it convenient for use in different projects.'
  },
  {
    question: 'How do I use JustColorPicker?',
    answer:
      'Using JustColorPicker is very simple: 1. Open the website 2. Use the color picker to select your favorite color 3. View and copy the color codes in different formats. (Best practice is to use it with Raycast)'
  },
  {
    question: 'What color formats does JustColorPicker support?',
    answer:
      'JustColorPicker supports multiple common color formats, including HEX, RGB, RGBA, HSL, HSLA, HWB, CMYK, LAB, and LCH. Regardless of which format you use, you can easily get and convert.'
  },
  {
    question: 'Is JustColorPicker free to use?',
    answer: 'Yes, JustColorPicker is completely free to use and open source.'
  },
  {
    question: 'Can I use JustColorPicker on mobile devices?',
    answer:
      'Of course! JustColorPicker uses responsive design, making it accessible on various devices, including smartphones and tablets. You can conveniently select colors anywhere.'
  },
  {
    question: 'Does JustColorPicker have a browser extension version?',
    answer:
      'Currently, JustColorPicker is primarily provided as a web version. We are considering developing a browser extension version to offer a more convenient user experience. Please follow our update notifications.'
  }
]

const FAQ_CONFIG = {
  zh: FAQ_ZH,
  en: FAQ_EN
}

export default FAQ_CONFIG
