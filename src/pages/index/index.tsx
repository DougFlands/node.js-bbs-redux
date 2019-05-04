import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Menu from '../../components/menu/menu';
import Topiclist from '../../components/topiclist/topiclist';
import { AtButton } from 'taro-ui'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Menu></Menu>
        <AtButton type='primary'>按钮文案</AtButton>
        <Topiclist></Topiclist>
      </View>
    )
  }
}

export default Index
