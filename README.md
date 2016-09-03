# react-native-listveiw-refresh

```bash
npm i react-native-listview-refresh --save



```js

import ListViewRefresh from 'react-native-listveiw-refresh'

export default class Example from Component{

    constructor(props) {
            super(props);
            this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
                dataSource: this.ds.cloneWithRows([])
            };
      }
      
      _renderRow(rowData,index){
        return(
            <View key={index}>
                {rowData}
            </View>
        )
      }
      
      _loadData(){
        fethc(url)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    dataSource: this.ds.cloneWithRows(res.data)
                })
              })
      }
        
    render() {
            return (
                <View style={styles.mainContainer}>
                    <ListViewRefresh
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        enableEmptySections={true}
                        loadData={this._loadData}
                        refreshDescription="开始更新..."/>
                </View>
            )
        }
}
```