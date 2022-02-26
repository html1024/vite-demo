import { createApp } from 'vue'
import './assets/css/index.scss'
import App from './App.vue'
import router from './router/index'
import piniaStore from './piniaStore'

const app = createApp(App)
import {
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  ImagePreview,
  Cell,
  CellGroup,
  Popup,
  Icon,
  Col,
  Row,
  Picker,
  Card,
  Search,
  Divider,
  Badge,
  Button,
  Overlay,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  ActionSheet,
  Collapse,
  CollapseItem,
  Step,
  Steps,
  Dialog,
  Stepper,
  Toast,
  DatetimePicker,
  Switch,
  Calendar,
  SwipeCell,
  Checkbox,
  CheckboxGroup,
  Image as VanImage,
  Lazyload,
  Loading,
  Tab,
  Tabs,
  CountDown,
  List,
  Notify,
  RadioGroup,
  Radio,
  Form,
  Field,
} from 'vant'

app
  .use(Tabbar)
  .use(TabbarItem)
  .use(Grid)
  .use(GridItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(ImagePreview)
  .use(Cell)
  .use(CellGroup)
  .use(Form)
  .use(Field)
  .use(Popup)
  .use(Icon)
  .use(Col)
  .use(Row)
  .use(Divider)
  .use(Badge)
  .use(Button)
  .use(Overlay)
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(Picker)
  .use(Card)
  .use(ActionSheet)
  .use(Collapse)
  .use(CollapseItem)
  .use(Step)
  .use(Steps)
  .use(Stepper)
  .use(Dialog)
  .use(Toast)
  .use(Calendar)
  .use(DatetimePicker)
  .use(Switch)
  .use(SwipeCell)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Search)
  .use(VanImage)
  .use(Lazyload)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Notify)
  .use(RadioGroup)
  .use(Radio)
  .use(CountDown)
  .use(Form)
app.use(router).use(piniaStore).mount('#app')
